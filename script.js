// Function that toggles pop up modal on button click.
document.getElementById('generateBtn').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('generatorPrompts').innerHTML = `
        <div class="promptsModal" id="closeModalOuter">
          <div class="modal-dialog">
            <div class="modal-content modalPosition">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" id="closeModalCorner"></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="closeModalBottom">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
})