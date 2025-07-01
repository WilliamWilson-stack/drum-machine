// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');let count = 1;
setInterval(() => {
  if (count === 4) {
    new Audio('tock.mp3').play();
  } else {
    new Audio('tick.mp3').play();
  }
  console.log(count); // debug output
  count = (count % 4) + 1;
}, 600);




// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
