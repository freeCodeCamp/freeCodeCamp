---
id: 663384135a79fcf03708cafb
title: Logical Order in if-else Statements
challengeType: 1
dashedName: logical-order
---

# --description--

Order is important in `if`, `else if` statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.


Here's the first:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

And the second just switches the order of the statements:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

While these two functions look nearly identical if we pass a number to both we get different outputs.


```js
foo(0)
bar(0)
```

`foo(0)` will return the string `Less than one`, and `bar(0)` will return the string `Less than two`.

<h2>Hinglish</h2>

`if`, `else if` statements mein order important hai.

Function ko upar se neeche tak execute kiya jaata hai isliye aapko dhyaan rakhna chahiye ki kaunsa statement pehle aata hai.

In do functions ko udaharan ke roop mein le lo.

Pehla. 

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

Dusra

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```


Jabki ye do functions lagbhag ek jaise dikhte hain, agar hum dono mein se kisi ek ko ek number pass karte hain to hume alag-alag outputs milte hain.

```js
foo(0)
bar(0)
```

`foo(0)` string `Less than one` ko return karega, aur `bar(0)` string `Less than two` ko return karega.

# --instructions--

Change the order of logic in the function so that it will return the correct statements in all cases.

Function mein logic ka kram badal kar aisa karo ki sabhi cases mein sahi statements return ho.

# --hints--

`orderMyLogic(4)` should return the string `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` should return the string `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` should return the string `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
