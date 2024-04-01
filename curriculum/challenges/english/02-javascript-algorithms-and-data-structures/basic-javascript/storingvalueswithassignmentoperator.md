---
id: 6606ca03a0aa92116bead97f
title: Storing values with the assignment operator
challengeType: 1
dashedName: storingvalueswithassignmentoperator

---

# --description--

In JavaScript, you can store a value in a variable with the <dfn>assignment</dfn> operator (`=`).

```js
myVariable = 5;
```

This assigns the `Number` value `5` to `myVariable`.

If there are any calculations to the right of the `=` operator, those are performed before the value is assigned to the variable on the left of the operator.

```js
var myVar;
myVar = 5;
```

First, this code creates a variable named `myVar`. Then, the code assigns `5` to `myVar`. Now, if `myVar` appears again in the code, the program will treat it as if it is `5`.

JavaScript mein, aap ek variable mein ek value `assignment` operator (`=`) ka istemal karke store kar sakte hain.

```js
myVariable = 5;
```

Isse `myVariable` mein `Number` value `5` assign hoti hai.

Agar `=` operator ke daayein taraf koi calculations hain, to wo calculations pehle execute hote hain phir value ko operator ke baayein taraf wale variable mein assign kiya jata hai.

```js
var myVar;
myVar = 5;
```

Pehle, yeh code `myVar` naam ka ek variable banata hai. Fir, yeh code `myVar` ko `5` assign karta hai. Ab, agar code mein phir se `myVar` aata hai, to program use `5` ke roop mein treat karega.

# --instructions--

Assign the value `7` to variable `a`.

# --hints--

You should not change code above the specified comment.

```js
assert(/var a;/.test(code));
```

`a` should have a value of 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
