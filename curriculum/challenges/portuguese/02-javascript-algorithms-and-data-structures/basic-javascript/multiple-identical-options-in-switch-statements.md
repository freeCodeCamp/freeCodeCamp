---
id: 56533eb9ac21ba0edf2244df
title: Lidar com várias opções idênticas em instruções switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

Se a instrução `break` for omitida de uma instrução `case` de um `switch`, as instruções `case` seguintes serão executadas até que seja encontrado um `break`. Se você tem várias entradas com a mesma saída, você pode representá-las em uma instrução `switch` da seguinte forma:

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

Todos os casos para 1, 2 e 3 vão produzir o mesmo resultado.

# --instructions--

Escreva uma instrução para definir `answer` para os seguintes intervalos:  
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**Observação:** você precisará ter uma instrução `case` para cada número no intervalo.

# --hints--

`sequentialSizes(1)` deve retornar a string `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` deve retornar a string `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` deve retornar a string `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` deve retornar a string `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` deve retornar a string `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` deve retornar a string `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` deve retornar a string `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` deve retornar a string `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` deve retornar a string `High`

```js
assert(sequentialSizes(9) === 'High');
```

Você não deve usar nenhuma instrução do tipo `if` ou `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Você deve ter nove instruções `case`

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
