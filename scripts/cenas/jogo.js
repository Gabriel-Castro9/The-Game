class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    this.cenarios = [];
  }

  setup() {
    cenario1 = new Cenario(imagemCenario1, 6);
    cenario2 = new Cenario(imagemCenario2, 6);
    cenario3 = new Cenario(imagemCenario3, 4);
    cenario4 = new Cenario(imagemCenario4, 3);
    cenario5 = new Cenario(imagemCenario5, 4);
    cenario6 = new Cenario(imagemCenario6, 6);
    cenario7 = new Cenario(imagemCenario7, 6);
    cenario8 = new Cenario(imagemCenario8, 6);
    
    
    luz4 = new Cenario(imagemLuz4, 9);
    luz7 = new Cenario(imagemLuz7, 8);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 150, 100, 107, 135);
    
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 80, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
    

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    
    this.cenarios.push(cenario1, cenario2, cenario3, cenario4, cenario5, cenario6, cenario7, cenario8, luz4, luz7);

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }
   
   
   

  draw() {
    cenario1.exibe();
    cenario1.move();
    cenario2.exibe();
    cenario2.move();
    cenario3.exibe();
    cenario3.move();
    cenario4.exibe();
    cenario4.move();
    cenario5.exibe();
    cenario5.move();
    cenario6.exibe();
    cenario6.move();
    cenario7.exibe();
    cenario7.move();
    cenario8.exibe();
    cenario8.move();
    luz4.exibe();
    luz4.move();
    luz7.exibe();
    luz7.move();
   

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }

    }

    if(personagem.estaColidindo(inimigo)) {
          somDoHit.play();
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
        
      }
     
    }
  }
       
}