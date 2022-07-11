---
id: 5900f4601000cf542c50ff72
title: 'Завдання 244: П''ятнашки'
challengeType: 1
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

Напевно, ви знаєте гру П'ятнашки. У цьому варіанті замість плиток з числами маємо сім червоних плиток та вісім синіх плиток.

Ходи позначаються першою буквою напрямку (Left, Right, Up, Down), за яким пересуваємо плитку. Наприклад, починаючи з конфігурації ($S$), з послідовністю ходів $LULUR$ отримуємо конфігурацію ($E$):

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($E$) <img class="img-responsive" alt="конфігурація E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Для кожного шляху його контрольна сума обчислюється так (псевдокод):

$$\begin{align}   & \text{checksum} = 0 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\   & \text{checksum} = (\text{checksum} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\ & \text{checksum} = (\text{checksum} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007 \end{align}$$

де $m_k$ — ASCII код букви $k^{\text{th}}$ в послідовності ходів. Ось ASCII коди для ходів:

$$\begin{array}{|c|c|} \hline L & 76 \\\\ \hline R & 82 \\\\ \hline U & 85 \\\\ \hline D & 68 \\\\ \hline \end{array}$$

Для послідовності $LULUR$, зазначеної вище, контрольна сума становить 19761398. Тепер почавши з конфігурації ($S$), знайдіть усі найкоротші шляхи, щоб досягти конфігурації ($T$).

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($T$) <img class="img-responsive center-block" alt="конфігурація T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Яка сума всіх контрольних сум для найкоротших шляхів?

# --hints--

`sliders()` має повернути `96356848`.

```js
assert.strictEqual(sliders(), 96356848);
```

# --seed--

## --seed-contents--

```js
function sliders() {

  return true;
}

sliders();
```

# --solutions--

```js
// solution required
```
