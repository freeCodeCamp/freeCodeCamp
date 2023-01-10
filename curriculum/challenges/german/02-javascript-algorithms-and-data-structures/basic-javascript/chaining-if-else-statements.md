---
id: 56533eb9ac21ba0edf2244dc
title: Verkettung von If-Else-Anweisungen
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

`if/else`-Anweisungen können für komplexe Logik miteinander verkettet werden. Hier ist <dfn>Pseudocode</dfn> von mehreren verketteten `if` / `else if`-Anweisungen:

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

# --instructions--

Schreibe verkettete `if`/`else if`-Anweisungen, um die folgenden Bedingungen zu erfüllen:

`num < 5` - gibt `Tiny` zurück   
`num < 10` - gibt `Small` zurück  
zurück `num < 15` - gibt `Medium` zurück  
`num < 20` - gibt `Large` zurück  
`num >= 20` - gibt `Huge` zurück

# --hints--

Du solltest mindestens vier `else`-Anweisungen verwenden

```js
assert(code.match(/else/g).length > 3);
```

Du solltest mindestens vier `if`-Anweisungen verwenden

```js
assert(code.match(/if/g).length > 3);
```

Du solltest mindestens eine `return`-Anweisung verwenden

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` sollte den String `Tiny` zurückgeben

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` sollte den String `Tiny` zurückgeben

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` sollte den String `Small` zurückgeben

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` sollte den String `Small` zurückgeben

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` sollte den String `Medium` zurückgeben

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` sollte den String `Medium` zurückgeben

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` sollte den String `Large` zurückgeben

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` sollte den String `Large` zurückgeben

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` sollte den String `Huge` zurückgeben

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` sollte den String `Huge` zurückgeben

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
