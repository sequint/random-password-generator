// Function that toggles pop up modal on button click.
document.getElementById('generateBtn').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('generatorPrompts').innerHTML = `
        <div class="promptsModal" id="closeModalOuter">
          <div class="modal-dialog" id="modalDialog">
            <div class="modal-content modalPosition">
              <div class="modal-header">
                <h5 class="modal-title">Select Password Criteria</h5>
                <button type="button" class="btn-close" id="closeModalCorner"></button>
              </div>
              <div class="modal-body">
                <ul>
                  <li> <input id="lengthCritBool" type="checkbox">
                    <p class="criteriaItem">Length</p>
                  </li>
                  <li> <input id="charCritBool" type="checkbox">
                    <p class="criteriaItem">Special Characters</p>
                  </li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="closeModalBottom">Close</button>
                <button type="button" class="btn btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
      `
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