console.log("Javascript loaded")

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div'); //creates new div element for each square
        square.classList.add('grid-square'); //adds grid squares to the div element to css
        container.appendChild(square);

        square.onmouseover = function(event) {
            const bgColor = "gray";
            event.target.style.backgroundColor = bgColor;
        };

        container.appendChild(square);
        console.log("Etch a sketch")
    };
});
