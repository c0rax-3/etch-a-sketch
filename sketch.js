const canvas = document.querySelector('.canvas');


for (let i = 0; i < 1000; i++) {
    const square = document.createElement('div');
    

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });

    canvas.appendChild(square);
}

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    const allSquares = canvas.querySelectorAll('div');
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})