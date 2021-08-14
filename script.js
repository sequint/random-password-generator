
// Get password length function.
const getPasswordLength = () => {
  // Ask the user for a length.
  let length = prompt('Enter password length (8-128)')

  // If the length is outside the number bounds, alert the user and re-run the function.
  if (length < 8 || length > 128) {
    alert('Please enter a value between 8 and 128')
    getPasswordLength()
  }
  // If the number is within the bounds return the number.
  else {
    console.log(length)
    return length
  }
}

const checkYesOrNo = input => {
  // Capitalize input.
  input.toUpperCase()

  // If input is Y or N return true, else return false.
  if (input === 'Y' || input === 'N') {
    return true
  }
  else {
    return false
  }
}

const getCriteria = () => {
  // Array used to loop through and print a prompt to the user.
  const messageNames = ['upper case letters', 'lower case letters', 'numbers', 'special characters']
  const arNames = ['upperCase', 'lowerCase', 'numArray', 'specCharArray']
  // Create an empty array to store user responses.
  let criteria = []

  for (let index = 0; index < messageNames.length; index++) {
    // Create a temp variable to store the users answer for each iteration.
    let answer = prompt(`Would you like to include ${name} in your password?`)
    answer = answer.toUpperCase()

    // If there is no valid response, through error message and deicriment the index.
    if (answer !== 'Y' && answer !== 'N') {
      alert('Please enter a Y or N response.')
      index--
    }
    // If the user answer is yes to prompt, store arNames with equivalent index into criteria array.
    else if (answer === 'Y') {
      return arNames.push(messageNames[index])
    }

    // Return the new array with user criteria choices.
  }

  let criteria = messageNames.map((name, i) => {
    // Create a temp variable to store the users answer for each iteration.
    let answer = prompt(`Would you like to include ${name} in your password?`)
    answer = answer.toUpperCase()

    // If there is no valid response, through error message and deicriment the index.
    if (answer !== 'Y' && answer !== 'N') {
      alert('Please enter a Y or N response.')
      i--
    }
    // If the user answer is yes to prompt, store arNames with equivalent index into criteria array.
    else if (answer === 'Y') {
      return arNames[i]
    }

  })

}

document.getElementById('generate').addEventListener('click', () => {
  
  // Constant data to pull password elements from.
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const specCharArray = ['!', '@', '#', '$', '%', '^', '&', '*']

  // Prompt the user for the length of the array and store the answer.
  passLength = getPasswordLength()
  // Message to tell user what the valid responses will be for getting criteria.
  alert('Please enter a Y for yes and N for no for the following questions.')
  getCriteria()
  

  // // Create an empty array to store 
  // let arraysIncluded = []
  // if (upperCase) {
    
  // }

})
