---
id: 6612d9eed3d8de037f4e95c9
title: Basic Operations on Variables
challengeType: 1
dashedName: basic-operations
---

# --description--

Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.

**Note:** Note: Print the output in the order as mentioned in the question.


# --hints--

After Adding `12,5` should return `17`


```js
assert(addition(12,5)===17)

```

After subtraction `12,5` should return `7`


```js
assert(subtraction(12,5)===7)
```

After multiplication `12,5` should return `60`


```js
assert(multiplication(12,5)===60)

```

After division `12,5` should return `2.4`


```js
assert(division(12,5)===2.4)

```

After integerDivision `12,5` should return `2`


```js
assert(integerDivision(12,5)===2)

```

After modulus `12,5` should return `2`


```js
assert(modulus(12,5)===2)

```

# --seed--
## --seed-contents--

```js
function addition(a, b) {
   //  Only change code below this line
}

function subtraction(a, b) {
    //  Only change code below this line
}

function multiplication(a, b) {
    //  Only change code below this line
}

function division(a, b) {
   //  Only change code below this line
}

function integerDivision(a, b) {
    //  Only change code below this line
    
}

function modulus(a, b) {
    //  Only change code below this line
}

```

# --solutions--

```js
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}

function integerDivision(a, b) {
    if (b !== 0) {
        return Math.floor(a / b);
    } else {
        return "Error: Division by zero";
    }
}

function modulus(a, b) {
    if (b !== 0) {
        return a % b;
    } else {
        return "Error: Division by zero";
    }
}
addition(12,5)
subtraction(12,5)
multiplication(12,5)
division(12,5)
integerDivision(12,5)
modulus(12,5)
```
