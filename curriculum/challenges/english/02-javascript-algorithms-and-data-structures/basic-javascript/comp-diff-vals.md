---
id: 6606ce021a1fe7157cf1b247
title: Practice comparing different values
challengeType: 1
dashedName: comp-diff-vals
---

# --description--

In the last two challenges, we learned about the equality operator (`==`) and the strict equality operator (`===`). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

**Examples**

`3 == '3'` returns `true` because JavaScript performs type conversion from string to number. `3 === '3'` returns `false` because the types are different and type conversion is not performed.

**Note:** In JavaScript, you can determine the type of a variable or a value with the `typeof` operator, as follows:

```js
typeof 3
typeof '3'
```

`typeof 3` returns the string `number`, and `typeof '3'` returns the string `string`.
<h2>Hinglish</h2>
Pichhle do challenges mein, humne equality operator (`==`) aur strict equality operator (`===`) ke baare mein sikha. Chaliye ek quick review karte hain aur in operators ka istemal thoda aur practice karte hain.

Agar compare kiye ja rahe values ek hi type ke nahi hain, to equality operator ek type conversion karega, aur fir values ko evaluate karega. Lekin, strict equality operator dono data type aur value ko as-is compare karega, ek type ko doosre type mein convert nahi karega.

**Examples**

`3 == '3'` `true` return karega kyunki JavaScript string se number mein type conversion karta hai. `3 === '3'` `false` return karega kyunki types alag hain aur type conversion nahi hota hai.

**Note:** JavaScript mein, aap variable ya value ka type `typeof` operator ka istemal karke pata laga sakte hain, jaise ki neeche dikhaya gaya hai:

```js
typeof 3
typeof '3'
```

`typeof 3` string `number` return karega, aur `typeof '3'` string `string` return karega.

# --instructions--

The `compareEquality` function in the editor compares two values using the equality operator. Modify the function so that it returns the string `Equal` only when the values are strictly equal.

# --hints--

`compareEquality(10, "10")` should return the string `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` should return the string `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

You should use the `===` operator

```js
assert(__helpers.removeJSComments(code).match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
