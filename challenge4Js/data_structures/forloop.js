// Define a function to check if a number is prime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
}

// Loop through the numbers 1 to 20 and print out the prime numbers
for (let i = 1; i <= 20; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
