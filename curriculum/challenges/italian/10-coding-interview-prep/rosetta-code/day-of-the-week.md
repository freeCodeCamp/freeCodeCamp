---
id: 5966f99c45e8976909a85575
title: Giorno della settimana
challengeType: 1
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

Una azienda decide che ogni volta che Natale capita di domenica daranno ai loro dipendenti abbastanza ferie pagate che assieme ai giorni di vacanza, i dipendenti non dovranno lavorare la settimana seguente (tra il 25 dicembre e il primo gennaio).

# --instructions--

Scrivi una funzione che accetta un anno di inizio e un anno di fine e restituisce un array di tutti gli anni in cui il 25 dicembre cade di domenica.

# --hints--

`findXmasSunday` dovrebbe essere una funzione.

```js
assert(typeof findXmasSunday === 'function');
```

`findXmasSunday(2000, 2100)` dovrebbe restituire un array.

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` dovrebbe restituire `[1977, 1983, 1988, 1994, 2005, 2011, 2016]`

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` dovrebbe restituire `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]`

```js
assert.deepEqual(findXmasSunday(2008, 2121), secondSolution);
```

# --seed--

## --after-user-code--

```js
const firstSolution = [1977, 1983, 1988, 1994, 2005, 2011, 2016];
const secondSolution = [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118];
```

## --seed-contents--

```js
function findXmasSunday(start, end) {

  return true;
}
```

# --solutions--

```js
function findXmasSunday(start, end) {
  const xmasSunday = [];
  for (let year = start; year <= end; year++) {
    const xmas = new Date(year, 11, 25);
    if (xmas.getDay() === 0) {
      xmasSunday.push(year);
    }
  }
  return xmasSunday;
}
```
