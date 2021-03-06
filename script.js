
// Get password length function.
const getPasswordLength = () => {
  // Initialize length outside of the loop
  let length = ''
  // Initiaize loop counter.
  let loopCounter = 0

  // Get a length from the user.
  // While the length is outside the number bounds, alert the user and re-run the function.
  do {
    // If the loop is past it's first iteration, show error message.
    if (loopCounter > 0) {
      alert('Please enter a number for input that is between 8 and 128.')
    }
    length = prompt('Enter password length (8-128)')
    loopCounter++
  } while (length < 8 || length > 128 || isNaN(length))

  return length
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
  
  // Set a counting iterator for the loop.
  let loopIterator = 0

  do {

    // If the loop is running again, throw the error message.
    if (loopIterator > 0) {
      alert('You must answer yes to at least one criteria.')
    }

    for (let index = 0; index < messageNames.length; index++) {
      // Create a temp variable to store the users answer for each iteration.
      let answer = prompt(`Would you like to include ${messageNames[index]} in your password?`)
      answer = answer.toUpperCase()

      // If there is no valid response, through error message and deicriment the index.
      if (answer !== 'Y' && answer !== 'N') {
        alert('Please enter a Y or N response.')
        index--
      }
      // If the user answer is yes to prompt, store arNames with equivalent index into criteria array.
      else if (answer === 'Y') {
        criteria.push(arNames[index])
      }
    }

    // Iterate loop count.
    loopIterator++

  } while (criteria.length === 0)

  // Return the new array with user criteria choices.
  return criteria

}

const getPassword = (length, criteria) => {
  // Constant data to pull password elements from.
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const specCharArray = ['!', '@', '#', '$', '%', '^', '&', '*']

  
  let password = ''       // Variable for the password.
  let allCriteriaHit = 0  // Counter to ensure all criteria is used
  let hitUpper = 0
  let hitLower = 0
  let hitNum = 0
  let hitChar = 0

  do {
    // Loop through the amount of times the user chose the length of the password to be.
    for (let count = 0; count < length; count++) {
      // Get a random array from the user criteria.
      let whichArray = criteria[Math.floor(Math.random() * criteria.length)]

      if (whichArray === 'upperCase') {
        password += upperArray[Math.floor(Math.random() * upperArray.length)]
        if (hitUpper === 0) {
          hitUpper = 1
          allCriteriaHit++
        }
      }
      else if (whichArray === 'lowerCase') {
        password += lowerArray[Math.floor(Math.random() * upperArray.length)]
        if (hitLower === 0) {
          hitLower = 1
          allCriteriaHit++
        }
      }
      else if (whichArray === 'numArray') {
        password += numArray[Math.floor(Math.random() * numArray.length)]
        if (hitNum === 0) {
          hitNum = 1
          allCriteriaHit++
        }
      }
      else if (whichArray === 'specCharArray') {
        password += specCharArray[Math.floor(Math.random() * specCharArray.length)]
        if (hitChar === 0) {
          hitChar = 1
          allCriteriaHit++
        }
      }

    }
  } while (allCriteriaHit < criteria.length)

  return password

}

document.getElementById('generate').addEventListener('click', () => {
  // Prompt the user for the length of the array and store the answer.
  passLength = getPasswordLength()

  // Message to tell user what the valid responses will be for getting criteria.
  alert('Please enter a Y for yes and N for no for the following questions.')
  
  // Get which critera the user would like to have stored into the password.
  let criteriaArray = getCriteria()

  let password = getPassword(passLength, criteriaArray)

  document.getElementById('password').textContent = password
})
