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
Print the variables in the order: `date`, `month`, `year`.

Use separate console.log() statements to print each variable's value on a new line:

Print birthDate.
Print birth month.
Print birthYear.

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


# --instructions--
Teen variables `birthDate`,`birthMonth` aur `birthYear` create karein janam din, mahina, aur varsh ke values ko store karne ke liye.
Variables ko order mein print karein: `date`, `month`, `year`.

Har variable ki value ko alag console.log() statements ka istemal karke ek naye line par print karein:

birthDate ko print karein.
birthMonth ko print karein.
birthYear ko print karein.

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

# --seed--

## --seed-contents--


```js

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

