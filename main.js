let gridSize = 16;

function init() {
    
    for (i = 1; i <= gridSize*gridSize; i++) {
        const singleDiv = document.createElement('div');
        singleDiv.className = 'singleCell';
        const element = document.getElementById("mainBlock");
        element.appendChild(singleDiv);
    }
}

function inputSize(n) {
    n = prompt("Please, enter the size of the grid (whole number.");
    gridSize = Number(n);
    createGrid();
}

function deleteGrid(gridClassName) {
    const elements = document.getElementsByClassName(gridClassName);
    console.log(gridClassName);
    console.log(elements);
    console.log(elements.length);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function createGrid() {
    deleteGrid("singleCell");
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    window.getComputedStyle(document.querySelector("html"));
    let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNumber"));
    console.log(rowNum);
    let colNum = parseInt(htmlStyles.getPropertyValue("--columnNumber"));
    console.log(colNum);
    document.documentElement.style.setProperty("--rowNumber", gridSize);
    document.documentElement.style.setProperty("--columnNumber", gridSize);
    for (i = 1; i <= gridSize*gridSize; i++) {
        const singleDiv = document.createElement('div');
        singleDiv.className = 'singleCell';
        const element = document.getElementById("mainBlock");
        element.appendChild(singleDiv);
    }
}

init();