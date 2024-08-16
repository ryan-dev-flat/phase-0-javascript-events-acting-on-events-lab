function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;

    }
  }


  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
      console.log(e)
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      dodger.style.left = `${left - 1}px`;
    }
  });

  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let rightNumbers = dodger.style.left.replace('px', '');
    let right = parseInt(rightNumbers, 10);

    // Assuming the game's width is 400px
    if (right < 360) {
      dodger.style.left = `${right + 1}px`;

    }
  }
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
    console.log(e)
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    dodger.style.left = `${right + 1}px`;
  }
});

