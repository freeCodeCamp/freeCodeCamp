---
id: bad87fee1348bd9aedf08802
title: Розкоментований HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

Коментування - це спосіб, за допомогою якого ви можете залишити коментарі для інших розробників в межах вашого коду, не впливаючи на результат отриманого значення, який відображається кінцевому користувачу.

Коментування є також і зручним способом зробити код неактивним без необхідності його повного видалення.

Коментарі в HTML починаються з `<!--` і закінчуються `-->`

# --instructions--

Прокоментуйте ваші `h1`, `h2` та `p` елементи.

# --hints--

Ваш елемент `h1` має бути видимим на сторінці шляхом його розкоментування.

```js
assert($('h1').length > 0);
```

Ваш елемент `h2` має бути видимим на сторінці шляхом його розкоментування.

```js
assert($('h2').length > 0);
```

Ваш елемент `p` має бути видимим на сторінці шляхом його розкоментування.

```js
assert($('p').length > 0);
```

Кінцеві теги коментарів не мають бути видимими на сторінці (тобто `-->`).

```js
assert(!$('*:contains("-->")')[1]);
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
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
