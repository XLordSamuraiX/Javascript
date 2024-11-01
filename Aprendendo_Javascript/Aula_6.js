//Criando objeto
    let carro = {
        marca : "BMW",
        modelo: "m3",
        ano : 1985

    };

    console.log(carro.modelo);
    
    console.log(carro.ano);

    carro.cor = "Black";
    console.log(Object.keys(carro));
    console.log(carro.cor);

    //modificando oi valor da chave ano
    carro.ano = 2005;

    console.log(carro.ano);

    for(let chave in carro){
        console.log(`${chave}: ${carro[chave]}`);
    }


    //Usando uma função como valor de um objeto
    let calculadora = {
        calcular: function (x1, x2){
            let soma = x1+x2;
            return soma;
        }
    };

    let resultado = calculadora.calcular(2, 2);
    console.log(resultado);

