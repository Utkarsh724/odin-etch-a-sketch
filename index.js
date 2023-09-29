
function makeGrid()
{    
    sketchArea.innerHTML = '';
    let side;
    if( this.textContent === '16x16' )
    {
        side = 16;
    }
    else if( this.textContent === '32x32' )
    {
        side = 32;
    }
    else if( this.textContent === '64x64' )
    {
        side = 64;
    }
    else if( this.textContent === '100x100' )
    {
        side = 100;
    }
    let sideLength = 576/side;
    for(let i=0 ; i<(side*side); i++)
    {
        const div = document.createElement('div'); 
        div.style.height = `${sideLength}px`;
        div.style.width = `${sideLength}px`;
        div.classList.add('box');
        div.addEventListener('mouseover', transition);
        sketchArea.appendChild(div);
    }
}

function transition()
{
    if(eraseSwitch)
    {
        this.style.background = 'white';
    }
    else
    { 
        this.style.background = 'black';
    }
}

function eraseToggle()
{
    if(eraseSwitch === 0)
    eraseSwitch = 1;
    else
    eraseSwitch = 0;
}

function eraseAll()
{
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( (div) => div.style.background = "white" );
}

function startDrawing()
{
    eraseSwitch = 0;
}

const sketchArea = document.querySelector('.sketch-area');

const gridButtons = document.querySelectorAll('.grid-button');
gridButtons.forEach( (button) => button.addEventListener('click',makeGrid) );

let eraseSwitch = 0;
const eraseButton1 = document.querySelector('.erase.one');
eraseButton1.addEventListener('click', eraseToggle);

const eraseButton2 = document.querySelector('.erase.all');
eraseButton2.addEventListener('click', eraseAll);

const draw = document.querySelector('.draw');
draw.addEventListener('click', startDrawing);

