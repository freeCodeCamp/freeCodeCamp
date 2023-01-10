---
id: 587d7b89367417b2b2512b4a
title: Usare l'assegnazione destrutturante per assegnare variabili da oggetti annidati
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

È possibile utilizzare gli stessi principi delle due lezioni precedenti per destrutturare valori da oggetti annidati.

Usando un oggetto simile agli esempi precedenti:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Ecco come estrarre i valori delle proprietà dell'oggetto e assegnarli a variabili con lo stesso nome:

```js
const { johnDoe: { age, email }} = user;
```

Ed ecco come puoi assegnare i valori delle proprietà di un oggetto a variabili con nomi diversi:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Sostituisci le due assegnazioni con un'assegnazione destrutturante equivalente. Dovresti ancora assegnare alle variabili `lowToday` e `highToday` i valori di `today.low` e `today.high` dell'oggetto `LOCAL_FORECAST`.

# --hints--

Dovresti rimuovere la sintassi di assegnazione ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Dovresti usare la destrutturazione per creare la variabile `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Dovresti usare la destrutturazione per creare la variabile `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` dovrebbe essere uguale a `64` e `highToday` dovrebbe essere uguale a `77`.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
