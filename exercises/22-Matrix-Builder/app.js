// Your code here
let matrixBuilder = (number) => {
    let myArray = [];

    for (let i = 0 ; i < number; i++) {
        
        subArray = []

        for (let a = 0 ; a < number; a++) {
            let randomNumber = Math.floor(Math.random() * 2)
            subArray.push(randomNumber)
        }
        myArray.push([...subArray])
    }

    return myArray
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
