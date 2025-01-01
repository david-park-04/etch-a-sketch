//
// Etch-a-Sketch
// 
// Sketchpad in the browser.
// 

//
// createGrid 
//
// Create grid of square divs
//
// Parameters: gridSize (Number)
// Returns: None
//
function createGrid(gridSize = 16) {
    // 
    // Clear any previous grid before creation
    //
    clearGrid();

    //
    // Create divs
    //
    const container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("parent-div");
    
        for (let j = 0; j < gridSize; j++) {
            let childDiv = document.createElement("div");
            childDiv.classList.add("child-div");
            parentDiv.appendChild(childDiv);
        }
    
        container.appendChild(parentDiv);
    }

    //
    // Set up hover effect for square divs
    //
    const gridCells = document.querySelectorAll(".container div");

    gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", (event) => {
            event.target.style.background = "black";
        })
    });
}

//
// clearGrid
//
// Clears any previous grids
//
function clearGrid() {
    const gridCells = document.querySelectorAll(".container div");

    gridCells.forEach((cell) => {
        cell.remove();
    });
}

//
// Event listener for resizing grid button
//
const resizeBtn = document.querySelector(".resize");

resizeBtn.addEventListener("click", () => {
    let numSquares = prompt("Enter the number of squares per side for the new grid. (16 to 100)");

    if (numSquares > 100) {
        createGrid(100);
    }
    else if (numSquares < 16) {
        createGrid();
    }
    else {
        createGrid(numSquares);
    }
});

createGrid();