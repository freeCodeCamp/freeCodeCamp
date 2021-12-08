---
id: 56533eb9ac21ba0edf2244de
title: Agrega una opción predeterminada en las declaraciones switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

En una declaración `switch` puede que no seas capaz de especificar todos los valores posibles como declaraciones de `case` (caso). En su lugar, se puede añadir la declaración `default`, la cual se ejecutará si no se encuentran declaraciones `case`. Piensa en ella como la última sentencia `else` en una cadena `if/else`.

Una declaración `default` debe ser el último caso.

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

Escribe una declaración switch para establecer `answer` con las siguientes condiciones:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` debe devolver la cadena `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` debe devolver la cadena `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` debe devolver la cadena `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` debe devolver la cadena `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` debe devolver la cadena `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

No debes usar ninguna sentencia `if` o `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Debes utilizar una declaración `default`

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Debes tener al menos 3 declaraciones de ruptura (`break`)

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
