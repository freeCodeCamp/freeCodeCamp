---
id: 59669d08d75b60482359409f
title: 日期格式
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

返回一个包含两个当前日期字符串的数组，要求如下：

- 第一个字符串的日期顺序为年、月、日，中间用破折号 (`-`) 隔开。
- 第一个字符串的年份长度为四位数。
- 第一个字符串的月份和日期不能包含任何前导零。
- 第二个字符串的星期名称和月份名称不能缩写。
- 第二个字符串的日期不能包含任何前导零。

示例输出：

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` 应该是一个函数。

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` 应该返回一个对象。

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` 应该返回一个包含两个元素的数组。

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` 应该返回格式无误的正确日期。

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
