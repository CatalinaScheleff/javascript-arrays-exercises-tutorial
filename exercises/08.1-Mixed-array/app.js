let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
newArray = []
for (let i = 0; i < mix.length; i++) {
    type = typeof mix[i]
    newArray.push(type)
}

console.log(newArray)