function preload() {
  imagemCenario1 = loadImage('imagens/cenario/cenario1.png');
  imagemCenario2 = loadImage('imagens/cenario/cenario2.png');
  imagemCenario3 = loadImage('imagens/cenario/cenario3.png');
  imagemCenario4 = loadImage('imagens/cenario/cenario4.png');
  imagemCenario5 = loadImage('imagens/cenario/cenario5.png');
  imagemCenario6 = loadImage('imagens/cenario/cenario6.png');
  imagemCenario7 = loadImage('imagens/cenario/cenario7.png');
  
  imagemCenario8 = loadImage('imagens/cenario/cenario8.png');
 
 
  imagemLuz4 = loadImage('imagens/cenario/luz4.png');
  imagemLuz7 = loadImage('imagens/cenario/luz7.png');
  
   imagemPersonagem = loadImage('imagens/personagem/corrida.png');
   imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  imagemVida = loadImage('imagens/assets/coracao.png')
  
  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  
  
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');
  somDoJogo = loadSound('sons/musicaJogo.mp3');
  
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDoHit = loadSound('sons/hit.ogg');
}