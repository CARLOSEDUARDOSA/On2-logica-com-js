/*
1.  Desenhe uma escada 5 andares, utilizando  um dos seguintes tipos de loop: for, do while ou while.
    Utilize a string para passar dentro um caractere, para desenhar a escada.

    Exemplo:
    '#'
    '##'
    '###'
    '####'
    '#####'

*/

for (let index = 1; index <= 5; index++) {
    let escada;
    escada = "";
    for (let a = 1; a <= index; a++) {
        escada = escada + "#";        
    }
    console.log(escada);
}

/*
 2. Faça a taboada do 10 utilizando um dos seguintes loops for, while, ou do while.

    Exemplo:

    '1 x 10 = 10'
    '2 x 10 = 20'
    '3 x 10 = 30'
    '4 x 10 = 40'
    '5 x 10 = 50'
    '6 x 10 = 60'
    '7 x 10 = 70'
    '8 x 10 = 80'
    '9 x 10 = 90'
    '10 x 10 = 100'
*/

for (let index = 1; index <= 10; index++) {
    let b = index + " x 10 = " + index * 10;
    console.log(b);
}

/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.

*/
let diaDaSemana = "quinta";

switch (diaDaSemana) {
    case "domingo":
        break;
    case "segunda":
        break;
    case "terça":
        break;
    case "quarta":
        break;
    case "quinta":
        console.log("QUINTOU!!");
        break;
    case "sexta":
        break;
    case "sábado":
        break;
    default:
        break;
}