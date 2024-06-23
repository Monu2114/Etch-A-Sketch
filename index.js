const container = document.querySelector('div');
const button = document.querySelector('button');
button.textContent = 'No of Squares per side?';
let k=0;
button.addEventListener('click', function() {
    
    let squares = prompt('Enter the number of squares per side');
    container.innerHTML = '';
    displayGrid(squares);
});
function displayGrid(squares= 16) {
    for (let i = 0; i <squares; i++) {
        for (let j = 0; j <squares; j++) {
            let div = document.createElement('div');
            div.style.width = 400 / squares + 'px';
            div.style.height = 400 / squares + 'px';
            div.style.border = '0.1px solid grey';
            container.appendChild(div);
           
    }
    }
}
container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('container')) {
        return; // Ignore hover over the container itself
    }
    else if(k==10)
    {
        k=0;
    }
    else
    {

    e.target.style.backgroundColor = 'black';
    e.target.style.opacity=0.1+k*0.1;
    k++;
}
});

displayGrid();
