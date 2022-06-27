// callback > promise > async/await
/// O que é um callback? Operação de I/O

// importar filesystem
const fs = require('fs')
console.log(1);

// Leitura assincrona no disco em uma pilha - chama de volta quando o arquivo for lido
function callback(err, contents){
    console.log(err, String(contents));
}
// Outra maneira - arrow function
const callbackArrow = (err, contents) => console.log(err, String(contents))

fs.readFile('./in1.txt', callback)
fs.readFile('./in2.txt', callbackArrow)
// Outra maneira - tudo na mesma linha
fs.readFile('./in3.txt' , (err,contents) => console.log(err, String(contents)))

console.log(2);

console.log(3);