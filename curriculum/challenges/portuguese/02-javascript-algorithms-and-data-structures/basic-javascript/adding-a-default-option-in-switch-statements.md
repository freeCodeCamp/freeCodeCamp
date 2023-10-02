---
id: 56533eb9ac21ba0edf2244de
title: Adicionar uma opção padrão em instruções switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

Na instrução `switch`, você não deve ser capaz de especificar todos os possíveis valores como instruções `case`. Ao invés disso, você pode adicionar a instrução `default`, que será executada se nenhuma instrução `case` correspondente for encontrada. Pense nisso como a instrução final `else` em uma cadeia de `if/else`.

A instrução `default` deve ser o último caso.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

Escreva a instrução switch para definir `answer` para as seguintes condições:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` deve retornar a string `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` deve retornar a string `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` deve retornar a string `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` deve retornar a string `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` deve retornar a string `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

Você não deve usar nenhuma instrução do tipo `if` ou `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Você deve usar a instrução `default`

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Você deve ter pelo menos 3 instruções `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  let answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
