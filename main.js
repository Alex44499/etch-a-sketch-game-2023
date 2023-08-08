
function createNewSquereSector(numberOfSquares){
	for(let i = 0; i < numberOfSquares; i++){
		
		const setOfDivs = document.querySelector('.square-sections')
		const newSquareSector = document.createElement('div')
		newSquareSector.classList.add('new-square-sector')
		setOfDivs.appendChild(newSquareSector)
		
	}
}


createNewSquereSector(400)




