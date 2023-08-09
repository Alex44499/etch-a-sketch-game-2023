// Select the main container where the squares will be placed.
const gridContainer = document.querySelector(".square-sections");


// Grabbing references to the slider, the label, and the apply button from the DOM.
const sliderBar = document.querySelector('.sliderbar');
const label = document.querySelector("label[for='fname']");
const applyButton = document.querySelector('.btn-apply');

// Define a variable to hold the currently selected value from the slider. Start with a default value of 2.
let selectedValue = 2; 

// Listen to the 'input' event on the slider, which triggers every time the slider's value changes.
sliderBar.addEventListener('input', (e) => {
    // Update the selectedValue variable with the current value of the slider.
    selectedValue = e.target.value;

    // Update the label's text to show the currently selected value from the slider.
    label.textContent = `Value: ${selectedValue} x ${selectedValue}`; 
});

// Listen to the 'click' event on the apply button.
applyButton.addEventListener('click', () => {
    // Before creating new squares, clear out any squares currently in the grid container.
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Call the function to create a new set of squares using the selected value for both rows and columns.
    createNewSquareSector(selectedValue, selectedValue);
});


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
createNewSquareSector(2, 2);

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
