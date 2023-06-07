---
id: 59669d08d75b60482359409f
title: 日付形式
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

次の仕様で、現在の日付の日付文字列を2つ持つ配列を返します。

- 最初の文字列の日付は、年、月、日の順にダッシュで区切られます(`-`)。
- 最初の文字列の年は、4桁です。
- 最初の文字列の月と日は、先頭にゼロを含めません。
- 2番目の文字列の曜日と月は、省略表記にしません。
- 2番目の文字列の日付は、先頭にゼロを含めません。

出力例:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` という関数です。

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` はオブジェクトを返します。

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` は2つの要素を持つ配列を返します。

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` は正しい形式で正確な日付を返します。

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
