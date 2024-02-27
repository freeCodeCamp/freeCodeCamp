---
id: 5900f43e1000cf542c50ff50
title: 'Завдання 210: тупокутні трикутники'
challengeType: 1
forumTopicId: 301852
dashedName: problem-210-obtuse-angled-triangles
---

# --description--

Розглянемо множину $S(r)$ точок ($x$,$y$) з цілими координатами, які задовільняють умову $|x| + |y| ≤ r$.

Нехай $O$ буде точкою (0,0) та $C$ буде точкою ($\frac{r}{4}$,$\frac{r}{4}$).

Нехай $N(r)$ буде кількістю точок $B$ в $S(r)$, за яких трикутник $OBC$ має тупий кут, тобто найбільший кут $α$ задовільняє умову $90°&lt;α&lt;180°$.

Таким чином, наприклад, $N(4)=24$ та $N(8)=100$.

Чому дорівнює $N(1\\,000\\,000\\,000)$?

# --hints--

`obtuseAngledTriangles()` має повернути `1598174770174689500`.

```js
assert.strictEqual(obtuseAngledTriangles(), 1598174770174689500);
```

# --seed--

## --seed-contents--

```js
function obtuseAngledTriangles() {

  return true;
}

obtuseAngledTriangles();
```

# --solutions--

```js
// solution required
```
