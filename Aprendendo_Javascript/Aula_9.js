class Veiculo {
    constructor(marca, modelo, velocidadeMaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima; 
    }

    descricao(){
        console.log(`O veículo que estamos em mãos é um ${this.marca} ${this.modelo} que possuí uma velocidade máxima de ${this.velocidadeMaxima}KM.`);
    }

}


let marca = "Bugatti";
let modelo = "Veyron";
let velocidadeMaxima = 450;

let x = new Veiculo(marca, modelo, velocidadeMaxima);

//x.descricao();


//Conversão de temperatura
class Utilitario {
    static conversaoTemp(celsius) {
      return (celsius * 1.8) + 32;
    }
  }
  
  let celsius = 25;
  console.log("A temperatura de " + celsius + " graus, convertida em Fahrenheit é igual a " + Utilitario.conversaoTemp(celsius) + " graus Fahrenheit.");