const fs = require('fs');
console.log(1);

// Leitura de dois arquivos de uma vez
fs.readFile('./in1.txt', (err, contents) => {
    fs.readFile('./in2.txt', (err2, contents2) => {
        console.log(err, String(contents))
        console.log(err2, String(contents2))
    })
})

// Leitura de tres arquivos de uma vez - Arquivo crescendo 'pra frente' - Código 'Haduken'
fs.readFile('./in1.txt', (err, contents) => {
    console.log(4);
    fs.readFile('./in2.txt', (err2, contents2) => {
        fs.readFile('./in3.txt', (err3, contents3) => {
            console.log(err, String(contents))
            console.log(err2, String(contents2))
            console.log(err3, String(contents3))
        })
    })
})

console.log(2);

console.log(3);