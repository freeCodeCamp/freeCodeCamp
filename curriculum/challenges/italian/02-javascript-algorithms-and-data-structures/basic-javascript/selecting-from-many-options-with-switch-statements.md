---
id: 56533eb9ac21ba0edf2244dd
title: Selezionare tra molte opzioni con le istruzioni Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

Se hai bisogno di abbinare un valore a molte opzioni, puoi usare un'istruzione <dfn>switch</dfn>. Un'istruzione `switch` confronta un valore con le istruzioni <dfn>case</dfn> che definiscono diversi valori possibili. Qualsiasi istruzione JavaScript valida può essere eseguita all'interno di un blocco <dfn>case</dfn> e verrà eseguita dal primo valore di `case` per cui c'è riscontro fino a quando non viene incontrato un `break`.

Ecco un esempio di un'istruzione `switch`:

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

I valori `case` vengono testati con uguaglianza stretta (`===`). Il `break` dice a JavaScript di interrompere l'esecuzione delle istruzioni. Se il `break` viene omesso, sarà eseguita la successiva istruzione.

# --instructions--

Scrivi una dichiarazione switch che testa `val` e imposta il valore di `answer` per le seguenti condizioni:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` dovrebbe avere il valore stringa `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` dovrebbe avere il valore stringa `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` dovrebbe avere il valore stringa `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` dovrebbe avere il valore stringa `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

Non dovresti usare alcuna dichiarazione `if` o `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Dovresti avere almeno 3 istruzioni `break`

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
