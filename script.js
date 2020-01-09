// select every checkbox because we need to listen for when they get checked
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// put in a variable when you check the last checkbox
// will be reassigned, hence let not const
let lastChecked;

function handleCheck(e) {
    let inBetween = false; // flag variable set to false
    // check if they had the shift key down
    // AND check that they are checking it
    if(e.shiftKey && this.checked) {
        // loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            // if this (the one we clicked) or the one last checked is true
            //set inBetween to true and mark as checked
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween; // switch to opposite
                console.log('starting to check those inbetween');
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

// listen for an event when if gets checked, click event
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
