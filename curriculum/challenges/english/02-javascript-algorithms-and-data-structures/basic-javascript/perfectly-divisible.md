---
id: 6612f547127b940ecd79b0b8
title: Perfectly Divisible
challengeType: 1
dashedName: perfectly-divisible
---

# --description--

**Objective**: Find the most whole items that fit in containers!

**Introduction**:

Imagine you have a bunch of stuff (A) and containers of a certain size (B). How much stuff can you fit in whole containers (multiples of B)? Let's find the answer in JavaScript!


**Challenge**:

you are given two numbers:

A: The total amount of stuff.
B: The size of each container.
Then, find the biggest whole number (multiple of B) that's less than A. This represents the maximum number of containers you can fill completely. Finally, print this biggest number.


<h2>Hinglish</h2>
**Objective**: Containers mein fit hone wale sabse adhik puri cheezein dhoondhein!

**Introduction**:

Sochiye aapke paas kuch samaan hai (A) aur ek nishchit size ke containers (B) hain. Kitni puri cheezein containers mein fit kar sakte hain (B ke multiples)? Chaliye JavaScript mein iska jawab dhoondhte hain!

**Challenge**:

Aapko do numbers diye gaye hain:

A: Kul samaan ka maatra.
B: Har container ka size.
Phir, A se chhota sabse bada poorna sankhya (B ka multiple) dhoondhein. Ye maximum containers ki sankhya ko darshata hai jo aap puri tarah se bhar sakte hain. Ant mein, is bade number ko print karein.

# --instructions--

Find the largest number divisible by `B`. 

Create a variable named `largestNumber` that stores the value.

`B` se divisble sabse bada number dhoondhein.

`largestNumber` naam se ek variable banayein jo is value ko store kare.

**Hints** 

Click on this <a href = "https://cs50.ai/chat">Link</a> - to Go to CS50 AI. And use this prompts.

1. Prompt: How can we adjust division to ensure a whole number in the result? 


# --hints--

You should create a variable named `largestNumber`.

```js
assert.ok(code.includes('largestNumber'));
```

You should be using `Math.floor` 

```js
assert(code.match(/Math\.floor/g).length >= 0);
```

Variable `largestNumber` should return `25`.

```js
assert(largestNumber===25);
```

# --seed--
## --seed-contents--

```js
var A = 27;
var B = 5;
//  Only change code below this line


```

# --solutions--

```js
var A = 27;
var B = 5;

// Finding the largest number less than A that is divisible by B
var largestNumber = Math.floor((A - 1) / B) * B;
```
