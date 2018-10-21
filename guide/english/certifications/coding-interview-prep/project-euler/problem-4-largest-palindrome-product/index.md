---
title: Largest palindrome product
---
## Problem 4: Largest palindrome product

### Method:
- A palindromic number is the one that when reversed reads the same.
- The largest number obtained from product of two 3 digit number is `999 * 999`, so we can make a loop that starts by producting the largest number and check if that number is palindromic or not.
### Solution:
```js
function largestPalindromeProduct(n) {
  
  //To get the maximum n digit number, + operator type castes String to Number type
  let max = +[...Array(n)].reduce((a, c) => a+=9, "");
  
  //Next we get minimum n digit number from the max
  let min = (max+1)/10;
  
  //To store the result
  let res = [];
  
  //Starting the loop from max to min
  for (let i = max; i >= min; i--){
    
    //Another loop 
    for (let j =  max; j >= min; j--){
      
      //Getting the product
      let num = i*j; 
      
      //Reversing the number
      let numReverse = [...String(num)].reverse().join('');
      
      //Checking for palindromic number
      if (num == numReverse) {
      
        //Pushing the number into array and breaking the loop for efficiency
        res.push(num);
        break;
      }
    }
  }
  
  // Returning the maximum of the result array
  return Math.max(...res);
}
```
- [Run Code](https://repl.it/@ezioda004/Problem-4-Largest-palindrome-product)
### References:

- [Wikipedia](https://en.wikipedia.org/wiki/Palindromic_number)
