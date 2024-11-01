let frutas = new Set();

frutas.add("laranja");
frutas.add("limão");
frutas.add("maça");
frutas.add("laranja");

console.log(frutas.has("maça"));

frutas.delete("limão");
frutas.clear();

//Novo Set
let numeros = [1, 2, 3, 4, 5, 6, 7, 5, 3, 2]

let num = new Set (numeros);

console.log(num.size)

for(let valor of num){
    console.log(valor);
}