var idade = parseInt(prompt("Digite sua idade"))

if(idade<0){
    alert("Idade inválido")
if(idade<=12){
    alert("Você é criança")
}else if(idade<=17){
    alert("Você é adolescente")
}else if(idade<=64){
    alert("Você é adulto")
}
}else if(idade>=110){
    alert("Você é fóssil")
}else{
    alert("Você é idoso")
};
