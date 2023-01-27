---
id: 56533eb9ac21ba0edf2244df
title: Opzioni identiche multiple nelle dichiarazioni Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

Se l'istruzione `break` viene omessa da un'istruzione `switch` e in particolare da un suo `case`, le istruzione `case` successive sono eseguite fino a quando non si incontra un `break`. Se hai diversi input con lo stesso output, potrai rappresentarli in un'istruzione `switch` come la seguente:

```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

I casi per 1, 2 e 3 produrranno tutti lo stesso risultato.

# --instructions--

Scrivi una dichiarazione di switch per impostare `answer` per i seguenti intervalli:  
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**Note:** Dovrai avere un `case` per ogni numero nell'intervallo.

# --hints--

`sequentialSizes(1)` dovrebbe restituire la stringa `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` dovrebbe restituire la stringa `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` dovrebbe restituire la stringa `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` dovrebbe restituire la stringa `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` dovrebbe restituire la stringa `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` dovrebbe restituire la stringa `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` dovrebbe restituire la stringa `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` dovrebbe restituire la stringa `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` dovrebbe restituire la stringa `High`

```js
assert(sequentialSizes(9) === 'High');
```

Non dovresti usare alcuna dichiarazione `if` o `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Dovresti avere nove dichiarazioni `case`

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
