---
title: Sum All Primes
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The explanation for this problem is very simple. You will generate a list of prime numbers up to the number you are given as a parameter. Then you need to add them all up and return that value. The tricky part is on generating the list of prime numbers. I suggest you find a code or a good math algorithm that you can turn into code.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Prime_number' target='_blank' rel='nofollow'>Prime Numbers</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Generate a list of all the numbers up to and including the one you got as a parameter. This will be needed to determine which numbers are prime or not.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Check this <a href='https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100' target='_blank' rel='nofollow'>link</a> if you prefer to find a solution for finding primes, or try learning and implementing your own <a href='https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes' target='_blank' rel='nofollow'>Sieve of Eratosthenes</a>

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

This problem is hard if you have to create your own code to check for primes, so don't feel bad if you had to use someone's code for that bit. Either way, you are most likely using array, so once you generate an array of primes, then just add them all up and return the number you get.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function sumPrimes(num) {
      var res = 0;

      // Function to get the primes up to max in an array
      function getPrimes(max) {
        var sieve = [];
        var i;
        var j;
        var primes = [];
        for (i = 2; i <= max; ++i) {
          if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
              sieve[j] = true;
            }
          }
        }

        return primes;
      }

      // Add the primes
      var primes = getPrimes(num);
      for (var p = 0; p < primes.length; p++) {
        res += primes[p];
      }

      return res;
    }

    // test here
    sumPrimes(10);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnZ/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create a function that generates the numbers from 1 to **num** and check if they are prime along the way.
*   Declare the variables that will be needed.
*   Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
*   Add the others to the sieve array.
*   Return the primes
*   Loop through the returned array and add all the elements to then return the final value.

#### Relevant Links

*   <a href='https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function sumPrimes(num) {
      // function to check if the number presented is prime
      function isPrime(number){
          for (i = 2; i <= number; i++){
              if(number % i === 0 && number!= i){
              // return true if it is divisible by any number that is not itself.
                 return false;
              }
           }
           // if it passes the for loops conditions it is a prime
          return true;
      }
      // 1 is not a prime, so return nothing, also stops the recursive calls.
      if (num === 1){
        return 0;
      }
      // Check if your number is not prime
      if(isPrime(num) === false){
      // for non primes check the next number down from your maximum number, do not add anything to your answer
        return sumPrimes(num - 1);
      }

      // Check if your number is prime
      if(isPrime(num) === true){
      // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
        return num + sumPrimes(num - 1);
      }
    }
    // test here
    sumPrimes(10);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLn0/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   The function `isPrime` checks if a particular number is prime or not.
*   If `num` is 1, return 0 since 1 is not a prime number.
*   If **num** is not prime, check next number down from maximum number.
*   If **num** is prime, add it to next number in the sequence through recursion to `sumPrimes` function.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion' target='_blank' rel='nofollow'>Functions - Recursion</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function sumPrimes(num) {
      // step 1	
      let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
      // step 2
      let onlyPrimes = arr.filter( (n) => { 
        let m = n-1;
        while (m > 1 && m >= Math.sqrt(n)) { 
          if ((n % m) === 0) 
            return false;
            m--;
        }
          return true;
      });
      // step 3
      return onlyPrimes.reduce((a,b) => a+b); 
    }
    // test here
    sumPrimes(977);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/DoOo/3' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   **Step 1:** Use `Array.from()` to generate a sequence of numbers up to and including `num`. Combine with `.slice()` to slice off first two indices `[0, 1]` since all prime numbers must be greater than 1.
*   **Step 2:** Filter all numbers off of `arr` that are not prime by subjecting each element to the _"trial division test"_ which _"consists of dividing n by each integer m that is greater than 1 and less than or equal to the square root of n"_. This test returns `false` if any number less than the element being operated on (m) produces no remainder when said element (n) is divided by it. See link below for more on this.
*   **Step 3:** Return the sum of all remaining elements of arr using `.reduce()`.

### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Prime_number#Trial_division' target='_blank' rel='nofollow'>Trial Division Test</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples' target='_blank' rel='nofollow'>Array.from()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' target='_blank' rel='nofollow'>Array.filter()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='https://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
