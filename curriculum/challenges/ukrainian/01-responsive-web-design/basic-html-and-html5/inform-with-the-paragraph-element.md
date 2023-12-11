---
id: bad87fee1348bd9aedf08801
title: Інформація щодо елементу paragraph
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

Елемент `p` найчастіше використовують в абзацах тексту на сайтах. `p` скорочено від "paragraph".

Ось як ви можете створити елемент paragraph:

```html
<p>I'm a p tag!</p>
```

# --instructions--

Створіть елемент `p` під `h2` елементом, і введіть текст `Hello Paragraph`.

**Примітка:** як правило, усі HTML теги повинні писатись із малої літери, наприклад `<p></p>` не `<P></P>`.

# --hints--

Ваш код повинен містити правильний елемент `p`.

```js
assert($('p').length > 0);
```

Ваш елемент `p` повинен містити текст `Hello Paragraph`.

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

Елемент `p` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
