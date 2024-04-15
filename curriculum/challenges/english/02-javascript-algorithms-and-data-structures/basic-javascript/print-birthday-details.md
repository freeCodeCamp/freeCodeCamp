---
id: 661a6e7d66f4ca43cb3c3a78
title: Print BirthDay Details
challengeType: 1
dashedName: print-birthday-details
---

# --description--

Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.

**Examples:**

If the birth `date` is `22`, the birth `month` is `May` and the birth `year` is `2001` then

output 

```js
22
May
2001

```


# --instructions--
Create three variables to store the birth date, month, and year.
Print the variables in the order: `date`, `month`, `year`.

# --hints--

`birthDate` should have a value of `22`.

```js

assert(
  typeof birthDate !== 'undefined' && birthDate === 22
);

```

`birthMonth` should have a value of `apr`.

```js

assert(
  typeof birthMonth !== 'undefined' && birthMonth === "apr"
);

```

`birthYear` should have a value of `1999`.

```js

assert(
  typeof birthYear !== 'undefined' && birthYear === 1999
);

```

# --seed--

## --seed-contents--


```js

// Only change code below this line
let birthDate = "";

let birthMonth ;

let birthYear = "";

console.log(birthMonth);
console.log(birthDate);

// Only change code above this line

console.log(birthYear);

```


# --solutions--

```js

let birthDate = 22

let birthMonth = "apr";

let birthYear = 1999;

console.log(birthDate);
console.log(birthMonth);
console.log(birthYear);
``` 

