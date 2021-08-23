let gridSize = 16; //Initial size of the grid
let newColor = "#88FF22";
let colorType = "single";
const currentColor = document.querySelector("#singleColor");
currentColor.addEventListener("change", function() {
    newColor = currentColor.value;
    setData('single');
})

function init() {
    for (i = 1; i <= gridSize*gridSize; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'singleCell';
        var parrent = document.getElementById("mainBlock");
        parrent.appendChild(newDiv);
        newDiv.setAttribute('data-color', 'single');
        newDiv.style.backgroundColor = "white";
    }
    startSketching();
}

function clearGrid () {
    var newCells = document.querySelectorAll('.singleCell');
    for (i = 0; i < newCells.length; i++) {
        newCells[i].style.backgroundColor = "white";
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function greyScale () {
    newColor = "#F7F7F7";
    setData('scale');

}

function setData (typeColor) {
    deleteGrid('singleCell');
    for (i = 1; i <= gridSize*gridSize; i++) {
        var singleDiv = document.createElement('div');
        singleDiv.className = 'singleCell';
        var element = document.getElementById("mainBlock");
        element.appendChild(singleDiv);
        singleDiv.setAttribute('data-color', `${typeColor}`);
    }
    clearGrid();
    startSketching();
    return colorType = typeColor;
}

function randomColor () {
    newColor = getRandomColor();
    colorType = setData('rgb');
}

function inputSize(n) {
    n = prompt("Please, enter the size of the grid (whole number.");
    gridSize = Math.round(Number(n)); //New grid size from user
    if (gridSize > 100 || gridSize <= 0) {
        alert("The size of the grid should be between 1 and 100. Please, enter a valid number!");
    }
    else if (isNaN(gridSize)) {
        console.log(gridSize);
        alert("The grid size should be a number!");
    }
    else {
        let size = document.getElementById("size");
        size.textContent = gridSize;
        createGrid();
    }
    clearGrid();
    startSketching();
}

function deleteGrid(gridClassName) { //Removing the grid, after input from user
    var elements = document.getElementsByClassName(gridClassName);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function createGrid() {
    deleteGrid("singleCell");
    var htmlStyles = window.getComputedStyle(document.querySelector("html"));
    window.getComputedStyle(document.querySelector("html"));
    parseInt(htmlStyles.getPropertyValue("--rowNumber"));
    parseInt(htmlStyles.getPropertyValue("--columnNumber"));
    document.documentElement.style.setProperty("--rowNumber", gridSize);//Setting the grid-template-row for new grid
    document.documentElement.style.setProperty("--columnNumber", gridSize);// Setting the grid-template-column for new grid
    for (i = 1; i <= gridSize*gridSize; i++) {
        var singleDiv = document.createElement('div');
        singleDiv.className = 'singleCell';
        var element = document.getElementById("mainBlock");
        element.appendChild(singleDiv);
        singleDiv.setAttribute('data-color', 'single');
    }
    startSketching();
}

function paint (e,changedColor) {
    switch (colorType) {
        case "single": {
            changedColor = newColor;
            e.target.style = `background-color: ${changedColor}`;
            break;
        }
        case "rgb": {
            changedColor = getRandomColor();
            e.target.style = `background-color: ${changedColor}`;
            break;
        }
        case "scale": {
            changedColor = newColor;
            if (e.target.style.backgroundColor === 'white') {
                e.target.style = `background-color: ${changedColor}`;
                console.log(e.target.style.backgroundColor);
            } else if(e.target.style.backgroundColor == 'rgb(247, 247, 247)') {
                changedColor = 'rgb(220, 220, 220)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(220, 220, 220)') {
                changedColor = 'rgb(193, 193, 193)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(193, 193, 193)') {
                changedColor = 'rgb(166, 166, 166)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(166, 166, 166)') {
                changedColor = 'rgb(139, 139, 139)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(139, 139, 139)') {
                changedColor = 'rgb(112, 112, 112)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(112, 112, 112)') {
                changedColor = 'rgb(85, 85, 85)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(85, 85, 85)') {
                changedColor = 'rgb(58, 58, 58)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(58, 58, 58)') {
                changedColor = 'rgb(31, 31, 31)';
                e.target.style = `background-color: ${changedColor}`;
            } else if(e.target.style.backgroundColor == 'rgb(31, 31, 31)') {
                changedColor = 'rgb(0, 0, 0)';
                e.target.style = `background-color: ${changedColor}`;
            }
            break;
        }
        default:;
    }
}

function startSketching () {
    cells = document.querySelectorAll('.singleCell');
    cells.forEach(div => {
    div.addEventListener('mouseover', paint);
})
}

init();
startSketching();