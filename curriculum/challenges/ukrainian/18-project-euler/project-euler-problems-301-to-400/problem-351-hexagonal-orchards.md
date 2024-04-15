---
id: 5900f4cb1000cf542c50ffde
title: 'Завдання 351: шестикутні сади'
challengeType: 1
forumTopicId: 302011
dashedName: problem-351-hexagonal-orchards
---

# --description--

Шестикутний сад порядку $n$ — це трикутна решітка, яку утворюють крапки у звичайному шестикутнику зі стороною $n$. Наступна схема є прикладом шестикутного саду порядку 5:

<img class="img-responsive center-block" alt="шестикутний сад порядку 5 з виділеними зеленим кольором точками, які приховані від центру точкою поблизу неї" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-orchards.png" style="background-color: white; padding: 10px;" />

Зеленим виділені точки, шлях яких закривають інші точки, ближчі до центру. Як бачимо, в шестикутному саду порядку 5 виділено 30 прихованих точок.

Нехай $H(n)$ буде кількістю прихованих точок в шестикутному саду порядку $n$.

$H(5) = 30$. $H(10) = 138$. $H(1\\,000)$ = $1\\,177\\,848$.

Знайдіть $H(100\\,000\\,000)$.

# --hints--

`hexagonalOrchards()` має повернути `11762187201804552`.

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
