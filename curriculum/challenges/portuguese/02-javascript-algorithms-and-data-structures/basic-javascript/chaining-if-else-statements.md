---
id: 56533eb9ac21ba0edf2244dc
title: Encadear instruções if else
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

Instruções `if/else` podem ser encadeadas por uma lógica complexa. Aqui está o <dfn>pseudocódigo</dfn> de várias instruções encadeadas `if`/`else if`:

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

Escreva instruções encadeadas `if`/`else if` para atender às seguintes condições:

`num < 5` - retorna `Tiny`  
`num < 10` - retorna `Small`  
`num < 15` - retorna `Medium`  
`num < 20` - retorna `Large`  
`num >= 20` - retorna `Huge`

# --hints--

Você deve ter pelo menos quatro instruções `else`

```js
assert(code.match(/else/g).length > 3);
```

Você deve ter pelo menos quatro instruções `if`

```js
assert(code.match(/if/g).length > 3);
```

Você deve ter pelo menos um comando `return`

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` deve retornar a string `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` deve retornar a string `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` deve retornar a string `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` deve retornar a string `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` deve retornar a string `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` deve retornar a string `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` deve retornar a string `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` deve retornar a string `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` deve retornar a string `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` deve retornar a string `Huge`

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
