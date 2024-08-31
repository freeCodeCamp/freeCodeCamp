---
id: 6612ed0b000dcb07f12da1da
title: Use Conditional Logic with if Statements
challengeType: 1
dashedName: use-conditional-logic-with-if
---

# --description--

`if` statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**

<blockquote>if (<i>condition is true</i>) {<br>  <i>statement is executed</i><br>}</blockquote>

**Example**

```js
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` returns the string `It was true`, and `test(false)` returns the string `It was false`.

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is `true`, the function returns `It was true`. When we call `test` with a value of `false`, `myCondition` is *not* `true` and the statement in the curly braces is not executed and the function returns `It was false`.

# --instructions--

Create an `if` statement inside the function to return `Yes, that was true` if the parameter `wasThatTrue` is `true` and return `No, that was false` otherwise.

<h2>Hinglish</h2>

`if` statements ka istemal code mein faislay karne ke liye kiya jata hai. Keyword `if` JavaScript ko yeh batata hai ki certain conditions ke neeche curly braces mein code ko execute karna hai, jo parentheses mein define ki gayi hain. Ye conditions `Boolean` conditions ke roop mein jaani jaati hain aur sirf `true` ya `false` ho sakti hain.

Jab condition `true` ho jaati hai, tab program curly braces ke andar wale statement ko execute karta hai. Jab Boolean condition `false` ho jaati hai, tab curly braces ke andar wala statement execute nahi hota.

**Pseudocode**

<blockquote>if (<i>condition true ho</i>) {<br>  <i>statement execute ho</i><br>}</blockquote>

**Example**

```js
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` string `It was true` ko return karta hai, aur `test(false)` string `It was false` ko return karta hai.

Jab `test` ko `true` ke value ke saath call kiya jata hai, tab `if` statement `myCondition` ko evaluate karta hai ki yeh `true` hai ya nahi. Kyunki yeh `true` hai, function `It was true` ko return karta hai. Jab hum `test` ko `false` ke value ke saath call karte hain, tab `myCondition` *true* nahi hota aur curly braces mein wala statement execute nahi hota aur function `It was false` ko return karta hai.

Funktion ke andar ek `if` statement create karo jo parameter `wasThatTrue` ko `true` hone par `Yes, that was true` return kare aur agar `false` ho to `No, that was false` return kare.

# --hints--

`trueOrFalse` should be a function

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` should return a string

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` should return a string

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` should return the string `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` should return the string `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
