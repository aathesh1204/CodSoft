// Get references to display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = "";  // Store user input as a string

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // If the button has no value (like clear or equals), handle separately
    if (button.id === 'clear') {
      currentInput = "";
      display.value = "";
    } else if (button.id === 'equals') {
      try {
        // Use eval to compute result
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
      } catch (err) {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      // Append the button's value to input string
      currentInput += value;
      display.value = currentInput;
    }
  });
});
