---
id: 5966f99c45e8976909a85575
title: 一週中的天
challengeType: 1
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

A company decides that whenever Xmas falls on a Sunday they will give their workers all extra paid holidays so that, together with any public holidays, workers will not have to work the following week (between the 25th of December and the first of January).

# --instructions--

一家公司決定，每當聖誕節落在星期天，他們將給予他們的工人所有額外帶薪假期，這樣，在任何公共假期，工人將不必在下一週（12月25日到1月1日之間）工作。

# --hints--

任務：

```js
assert(typeof findXmasSunday === 'function');
```

編寫一個開始年份和結束年份的函數，並返回12月25日爲星期日的所有年份的數組。

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` should return `[1977, 1983, 1988, 1994, 2005, 2011, 2016]`

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` should return `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]`

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
