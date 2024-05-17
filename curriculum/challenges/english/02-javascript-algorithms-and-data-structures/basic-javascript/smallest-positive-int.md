---
id: 66413debf4a3371e1e9ad315
title: Smallest Positive Integer
challengeType: 1
dashedName: smallest-positive-int
---

# --description--

**Objective:** The objective of this challenge is to find the smallest positive integer that is a multiple of both 2 and a given integer n.

**Introduction:**
This task requires finding the smallest integer that is both even and a divisor of 
n. This is fundamental in many areas of computer science, such as optimization and number theory.

**Challenge:**
Write a program that takes an integer n as input and prints the smallest positive integer that is a multiple of both 2 and n.

<h2>Hinglish</h2>

Lakshya: Dena hai sabse chhota sakaratmak pooranank jo 2 aur di gayi sankhya n ka gunak hai.

Parichay: Is karya mein, hamein vah sabse chhota pooranank dhoondhna hai jo sath hi sath sudhaaro se bhinn hai aur n ka ek bhajak hai. Yeh computer vigyaan ke kai kshetron mein moolbhoot hai, jaise ki optimization aur sankhya sidhant.

Challenge: Ek program likho jo ek pooranank n ko input ke roop mein leta hai aur sabse chhota sakaratmak pooranank ko print karta hai jo 2 aur n dono ka gunak hai.

# --instructions--
**Examples:**

The smallest even number that is divisible by 5 is 10.

```js
smallestMulti(5)
Output: 10
```

Since 6 is already even and divisible by itself, the output is 6.

```js
smallestMulti(6)
Output: 6
```

Click on this <a href =https://cs50.ai/chat>Link</a> to Go to CS50 AI 
And use this prompt.

1. Prompt 1: Are there any edge cases or special scenarios related to `n` that we should be aware of?

2. Prompt 2: How would you like us to handle cases where n is even? Should we return `n` itself or find another divisor?


# --hints--
`smallestMulti(5)` should return `10`

```js
assert(smallestMulti(5)===10)
```

`smallestMulti(6)` should return `6`

```js
assert(smallestMulti(6)===6)
```

# --seed--
## --seed-contents--

```js
function smallestMulti(n) {
    
    // Only change code below this line
    
    return ;
}

smallestMulti(n);

```

# --solutions--

```js
function smallestMulti(n) {
    
    let smallestMultiple = (n % 2 === 0) ? n : (2 * n);
    
    
    return smallestMultiple;
}

smallestMulti(n);


```

