---
id: 5900f37f1000cf542c50fe92
title: 'Problema 19: Contando domingos'
challengeType: 1
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

Você recebeu as seguintes informações, mas se preferir, pode pesquisar por si mesmo.

<ul>
  <li>1 de janeiro de 1900 foi uma segunda-feira.</li>
  <li>Setembro, abril, junho e<br>novembro têm trinta dias.<br>Os outros meses têm trinta e um,<br>exceto fevereiro,<br> que tem vinte e oito, faça chuva ou faça sol.<br>E nos anos bissextos, vinte e nove apenas.</li>
  <li>Um ano bissexto é aquele que, dividido por 4, não deixa resto. Se o ano for secular, apenas aqueles divisíveis por 400 são bissextos.</li>
</ul>

Quantos domingos caíram no primeiro dia do mês durante o século 20 (1 de janeiro de 1901 a 31 de dezembro de 2000)?

# --hints--

`countingSundays(1943, 1946)` deve retornar um número.

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` deve retornar 6.

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` deve retornar 10.

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` deve retornar 171.

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
