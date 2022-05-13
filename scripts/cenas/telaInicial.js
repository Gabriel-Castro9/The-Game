 class TelaInicial{
  cosntrtuctor(){
  
  }
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
    
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('The', width /2,height /3 );
    textSize(150)
    text('Game', width /2, height /5 * 3);
    textSize(18)
    text('Modo de Jogar: use a seta "cima" do teclado para pular, jogue no seu computador', width /2, height /5)
  }
  _botao() {
    botaoGerenciador.y = height /7 * 5
    botaoGerenciador.draw();
  }
   
   
   
   
   
}