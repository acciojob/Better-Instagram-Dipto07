var draggedDiv;

function drag(event) {
    draggedDiv = event.target;
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    var temp = event.target.style.backgroundImage;
    event.target.style.backgroundImage = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = temp;
}