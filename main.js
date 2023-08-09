// Select the main container where the squares will be placed.
const gridContainer = document.querySelector(".square-sections");

// Function to create and append square elements to the grid container.
function createNewSquareSector(numberOfRows = 2, numberOfColumns = 2) {
  // Calculate the total number of squares based on rows and columns.
  const totalSquares = numberOfColumns * numberOfRows;

  // Dynamically set the grid structure based on provided rows and columns.
  gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;

  // Loop through the total number of squares and create each square element.
  for (let i = 0; i < totalSquares; i++) {
    const newSquareSector = document.createElement("div");
    newSquareSector.classList.add("new-square-sector");
    gridContainer.appendChild(newSquareSector);
  }
}

// Create a default grid structure of 2x2.
createNewSquareSector(20, 20);

// Add an event listener to change the square color to red when hovered.
gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("new-square-sector")) {
    e.target.style.backgroundColor = "red";
  }
});

// Select the reset button and the list of all square elements.
const resetButton = document.querySelector(".btn-reset");
const newSquareSectors = document.querySelectorAll(".new-square-sector");

// Add an event listener to reset the color of all squares to blue when the reset button is clicked.
resetButton.addEventListener("click", () => {
  newSquareSectors.forEach((sector) => {
    sector.style.backgroundColor = "blue";
  });
});
