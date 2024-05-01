---
id: 6617a1fce90de1b3fd10bd4e
title: Вивчіть основи функцій. Запитання B
challengeType: 15
dashedName: learn-function-basics-question-b
---

# --description--

```js
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'));
```

Розмістивши `animal` в круглих дужках функції `favoriteAnimal()`, ви повідомляєте JavaScript про те, що надішлете якесь значення до функції `favoriteAnimal`. Це означає, що `animal` — це всього лиш заповнювач для майбутнього значення. Але яке значення ви надсилаєте?

Останній рядок `favoriteAnimal('Goat')` — саме те місце, де ви викликаєте функцію `favoriteAnimal` та передаєте до неї значення `'Goat'`. `'Goat'` є аргументом. Ви кажете функції `favoriteAnimal`: «Будь ласка, надішли `'Goat'` до функції `favoriteAnimal` та використай `'Goat'` на місці заповнювача `'animal'`». Завдяки гнучкості, яку надає використання параметра, ви можете оголосити будь-яку тварину улюбленою.

Ось картинка, що допоможе візуалізувати, як параметри передаються до функції та як значення повертаються з неї.

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/c53dd9a12f0c9afde0d9229f82a176170f12e120/foundations/javascript_basics/function_basics/imgs/00.png" alt="Опис функції зі стрілками, де пояснюється, що значення в круглих дужках функції називаються «параметрами», а значення, повернені при використанні функції, називаються «аргументами»" style="width:95%;height:auto;" />

Зверніть увагу: якщо викликати `favoriteAnimal()` в межах `console.log()` з аргументом `'Goat'`, то ви отримаєте повернене значення функції — надрукований рядок `"Goat is my favorite animal!"` на консолі. Аргумент `favoriteAnimal('Goat')` передається до виклику функції в іншому виклику функції — `log()`.

# --question--

## --text--

Припустимо, ви змінили аргумент `'Goat'` на `'Elephant'` у виклику функції `favoriteAnimal('Goat')`. Що надрукує на консолі `console.log(favoriteAnimal('Elephant'))`?

## --answers--

`"Goat is my favorite animal!"`

---

Функція поверне помилку, оскільки `"Elephant"` є невідомим аргументом.

---

`"Elephant is my favorite animal!"`

---

`"Kangaroo is my favorite animal!"`

## --video-solution--

3
