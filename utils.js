/*  ============ utils ============= */

function createSquare() {
    const square = document.createElement("div");
    square.innerText = "You are typing something!";
    return square;
}

function insertSquare(square, parent) {
    parent.appendChild(square);
}