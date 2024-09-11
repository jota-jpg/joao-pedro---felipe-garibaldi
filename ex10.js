let palavras = ["maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã",
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã",
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã",
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã",
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã",
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã", 
"maçã", "banana", "laranja", "maçã", "uva", "maçã"];
let palavraespecifica = prompt("Escolha uma das palavras: maçã, banana, laranja, ou uva.");
let contagem = 0;

for (let i=0; i<palavras.length; i++){
  if (palavras[i] === palavraespecifica){
    contagem++;
  }
}

alert("a palavra aparece:"+contagem+" vezes")