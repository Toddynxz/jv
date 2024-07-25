//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//config velocidade bolinha
let xvelocidadebolinha =6;
let yvelocidadebolinha = 6;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(100,149,237); 
    //chamando a função
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

//função nova bolinha
function novaBolinha(){
    xBolinha = xvelocidadebolinha + yvelocidadebolinha;
    yBolinha = yvelocidadebolinha + xvelocidadebolinha;
}
