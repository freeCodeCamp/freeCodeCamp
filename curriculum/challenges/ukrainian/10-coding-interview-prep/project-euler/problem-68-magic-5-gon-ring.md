---
id: 5900f3b01000cf542c50fec3
title: 'Завдання 68: Магічне 5-кутне кільце'
challengeType: 1
forumTopicId: 302180
dashedName: problem-68-magic-5-gon-ring
---

# --description--

Розглянемо наступне «магічне» 3-кутне кільце, заповнене цифрами від 1 до 6, а сума цифр на кожній лінії дорівнює 9.

<img class="img-responsive center-block" alt="завершений приклад 3-кутного кільця" src="https://cdn-media-1.freecodecamp.org/project-euler/3-gon-ring.png" style="background-color: white; padding: 10px;" />

Працюючи **за годинниковою стрілкою** і почавши з групи з трьох із найнижчим зовнішнім вузлом (4,3,2 у даному випадку), кожне вирішення можна записати однозначно. Наприклад, наведене вище вирішення можна описати множиною: 4,3,2; 6,2,1; 5,1,3.

Кільце можна завершити чотирма різними сумами: 9, 10, 11, та 12. Всього є вісім рішень.

<div style='text-align: center;'>

| !!crwdBlockTags_6_sgaTkcolBdwrc!! |!!crwdBlockTags_7_sgaTkcolBdwrc!! |
| -------------------------------------- | --------------------------------------------- |
| 9                                      | 4,2,3; 5,3,1; 6,1,2                           |
| 9                                      | 4,3,2; 6,2,1; 5,1,3                           |
| 10                                     | 2,3,5; 4,5,1; 6,1,3                           |
| 10                                     | 2,5,3; 6,3,1; 4,1,5                           |
| 11                                     | 1,4,6; 3,6,2; 5,2,4                           |
| 11                                     | 1,6,4; 5,4,2; 3,2,6                           |
| 12                                     | 1,5,6; 2,6,4; 3,4,5                           |
| 12                                     | 1,6,5; 3,5,4; 2,4,6                           |

</div>

Об'єднавши кожну групу, можна утворити 9-значні рядки; максимальним значенням такого рядка для 3-кутного кільця є 432621513.

Використовуючи числа від 1 до 10, залежно від розташування, можна утворити 16- та 17-значні рядки. Яким є максимальне значення **16-значного** рядка для «магічного» 5-кутного кільця?

<img class="img-responsive center-block" alt="пуста діаграма 5-кутного кільця" src="https://cdn-media-1.freecodecamp.org/project-euler/5-gon-ring.png" style="background-color: white; padding: 10px;" />

# --hints--

`magic5GonRing()` має повернути число.

```js
assert(typeof magic5GonRing() === 'number');
```

`magic5GonRing()` має повернути число 6531031914842725.

```js
assert.strictEqual(magic5GonRing(), 6531031914842725);
```

# --seed--

## --seed-contents--

```js
function magic5GonRing() {

  return true;
}

magic5GonRing();
```

# --solutions--

```js
// solution required
```
