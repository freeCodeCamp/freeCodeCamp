---
id: 59669d08d75b60482359409f
title: Formato de data
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

Retorna um array com duas strings de data com a data atual de acordo com as seguintes especificações:

- A ordem de data da primeira string deve ser o número do ano, o número do mês e o número do dia separados por traços (`-`).
- O ano da primeira string deve ter quatro dígitos de tamanho.
- O mês e o dia da primeira string não devem conter zeros precedentes.
- Os nomes dos dias e dos meses na segunda string não devem ser abreviados.
- O dia da segunda string não deve conter zeros precedentes.

Exemplos de saída:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` deve ser uma função.

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` deve retornar um objeto.

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` deve retornar um array com 2 elementos.

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` deve retornar a data correta no formato certo

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
