// Function that toggles pop up modal on button click.
document.getElementById('generateBtn').addEventListener('click', event => {
  event.preventDefault()
  document.getElementById('generatorPrompts').innerHTML = `
        <div class="promptsModal"></div>
      `
})