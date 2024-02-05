---
id: 5966c21cf732a95f1b67dd28
title: 日期操縱
challengeType: 1
forumTopicId: 302244
dashedName: date-manipulation
---

# --description--

Given a date string in EST, output the given date as a string with 12 hours added to the time. Time zone should be preserved.

給定EST中的日期字符串，將給定日期輸出爲字符串，並添加12小時。

時區應該保留。

# --hints--

示例輸入：

```js
assert(typeof add12Hours === 'function');
```

`add12Hours(dateString)`應該返回一個字符串。

```js
assert(typeof add12Hours('January 17 2017 11:43am EST') === 'string');
```

輸出示例：

```js
assert(
  add12Hours('January 17 2017 11:43am EST') === 'January 17 2017 11:43pm EST'
);
```

漢德爾應該改變一天。 `add12Hours("" + tests[1] + "")`應返回`"" + answers[1] + ""`

```js
assert(add12Hours('March 6 2009 7:30pm EST') === 'March 7 2009 7:30am EST');
```

漢德爾月份應該在閏年中發生變化。 `add12Hours("" + tests[2] + "")`應返回`"" + answers[2] + ""`

```js
assert(add12Hours('February 29 2004 9:15pm EST') === 'March 1 2004 9:15am EST');
```

應該在一個共同的年份改變漢德爾月份。 `add12Hours("" + tests[3] + "")`應該返回`"" + answers[3] + ""`

```js
assert(add12Hours('February 28 1999 3:15pm EST') === 'March 1 1999 3:15am EST');
```

漢德爾應該改變一年。 `add12Hours("" + tests[4] + "")`應該返回`"" + answers[4] + ""`

```js
assert(
  add12Hours('December 31 2020 1:45pm EST') === 'January 1 2021 1:45am EST'
);
```

# --seed--

## --seed-contents--

```js
function add12Hours(dateString) {

  return true;
}
```

# --solutions--

```js
function add12Hours(dateString) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  // Get the parts of the string
  const parts = dateString.split(' ');
  const month = months.indexOf(parts[0]);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  const time = parts[3].split(':');
  let hours = parseInt(time[0], 10);
  if (time[1].slice(-2) === 'pm') {
    hours += 12;
  }
  const minutes = parseInt(time[1].slice(0, -2), 10);

  // Create a date with given parts, and updated hours
  const date = new Date();
  date.setFullYear(year, month, day);
  date.setHours(hours + 12);  // Add 12 hours
  date.setMinutes(minutes);

  let hoursOutput = date.getHours();
  let abbreviation = 'am';
  if (hoursOutput > 12) {
    hoursOutput -= 12;
    abbreviation = 'pm';
  }

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hoursOutput}:${date.getMinutes()}${abbreviation} EST`;
}
```
