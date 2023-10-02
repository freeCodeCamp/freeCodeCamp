---
id: 5900f37f1000cf542c50fe92
title: 'Problema 19: Contando domingos'
challengeType: 1
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

Se te proporciona la siguiente información, aunque quizá prefieras investigar por tu cuenta.

<ul>
  <li>El 1 de enero de 1900 fue lunes.</li>
  <li>Treinta días tienen septiembre,<br>abril, junio y noviembre.<br>El resto tienen treinta y uno,<br>salvo febrero,<br>que tiene veintiocho, luzca el sol o diluvie.<br>Y en años bisiestos, veintinueve.</li>
  <li>Un año es bisiesto si es divisible por 4, pero si es año secular (acabado en 00), también ha de ser divisible por 400.</li>
</ul>

¿Cuántos domingos fueron primer día del mes en el siglo XX (del 1 de enero de 1901 al 31 de diciembre de 2000)?

# --hints--

`countingSundays(1943, 1946)` debe devolver un número.

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` debe devolver 6.

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` debe devolver 10.

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` debe devolver 171.

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
