// Como eliminar o código Haduken? Utilizando Promises ao invés de Callback
const fs = require('fs')
// Função Readfile
const readFile = (file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
}))

// Leitura dos três arquivos sem função Haduken - Encadeando Promises
readFile('./in1.txt').then( contents => {
    console.log(String(contents))
    return readFile('./in2.txt')
}).then ( contents => {
    console.log(String(contents))
    return readFile('./in3.txt')
}).then( contents => {
    console.log(String(contents))
})

