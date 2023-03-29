const container = document.querySelector("#container");
let divAmount = 625;

function createGrid() {
    for (let i = 0; i < divAmount; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'gridDiv';
        container.appendChild(gridDiv);
    }
}

createGrid();