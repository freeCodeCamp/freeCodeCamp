---
id: 56533eb9ac21ba0edf2244e0
title: Ersetzen von If-Else-Ketten durch switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

Wenn du viele Optionen zur Auswahl hast, kann eine `switch`-Anweisung einfacher zu schreiben sein als viele verkettete `if`/`else if`-Anweisungen. Das Folgende:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

kann ersetzt werden durch:

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

Ändere die verketteten `if`/`else if`-Anweisungen in eine `switch`-Anweisung.

# --hints--

Du solltest nirgendwo im Editor `else`-Anweisungen verwenden

```js
assert(!/else/g.test(code));
```

Du solltest nirgendwo im Editor `if`-Anweisungen verwenden

```js
assert(!/if/g.test(code));
```

Du solltest mindestens vier `break`-Anweisungen verwenden

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` sollte den String `Marley` zurückgeben

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` sollte den String `The Answer` zurückgeben

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` sollte den String `There is no #1` zurückgeben

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` sollte den String `Missed me by this much!` zurückgeben

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` sollte den String `Ate Nine` zurückgeben

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` sollte `""` (leerer String) zurückgeben

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` sollte `""` (leerer String) zurückgeben

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
