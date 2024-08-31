---
id: 6606cceb895847148c4f961a
title: Compound assignment with Augmented Addition
challengeType: 1
dashedName: comp-assign-augadd
---

# --description--

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:


```js
myVar = myVar + 5;
```

to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

`6` would be displayed in the console.

<h2>Hinglish</h2>

Programming mein, variables ke contents ko modify karne ke liye assignments ka istemal karna aam hai. Yaad rakhein ki equals sign ke daayein wale sab kuch pehle evaluate hota hai, isliye hum keh sakte hain:

```js
myVar = myVar + 5;
```

`myVar` mein `5` ko add karne ke liye. Kyunki ye ek aam pattern hai, isliye aise operators hote hain jo ek step mein mathematical operation aur assignment dono karte hain.

Aisa ek operator hain `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

Console pr `6` dikhega.

# --instructions--

Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.

`a`, `b`, aur `c` ke liye assignments ko `+=` operator ka istemal karne ke liye convert karein.

# --hints--

`a` should equal `15`.

```js
assert(a === 15);
```

`b` should equal `26`.

```js
assert(b === 26);
```

`c` should equal `19`.

```js
assert(c === 19);
```

You should use the `+=` operator for each variable.

```js
assert(__helpers.removeJSComments(code).match(/\+=/g).length === 3);
```

You should not modify the code above the specified comment.

```js
assert(
  /let a = 3;/.test(__helpers.removeJSComments(code)) &&
    /let b = 17;/.test(__helpers.removeJSComments(code)) &&
    /let c = 12;/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
