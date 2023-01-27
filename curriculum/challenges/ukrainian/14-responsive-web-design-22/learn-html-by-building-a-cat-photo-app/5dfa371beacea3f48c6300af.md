---
id: 5dfa371beacea3f48c6300af
title: Крок 19
challengeType: 0
dashedName: step-19
---

# --description--

Якщо ви додаєте заголовковий елемент нижчого рангу, то ідеться про те, що ви починаєте нову підсекцію.

Після останнього елемента `h2` другого елемента `section` додайте елемент `h3` з таким текстом:

`Things cats love:`

# --hints--

Здається, другий елемент `section` не має початкового та кінцевого теґів.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

Прямо над кінцевим теґом другого елемента `section` повинен бути елемент `h3`.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

Елемент `h3` над кінцевим теґом другого елемента `section` повинен мати текст `Things cats love:`. Переконайтеся, що поставили двокрапку в кінці тексту.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

Над останнім елементом `h3`, вкладеним в останній елемент `section`, повинен бути елемент `h2` з текстом `Cat Lists`. Можливо, ви випадково видалили елемент `h2`.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

