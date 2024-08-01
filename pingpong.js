//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamanhoBolinha);
    movimentaBolinha();
    bolinhaBorda();
    criaRaquete (xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamanhoBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquet){
    fill("blue");e
    rect (xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//função respnsável por movimentar a raquete
function movimentaRaquete() {

    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }


}
//função responsável por quando a bolinha bater na raquete, retornar em direção contrária.
function colideRaquete(){

    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){

        xvelocidadeBolinha *= -1;
    }
}
