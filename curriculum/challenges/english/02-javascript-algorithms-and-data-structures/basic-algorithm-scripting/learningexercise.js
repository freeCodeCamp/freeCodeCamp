// Exercise 1: Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const inputString = prompt('Enter a string to reverse:');
  const reversedString = reverseString(inputString);
  console.log('Reversed string:', reversedString);
  
  // Exercise 2: Check if a Number is Prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  const inputNumber = parseInt(prompt('Enter a number to check if it\'s prime:'));
  const primeMessage = isPrime(inputNumber) ? 'is prime' : 'is not prime';
  console.log(inputNumber, primeMessage);
  
  // Exercise 3: Fibonacci Series
  function fibonacci(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }
  
  const fibonacciLength = parseInt(prompt('Enter the length of Fibonacci series:'));
  const fibonacciSeries = fibonacci(fibonacciLength);
  console.log('Fibonacci series:', fibonacciSeries);
  
  // Exercise 4: Calculate Factorial
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  }
  
  const factorialNumber = parseInt(prompt('Enter a number to calculate factorial:'));
  const factorialResult = factorial(factorialNumber);
  console.log('Factorial of', factorialNumber, 'is', factorialResult);
  