function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((currentElement, index) => arr2[index] === currentElement)
}

function getUsersNamesInAgeRange(users, gender) {
  if(users.length === 0 || gender != "мужской" && gender != "женский"){
    return 0
  }
  return users.filter((gndr) => gndr.gender === gender).map((num) => num.age).reduce((acc, currentNumber)=> acc + currentNumber) / users.filter((gndr) => gndr.gender === gender).length
}