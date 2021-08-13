
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
  // Initiate empty criteria array to hold the names of the arrays to be included.
  let criteria = []
  let 
  // Prompt the user for the criteria and store the array name if they want it included.
  prompt('Would you like to include upper case letters in your password? (Enter Y for yes and N for no)') === 'Y' ? criteria.push()
  prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')
  prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')
  prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')
}

document.getElementById('generate').addEventListener('click', () => {
  
  // Constant data to pull password elements from.
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const specCharArray = ['!', '@', '#', '$', '%', '^', '&', '*']

  // Prompt the user for the length of the array and store the answer.
  passLength = getPasswordLength()
  

  // // Create an empty array to store 
  // let arraysIncluded = []
  // if (upperCase) {
    
  // }

})
