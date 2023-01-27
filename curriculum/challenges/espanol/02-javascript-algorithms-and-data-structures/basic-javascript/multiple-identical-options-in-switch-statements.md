---
id: 56533eb9ac21ba0edf2244df
title: Múltiples opciones idénticas en las declaraciones "switch"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

Si la sentencia `break` es omitida en un caso (`case`) de una sentencia `switch`, las siguientes sentencias `case` serán ejecutadas hasta encontrar un `break`. Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia `switch` como esta:

```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Los casos 1, 2 y 3 producirán el mismo resultado.

# --instructions--

Escribe una declaración switch para establecer `answer` con los siguientes rangos:  
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**Nota:** Necesitarás tener un `case` para cada número dentro del rango.

# --hints--

`sequentialSizes(1)` debe devolver la cadena `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` debe devolver la cadena `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` debe devolver la cadena `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` debe devolver la cadena `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` debe devolver la cadena `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` debe devolver la cadena `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` debe devolver la cadena `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` debe devolver la cadena `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` debe devolver la cadena `High`

```js
assert(sequentialSizes(9) === 'High');
```

No debes utilizar las sentencias `if` o `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Debes tener nueve sentencias `case`

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
