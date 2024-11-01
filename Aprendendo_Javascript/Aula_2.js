//Aprendendo a usar o Array

let animais = ["Macaco", "Aranha", "Cavalo", "Rato"];

//Adiciona ao final da lista , o ultimo da lçista
animais.push("Leão", "Elefante");
console.log(animais);

//Retira a utlima palavre da lista
animais.pop();
console.log(animais);

//Retira o primeiro elemento da lista
animais.shift();
console.log(animais);

//Adicionando elemento no inicio da lista
animais.unshift("Girafa", "Tigre");
console.log(animais);

//Trocando a informação do segundo elemento de javascript
animais [1] = "Onça";
console.log(animais);


for(let i = 0; i < animais.length; i++){
    console.log(animais [i]);
}