---
id: 59669d08d75b60482359409f
title: Формат дати
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

Поверніть масив з двома рядками поточної дати відповідно до опису нижче:

- Дата в першому рядку повинна мати такий порядок: рік, місяць, день (розділені рискою `-`).
- Рік в першому рядку має складатись з чотирьох цифр.
- Місяць та день в першому рядку не можуть починатися з нуля.
- Не скорочуйте назви дня та місяця в другому рядку.
- День в другому рядку не може починатися з нуля.

Приклад виводу:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` має бути функцією.

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` має повернути об’єкт.

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` має повернути масив з 2 елементами.

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` має повернути правильну дату в правильному форматі.

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
