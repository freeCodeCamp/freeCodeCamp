---
id: 5966f99c45e8976909a85575
title: Dia da semana
challengeType: 1
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

Uma empresa decide que, sempre que o Natal cai num domingo, dará aos seus trabalhadores todas as férias remuneradas extra, para que, juntamente com quaisquer feriados públicos, os trabalhadores não tenham de trabalhar na semana seguinte (entre 25 de dezembro e 1 de janeiro).

# --instructions--

Escreva uma função que leve um ano de início e um ano de fim e retorne um array de todos os anos onde o dia 25 de dezembro será um domingo.

# --hints--

`findXmasSunday` deve ser uma função.

```js
assert(typeof findXmasSunday === 'function');
```

`findXmasSunday(2000, 2100)` deve retornar um array.

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` deve retornar `[1977, 1983, 1988, 1994, 2005, 2011, 2016]`

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` deve retornar `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]`

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
