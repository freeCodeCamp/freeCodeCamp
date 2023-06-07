---
id: 59669d08d75b60482359409f
title: Formato della data
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

Restituisci un array con due stringhe data della data corrente con le seguenti specificazioni:

- L'ordine della prima stringa dovrebbe essere numero dell'anno, numero del mese, e numero del giorno separati da trattini (`-`).
- L'anno della prima stringa dovrebbe avere una lunghezza di quattro cifre.
- Il mese e il giorno della prima stringa non dovrebbero avere degli zeri all'inizio.
- Il giorno della settimana e del mese nella seconda stringa dovrebbero essere in inglese e non dovrebbero essere abbreviat.
- Il giorno della seconda stringa non dovrebbe avere alcuno zero all'inizio.

Esempi di output:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` dovrebbe essere una funzione.

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` dovrebbe restituire un oggetto.

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` dovrebbe restituire un array con 2 elementi.

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` dovrebbe restituire la data corretta nel formato giusto

```js
assert.deepEqual(getDateFormats(), dates, equalsMessage);
```

# --seed--

## --after-user-code--

```js
const getDateSolution = () => {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
};

const dates = getDateSolution();
const equalsMessage = `message: <code>getDataFormats()</code> should return <code>["${dates[0]}", "${dates[1]}"]</code>.`;
```

## --seed-contents--

```js
function getDateFormats() {

  return true;
}
```

# --solutions--

```js
function getDateFormats() {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
}
```
