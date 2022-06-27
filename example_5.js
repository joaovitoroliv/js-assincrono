const fs = require('fs')
// Async/Await - Açúcar Sintático em cima da Promise - Sintax Sugar
const readFile = (file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
}))

console.log(1);

// Init é uma Promise
const init = async() => {
    // Tratar o erro com try-catch
    try{
        const contents = await readFile('./in12.txt')
        const contents2 = await readFile('./in2.txt')
        console.log(String(contents))
        console.log(String(contents2))        
    } catch(err){
        console.log(err)
    }
}
console.log('init:', init())

console.log(2);

console.log(3);
