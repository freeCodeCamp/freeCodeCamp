---
id: 56533eb9ac21ba0edf2244e0
title: Sostituire le catene di If Else con Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

Se si dispone di molte opzioni tra cui scegliere, un'istruzione `switch` può essere più facile da scrivere rispetto a molte istruzioni `if`/`else if` concatenate. Il seguente:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

può essere sostituito con:

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

Cambiare le istruzioni `if`/`else if` concatenate con un'istruzione `switch`.

# --hints--

Non dovresti usare nessuna istruzione `else` nell'editor

```js
assert(!/else/g.test(code));
```

Non dovresti usare nessuna istruzione `if` nell'editor

```js
assert(!/if/g.test(code));
```

Dovresti avere almeno quattro istruzioni `break`

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` dovrebbe restituire la stringa `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` dovrebbe restituire la stringa `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` dovrebbe restituire la stringa `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` dovrebbe restituire la stringa `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` dovrebbe restituire la stringa `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` dovrebbe restituire `""` (stringa vuota)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` dovrebbe restituire `""` (stringa vuota)

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
