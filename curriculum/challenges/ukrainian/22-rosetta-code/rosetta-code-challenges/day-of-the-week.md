---
id: 5966f99c45e8976909a85575
title: День тижня
challengeType: 1
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

Компанія вирішила: якщо Різдво випадає на неділю, то працівники отримають додаткові оплачувані відпустки та, відповідно, не працюватимуть наступний тиждень (від 25 грудня до 1 січня).

# --instructions--

Напишіть функцію, яка приймає початковий і кінцевий роки та повертає масив всіх років, коли 25 грудня випадає на неділю.

# --hints--

`findXmasSunday` має бути функцією.

```js
assert(typeof findXmasSunday === 'function');
```

`findXmasSunday(2000, 2100)` має повернути масив.

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` має повернути `[1977, 1983, 1988, 1994, 2005, 2011, 2016]`

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` має повернути `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]`

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
