---
id: 56533eb9ac21ba0edf2244de
title: Hinzufügen einer Standardoption in switch-Anweisungen
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

In einer `switch`-Anweisung kannst du möglicherweise nicht alle möglichen Werte als `case`-Anweisungen angeben. Stattdessen kannst du die `default`-Anweisung hinzufügen, die ausgeführt wird, wenn keine passenden `case`-Anweisungen gefunden werden. Stell dir das vor wie die letzte `else`-Anweisung in einer `if/else`-Kette.

Eine `default`-Anweisung sollte der letzte Fall sein.

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

Schreibe eine switch-Anweisung, um `answer` für die folgenden Bedingungen zu setzen:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` sollte den String `apple` zurückgeben

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` sollte den String `bird` zurückgeben

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")`sollte den String `cat` zurückgeben

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` sollte den String `stuff` zurückgeben

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` sollte den String `stuff` zurückgeben

```js
assert(switchOfStuff(4) === 'stuff');
```

Du solltest keine `if` oder `else`-Anweisungen verwenden

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Du solltest eine `default`-Anweisung verwenden

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Du solltest mindestens 3 `break`-Anweisungen verwenden

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
