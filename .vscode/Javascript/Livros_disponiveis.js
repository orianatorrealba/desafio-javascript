class Livro{
constructor(titulo, autoria, ISBN, numeroDeCopias) {
this.titulo = titulo;
this.autoria = autoria;
this.ISBN = ISBN;
this.numeroDeCopias = numeroDeCopias;
}
get disponibilidade(){
  return this.obterDisponibilidade(); 
}

obterDisponibilidade = function () {
  if (this.numeroDeCopias ===0){
    return "Fora de estoque";
  } else if (this.numeroDeCopias < 10){
    return "Estoque baixo";
  }
    return "Em estoque";
}
venderLivros(quantidadeVendida = 1) {
  this.numeroDeCopias -= quantidadeVendida;
}
reporCopias(quantidadeReposta = 5) {
  this.numeroDeCopias += quantidadeReposta;
  }
}

const jogosVorazes = new Livro("Jogos Vorazes", "Suzane Collins", 123919 ,5);
console.log(jogosVorazes.obterDisponibilidade());
jogosVorazes.reporCopias(12);
console.log(jogosVorazes.obterDisponibilidade());
jogosVorazes.venderLivros(17);
console.log(jogosVorazes.obterDisponibilidade());

  
