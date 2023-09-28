const sketchArea = document.querySelector('.sketch-area');

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
        div.addEventListener('mouseover', transition);
        sketchArea.appendChild(div);
    }
}

function transition()
{
    this.style.background = 'black';
}

const gridButtons = document.querySelectorAll('.grid-button');
gridButtons.forEach( (button) => button.addEventListener('click',makeGrid) );
