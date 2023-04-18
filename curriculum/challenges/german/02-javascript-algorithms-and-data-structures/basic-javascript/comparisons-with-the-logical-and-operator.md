---
id: 56533eb9ac21ba0edf2244d8
title: Vergleiche mit dem logischen Und-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

Manchmal musst du mehr als eine Sache auf einmal testen. Der <dfn>logische Und</dfn>-Operator (`&&`) gibt `true` zurück, wenn und nur wenn die <dfn>Operanden</dfn> links und rechts von ihm wahr sind.

The same effect could be achieved by nesting an `if` statement inside another `if`.

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

This code will return `Yes` if `num` is greater than `5` and less than `10`. The same logic can be written with the <dfn>logical and</dfn> operator.

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

Ersetze die beiden if-Anweisungen durch eine Anweisung mit dem `&&`-Operator, die den String `Yes` zurückgibt, wenn `val` kleiner als oder gleich `50` und größer als oder gleich `25` ist. Andernfalls wird der String `No` zurückgegeben.

# --hints--

Du solltest den `&&`-Operator einmal verwenden

```js
assert(code.match(/&&/g).length === 1);
```

Du solltest nur eine `if`-Anweisung verwenden

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` sollte den String `No` zurückgeben

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` sollte den String `No` zurückgeben

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` sollte den String `Yes` zurückgeben

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` sollte den String `Yes` zurückgeben

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` sollte den String `Yes` zurückgeben

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` sollte den String `No` zurückgeben

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` sollte den String `No` zurückgeben

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` sollte den String `No` zurückgeben

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
