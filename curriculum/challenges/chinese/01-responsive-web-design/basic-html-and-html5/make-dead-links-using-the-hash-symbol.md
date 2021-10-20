---
id: bad87fee1348bd9aedf08817
title: '用 # 号来创建链接占位符'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

有时你想为网站添加一个 `a` 元素，但还不确定要将它链接到哪里。

当你使用 `JavaScript` 更改链接的指向时，这也很方便，我们将在后面的课程中介绍。

# --instructions--

`href` 属性的当前值是指向 “`https://www.freecatphotoapp.com`”。 请将 `href` 属性的值替换为`#`，以此来创建链接占位符。

例如: `href="#"`

# --hints--

`a` 的 `href` 属性值应为 "#"。

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
