const canvas = document.querySelector('.canvas');
const gridSize = 30;

// for (let i = 0; i < 1000; i++) {
//     const square = document.createElement('div');
    

//     square.addEventListener('mouseover', () => {
//         square.style.backgroundColor = 'black';
//     });

//     canvas.appendChild(square);
// }

for (let i = 0; i < gridSize; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        columnDiv.appendChild(box)
        box.className = 'box'
    }

    canvas.appendChild(columnDiv)    
}

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    const allSquares = canvas.querySelectorAll('div');
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})