var draggedDiv;

function drag(event) {
    // Store the id of the dragged div
    draggedDiv = event.target;
}

function allowDrop(event) {
    // Prevent the default behavior to allow dropping
    event.preventDefault();
}

function drop(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Swap the background images of the dragged div and the target div
    var temp = event.target.style.backgroundImage;
    event.target.style.backgroundImage = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = temp;
}
