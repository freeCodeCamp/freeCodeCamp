---
id: 6606ca4e13f21011d7519a2b
title: Create Decimal Numbers with Javascript
challengeType: 1
dashedName: create-decimal
---

# --description--

**Create Decimal Numbers with JavaScript**

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as <dfn>floating point</dfn> numbers or <dfn>floats</dfn>.

**Note:** when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. If you are getting one of these results, open a topic on the <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp forum</a>.

# --instructions--


<h2>Hinglish</h2>

**JavaScript mein Decimal Numbers banayein**

Hum variables mein decimal numbers bhi store kar sakte hain. Decimal numbers kabhi-kabhi <dfn>floating point</dfn> numbers ya <dfn>floats</dfn> ke roop mein bhi jaane jaate hain.

**Note:** Jab aap numbers ka calculation karte hain, to ye finite precision ke saath compute hote hain. Floating points ka istemal karke operations se different results mil sakte hain jo ki aapke desired outcome se alag ho sakte hain. Agar aapko kisi bhi result mein ye problem aati hai, to freeCodeCamp forum par ek topic shuru karein.

# --instructions--

Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).

`myDecimal` naam ka ek variable banayein aur use ek decimal value de (e.g. `5.7`).

# --hints--

`myDecimal` should be a number.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` should have a decimal point.

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js



```

# --solutions--

```js
const myDecimal = 9.9;
```

