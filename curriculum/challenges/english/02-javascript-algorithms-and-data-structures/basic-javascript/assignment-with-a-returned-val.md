---
id: 663a6a375c1eb272829dfc3c
title: Assignment with a Returned Value
challengeType: 1
dashedName: assignment-with-a-returned-val
---

# --description--


If you'll recall from our discussion about <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Storing Values with the Assignment Operator</a>, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function `sum` which adds two numbers together.

```js
ourSum = sum(5, 12);
```

Calling the `sum` function with the arguments of `5` and `12` produces a return value of `17`. This return value is assigned to the `ourSum` variable.


<h2>Hinglish</h2>

Agar aap yaad karenge toh humne <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Assignment Operator ke saath Values Store Karna</a> ke baare mein baat ki thi, toh equal sign ke daayein wale sab kuch solve ho jaata hai pehle se pehle value ko assign karne se pehle. Iska matlab hai hum ek function ka return value le sakte hain aur use ek variable mein assign kar sakte hain.

Maan lijiye humne ek function `sum` ko define kiya hai jo do numbers ko ek saath jod deta hai.

```js
ourSum = sum(5, 12);
```

`sum` function ko `5` aur `12` ke arguments ke saath call karna ek return value `17` ko produce karta hai. Yeh return value `ourSum` variable mein assign hota hai.

# --instructions--

Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.


`processArg` function ko ek argument ke saath call karein `7` aur uska return value `processed` variable mein assign karein.

# --hints--

`processed` should have a value of `2`

```js
assert(processed === 2);
```

You should assign `processArg` to `processed`

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
