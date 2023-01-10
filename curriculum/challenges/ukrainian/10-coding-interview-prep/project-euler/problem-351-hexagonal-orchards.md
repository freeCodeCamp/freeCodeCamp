---
id: 5900f4cb1000cf542c50ffde
title: 'Задача 351: Шестикутні сади'
challengeType: 1
forumTopicId: 302011
dashedName: problem-351-hexagonal-orchards
---

# --description--

Шестикутний сад послідовності $n$ це трикутна решітка, зроблена з крапок у звичайному шестикутнику зі стороною $n$. Наступна схема є прикладом шестикутного саду послідовності 5:

<img class="img-responsive center-block" alt="шестикутний сад послідовності 5 з виділеними зеленим кольором точками, котрі приховані від центру точками поблизу нього" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-orchards.png" style="background-color: white; padding: 10px;" />

Точки, виділені зеленим, є прихованими від центру за допомогою точок, ближчих до нього. Ми бачимо, що у шестикутному саду послідовності 5, 30 точок приховані від центру.

Припустимо, що $H(n)$ це кількість точок, схованих від центру, у шестикутному саду послідовності $n$.

$H(5) = 30$. $H(10) = 138$. $H(1\\,000)$ = $1\\,177\\,848$.

Find $H(100\\,000\\,000)$.

# --hints--

`hexagonalOrchards()` повинно вивести `11762187201804552`.

```js
assert.strictEqual(hexagonalOrchards(), 11762187201804552);
```

# --seed--

## --seed-contents--

```js
function hexagonalOrchards() {

  return true;
}

hexagonalOrchards();
```

# --solutions--

```js
// solution required
```
