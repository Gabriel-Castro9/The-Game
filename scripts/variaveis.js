let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;
let imagemCenario8;

let imagemLuz4;
let imagemLuz7;

let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemVida
let fonteTelaInicial;
let cenarios = [];
let somDoPulo;
let somDoJogo;
let somDoHit;

let jogo;

let cenario1;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
let cenario6;
let cenario7;
let cenario8;

let luz4;
let luz7;


let cenaAtual = 'telaInicial'
let cenas;
let telaInicial;
let vida;
let fita;

let personagem;

let inimigo;
let inimigoGrande;
let inimigoVoador;

let pontuacao;
let botaoGerenciador;

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizPersonagem = [
  [0,0],
  [0,0],
  [108,0],
  [108,0],
  [216,0],
  [216,0],
  [324,0],
  [324,0],
  [432,0],
  [432,0],
  [540,0],
  [540,0],
  [648,0],
  [648,0],
  [756,0],
  [756,0]
]
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos =  []