---
id: 663a66f2c0a6d1710495f601
title: Getting Started with Functions
challengeType: 1
dashedName: getting-functions
---

# --description--

**Objective:**
Learn how to write a function (declare, call, and return) by writing a simple program on leap year.

**Introduction:**
Functions are pieces of code that do specific tasks and can be used again and again. Writing functions typically involves four main steps: declaring the function, calling the function, returning values from the function, and Checking leap years can get tricky, so it's a good idea to put that code into a function.

**Challenge:**
In this JavaScript challenge, we'll explore the basics of functions. After learning the basics, you can declare a function, return a value from inside the function, and call the function.

**Key concepts:**
Declaration: A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

```js
function name(parameter) {
}
```

The function keyword tells JavaScript that the `name` variable is going to be a function.

Calling the function: In order to use a function, you need to call it.

The syntax for a function call is the function name followed by parentheses. 
For example, this code defines and calls a test function.

```js
function test() {
}

test() //This is how we call a function.
```

Return statement: By default, functions return undefined as their value. In order to return something else, you need to use the return keyword. 
Here is an example of a function that returns the string "Functions are cool!":

```js
function demo() {
return "Functions are cool!";
}
```
  
<h2>Hinglish</h2>

**Objective:**
Ek program likh kar (declare, call, aur return) function kaise likhein, leap year par.

**Introduction:**
Functions code ke tukde hote hain jo khaas karyon ko karte hain aur baar baar istemal kiye ja sakte hain. Functions likhne mein aam taur par char mukhya kadam hote hain: function ko declare karna, function ko call karna, function se values return karna, aur Leap years ko check karna mushkil ho sakta hai, isliye achha vichaar hai ki us code ko ek function mein daalein.

**Challenge:**
Is JavaScript challenge mein, hum functions ke mool tatvon ko explore karenge. Mool tatvon ko sikne ke baad, aap function declare kar sakte hain, function ke andar se ek value return kar sakte hain, aur function ko call kar sakte hain.

**Key Concepts:**
Declaration: Ek function ek code block hota hai jo aapke application mein dobara istemal kiya ja sakta hai. Functions ko nimnlikhit syntax ke saath declare kiya jata hai:

```js
function name(parameter) {
}
```

Function keyword JavaScript ko bataata hai ki `name` variable ek function hoga.

Function ko call karna: Function ka istemal karne ke liye, aapko use call karna hoga.

Function call ke liye syntax function name ke saath parentheses ka istemal hota hai. 
Udaharan ke liye, yah code ek test function ko define aur call karta hai.

```js
function test() {
}

test() //Yah hai hum function ko call karte hain.
```

Return statement: Default taur par, functions undefined ko apni value ke roop mein return karte hain. Kuch aur return karne ke liye, aapko return keyword ka istemal karna hoga. 
Yah hai ek function ka udaharan jo string "Functions are cool!" ko return karta hai:

```js
function demo() {
return "Functions are cool!";
}
```

# --instructions--

Declare a function named `daysInAnYear`. Inside this function, write a `return` statement that returns the number `365`.

Call the `daysInAnYear` function after declaring it, and store the returned value in a variable called days and console it.

# --hints--

`daysInAnYear` should be a function.

```js
assert(typeof daysInAnYear === 'function');
```

output should be `365`.

```js
assert.strictEqual(daysInAnYear(), 365, "daysInAnYear should return 365.");

```

use variable `days` to console.

```js
assert.doesNotThrow(() => { eval(`if (typeof days === 'undefined') throw new Error("Variable 'days' is not used.");`); }, Error, "Variable 'days' is not used.");

```

# --seed--
## --seed-contents--

```js
// Only change code below this line



// Only change code above this line
```

# --solutions--

```js
function daysInAnYear() {
    return 365;
}

let days = daysInAnYear();
console.log(days);
```
