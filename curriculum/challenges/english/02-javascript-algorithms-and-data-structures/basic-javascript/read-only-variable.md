---
id: 6606cb14de147212ca33dc95
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
dashedName: read-only-variable
---

# --description--

The keyword `let` is not the only new way to declare variables. In ES6, you can also declare variables using the `const` keyword.

`const` has all the awesome features that `let` has, with the added bonus that variables declared using `const` are read-only. They are a constant value, which means that once a variable is assigned with `const`, it cannot be reassigned:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

The console will display an error due to reassigning the value of `FAV_PET`.

You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.

**Note:** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.
<h2>Hinglish</h2>
Keyword `let` ek variable declare karne ka naya tareeka nahi hai. ES6 mein, aap `const` keyword ka istemal karke bhi variables ko declare kar sakte hain.

`const` mein `let` ke saare zabardast features hote hain, saath hi variables jo `const` ke saath declare kiye jaate hain, wo read-only hote hain. Ye ek constant value hote hain, jo yani ek baar ek variable ko `const` ke saath assign kar diya gaya hai, use phir se assign nahi kiya ja sakta:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

Console ek error dikha dega `FAV_PET` ki value ko dobara assign karne ki wajah se.

Aapko hamesha variables ko jo reassign nahi karna chahte hain unhe `const` keyword ka istemal karna chahiye. Ye madad karta hai jab aap galti se kisi variable ko reassign karne ki koshish karte hain jo constant rehna chahiye.

**Note:** Developers ke liye aam hai ki wo immutable values ke liye uppercase variable identifiers ka istemal karte hain aur mutable values (objects aur arrays) ke liye lowercase ya camelCase ka istemal karte hain. Aap baad mein challenges mein objects, arrays, aur immutable aur mutable values ke baare mein aur bhi jaanenge. Baad mein challenges mein, aapko uppercase, lowercase, ya camelCase variable identifiers ke udaharan dekhne ko milenge.

# --instructions--

Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices. Do not change the strings assigned to the variables.

Code ko aise badal do ki sabhi variables `let` ya `const` ka istemal karke declare kiye jaayein. `let` ka istemal tab karo jab aap chahte hain ki variable change ho, aur `const` ka istemal tab karo jab aap chahte hain ki variable constant rahe. Saath hi, `const` se declare kiye gaye variables ka naam aam practice ke anusaar badal do. Variables ko assign kiye gaye strings ko mat badalna.

# --hints--

`var` should not exist in your code.

```js
assert.notMatch(code, /var/g);
```

You should change `fCC` to all uppercase.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` should be a constant variable declared with `const`.

```js
assert.match(code, /const\s+FCC/);
```

The string assigned to `FCC` should not be changed.

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` should be declared with `let`.

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` should be changed to print the `FCC` and `fact` variables.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
