//Usando os condicionais if, else if e else
let  idade= 17;

if (idade < 13){
    console.log("Esta pessoa é criança.")
} else if ((idade >=13) && (idade<=17)){
    console.log("Esta pessoa é Adolescente.");
} else if ((idade >=18) && (idade<=64)){
    console.log("Essta pessoa é adulta.");
} else {
    console.log("Esta pessoa é idosa.");
}

// Usando o switch case
let number = 1;

switch (number){
    case 1 :
        console.log("Você errou!")
        break;

    case 2 :
        console.log("Você errou!")
        break;

    case 3 :
        console.log("Você acertou...Parabéns!")
        break;

    case 4 :
        console.log("Você errou!")
        break;

    case 5 :
        console.log("Você errou!")
        break;

    default:
        console.log("Número inválido, tente novamente.")
}