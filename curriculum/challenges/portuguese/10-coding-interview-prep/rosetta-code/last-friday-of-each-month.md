---
id: 5a23c84252665b21eecc7edc
title: Última sexta-feira de cada mês
challengeType: 1
forumTopicId: 302299
dashedName: last-friday-of-each-month
---

# --description--

Escreva uma função que retorne a data da última sexta-feira de um mês fornecido para um determinado ano.

# --hints--

`lastFriday` deve ser uma função.

```js
assert(typeof lastFriday == 'function');
```

`lastFriday(2018, 1)` deve retornar um número.

```js
assert(typeof lastFriday(2018, 1) == 'number');
```

`lastFriday(2018, 1)` deve retornar `26`.

```js
assert.equal(lastFriday(2018, 1), 26);
```

`lastFriday(2017, 2)` deve retornar `24`.

```js
assert.equal(lastFriday(2017, 2), 24);
```

`lastFriday(2012, 3)` deve retornar `30`.

```js
assert.equal(lastFriday(2012, 3), 30);
```

`lastFriday(1900, 4)` deve retornar `27`.

```js
assert.equal(lastFriday(1900, 4), 27);
```

`lastFriday(2000, 5)` deve retornar `26`.

```js
assert.equal(lastFriday(2000, 5), 26);
```

`lastFriday(2006, 6)` deve retornar `30`.

```js
assert.equal(lastFriday(2006, 6), 30);
```

`lastFriday(2010, 7)` deve retornar `30`.

```js
assert.equal(lastFriday(2010, 7), 30);
```

`lastFriday(2005, 8)` deve retornar `26`.

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
