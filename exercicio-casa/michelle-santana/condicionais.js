/*  
 1. Na porta de uma balada, confirme a seguintes informações:

    SE for maior e igual a 18  - ( Passe a mensagem ao usuario que "Maior que 18 - autorizado")
    Se for menor que 18 - ( Passe a mensagem ao usuario que "Menor que 18 - não autorizado")

*/
let idade = 17;
if ( idade>=18) {
    console.log("autorizado")
}else{ console.log("não autorizado, menor que 18")};


/*  
 2. Em uma fila de cadastro, eu tenho 25 anos e atendente precisa  confirmar a seguintes informações:

    SE idade é menor igual a  18 -  ( Passe a mensagem ao usuario que "criança/adolescente")
    SE for maior que 18  E menor igual a 60 - ( Passe a mensagem ao ususrio que "Adulto")
    SE NÃO  ( Passe a mensagem ao ususrio que "Idoso")
*/
let idade=25;
if ( idade<=18) {console.log("criança/adolescente")}else if (18<idade<=60) {console.log("Adulto")} else{console.log("idoso")};



/* 
    3. Calculo IMC

    Crie uma variavel receba  peso em kg, uma variavel que receba altura em metros. 
    Faça as comparações necessarias usando if e else if e els, para determinar qual a interpretação do IMC atual.

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
let peso= 68;
let altura= 1.61;
let imc= console.log( peso/altura**2)
if ( imc<=18.5) {console.log ("abaixo do peso normal")}
else if (imc>18.5 && imc<=25.0) {console.log("peso normal")} 
else if ( imc>25 && imc<=30.0) {console.log ("acima do peso normal")}
else {console.log( "obesidade")};

