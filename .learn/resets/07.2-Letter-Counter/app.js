let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Your code here
for (let a = 0; a < alphabet.length; a++) {
    counts[alphabet[a]] = 0;
    let letter = alphabet[a]
    
    for (let i = 0; i < par.length; i++) {
        let repetitions = [];
        if (alphabet[a] === par[i].toLowerCase) {
            repetitions.push(par[i])
            counts[letter] = repetitions.length
            

            
        }
    }
}

console.log(counts);
