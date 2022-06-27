const fs = require('fs');
const readFile = (file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
}))
const promessa = readFile('./in1.txt').then( contents => {
    console.log(String(contents))
    return readFile('./in2.txt')
}).then( contents => {
    console.log(String(contents))
    console.log(promessa)
})
// Promessa está pending

// Promise 'undefined' pois ela saiu do estado de pending e foi resolvida
setTimeout (() => console.log(promessa), 1000)