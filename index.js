function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    // Assuming the game's width is 400px
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  