---
id: 6606cc932d3660142b585e31
title: Finding Remainder and Quotient with Javascript
challengeType: 1
dashedName: find-remainder
---

# --description--

Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

**Note:** Print the output in the order as mentioned in the question.

<h2>Hinglish</h2>

"Ek program likho jo user se do numbers A aur B le aur jab number A ko number B se divide kiya jata hai, to quotient aur remainder calculate kare.

**Note:** Output ko question mein diye gaye order mein print kare."

# --hints--

`Quotient(12,5)` should return `2`. `Reminder(12,5)` should return `2`.

```js
assert(Quotient(12,5)===2 && Remainder(12,5)===2)

```

Similarly `15,6` should return `2,3`

```js
assert(Quotient(15,6)===2 && Remainder(15,6)===3)
```

# --seed--
## --seed-contents--

```js
function Quotient(a, b) {
    //  Only change code below this line
    
}
function Remainder (a,b) {
    //  Only change code below this line
}

```

# --solutions--

```js
function Quotient(a, b) {
    return Math.floor(a / b);
    
}
function Reminder (a,b) {
    return a % b
}

```
