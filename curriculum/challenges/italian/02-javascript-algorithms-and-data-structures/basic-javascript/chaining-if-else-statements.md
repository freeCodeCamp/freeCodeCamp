---
id: 56533eb9ac21ba0edf2244dc
title: Concatenare le istruzioni If Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

Le istruzioni `if/else` possono essere concatenate insieme per dare origine a una logica complessa. Ecco lo <dfn>pseudocode</dfn> di più istruzioni `if` / `else if` concatenate:

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

Scrivi delle istruzioni `if`/`else if` concatenate per soddisfare le seguenti condizioni:

`num < 5` - restituisca `Tiny`  
`num < 10` - restituisca `Small`  
`num < 15` - restituisca `Medium`  
`num < 20` - restituisca `Large`  
`num >= 20` - restituisca `Huge`

# --hints--

Dovresti avere almeno quattro istruzioni `else`

```js
assert(code.match(/else/g).length > 3);
```

Dovresti avere almeno quattro istruzioni `if`

```js
assert(code.match(/if/g).length > 3);
```

Dovresti avere almeno un'istruzione `return`

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` dovrebbe restituire la stringa `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` dovrebbe restituire la stringa `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` dovrebbe restituire la stringa `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` dovrebbe restituire la stringa `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` dovrebbe restituire la stringa `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` dovrebbe restituire la stringa `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` dovrebbe restituire la stringa `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` dovrebbe restituire la stringa `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` dovrebbe restituire la stringa `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` dovrebbe restituire la stringa `Huge`

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
