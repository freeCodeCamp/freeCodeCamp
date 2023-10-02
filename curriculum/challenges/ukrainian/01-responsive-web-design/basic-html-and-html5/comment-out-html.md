---
id: bad87fee1348bd9aedf08804
title: Коментувати HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

Пам'ятайте, для того, щоб почати коментувати, вам необхідно використовувати `<!--` і щоб завершити коментувати, вам необхідно використовувати `-->`

Тут вам буде необхідно завершити коментувати перед початком елементу `h2`.

# --instructions--

Прокоментуйте ваші `h1` та `p` елементи, але не `h2` елемент.

# --hints--

Ваш елемент `h1` повинен бути прокоментованим так, щоб його не було видно на сторінці.

```js
assert($('h1').length === 0);
```

Ваш елемент `h2` не повинен бути прокоментованим так, щоб його було видно на сторінці.

```js
assert($('h2').length > 0);
```

Ваш елемент `p` має бути прокоментованим так, щоб його не було видно на сторінці.

```js
assert($('p').length === 0);
```

Кожен ваш коментар має бути закритий з `-->`.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

Ви не повинні змінювати порядок елементів `h1`, `h2` чи `p` у коді.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
