---
id: 6606c952f62155112026cbb0
title: Declare JavaScript Variables
challengeType: 1
dashedName: declarejavascriptvariables

---

# --description--

In computer science, <dfn>data</dfn> is anything that is meaningful to the computer. JavaScript provides eight different <dfn>data types</dfn> which are `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, and `object`.

For example, computers distinguish between numbers, such as the number `12`, and `strings`, such as `"12"`, `"dog"`, or `"123 cats"`, which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

<dfn>Variables</dfn> allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or <dfn>declare</dfn> a variable by putting the keyword `var` in front of it, like so:

```js
var ourName;
```

creates a variable called `ourName`. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and `$` or `_`, but may not contain spaces or start with a number.

<h2>Hinglish</h2>
Computer science mein, <dfn>data</dfn> kuch bhi ho sakta hai jo computer ke liye meaningful ho. JavaScript mein, aath alag <dfn>data types</dfn> hote hain jo hain `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, aur `object`.

For example, computers ko numbers jaise ki number `12`, aur `strings` jaise ki `"12"`, `"dog"`, ya `"123 cats"` ko differentiate karne ki capability hoti hai, jo characters ki collections hoti hain. Computers numbers par mathematical operations perform kar sakte hain, lekin strings par nahi.

<dfn>Variables</dfn> computers ko data ko store aur manipulate karne ki dynamic tarike se karne ki anumati deti hain. Ye is tarike se karte hain ki wo data ka istemal data ke bajaye us data ko point karne ke liye ek "label" ka istemal karte hain. Kisi bhi aath data types ko variable mein store kiya ja sakta hai.

Variables mathematics mein istemal kiye jaane wale x aur y variables ke similar hote hain, jo yeh matlab hai ki ye data ko represent karne ke liye ek simple naam hote hain jise hum refer karna chahte hain. Computer variables mathematics ke variables se is tarike se alag hote hain ki wo alag alag waqt par alag alag values ko store kar sakte hain.

Hum JavaScript ko ek variable ko create ya <dfn>declare</dfn> karne ke liye uske samne `var` keyword ka istemal karke batate hain, jaise ki:

```js
var ourName;
```

`ourName` naam ka ek variable create karta hai. JavaScript mein hum statements ko semicolons se end karte hain. Variable names mein numbers, letters, aur `$` ya `_` ka istemal kiya ja sakta hai, lekin spaces nahi hone chahiye aur na hi number se shuru hona chahiye.

# --instructions--

Use the `var` keyword to create a variable called `myName`.

`var` keyword ka istemal karke `myName` naam ka ek variable banayein.

**Hint**  
Look at the `ourName` example above if you get stuck.

# --hints--

You should declare `myName` with the `var` keyword, ending with a semicolon

```js
assert(/var\s+myName\s*;/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
