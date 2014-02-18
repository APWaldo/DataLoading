/**
 * @Annie P. Waldman
 */

console.log("javascript file loaded");

function loadedJSON(RISHI){
	//console.log the "count" property of our json.
	//I expect for the output to be 409.
	console.log (RISHI.count);
}

/*
 * This is my custom function called dataLoaded.
 */
function dataLoaded(){
	
	console.log("I got to document ready!");

	 //this is jquery shorthand to create a new div element.
	var myDiv = $("<div>");
	//use jquery to add some text to it.
	//hey jquery, take that dive i just created called "myDiv" and add some html (in this case it's just a string.)
	$(myDiv).html("This is my new div");
	
	//hey jquery, grab the div with the id contentContainer and put my new div inside it. Do this with the function append.
	//#--this means look for the element with this "id" attribute. the "." means look for the elment(s) that has the "class" 
	//attribute, ids should always be unique, but classes can be used for multiple. I expxect to see th enew div containing
	//the text "This is my new div" appear inside the div with the id "contentContainer".
	$("#contentContainer").append(myDiv);

	//use the jquery to load my json file, it takes three parameters. 
	//first is the name of my file.
	//second parameter is the function to call once the file is loaded.
	//third parameter is a string of the file type to expect. 
	$.get("UEMP270V_data.json", loadedJSON, "json");

	
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
