---
id: 5900f4a31000cf542c50ffb6
title: 'Задача 311: Біклінічні чотирикутники, сторони яких вимірюються цілими числами'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ – це опуклий чотирикутник, сторони якого вимірюються цілими числами, з $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

$BD$ має цілочисельну довжину. $O$ – це центральна точка $BD$. $AO$ має цілочисельну довжину.

Ми назвемо $ABCD$ біклінічним чотирикутником, сторони якого вимірюються цілими числами, якщо $AO = CO ≤ BO = DO$.

Наприклад, наведений нижче чотирикутник є біклінічним чотирикутником, сторони якого вимірюються цілими числами: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ і $AO = CO = 23$.

<img class="img-responsive center-block" alt="чотирикутник ABCD з точкою O, яка є центром BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

Нехай $B(N)$ буде кількістю різних біклінічних чотирикутників $ABCD$, сторони яких вимірюються цілими числами, які задовольняють ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$. Ми можемо перевірити, що $B(10\\,000) = 49$ і $B(1\\,000\\,000) = 38239$.

Знайдіть $B(10\\,000\\,000\\,000)$.

# --hints--

`biclinicIntegralQuadrilaterals()` має повертати до `2466018557`.

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
