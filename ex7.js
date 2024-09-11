let numeros = Array()


for(let i=0; i<5; i++){
    numeros[i]=prompt("Digite um número:")
}
numeros.sort(function(a,b){
    return a-b;
})
alert("O maior número é: " +numeros[0]+ " e o menor número é: " +numeros[4])
