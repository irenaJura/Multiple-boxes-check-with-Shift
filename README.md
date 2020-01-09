### Enable mupltiple checking of checkboxes with Shift key

I used plain JavaScript to accomplish easy multiple checkbox checking by holding Shift key.

First, we select all the checkbox elements and add an event listener (click) to each one with forEach method.

Then we create a variable for the last checked checkbox.

The function that gets called on a clicked checkbox is handleCheck function.

Inside it is a flag variable set to false, and an if conditional that checks is the user was holding shift key and if the checkbox in question was just checked.

Then we loop over each checkbox and the conditional inside the loop determines whether that checkbox equals to THIS or LASTCHECKED, if so, the flag variable switches to true and assigns those in between with checked attribute.



