/**
 * @Annie P. Waldman
 */

console.log("javascript file loaded");

/*
 * This is my custom function called dataLoaded.
 */
function dataLoaded(){
	console.log("I got to document ready!");
	
	
	
	
	
	
	
}
/*
 * Functions don't take semi colons at the end. 
 * The pattern is function functionName(){the actions are in here}
 * 
 * document ready happens when the entire webpage has loaded. When that has happened I wan tto initiate the 
 * "dataloaded" function/activity that I defined above. 
 * 
 * The function has to go before the document ready.
 */
$( document ).ready(dataLoaded);
/*
 * $() -- this is our way of telling our browser that this function comes from jquery.
 * **If you have multiple document readys, there is no way to know what order it will be activated in.
 * Document ready is an event.
 */
console.log("This statement is after document ready.");
/*
 * what we're doing with document ready is asynchronous, what we're waiting for is for the browser to finish processing
 * the html markup. You can put document ready at the top because it doesn't matter, but just keep it at the bottom.
 */
