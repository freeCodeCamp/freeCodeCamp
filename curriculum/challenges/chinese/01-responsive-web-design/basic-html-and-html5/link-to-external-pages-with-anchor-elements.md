---
id: bad87fee1348bd9aedf08816
title: 用 a 实现网页间的跳转
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

你可以用 `a`（Anchor，简写为 a）来实现网页间的跳转。

`a` 需要一个 `href` 属性指向跳转的目的地。 同时，它还应有内容。 例如：

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

浏览器将显示文本 `this links to freecodecamp.org`，这是一个可点击的链接。 你可以通过这个链接访问 `https://www.freecodecamp.org`。

# --instructions--

创建一个内容文本为 “cat photos” 的 `a` 元素，链接指向 `https://www.freecatphotoapp.com`。

# --hints--

`a` 元素应有锚文本 `cat photos`。

```js
assert(/cat photos/gi.test($('a').text()));
```

`a` 元素应链接到 `https://www.freecatphotoapp.com`。

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

确保 `a` 元素有结束标签。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
