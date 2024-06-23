const container = document.querySelector('div');
function displayGrid(){
    for(let i = 0; i < 255; i++){
        
            let div = document.createElement('div');
            div.style.width = '25px';
            div.style.height = '25px';
            div.style.border = '1px solid grey';
            container.appendChild(div);
}
}
container.addEventListener('mouseover', function(e){
    console.log(e.target);
    if(e.target.class=='div.container'){
        e.target.style.backgroundColor = 'white';
    }
    else{
e.target.style.backgroundColor = 'black';
    }
})
displayGrid();
