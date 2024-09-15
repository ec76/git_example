const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    const result = parseInt(num1) + parseInt(num2);
    console.log(`The sum of ${num1} and ${num2} is ${result}.`);
    rl.close();
  });
});
