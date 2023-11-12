let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Your code here


for (let i = 0; i < alphabet.length; i++) {
    let rep = []
    for (let a = 0; a < par.length; a++) {
        if (alphabet[i] == par[a].toLowerCase()) {
            rep.push(par[a])
            counts[alphabet[i]] = rep.length       
        }
    }
}

console.log(counts);
