---
id: 6571b300cc1de61d7b4dd383
title: Вступ до Flexbox. Запитання E
challengeType: 15
dashedName: introduction-flexbox-question-e
---

# --description--

Насправді оголошення `flex` є скороченням трьох властивостей, які можна встановити в гнучкому предметі. Ці властивості впливають на те, як гнучкі предмети розміщуються в контейнерах самостійно. Раніше ви вже бачили скорочені властивості, але ми не представляли їх офіційно.

> Скорочені властивості — це властивості, які дозволяють одночасно встановити значення декількох інших властивостей CSS. За допомогою скорочених властивостей можна писати стисліші (та читабельніші) таблиці стилів, що зберігає час та енергію.

У цьому випадку `flex` є скороченням властивостей `flex-grow`, `flex-shrink` та `flex-basis`.

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-04.png" alt="CSS code setting the flex property to 1 for a div element." />

`flex: 1` зі знімка екрана вище дорівнює `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0`.

Дуже часто можна побачити, що скорочення визначене лише одним значенням. У такому випадку це значення застосоване до `flex-grow`. Тому, якщо ви додаєте `flex: 1` до елементів div, насправді ви вказуєте скорочення `flex: 1 1 0`.

# --question--

## --text--

Які властивості задані скороченням `flex`?

## --answers--

`flex-grow`, `flex-shrink` та `flex`

---

`flex-basis`, `flex-wrap` та `flex-direction`

---

`flex-grow`, `flex-shrink` та `flex-basis`

---

`flex-direction`, `flex` та `flex-wrap`

## --video-solution--

3
