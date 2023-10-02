---
id: 59669d08d75b60482359409f
title: 日期格式
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

返回一個包含兩個當前日期字符串的數組，要求如下：

- 第一個字符串的日期順序爲年、月、日，中間用破折號 (`-`) 隔開。
- 第一個字符串的年份長度爲四位數。
- 第一個字符串的月份和日期不能包含任何前導零。
- 第二個字符串的星期名稱和月份名稱不能縮寫。
- 第二個字符串的日期不能包含任何前導零。

示例輸出：

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` 應該是一個函數。

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` 應該返回一個對象。

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` 應該返回一個包含兩個元素的數組。

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` 應該返回格式無誤的正確日期。

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
