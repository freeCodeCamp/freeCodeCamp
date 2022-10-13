---
id: 5900f3e91000cf542c50fefc
title: 'Problem 125: Palindromic sums'
challengeType: 5
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$.

There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these palindromes is 4164. Note that $1 = 0^2 + 1^2$ has not been included as this problem is concerned with the squares of positive integers.

Find the sum of all the numbers less than the limit that are both palindromic and can be written as the sum of consecutive squares.

# --hints--

 `palindromicSums(100000000)` should return `2906969179`.

```js
assert.strictEqual(palindromicSums(100000000), 2906969179);

```

`palindromicSums(100)` should return `137`.

```js
assert.strictEqual(palindromicSums(100), 137);
```

`palindromicSums(1000)` should return `4164`.

```js
assert.strictEqual(palindromicSums(540),1570);
```

# --seed--

## --seed-contents--

```js
function palindromicSums(num) {

  return true;
}

palindromicSums(100000000);
```

# --solutions--

```js

function IsPalindrome(num){
    const number = num;
    let reversed = 0;
    while(num > 0){
      let remainder = num % 10;
      reversed = reversed * 10 + remainder;
      num = Math.trunc(num/ 10);
      
    }
    return reversed === number;
  }

function palindromicSums(limit){
    const sqrtLimit = Math.sqrt(limit)
    let sum = 0;
    const list = new Set();
    for (let i = 1; i <= sqrtLimit; i++){
      let number = i*i;
      for (let j = i + 1; j <= sqrtLimit; j++){ 
        number += j * j;
         if (number > limit) break;
          if (IsPalindrome(number) && !list.has(number)){
             sum += number;
             list.add(number);                        
         }
  
     }
 }
   return sum;
 }

```
