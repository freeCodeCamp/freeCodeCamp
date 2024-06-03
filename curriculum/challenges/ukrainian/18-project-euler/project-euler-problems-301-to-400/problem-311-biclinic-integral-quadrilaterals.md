---
id: 5900f4a31000cf542c50ffb6
title: 'Завдання 311: біклінічні чотирикутники з цілими сторонами'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ є опуклим трикутником з цілими сторонами за умови $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

Довжиною $BD$ є ціле число. $O$ є серединною точкою $BD$. Довжиною $AO$ є ціле число.

Назвемо $ABCD$ біклінічним чотирикутником з цілими сторонами, якщо $AO = CO ≤ BO = DO$.

Наприклад, наведений нижче чотирикутник є біклінічним чотирикутником з цілими сторонами: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ та $AO = CO = 23$.

<img class="img-responsive center-block" alt="чотирикутник ABCD з точкою O, яка є серединною точкою BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

Нехай $B(N)$ буде кількістю різних біклінічних чотирикутників $ABCD$, які задовільняють умову ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$. Можна довести, що $B(10\\,000) = 49$ та $B(1\\,000\\,000) = 38239$.

Знайдіть $B(10\\,000\\,000\\,000)$.

# --hints--

`biclinicIntegralQuadrilaterals()` має повернути `2466018557`.

```js
assert.strictEqual(biclinicIntegralQuadrilaterals(), 2466018557);
```

# --seed--

## --seed-contents--

```js
function biclinicIntegralQuadrilaterals() {

  return true;
}

biclinicIntegralQuadrilaterals();
```

# --solutions--

```js
// solution required
```
