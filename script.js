const cssDisplay = document.querySelector("h3");
const colorInputs = document.querySelectorAll(".color1, .color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("Random");

// Function to set the gradient background
const setGradient = () => {
  const [color1, color2] = Array.from(colorInputs).map(input => input.value);
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  cssDisplay.textContent = `${body.style.background};`;
};

// Function to generate a random hex color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
};

// Function to assign random colors and update gradient
const randomColors = () => {
  colorInputs.forEach(input => {
    input.value = getRandomColor();
  });
  setGradient();
};

// Initialize the gradient on page load
setGradient();

// Add event listeners for color inputs
colorInputs.forEach(input => {
  input.addEventListener('input', setGradient);
});

// Add event listener for the random button
randomButton.addEventListener('click', randomColors);
