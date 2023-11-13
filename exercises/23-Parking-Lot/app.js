let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
const getParkingLotState = (arr) => {


  let available = 0
  let occupied = 0

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i]
    for (let a = 0; a < subArr.length; a++) {
      if (subArr[a] === 2) {
        available += 1
      }
      else if (subArr[a] === 1) {
        occupied += 1
      }
    }
  }
let total = available + occupied

let state = {
  totalSlots: total,
  availableSlots: available,
  occupiedSlots: occupied,
}
return state
}

console.log(getParkingLotState(parkingState))
