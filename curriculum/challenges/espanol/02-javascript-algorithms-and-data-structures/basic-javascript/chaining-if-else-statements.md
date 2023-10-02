---
id: 56533eb9ac21ba0edf2244dc
title: Encadena sentencias if else
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

Las sentencias `if/else` pueden ser encadenadas para crear una lógica compleja. Aquí hay <dfn>pseudocódigo</dfn> de múltiples declaraciones `if` / `else if` encadenadas:

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

Escribe sentencias `if` / `else if` encadenadas para cumplir con las siguientes condiciones:

`num < 5` - devuelve `Tiny`  
`num < 10` - devuelve `Small`  
`num < 15` - devuelve `Medium`  
`num < 20` - devuelve `Large`  
`num >= 20` - devuelve `Huge`

# --hints--

Debes tener al menos cuatro sentencias `else`

```js
assert(code.match(/else/g).length > 3);
```

Debes tener al menos cuatro sentencias `if`

```js
assert(code.match(/if/g).length > 3);
```

Debes tener al menos una sentencia `return`

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` debe devolver la cadena `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` debe devolver la cadena `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)`debe devolver la cadena `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` debe devolver la cadena `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` debe devolver la cadena `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` debe devolver la cadena `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` debe devolver la cadena `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` debe devolver la cadena `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` debe devolver la cadena `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` debe devolver la cadena `Huge`

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
