// content.js

document.addEventListener('DOMContentLoaded', function () {
    generateRandomBoxes();
  });
  
  function generateRandomBoxes() {
    const maxBoxCount = 300; // Maximum number of boxes
    const animationDuration = 1; // Duration of the fade-in animation in seconds
    const intervalDelay = 100; // Delay between adding each box in milliseconds
  
    function getRandomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    const fontColors = ['#1F356E', '#FF0000', '#5F3813', '#FFFFFF'];
    const texts = ['SAVE!', 'SAVE!', 'Buy One', 'Get One', 'Free', 'Now', 'Only', '9.99', 'Just','save','Limited'];
    const fontSizes = ['2.5rem', '5rem']; // Define your set of font sizes
    const borderRadii = ['0px', '500px'];
  
    function getBoxColors(fontColor) {
      const colorVariations = {
        '#1F356E': { fill: ['#FFFFFF', '#AADBFB', '#FFFFDC', '#FFFF02'], stroke: ['#1F356E', '#FF0000'] }, // Navy
        '#FF0000': { fill: ['#FFFFFF', '#AADBFB', '#FFFFDC', '#FFFF02'], stroke: ['#1F356E', '#FF0000', '#FFFFDC'] }, // Red
        '#5F3813': { fill: ['#FFFFFF', '#AADBFB', '#FFFFDC'], stroke: ['#1F356E', '#FF0000'] }, // Brown
        '#FFFFFF': { fill: ['#069F50', '#1F356E', '#FF0000'], stroke: ['#069F50', '#1F356E', '#FF0000'] }, // White
        // Add more color variations for other font colors if needed
      };
  
      return colorVariations[fontColor] || { fill: ['#000080', '#FF0000', '#008000'], stroke: ['#000080', '#FF0000', '#008000'] }; // Default to Navy, Red, Green for unknown font colors
    }
  
    let currentBoxCount = 0;
  
    const addBoxInterval = setInterval(() => {
      if (currentBoxCount >= maxBoxCount) {
        clearInterval(addBoxInterval); // Stop adding boxes when reaching the maximum count
        return;
      }
  
      const box = document.createElement('div');
      box.className = 'random-box';
  
      // Randomize font color
      const fontColor = getRandomItem(fontColors);
      box.style.color = fontColor.toLowerCase();
  
      // Get box colors based on the font color
      const boxColors = getBoxColors(fontColor);
  
      // Apply styles
      box.textContent = getRandomItem(texts);
      box.style.color = fontColor.toLowerCase();
      box.style.textStroke = 'unset'; // Add this line to remove the text-stroke

      box.style.fontFamily = 'Save'; // Use the specific font name
      box.style.fontSize = getRandomItem(fontSizes); // Randomly select a font size from the set
      box.style.backgroundColor = getRandomItem(boxColors.fill);
      box.style.border = `3px solid ${getRandomItem(boxColors.stroke)}`;
  
      // Set initial position dynamically
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      box.style.position = 'absolute';
      box.style.left = `${randomX}px`;
      box.style.top = `${randomY}px`;
  
      // Randomize border-radius
      const selectedBorderRadius = getRandomItem(borderRadii);
      box.style.borderRadius = selectedBorderRadius;
  
      // Adjust padding based on the border radius
      if (selectedBorderRadius === '500px') {
        box.style.paddingLeft = `2rem`;
        box.style.paddingRight = `2rem`;
        box.style.paddingBottom = `.35rem`;
      }

      if (selectedBorderRadius === '0px') {
        box.style.paddingLeft = `1rem`;
        box.style.paddingRight = `1rem`;
        box.style.paddingBottom = `.2rem`;
      }
  
      // Trigger the fade-in animation
      box.style.animation = `fadeIn ${animationDuration}s ease-out forwards`;
  
      document.body.appendChild(box);
      currentBoxCount++;
    }, intervalDelay);
  }



  