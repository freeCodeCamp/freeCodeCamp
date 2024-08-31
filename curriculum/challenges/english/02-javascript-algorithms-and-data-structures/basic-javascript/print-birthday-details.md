---
id: 66232ce20e33bc54d6b6181b
title: Print Birthday Details
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
Create three variables `birthDate`,`birthMonth` and `birthYear` to store the values of birth date, month, and year.

Complete the `console.log()` statements to print the variables in the order: 
`date`, 
`month`, 
`year`.


<h2>Hinglish</h2>

Yahan ek program likho jo teen variables ka istemal karta hai apke janam din, janam mahina, aur janam varsh ko store karne ke liye, aur fir unhe ek ek karke nirdharit kram mein print karta hai.

**Examples:**

Agar janam `date` hai `22`, janam `month` hai `May` aur janam `year` hai `2001` to

output 

```js
22
May
2001

```

Teen variables `birthDate`,`birthMonth` aur `birthYear` create karein janam din, mahina, aur varsh ke values ko store karne ke liye.

`console.log()` ka use krke teeno variables ko is order mein print karein: 
`date`, 
`month`, 
`year`.

**Hints**

Click on this <a href = "https://cs50.ai/chat">Link</a> -  to Go to CS50 AI. And use these prompts.

1. Prompt 1:  How can I set up the variables to hold the birth information?"
2. Prompt 2:  I have the birth details stored, but how do I display them in the right order with labels?
3. Prompt 3: Thinking ahead... are there any birth dates or months that might cause issues with the program?


# --hints--

`birthDate` should have a value of `22`.

```js

assert(
  typeof birthDate !== 'undefined' && birthDate === 22
);

```

`birthMonth` should have a value of `Apr`.

```js

assert(
  typeof birthMonth !== 'undefined' && birthMonth === "Apr"
);

```

`birthYear` should have a value of `1999`.

```js

assert(
  typeof birthYear !== 'undefined' && birthYear === 1999
);

```

You should use `console.log()`  in your code to print values.

```js
assert(code.match(/console.log/g));
```

# --seed--

## --seed-contents--


```js

console.log();
console.log();
console.log();	

```


# --solutions--

```js

let birthDate = 22

let birthMonth = "Apr";

let birthYear = 1999;

console.log(birthDate);
console.log(birthMonth);
console.log(birthYear);
``` 

