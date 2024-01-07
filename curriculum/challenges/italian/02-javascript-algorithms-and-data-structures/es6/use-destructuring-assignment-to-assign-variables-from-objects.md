---
id: 587d7b89367417b2b2512b49
title: Usare l'assegnazione destrutturante per assegnare variabili dagli oggetti
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

La destrutturazione ti consente di assegnare un nuovo nome di variabile mentre si estraggono i valori. Puoi farlo inserendo il nuovo nome dopo i due punti quando assegni il valore.

Usando lo stesso oggetto dell'ultimo esempio:

```js
const user = { name: 'John Doe', age: 34 };
```

Ecco come è possibile creare nuovi nomi di variabili con l'assegnazione:

```js
const { name: userName, age: userAge } = user;
```

Lo puoi leggere come "prendi il valore di `user.name` e assegnalo ad una nuova variabile chiamata `userName`" e così via. Il valore di `userName` sarà la stringa `John Doe`, e il valore di `userAge` sarà il numero `34`.

# --instructions--

Sostituisci le due assegnazioni con un'assegnazione destrutturante equivalente. Dovrebbe ancora assegnare alle variabili `highToday` e `highTomorrow` i valori di `today` e `tomorrow` dell'oggetto `HIGH_TEMPERATURES`.

# --hints--

Dovresti rimuovere la sintassi di assegnazione ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Dovresti usare la destrutturazione per creare la variabile `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Dovresti usare la destrutturazione per creare la variabile `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` dovrebbe essere uguale a `77` e `highTomorrow` dovrebbe essere uguale a `80`.

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
