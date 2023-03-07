---
id: 56533eb9ac21ba0edf2244dd
title: Auswahl aus vielen Optionen mit switch-Anweisungen
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

Wenn du viele Optionen zur Auswahl hast, verwende eine <dfn>switch</dfn>-Anweisung. Eine `switch`-Anweisung testet einen Wert und kann viele <dfn>case</dfn>-Anweisungen haben, die verschiedene mögliche Werte definieren. Die Anweisungen werden ab dem ersten übereinstimmenden `case`-Wert ausgeführt, bis ein `break` auftritt.

Hier ist ein Beispiel für eine `switch`-Anweisung:

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

`case`-Werte werden mit strikter Gleichheit (`===`) getestet. Das `break` sagt JavaScript, dass es die Ausführung von Anweisungen stoppen soll. Wenn der `break` weggelassen wird, wird die nächste Anweisung ausgeführt.

# --instructions--

Schreibe eine switch-Anweisung, die `val` testet und `answer` für die folgenden Bedingungen setzt:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` sollte den String `alpha` als Wert haben

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` sollte den String `beta` als Wert haben

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` sollte den String `gamma` als Wert haben

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` sollte den String `delta` als Wert haben

```js
assert(caseInSwitch(4) === 'delta');
```

Du solltest keine `if` oder `else`-Anweisungen verwenden

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Du solltest mindestens 3 `break`-Anweisungen verwenden

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
