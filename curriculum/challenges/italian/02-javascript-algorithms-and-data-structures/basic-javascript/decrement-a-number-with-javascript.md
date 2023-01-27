---
id: 56533eb9ac21ba0edf2244ad
title: Decrementare un numero con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

Puoi facilmente <dfn>decrementare</dfn> o diminuire una variabile con l'operatore `--`.

```js
i--;
```

è equivalente a

```js
i = i - 1;
```

**Nota:** L'intera linea diventa `i--;`, eliminando la necessità di un segno uguale.

# --instructions--

Cambia il codice per utilizzare l'operatore `--` su `myVar`.

# --hints--

`myVar` dovrebbe essere uguale a `10`.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` dovrebbe essere modificato.

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

Non dovresti assegnare `10` a `myVar`.

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

Dovresti usare l'operatore `--` su `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

Non dovresti modificare il codice sopra il commento specificato.

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
