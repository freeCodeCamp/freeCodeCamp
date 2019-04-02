---
title: Largest palindrome product
localeTitle: أكبر منتج متناظر
---
## المشكلة 4: أكبر منتج متناظر

### طريقة:

*   رقم palingromic هو الذي عند عكسه يقرأ نفسه.
*   أكبر رقم تم الحصول عليه من منتج مكون من رقمين مكونين من 3 أرقام هو `999 * 999` ، لذا يمكننا عمل حلقة تبدأ من خلال إنتاج أكبر عدد من الأرقام والتحقق مما إذا كان ذلك الرقم هو تباين أم لا.

### حل:

 `function largestPalindromeProduct(n) { 
 
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
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Problem-4-Largest-palindrome-product)

### المراجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Palindromic_number)