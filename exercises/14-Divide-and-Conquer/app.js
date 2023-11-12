let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here

const mergeTwoList = (number) => {
    even = []
    odd = []
    
    for(let i = 0; i < number.length; i++) {

        if (number[i] % 2 === 0) {
            even.push(number[i])
        }
        else {
            odd.push(number[i])
        }
    }
    newArray = odd.concat(even)

    return newArray
}

console.log(mergeTwoList(listOfNumbers))