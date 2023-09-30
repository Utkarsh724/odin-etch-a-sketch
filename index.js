
function makeGrid()
{    
    sketchArea.innerHTML = '';
    let side = 16;
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
    if(randomColorSwitch)
    {
        this.style.background = getRandomColor();
    }
    else if(eraseSwitch)
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
    randomColorSwitch = 0;
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
    randomColorSwitch = 0;
}

function startRandomDrawing()
{
    eraseSwitch = 0;
    if(randomColorSwitch===0)
    randomColorSwitch = 1;
    else
    randomColorSwitch = 0;
}

function getRandomColor()
{
    let maxVal = 0xFFFFFF; //Largest HexaDecimal color
    return '#' + Math.floor( Math.random() * maxVal).toString(16).padStart(6,0).toUpperCase();
}

function removeClass()
{
    buttons.forEach( (button) => button.classList.remove('button-transition') );
}

const sketchArea = document.querySelector('.sketch-area');

const gridButtons = document.querySelectorAll('.grid-button');
gridButtons.forEach( (button) => button.addEventListener('click',makeGrid) );

let eraseSwitch = 0;
let randomColorSwitch = 0;

const eraseButton1 = document.querySelector('.erase.one');
eraseButton1.addEventListener('click', eraseToggle);

const eraseButton2 = document.querySelector('.erase.all');
eraseButton2.addEventListener('click', eraseAll);

const draw = document.querySelector('.draw');
draw.addEventListener('click', startDrawing);

const randomDraw = document.querySelector('.psychedellic');
randomDraw.addEventListener('click', startRandomDrawing);

const buttons = document.querySelectorAll('.button');
buttons.forEach( function(button)
{ 
    button.addEventListener('click', function(){ removeClass(); button.classList.add('button-transition'); } 
) } );

makeGrid();
