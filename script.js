
//*********************************Generate Password Button*********************************//

document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  // Checkbox boolian variables
  let lengthClicked = false
  let specialCharClicked = false

  document.getElementById('generatorPrompts').innerHTML = `
        <div class="promptsModal" id="closeModalOuter">
          <div class="modal-dialog" id="modalDialog">
            <div class="modal-content modalPosition">
              <div class="modal-header">
                <h5 class="modal-title">Enter password length (8-128)</h5>
                <button type="button" class="btn-close" id="closeModalCorner"></button>
              </div>
              <div class="modal-body" id="promptBody">
                <form>
                  <input type="number" class="passLength" id="passLength">
                </form>
              </div>
              <p class="mustSelectMessage" id="mustSelectMessage"></p>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="closeModalBottom">Close</button>
                <button type="button" class="btn btn-primary nextBtn" id="nextBtn">Next</button>
              </div>
            </div>
          </div>
        </div>
        `

  // Update length bool if checkbox is clicked.
  document.getElementById('lengthCritBool').addEventListener('click', event => lengthClicked = !lengthClicked)

  // Update special character bool if checkbox is clicked.
  document.getElementById('charCritBool').addEventListener('click', event => specialCharClicked = !specialCharClicked)

  // Close modal on corner 'x' button click.
  document.getElementById('closeModalCorner').addEventListener('click', event => {
    event.preventDefault();

    document.getElementById('generatorPrompts').innerHTML = ''
  })
  // Close modal on lower close button click.
  document.getElementById('closeModalBottom').addEventListener('click', event => {
    event.preventDefault();

    document.getElementById('generatorPrompts').innerHTML = ''

  })
  // Close modal on out of window click.
  document.getElementById('closeModalOuter').addEventListener('click', event => {
    event.preventDefault();

    document.getElementById('generatorPrompts').innerHTML = ''
  })

  // Ignore event listener from parent element.
  document.getElementById('modalDialog').addEventListener('click', event => event.stopPropagation())

})

                        //********** Next Button **********//

document.addEventListener('click', event => {
  if (event.target.classList.contains('nextBtn')) {
    let passwordLength = document.getElementById('passLength').value

    if (passwordLength > 7 && passwordLength < 129) {
      console.log('List Choice Display')
    }
    else {
      document.getElementById('mustSelectMessage').textContent = 'Please enter a name 8 - 128'
      document.getElementById('passLength').textContent = ''
    }

    // Select Password Criteria
    // <li> <input id="lengthCritBool" type="checkbox">
    //   <p class="criteriaItem">Length</p>
    //               </li>
    //   <li> <input id="charCritBool" type="checkbox">
    //     <p class="criteriaItem">Special Characters</p>
    //               </li>


    // // Function that gets a desired password length from user between 8 and 128 characters.
    // const passwordLength = () => {

    //   console.log('In length function.')
    //   if (specialCharClicked) {
    //     specialCharacters()
    //   }

    // }

    // // Function that gets desired special characters to inlclude from user between.
    // const specialCharacters = () => {

    //   console.log('In special character function.')

    // }

    // if (lengthClicked) {
    //   passwordLength()
    // }
    // else if (specialCharClicked) {
    //   specialCharacters()
    // }
    // else {
    //   document.getElementById('mustSelectMessage').textContent = 'Please select at least one criteria'
    // }
  }
})