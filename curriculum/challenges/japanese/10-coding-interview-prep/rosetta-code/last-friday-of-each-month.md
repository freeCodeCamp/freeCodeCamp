---
id: 5a23c84252665b21eecc7edc
title: 毎月の最終金曜日
challengeType: 1
forumTopicId: 302299
dashedName: last-friday-of-each-month
---

# --description--

指定した年の指定した月の最終金曜日の日付を返す関数を記述してください。

# --hints--

`lastFriday` は関数とします。

```js
assert(typeof lastFriday == 'function');
```

`lastFriday(2018, 1)` は数値を返す必要があります。

```js
assert(typeof lastFriday(2018, 1) == 'number');
```

`lastFriday(2018, 1)` は `26` を返す必要があります。

```js
assert.equal(lastFriday(2018, 1), 26);
```

`lastFriday(2017, 2)` は `24` を返す必要があります。

```js
assert.equal(lastFriday(2017, 2), 24);
```

`lastFriday(2012, 3)` は `30` を返す必要があります。

```js
assert.equal(lastFriday(2012, 3), 30);
```

`lastFriday(1900, 4)` は `27` を返す必要があります。

```js
assert.equal(lastFriday(1900, 4), 27);
```

`lastFriday(2000, 5)` は `26` を返す必要があります。

```js
assert.equal(lastFriday(2000, 5), 26);
```

`lastFriday(2006, 6)` は `30` を返す必要があります。

```js
assert.equal(lastFriday(2006, 6), 30);
```

`lastFriday(2010, 7)` は `30` を返す必要があります。

```js
assert.equal(lastFriday(2010, 7), 30);
```

`lastFriday(2005, 8)` は `26` を返す必要があります。

```js
assert.equal(lastFriday(2005, 8), 26);
```

# --seed--

## --seed-contents--

```js
function lastFriday(year, month) {

}
```

# --solutions--

```js
function lastFriday(year, month) {
  var i, last_day;
  i = 0;
  while (true) {
    last_day = new Date(year, month, i);
    if (last_day.getDay() === 5) {
      return last_day.getDate();
    }
    i -= 1;
  }
}
```
