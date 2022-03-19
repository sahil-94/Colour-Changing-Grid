// > color changing grid

let row = 10;
let column = 10;

let container = document.querySelector('.container');

for (let i = 1 ; i <= row ; i++) {


    for (let j = 1 ; j <= column ; j++) {
        
        let box = document.createElement('div');
        box.classList.add('grid-box');
      
        container.appendChild(box);
    }
}

let makeRandColor = () => {
    let cells = document.querySelectorAll('.grid-box');
    for (let i = 0; i < cells.length; i++){
        let cell = cells[i];
       
        if (Math.random() > 0.5) {
            cell.classList.add('color');
        } else {
            cell.classList.remove('color');
        }
    }
}

setInterval(makeRandColor, 200);