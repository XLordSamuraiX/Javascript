//Calculando a área de um retângulo
function areaRetangulo (largura, altura){
        let area = altura * largura;
        return area;

}

let altura = 7;
let largura = 8;

let resultado = areaRetangulo (largura, altura);
console.log("A área do retângulo é " + resultado + " metros quadrados.")