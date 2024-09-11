function encontrarmedia(vetor){
    let soma=0;
    for(let i=0; i<vetor.length; i++){
  soma += vetor [i];
  }
  let media = soma / vetor.length;
  return media;
  }

  function criarvetor(qtdItens){
      let vetor = Array();
      for(let i=0; i < qtdItens; i++){
          vetor[i] = parseInt(prompt("Digite o valor "+i));
      }
      return vetor;
  }
  var quantidade = parseInt(prompt("Digite a quantidade de valores que deseja informar"));
  const Array = criarvetor(quantidade);
  alert(encontrarmedia(Array));
