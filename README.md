# ChangingBasedOnScreenSize
simple JavaScript functions - that make adding CSS attributes that change - based on Screen Size


Just a single function command to make it all work!

function changingBasedOnScreenSize(dynamicVar, classOfDevice, elem, attribute, newValue) {}


Example
- changingBasedOnScreenSize - the function to change it all
- dynamicVar - make this a UID for each call of the function - won't run correctly with 2 UIDS that are the same
- classOfDevice - choose between 1 to 3, options, for screen sizes


	- 1 - "(min-width: 325px)  and (max-width:425px)"
	- 2 - "(min-width: 426px)  and (max-width:600px)"
	- 3 - "(min-width: 601px)  and (max-width:1200px)"



- elem - the element you want to query, use query selectors (# || .)
- attribute - the CSS attribute you want to change - NOTE: CSS selectors are similar to their JS versions, but are different!
- newValue - the new change in CSS attribute that you want it changed to
