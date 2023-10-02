---
id: 5efae0543cbd2bbdab94e333
title: 步骤 30
challengeType: 0
dashedName: step-30
---

# --description--

为了提高你刚刚添加的图像的可访问性，添加具有以下文本的 `alt` 属性。

`Five cats looking around a field.`

# --hints--

你的 `figure` 元素应该有一个开始标签。 开始标签的书写语法为：`<elementName>`。

```js
assert(document.querySelectorAll('figure').length === 2);
```

你的 `figure` 元素应该有一个结束标签。 结束标签在 `<` 字符之后有一个 `/`。

```js
assert(code.match(/<\/figure>/g).length === 2);
```

最后一个 `section` 元素的结束标签的上方应该有一个 `figure` 元素。

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

猫咪的 `img` 元素应该嵌套在 `figure` 元素中。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

猫咪的 `img` 元素应该有一个 `alt` 属性，其值为 `Five cats looking around a field.`。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
    .getAttribute('alt')
    .replace(/\s+/g, ' ')
    .match(/^Five cats looking around a field\.?$/i)
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
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
--fcc-editable-region--
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```

