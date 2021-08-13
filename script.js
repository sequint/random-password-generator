
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
  // If input is Y or N return true, else return false.
}

document.getElementById('generate').addEventListener('click', () => {
  
  // Constant data to pull password elements from.
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const specCharArray = ['!', '@', '#', '$', '%', '^', '&', '*']

  // Prompt the user for the length of the array and store the answer.
  passLength = getPasswordLength()

  // Prompt the user for criteria they like included in the password.
  let upperCase = prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')
  let lowerCase = prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')
  let numbers = prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')
  let specialCharacters = prompt('Would you like to include numbers in your password? (Enter Y for yes and N for no)')

  // // Create an empty array to store 
  // let arraysIncluded = []
  // if (upperCase) {
    
  // }

})
