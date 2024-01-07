---
id: 63ee35300d8d4841c3a7091d
videoId: LGQuIIv2RVA
title: Основи CSS. Запитання D
challengeType: 15
dashedName: css-foundations-question-d
---

# --description--

Ще один спосіб використовувати селектори — об’єднати їх у списку без відокремлень. Скажімо, ви маєте такий HTML:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

У вас є два елементи з класом `subsection`, які мають відносно унікальні стилі. Вам потрібно застосувати окреме правило до елемента, який також має `header` як другий клас. Що робитимете? Ви можете об’єднати селектори `class` у CSS:

```css
.subsection.header {
  color: red;
}
```

`.subsection.header` обирає будь-який елемент, який має класи `subsection` та `header`. Зверніть увагу, що між селекторами `class` `.subsection` та `.header` немає пробілу. Цей синтаксис в основному працює для об’єднання будь-якої комбінації селекторів, за винятком об’єднання декількох селекторів типу.

Його можна використовувати, щоб об’єднати клас та ID:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>
```

Ви можете взяти два елементи вище та поєднати їх:

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

Ви не зможете об’єднати декілька селекторів типу, оскільки елемент може мати лише один тип. Наприклад, якщо об’єднати два селектори (`div` та `p`), ми отримаємо селектор `divp`, який не працюватиме, оскільки шукатиме літеральний елемент `<divp>`, якого не існує.

# --question--

## --text--

Вам надано елемент, який має `id` зі значенням `title` та `class` зі значенням `primary`. Як ви б використали обидва атрибути для одного правила?

## --answers--

```css
.title.primary {
  ...
}
```

---

```css
.title > primary {
  ...
}
```

---

```css
#title.primary { 
  ...
}
```


## --video-solution--

3
