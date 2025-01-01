//
// Etch-a-Sketch
// 
// Sketchpad in the browser.
// 

// Create 16x16 grid of square divs
const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("parent-div");

    for (let j = 0; j < 16; j++) {
        let childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        parentDiv.appendChild(childDiv);
    }

    container.appendChild(parentDiv);
}

// Set up hover effect for square divs
const gridCells = document.querySelectorAll(".container div");

gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        event.target.style.background = "black";
    })
});
