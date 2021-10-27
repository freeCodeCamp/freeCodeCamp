---
id: 56533eb9ac21ba0edf2244de
title: Aggiungere un'opzione predefinita nelle dichiarazioni Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

In un'istruzione `switch` potresti non essere in grado di specificare tutti i possibili valori con le dichiarazioni `case`. Puoi invece aggiungere una dichiarazione `default` che verrà eseguita se non vengono trovati `case` corrispondenti. Pensala come l'istruzione `else` finale in una catena `if/else`.

Un'istruzione `default` dovrebbe essere l'ultimo caso.

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

Scrivi un'istruzione switch per impostare `answer` per le seguenti condizioni:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` dovrebbe restituire la stringa `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` dovrebbe restituire la stringa `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` dovrebbe restituire la stringa `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` dovrebbe restituire la stringa `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` dovrebbe restituire la stringa `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

Non dovresti usare alcuna dichiarazione `if` o `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Dovresti usare un'istruzione `default`

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Dovresti avere almeno altre 3 `break` istruzioni

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
