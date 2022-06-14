// create a low-fidelity loading spinner

const loading = function(spinnerText, timeIncrement) {
  let time = timeIncrement;
  for (let char of spinnerText) {
    setTimeout(() => {
      process.stdout.write(`\r${char}  `);
    }, time);
    time += timeIncrement;
  }
  // this adds a new line once spinnerText is completely printed
  setTimeout(() => {
    process.stdout.write('\n');
  }, spinnerText.length * timeIncrement);
};

const spinnerString = "|/-\\|/-\\|";
loading(spinnerString, 200);