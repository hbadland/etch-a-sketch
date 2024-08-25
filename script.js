document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const promptButton = document.querySelector("#promptButton");

    let size = 16;
    createGrid(size)

    //need to create grid of specificed size
    function createGrid(size) {
        container.innerHTML = ''; //clear container
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div'); //creates new div element for each square
        square.classList.add('grid-square'); //adds grid squares to the div element to css

        square.onmouseover = function(event) {
            const bgColor = "gray";
            event.target.style.backgroundColor = bgColor;
        };

        container.appendChild(square);
    }
}

    promptButton.addEventListener("click", () => {
        const input = prompt("How big do you want your grid?");
        const newSize = parseInt(input, 10);
        if (!isNaN(newSize) && newSize > 0) {
                size = newSize;
                createGrid(size);
        } else {
            alert("invalid input");
        }
    });
});
