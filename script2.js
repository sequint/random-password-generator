document.getElementById('generate').addEventListener('click', () => {
  
  // Constant data to pull password elements from.
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const specCharArray = ['!', '@', '#', '$', '%', '^', '&', '*']

  // Prompt the user for the length of the array.
  let passLength = prompt('Enter password length (8-128)')

  // Prompt the user for criteria they like included in the password.
  let upperCase = prompt('Would you like uppercase characters? (Enter Y for yes and N for no)')
  let lowerCase = prompt('Would you like lowercase characters? (Enter Y for yes and N for no)')
  let numbers = prompt('Would you like uppercase characters? (Enter Y for yes and N for no)')
  let specialCharacters = prompt('Would you like uppercase characters? (Enter Y for yes and N for no)')

  

})
