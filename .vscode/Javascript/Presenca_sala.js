function obterEstudantes(salaDeAula){
  let { temMonitoria, listaDeClasse } = salaDeAula;
  let ensinante, ensinanteAssistente, estudantes; 

  if (temMonitoria){
    [ensinante, ensinanteAssistente,...estudantes] = listaDeClasse;
  } else {
    [ensinante,...estudantes] = listaDeClasse; 
  }
  return estudantes;
  }
  console.log(
    obterEstudantes({
      temMonitoria: true,
      listaDeClasse:["Marina","Jose","Mayara","Pedro","Ana"],
    })
  );
