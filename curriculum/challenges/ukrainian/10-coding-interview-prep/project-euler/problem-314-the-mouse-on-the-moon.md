---
id: 5900f4a71000cf542c50ffb9
title: 'Проблема 314: Миша на Місяці'
challengeType: 1
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

Місяць відкривається, і земля може бути доступна безкоштовно, але є пастка. Вам необхідно побудувати стіну навколо землі, яку ви зазначили, але побудувати стіну на Місяці дорого. Кожній країні виділили 500 м на 500 м квадратної площі, але вона матиме тільки ту площу, яку вони обгороджують. 251001 матеріали розміщувались в прямокутній сітці з інтервалом в 1 метр. Стіна повинна бути закритою низкою прямих ліній, кожен рядок біжить від поста до поста.

Більші країни, звичайно, збудували 2000-метрову стіну, яка обгороджує усі 250 000 $\text{m}^2$ площі. Герцогство Великого Фенвіку, має більш обмежений бюджет, і попросив Вас (їх королівського програміста) обчислити, яку форму отримує максимальний коефіцієнт $\frac{\text{enclosed-area}}{\text{wall-length}}$.

Ви зробили деякі попередні розрахунки на аркуші паперу. Для 2000-метрової стіни, яка обгорожує 250 000 $\tтекст{m}^2$ площу $\frac{\text{enclosed-area}}{\text{wall-length}}$ коефіціент 125.

Хоча і не дозволяється, але щоб отримати ідею, якщо є щось краще: якщо ви поставите коло всередині квадратної площі, яке дотикається до чотирьох сторін, площа дорівнюватиме $π \times {250}^2 \text{m}^2$ і периметр буде $π \times 500 \text{m}$, так що коефіціент $\frac{\text{enclosed-area}}{\text{wall-length}}$ також буде 125.

Однак, якщо ви відрізали з квадрата чотири трикутники із сторонами 75 м, 75 м і $75\sqrt{2}$, загальна площа стає 238750 $\text{m}^2$, а периметр стає $1400 + 300 \sqrt{2} m. Отже, це дає $\frac{\tтекст{enclosed-area}}{\tтекст{wall-length}}$ коефіціент 130.87, що значно краще.

<img class="img-responsive center-block" alt="picture showing difference in enclosed-area between circle and square with cut off four triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;" />

Знайдіть максимальне значення $\frac{\tтекст{enclosed-area}}{\text{wall-length}}$ співвідношення. Дайте відповідь, округлену до 8 знаків за десятковим значенням у формі abc.defghijk.

# --hints--

`theMouseOnTheMoon()` повинен повернути `132.52756426`.

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

# --seed--

## --seed-contents--

```js
function theMouseOnTheMoon() {

  return true;
}

theMouseOnTheMoon();
```

# --solutions--

```js
// solution required
```
