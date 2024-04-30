//your code here
document.addEventListener("DOMContentLoaded", function() {
    var dragged;

    document.addEventListener("drag", function(event) {

    }, false);

    document.addEventListener("dragstart", function(event) {

		dragged = event.target;
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener("dragend", function(event) {

		event.target.style.opacity = "";
    }, false);


	document.addEventListener("dragover", function(event) {

		event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function(event) {

		if (event.target.className == "drag") {
            event.target.style.background = "lightgray";
        }
    }, false);

    document.addEventListener("dragleave", function(event) {

		if (event.target.className == "drag") {
            event.target.style.background = "";
        }
    }, false);

    document.addEventListener("drop", function(event) {

		event.preventDefault();

		if (event.target.className == "drag") {

			var temp = event.target.style.backgroundImage;
            event.target.style.backgroundImage = dragged.style.backgroundImage;
            dragged.style.backgroundImage = temp;
        }
    }, false);
});
