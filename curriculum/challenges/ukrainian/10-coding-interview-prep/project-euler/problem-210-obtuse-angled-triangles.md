---
id: 5900f43e1000cf542c50ff50
title: 'Завдання 210: Тупокутні трикутники'
challengeType: 1
forumTopicId: 301852
dashedName: problem-210-obtuse-angled-triangles
---

# --description--

Розглянемо набір $S(r)$ точок ($x$,$y$) з цілочисельними координатами, які задовольняють нерівність $|x| + |y| ≤ r$.

Нехай $O$ — це точка (0,0) і $C$ — точка ($\frac{r}{4}$,$\frac{r}{4}$).

Нехай $N(r)$ — це кількість точок $B$ у $S(r)$, так що трикутник $OBC$ має тупий кут, тобто найбільший кут $α$ задовольняє нерівність $90°&lt;α&lt;180°$.

Таким чином, наприклад, $N(4)=24$ і $N(8)=100$.

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
