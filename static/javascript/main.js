const button = document.querySelector('button');
const body = document.querySelector('header');

const colors = [ 'pink', 'lightskyblue','lightgreen'];

body.style.backgroundColor = "thistle";
button.addEventListener('click',changeBackgroundcolor);

function changeBackgroundcolor(){
    const colorIndex = parseInt(Math.random()
    *colors.length);
    body.style.backgroundColor = colors[colorIndex];
}
