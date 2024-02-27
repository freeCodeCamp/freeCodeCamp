---
id: 5900f4601000cf542c50ff72
title: 'Завдання 244: повзунки'
challengeType: 1
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

Мабуть, ви знаєте гру «П’ятнашки». У цьому завданні замість плиток з числами маємо сім червоних плиток та вісім синіх плиток.

Ходи позначаються першою буквою напрямку англійською мовою (вліво — L, вправо — R, вверх — U, вниз — D). Наприклад, починаючи з конфігурації $S$ та виконавши послідовність ходів $LULUR$, отримаємо конфігурацію $E$:

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($E$) <img class="img-responsive" alt="конфігурація E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Контрольна сума кожного шляху обчислюється так (псевдокод):

$$\begin{align}   & \text{контрсума} = 0 \\\\
  & \text{контрсума} = (\text{контрсума} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\   & \text{контрсума} = (\text{контрсума} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\ & \text{контрсума} = (\text{контрсума} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007 \end{align}$$

де $m_k$ є ASCII кодом $k^{\text{-ної}}$ літери в послідовності ходів. Відповідні ASCII коди для ходів:

$$\begin{array}{|c|c|} \hline L & 76 \\\\ \hline R & 82 \\\\ \hline U & 85 \\\\ \hline D & 68 \\\\ \hline \end{array}$$

Для послідовності $LULUR$, зазначеної вище, контрольна сума становить 19761398. Тепер, починаючи з конфігурації $S$, знайдіть усі найкоротші шляхи, щоб досягти конфігурації $T$.

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($T$) <img class="img-responsive center-block" alt="конфігурація T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Якою буде загальна сума всіх контрольних сум найкоротших шляхів?

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
