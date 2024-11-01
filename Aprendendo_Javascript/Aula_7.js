let livros = new Map();

livros.set('Miles Morales', 'Brian Michael Bendis')
livros.set('Daredevil', 'Frank Miller')
livros.set('Thor', 'Jason Aaron')

//console.log(livros.get('Thor'))


for (let [chave, valor] of livros){
    console.log(`${chave}: ${valor}`);
}

console.log(livros.size);

livros.delete('Thor')

console.log(livros.has('Thor'));