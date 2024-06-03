---
id: 5966f99c45e8976909a85575
title: 曜日
challengeType: 1
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

A company decides that whenever Xmas falls on a Sunday they will give their workers all extra paid holidays so that, together with any public holidays, workers will not have to work the following week (between the 25th of December and the first of January).

# --instructions--

開始年と終了年が入力されると、12月25日が日曜日と重なる年の配列を返す関数を作成します。

# --hints--

`findXmasSunday` という関数です。

```js
assert(typeof findXmasSunday === 'function');
```

`findXmasSunday(2000, 2100)` は配列を返します。

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` は `[1977, 1983, 1988, 1994, 2005, 2011, 2016]` を返します。

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` は `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]` を返します。

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
