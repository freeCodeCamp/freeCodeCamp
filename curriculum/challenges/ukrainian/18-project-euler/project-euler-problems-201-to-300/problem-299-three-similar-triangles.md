---
id: 5900f4971000cf542c50ffaa
title: 'Завдання 299: три подібні трикутники'
challengeType: 1
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

Визначено чотири точки з цілими координатами:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$ та $D(0, d)$, за умови $0 &lt; a &lt; b$ та $0 &lt; c &lt; d$.

Точка $P$, також з цілими координатами, знаходиться на прямій $AC$ так, що всі три трикутники ($ABP$, $CDP$ та $BDP$) подібні.

<img class="img-responsive center-block" alt="точки A, B, C, D та P утворюють три трикутники: ABP, CDP та BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;" />

Те, що трикутними є подібними, легко довести лише за умови $a = c$.

Тому, за умови $a = c$ ми шукаємо трійки ($a$, $b$, $d$), за яких на $AC$ існує принаймні одна точка $P$ (з цілими координатами), що робить три трикутники ($ABP$, $CDP$ та $BDP$) подібними.

Наприклад, якщо $(a, b, d) = (2, 3, 4)$, то можна легко довести, що точка $P(1, 1)$ задовільняє умову вище. Зверніть увагу, що трійки (2,3,4) та (2,4,3) вважаються різними, хоча і мають спільну точку $P(1, 1)$.

Якщо $b + d &lt; 100$, то існує 92 різних трійок ($a$, $b$, $d$), за яких наявна точка $P$.

Якщо $b + d &lt; 100\\,000$, то існує 320471 різних трійок ($a$, $b$, $d$), за яких наявна точка $P$.

Скільки існує різних трійок ($a$, $b$, $d$), за яких наявна точка $P$, якщо $b + d &lt; 100\\,000\\,000$?

# --hints--

`threeSimilarTriangles()` має повернути `549936643`.

```js
assert.strictEqual(threeSimilarTriangles(), 549936643);
```

# --seed--

## --seed-contents--

```js
function threeSimilarTriangles() {

  return true;
}

threeSimilarTriangles();
```

# --solutions--

```js
// solution required
```
