---
id: 5efada803cbd2bbdab94e332
title: 步骤 29
challengeType: 0
dashedName: step-29
---

# --description--

在你刚刚添加的 `figure` 元素中，嵌套一个 `img` 元素，其中 `src` 属性设置为 `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`。

# --hints--

你的第二个 `figure` 元素应该有一个开始标签。 开始标签的语法为：`<elementName>`。

```js
assert(document.querySelectorAll('figure').length >= 2);
```

你的第二个 `figure` 元素应该有一个结束标签。 结束标签在 `<` 字符之后有一个 `/`。

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

在第二个 `section` 元素的结束标签上方应该有一个 `figure` 元素。 你把顺序写错了。

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

你应该在 `figure` 元素中嵌套第三个 `img` 元素。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

第三张图像应该有一个 `src` 属性设置为 `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

尽管你已将新图像的 `src` 设置为正确的 URL，但建议始终将属性值放在引号中。

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/.test(code));
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
--fcc-editable-region--
        <figure>

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

