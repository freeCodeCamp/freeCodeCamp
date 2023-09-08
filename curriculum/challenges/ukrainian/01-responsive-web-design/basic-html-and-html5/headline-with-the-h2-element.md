---
id: bad87fee1348bd9aedf0887a
title: Заголовок з елементом h2
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

Протягом наступних уроків ми будем крок за кроком створювати веб-додаток Cat Photo мовою HTML5.

Елемент `h2`, з яким будете працювати на цьому етапі, додасть заголовок другого рівня на вашу сторінку.

Цей елемент відображає структуру вашого сайту у браузері. Елементи `h1` часто використовують для основних заголовків, а елементи `h2`, як правило, використовують для підзаголовків. Існують також елементи `h3`, `h4`, `h5` і `h6` на позначення різних рівнів підзаголовків.

# --instructions--

Додайте теґ `h2`, який містить фразу "CatPhotoApp" для того, щоб створити другий HTML-елемент під написом "Hello World" з елементом `h1`.

# --hints--

Створіть елемент `h2`.

```js
assert($('h2').length > 0);
```

Елемент `h2` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

Елемент `h2` повинен містити текст `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

Елемент `h1` повинен містити текст `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

Елемент `h1` має бути перед елементом `h2`.

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
