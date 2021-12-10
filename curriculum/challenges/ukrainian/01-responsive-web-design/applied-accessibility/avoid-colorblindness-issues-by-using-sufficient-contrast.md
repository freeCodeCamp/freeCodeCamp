---
id: 587d778f367417b2b2512aac
title: Щоб уникнути проблем, пов'язаних із дальтонізмом, використовуйте належну контрастність
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

Колір є величезною частиною візуального дизайну, але його використання призводить до двох проблем, пов'язаних із доступністю для людей з обмеженими можливостями. По-перше, колір не слід використовувати як єдиний спосіб передачі важливої інформації, адже користувачі, що використовують програми зчитування з екрану не матимуть змоги його побачити. По-друге, кольори переднього та заднього планів потребують належної контрастності, щоб користувачі з дальтонізмом могли їх розрізнити.

Попередні завдання були пов'язані з впровадженням текстових альтернатив для вирішення першої проблеми. В останньому завданні були представлені інструменти для перевірки контрастності, щоб розібратися з другою проблемою. Рекомендований WCAG коефіцієнт контрастності 4.5:1 підходить як для кольорів, так і для комбінацій відтінків сірого.

Користувачі з дальтонізмом часто стикаються з неможливістю відрізнити деякі кольори від інших - зазвичай це стосується тону, але іноді й яскравості. Можливо, ви пам'ятаєте, що коефіцієнт контрастності вираховується за допомогою відносної яскравості (або освітленості) значень кольорів переднього та заднього планів.

На практиці, коефіцієнта контрастності 4.5:1 можна досягнути за допомогою затемнення (додавання чорного) темнішого кольору та освітлення (додавання білого) світлішого. Темнішими тонами на кольоровому колі вважаються відтінки блакитного, фіолетового, пурпурового та червоного, тоді як світлішими є відтінки помаранчевого, жовтого, зеленого та синьо-зеленого.

# --instructions--

Camper Cat експериментує з кольорами тексту та тла його блоґу, але поточне поєднання зеленуватого фонового кольору `background-color` з коричневим текстом `color` має коефіцієнт контрастності 2.5:1. Ви можете легко налаштувати світлість кольорів, адже він визначив їх за допомогою CSS `hsl()` (що розшифровується як тон, насиченість, світлість), змінивши третій параметр. Збільшіть світлість кольору фону `background-color` з 35% до 55%, і зменшіть світлість кольору тексту `color` з 20% до 15%. Це покращить контрастність до значення 5.9:1.

# --hints--

Ваш код має змінити світлість кольору тексту `color` на значення 15%.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

Ваш код має змінити світлість фонового кольору `background-color` на значення 55%.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
