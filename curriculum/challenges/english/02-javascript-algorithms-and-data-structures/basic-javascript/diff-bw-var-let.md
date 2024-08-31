---
id: 6606caefb893da1298c87c2b
title: Explore Differences Between the var and let Keywords
challengeType: 1
dashedName: diff-bw-var-let
---

# --description--

One of the biggest problems with declaring variables with the `var` keyword is that you can easily overwrite variable declarations:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

In the code above, the `camper` variable is originally declared as `James`, and is then overridden to be `David`. The console then displays the string `David`.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called `let` was introduced in ES6, a major update to JavaScript, to solve this potential issue with the `var` keyword. You'll learn about other ES6 features in later challenges.

If you replace `var` with `let` in the code above, it results in an error:

```js
let camper = "James";
let camper = "David";
```

The error can be seen in your browser console.

So unlike `var`, when you use `let`, a variable with the same name can only be declared once.

<h2>Hinglish</h2>

`var` keyword ka istemal karke variables declare karne mein ek bada problem ye hai ki aap aasani se variable declarations ko overwrite kar sakte hain:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

Upar ke code mein, `camper` variable pehle `James` ke roop mein declare kiya gaya hai, phir usko `David` ke roop mein overwrite kiya gaya hai. Console mein phir string `David` display hota hai.

Ek chhote application mein, aapko is tarah ki samasya ka samna nahi karna padega. Lekin jab aapka codebase bada ho jata hai, aap galti se ek variable ko overwrite kar sakte hain jo aapne iraade se nahi kiya tha. Kyunki ye behavior koi error nahi deta, isliye bugs ko dhoondhkar fix karna mushkil ho jata hai.

`let` namak keyword ES6 mein introduce kiya gaya tha, jo JavaScript ka ek major update hai, `var` keyword ke is potential issue ko solve karne ke liye. Aap baad mein dusre ES6 features ke baare mein seekhenge.

Agar aap upar ke code mein `var` ki jagah `let` ka istemal karte hain, to ye ek error produce karta hai:

```js
let camper = "James";
let camper = "David";
```

Is error ko aap apne browser console mein dekh sakte hain.

Is tarah, `var` ke vipreet, jab aap `let` ka istemal karte hain, ek variable ke saath ek hi naam ka variable sirf ek baar declare kiya ja sakta hai.

# --instructions--

Update the code so it only uses the `let` keyword.

# --hints--

`var` should not exist in the code.

```js
assert.notMatch(code, /var/g);
```

`catName` should be the string `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

`catSound` should be the string `Meow!`

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
