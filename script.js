document.getElementById('generate').addEventListener('click', () => {
  
  // Constant data to pull password elements from.
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const specCharArray = ['!', '@', '#', '$', '%', '^', '&', '*']

  // Prompt the user for the length of the array.
  passLength = prompt('Enter password length (8-128)')

  // Create a control for password length.
  while (passLength < 8 || passLength > 128) {
    if (passLength < 8) {
      passLength = prompt('Please enter a number greater then 7.')
    }
    else {
      // Re-initialize so the user can exit if needed.
      passLength = 8
      passLength = prompt('Please enter a number less than 129.')
    }
  }

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
