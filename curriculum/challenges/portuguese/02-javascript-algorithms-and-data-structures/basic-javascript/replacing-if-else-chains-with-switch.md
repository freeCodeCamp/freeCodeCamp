---
id: 56533eb9ac21ba0edf2244e0
title: Substituir cadeias de if else por switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

Se você tiver muitas opções para escolher, uma instrução `switch` pode ser mais fácil de escrever do que muitas instruções `if`/`else if` encadeadas. O seguinte:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

pode ser substituído por:

```js
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

Altere a cadeia de instruções `if`/`else if` por um comando `switch`.

# --hints--

Você não deve usar nenhuma instrução `else` em nenhum lugar no editor

```js
assert(!/else/g.test(code));
```

Você não deve usar nenhuma instrução `if` em nenhum lugar no editor

```js
assert(!/if/g.test(code));
```

Você deve ter pelo menos instruções `break`

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` deve retornar a string `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` deve retornar a string `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` deve retornar a string `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` deve retornar a string `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` deve retornar a string `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` deve retornar `""` (string vazia)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` deve retornar `""` (string vazia)

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```
