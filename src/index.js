var size = 16;

function createBrick(col, row){
    const brick = document.createElement('div');
    brick.classList.add('brick');
    brick.style.gridColumn = col;
    brick.style.gridRow = row;
    brick.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#999999';
    })
    return brick
}

function setSize(e, s){
    e.style.gridTemplateColumns = `repeat(${s}, 1fr)`;
    e.style.gridTemplateRows = `repeat(${s}, 1fr)`;
}

setSize(document.querySelector('#container'), size);

const container = document.querySelector('#container');
for (let col = 1; col <= size; col++){
    for(let row = 1; row <= size; row++){
        container.appendChild(createBrick(col, row));
    }
}

const reset = document.createElement('div');
reset.setAttribute('id', 'reset');
reset.textContent = 'Reset Grid State';

reset.addEventListener('click', () => {
    const allBricks = document.querySelectorAll('.brick')
    allBricks.forEach((brick) => {
        brick.style.backgroundColor = 'white';
    })
})

const labelSize = document.createElement('input');
labelSize.setAttribute('id', 'labelSize');
labelSize.defaultValue = String(size);

const setNewSize = document.createElement('div');
setNewSize.setAttribute('id', 'setNewSize');
setNewSize.textContent = 'Set Grid Size';

setNewSize.addEventListener('click', () => {
    if (Number(labelSize.value) <= 100){
        size = Number(labelSize.value);
    } else {
        size = 100;
        labelSize.value = '100';
    }
    setSize(document.querySelector('#container'), Number(labelSize.value));
    const container = document.querySelector('#container');
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    for (let col = 1; col <= Number(labelSize.value); col++){
        for (let row = 1; row <= Number(labelSize.value); row++){
            container.appendChild(createBrick(col, row));
        }
    }
})

reset.appendChild(labelSize);
reset.appendChild(setNewSize);
const mainDiv = document.querySelector('#main');
mainDiv.appendChild(reset)
