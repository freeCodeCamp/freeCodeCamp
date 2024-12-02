---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

HTML has a special element for creating <dfn>unordered lists</dfn>, or bullet point style lists.

Unordered lists start with an opening `<ul>` element, followed by any number of `<li>` elements. Finally, unordered lists close with a `</ul>`.

For example:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

would create a bullet point style list of `milk` and `cheese`.

# --instructions--

Remove the last two `p` elements and create an unordered list of three things that cats love at the bottom of the page.

# --hints--

Create a `ul` element.

```js
assert.isNotEmpty(document.querySelectorAll('ul'));
```

You should have three `li` elements within your `ul` element.

```js
assert.lengthOf(document.querySelectorAll('ul li'),3);
```

Your `ul` element should have a closing tag.

```js
assert.match(code,/<\/ul>/gi);
assert.match(code,/<ul/gi);
assert.strictEqual(code.match(/<\/ul>/gi).length,code.match(/<ul/gi).length);
```

Your `li` elements should have closing tags.

```js
assert.match(code,/<\/li>/gi);
assert.match(code,/<li[\s>]/gi);
assert.strictEqual(code.match(/<\/li>/gi).length,code.match(/<li[\s>]/gi).length);
```

Your `li` elements should not contain an empty string or only white-space.

```js
assert.isEmpty([...document.querySelectorAll('ul li')].filter((item) => item.textContent.trim() === ""));
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
