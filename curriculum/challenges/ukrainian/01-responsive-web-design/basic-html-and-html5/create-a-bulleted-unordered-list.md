---
id: bad87fee1348bd9aedf08827
title: Створюємо невпорядкований маркований список
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

HTML має спеціальний елемент для створення <dfn>unordered lists</dfn> (невпорядкованих списків) чи пронумерованих списків.

Невпорядковані списки починаються з відкриття елементу `<ul>`, після якого слідує будь-яка кількість елементів `<li>`. Невпорядковані списки закриваються `</ul>`.

Наприклад:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

створить список точних значень `milk` та `cheese`.

# --instructions--

Видаліть останні два елементи `p` та створіть у нижній частині сторінки невпорядкований список трьох речей, які люблять коти.

# --hints--

Створіть елемент `ul`.

```js
assert($('ul').length > 0);
```

У вас має бути три елементи `li` всередині вашого елементу `ul`.

```js
assert($('ul li').length > 2);
```

Ваш елемент `ul` повинен містити тег, що закривається.

```js
assert(
  code.match(/<\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length
);
```

Ваші елементи `li` повинні містити теги, що закриваються.

```js
assert(
  code.match(/<\/li>/gi) &&
    code.match(/<li[\s>]/gi) &&
    code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length
);
```

Ваші елементи `li` не повинні містити порожній рядок чи навіть пробіли.

```js
assert($('ul li').filter((_, item) => !$(item).text().trim()).length === 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>
```
