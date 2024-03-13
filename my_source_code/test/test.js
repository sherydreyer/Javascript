let guestArray = ["ben", "sue", "gugu", "peter", "sizwe", "may", "henry", "sheryl", "taylor"];
let guest;
do {
    guest = prompt("Please enter your name?");
} while (guest === null);

lookUp()
function lookUp() {
    guest = guest.toLowerCase();
    let found = false;
    guestArray.forEach(e => ((e === guest) ? found = true : 0));
    if (found) {
        alert('You are allowed in ' + guest);
    } else {
        alert(`You are not allowed in ${guest}`);
    }     

}
