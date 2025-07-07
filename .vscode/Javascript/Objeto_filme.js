//Versão Function
// function Filme(titulo,direção,genero,anoDeLançamento, avaliação){
//   this.titulo = titulo;
//   this.direção = direção;
//   this.genero = genero;
//   this.anoDeLançamento = anoDeLançamento;
//   this.avaliação = avaliação;
// }
// Filme.prototype.obterResumo = function(){
//   return `${this.titulo}, um filme de ${this.genero} dirigido por ${this.direção}, foi lancado em ${this.anoDeLançamento}. Recebeu uma avaliação de ${this.avaliação}.`;
// };

// const HomemAranha = new Filme ("Homem-Aranha", "Sam Raimi", "Ação", 2002, 87);
// console.log(HomemAranha.obterResumo());

//Versão class
class Filme {
  constructor(titulo,direção,genero,anoDeLançamento, avaliação){
    this.titulo = titulo;
    this.direção = direção;
    this.genero = genero;
    this.anoDeLançamento = anoDeLançamento;
    this.avaliação = avaliação;

  
  }
  obterResumo() {
    return `${this.titulo}, um filme de ${this.genero} dirigido por ${this.direção}, foi lancado em ${this.anoDeLançamento}. Recebeu uma avaliação de ${this.avaliação}.`;
  }
}
  
  const HomemAranha = new Filme ("Homem-Aranha", "Sam Raimi", "Ação", 2002, 87);
  console.log(HomemAranha.obterResumo());