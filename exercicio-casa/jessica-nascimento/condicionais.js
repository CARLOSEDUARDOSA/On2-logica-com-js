/*  
 1. Na porta de uma balada, confirme a seguintes informações:

    SE for maior e igual a 18  - ( Passe a mensagem ao usuario que "Maior que 18 - autorizado")
    Se for menor que 18 - ( Passe a mensagem ao usuario que "Menor que 18 - não autorizado")

*/


/*  
 2. Em uma fila de cadastro, eu tenho 25 anos e atendente precisa  confirmar a seguintes informações:

    SE idade é menor igual a  18 -  ( Passe a mensagem ao usuario que "criança/adolescente")
    SE for maior que 18  E menor igual a 60 - ( Passe a mensagem ao ususrio que "Adulto")
    SE NÃO  ( Passe a mensagem ao ususrio que "Idoso")
*/


/* 
    3. Calculo IMC

    Crie uma variavel receba  peso em kg, uma variavel que receba altura em metros. 
    Faça as comparações necessarias usando if e else if e else, para determinar qual a interpretação do IMC atual.

    IMC  / Interpretação

    Até 18,5 (inclusive)  / Abaixo do peso normal

    De 18,5 a 25 (inclusive) / Peso normal

    De 25 a 30 (inclusive) / Acima do peso normal

    Acima de 30 / Obesidade

    Exemplo:
    Peso = 85 
    Altura = 1.80
    Resultado = Acima do peso normal 

*/




// primeiro exercicio (1)
let idade = 19
if(idade >=18){console.log("Autorizado")}
else{console.log("Não autorizado")}

// segundo exercicio (2)
let idade = 25


if(idade <=18){console.log("Criança/Adolescente")}

else if(idade > 18 && idade <= 60){console.log("Adulto")}

else{console.log("Idoso")}

// terceiro exercicio (3)
let peso = 80

let altura = 1.72

let imc = peso / (altura * altura)


if(imc <=18.5){console.log("Abaixo do peso normal")}

else if(imc >18.5 && imc <=25){console.log("Peso normal")}

else if(imc > 25 && imc <=30){console.log("Acima do peso normal")}

else{console.log("Obesidade")}