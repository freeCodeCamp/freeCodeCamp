---
id: 5900f4971000cf542c50ffaa
title: 'Завдання 299: Три подібні трикутники'
challengeType: 1
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

Визначено чотири точки з цілими координатами:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$ і $D(0, d)$, з $0 &lt; a &lt; b$ і $0 &lt; c &lt; d$.

Точка $P$, також з цілими координатами, знаходиться на лінії $AC$ так, щоб $ABP$, $CDP$ і $BDP$ були подібні.

<img class="img-responsive center-block" alt="точки A, B, C, D і P створюють три трикутники: ABP, CDP, та BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;" />

Легко довести, що трикутники можуть бути подібними, якщо $a = c$.

Отже, знаючи, що $a = c$, ми шукаємо триплети ($a$, $b$, $d$) де принаймні одна точка $P$ (з цілими координатами) існує на $AC$, роблячи три подібні трикутники $ABP$, $CDP$ та $BDP$.

Наприклад, якщо $(a, b, d) = (2, 3, 4)$, можна легко підтвердити, що точка $P(1, 1)$ задовольняє вимоги завдання. Зверніть увагу, що (2,3,4) і (2,4,3) вважаються окремими, хоча точка $P(1, 1)$ для них спільна.

Якщо $b + d &lt; 100$, то існує 92 триплети ($a$, $b$, $d$) у яких є точка $P$.

Якщо $b + d &lt; 100\\,000$, то існує 320471 триплети ($a$, $b$, $d$), які мають точку $P$.

Якщо $b + d &lt; 100\\,000\\,000$,скільки буде триплетів ($a$, $b$, $d$) з точкою $P$?

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
