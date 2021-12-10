---
id: 587d778f367417b2b2512aae
title: Надайте значення посиланням, використовуючи текстовий опис
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

Користувачі пристроїв для читання з екрану мають різні варіанти контенту для читання. Ці варіанти містять перехід до елементів навігації (або їх пропуск), перехід до основного вмісту або отримання короткого змісту сторінки з заголовків. Ще одна опція - прослухати посилання, доступні на сторінці.

Зчитувачі з екрану, читають текст посилання або ж те, що знаходиться між теґами прив'язки (`a`). Список посилань на зразок "натисніть тут" або "читати більше" не допоможе у такому випадку. Замість цього використовуйте короткий, але змістовний, текст у межах теґів `a`, щоб користувачі змогли зрозуміти призначення лінку.

# --instructions--

Текст посилання, який використовує Кіт Кампер, не дуже змістовний поза контекстом. Перемістіть теґи прив'язки (`a`) так, щоб вони огортали текст `information about batteries` замість `Click here`.

# --hints--

Ваш код має перемістити теґи прив'язки `a` навколо слів `Click here` так, щоб огорнути слова `information about batteries`.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

Елемент `a` повинен мати атрибут `href` зі значенням порожнього рядка `""`.

```js
assert($('a').attr('href') === '');
```

Елемент `a` повинен мати кінцевий теґ.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```
