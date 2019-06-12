---
title: 10001st prime
localeTitle: 10001st
---
## المشكلة 7: 10001st رئيس الوزراء

### طريقة:

*   الرقم الأولي هو رقم مقسوم على 1 ونفسه.
*   يمكننا العثور على رقم أولي إذا كان غير قابل للقسمة من قبل أعداد أولية أصغر من نفسها.

### حل:

 `function nthPrime(n) { 
 
  //Primes array which will store all the prime numbers 
  const primes = [2]; 
 
  //Num is the number we want to check 
  let num = 3, isPrime = true; 
 
  //Looping until primes array is equal to n 
  while (primes.length < n){ 
 
    //All the primes numbers of a number is always <= its square root 
    let max = Math.ceil(Math.sqrt(num)); 
 
    for (let i = 0; primes[i] <= max; i++){ 
      if (num % primes[i] == 0) { 
 
        //Looping till we find the prime 
        isPrime = false; 
        break; 
      } 
    } 
 
    //if Prime found, push it to the array 
    if (isPrime) primes.push(num); 
    isPrime = true; 
 
    //An optimization technique, since we know of all even numbers only 2 is a prime number, we can skip the rest 
    num+=2; 
  } 
 
  //Returning the last number 
  return primes[primes.length-1]; 
 
 } 
` 

\- [تشغيل الكود](https://repl.it/@ezioda004/Project-Euler-Problem-7-10001st-prime)

### المراجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Prime_number)