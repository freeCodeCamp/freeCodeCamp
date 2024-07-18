---
id: 637f4e5872c65bc8e73dfe27
videoId: yqcd-XkxZNM
title: Робота з текстом. Урок №1
challengeType: 15
dashedName: working-with-text-lesson-a
---

# --description--

Які вихідні дані ви очікуєте від цього тексту на HTML-сторінці?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

Текст виглядає як два абзаци, і ви можете очікувати, що він відтвориться так само. Але не в цьому випадку, як можете побачити нижче:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/xxrKqeV?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=xxrKqeV&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="Вставка CodePen" loading="lazy" id="cp_embed_xxrKqeV"></iframe>

Коли браузер стикається з подібними рядками в HTML, він об’єднує їх. У результаті такого об’єднання весь текст групується в один довгий рядок.

Якщо ви хочете створити абзаци в HTML, потрібно використати елемент абзацу, який додає новий рядок після кожного абзацу. Щоб створити елемент абзацу, напишіть текст в межах тегу `<p>`.

Попередня проблема зникне, якщо ми використаємо елементи абзаців:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/mdwbmdp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=mdwbmdp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="Вставка CodePen" loading="lazy" id="cp_embed_mdwbmdp"></iframe>

# --assignment--

Перегляньте відео Кевіна Павелла про абзаци та заголовки у HTML (розміщене вище).

# --question--

## --text--

Як створити абзац в HTML?

## --answers--

`<h3>This is a paragraph</h3>`

---

`<p>This is a paragraph</p>`

---

`<strong>This is a paragraph<strong>`


## --video-solution--

2
