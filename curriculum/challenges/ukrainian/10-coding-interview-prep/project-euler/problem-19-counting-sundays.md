---
id: 5900f37f1000cf542c50fe92
title: 'Завдання 19: Підраховуємо неділі'
challengeType: 1
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

Нижче наведена наступна інформація, але Ви можете зробити певні дослідження самостійно.

<ul>
  <li>1 січня 1900 року був понеділком.</li>
  <li>По 30 днів налічують вересень,<br>квітень, червень та листопад.<br>Усі інші - по 31 дню,<br>не враховуючи лютий,<br>який зазвичай має 28 днів.<br>А у високосні роки - 29 днів.</li>
  <li>Високосний рік випадає на рік, який рівно ділиться на 4, але це не стосується сторіччя, хіба що воно кратне 400.</li>
</ul>

Скільки неділь випало на перше число місяця протягом двадцятого сторіччя (від 1 січня 1901 по 31 грудня 2000)?

# --hints--

`countingSundays(1943, 1946)` має повернути число.

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` має повернути число 6.

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` має повернути число 10.

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` має повернути число 171.

```js
assert.strictEqual(countingSundays(1901, 2000), 171);
```

# --seed--

## --seed-contents--

```js
function countingSundays(firstYear, lastYear) {

  return true;
}

countingSundays(1943, 1946);
```

# --solutions--

```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```
