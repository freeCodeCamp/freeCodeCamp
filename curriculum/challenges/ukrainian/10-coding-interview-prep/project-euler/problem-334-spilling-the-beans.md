---
id: 5900f4ba1000cf542c50ffcd
title: 'Задача 334: Розсипання бобів (Spilling the beans)'
challengeType: 1
forumTopicId: 301992
dashedName: problem-334-spilling-the-beans
---

# --description--

У Раю Платона існує нескінченна кількість мисок, що стоять в одну пряму лінію. У кожній мисці є чи немає певної скінченної кількості бобів. Дитина грає у гру, де можна ходити лише одним способом: забрати два боби з будь-якої миски, і покласти по одному у сусідні миски. Гра закінчується, коли у кожній мисці є хоча б один або нема жодного боба.

Наприклад, у двох сусідніх мисках лежить, відповідно, 2 і 3 боби, а усі інші миски пусті. Наступні 8 кроків завершать гру:

<img class="img-responsive center-block" alt="animation of game when two adjacent bowls contain 2 and 3 beans respectively" src="https://cdn.freecodecamp.org/curriculum/project-euler/spilling-the-beans.gif" style="background-color: white; padding: 10px;" />

Вам надано наступні послідовності:

$$\begin{align}   & t_0 = 123456, \\\\
  & t_i = \begin{cases}          \frac{t_{i - 1}}{2},               & \text{if $t_{i - 1}$ is even} \\\\
         \left\lfloor\frac{t_{i - 1}}{2}\right\rfloor \oplus 926252, & \text{if $t_{i - 1}$ is odd}          \end{cases} \\\\
         & \qquad \text{where $⌊x⌋$ is the floor function and $\oplus$ is the bitwise XOR operator.} \\\\ & b_i = (t_i\bmod 2^{11}) + 1. \end{align}$$

Перші дві умови останньої послідовності: $b_1 = 289$ and $b_2 = 145$. Якщо б ми почали з $b_1$ і $b_2$ бобів у двох сусідніх мисках, то нам потрібно було б 3419100 кроків, щоб завершити гру.

Тепер розглянемо, якщо у нас 1500 сусідніх мисок, у яких $b_1, b_2, \ldots, b_{1500}$ бобів, відповідно, а усі інші миски пусті. Визначте, скільки кроків знадобиться, щоб закінчити гру.

# --hints--

`spillingTheBeans()` має повернути `150320021261690850`.

```js
assert.strictEqual(spillingTheBeans(), 150320021261690850);
```

# --seed--

## --seed-contents--

```js
function spillingTheBeans() {

  return true;
}

spillingTheBeans();
```

# --solutions--

```js
// solution required
```
