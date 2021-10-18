---
id: bad87fee1348bd9aedf08827
title: 创建一个无序列表
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

HTML 有一个特定的元素用于创建<dfn>无序列表</dfn>。

无序列表以 `<ul>` 开始，中间包含一个或多个 `<li>` 元素， 最后以 `</ul>` 结束。

例如:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

会创建一个要点列表，包括 `milk` 和 `cheese`。

# --instructions--

请删除页面底部的两个 `p` 元素，然后在底部创建一个无序列表，其中包含你认为猫咪最喜欢的三件东西。

# --hints--

应存在一个 `ul` 无序列表。

```js
assert($('ul').length > 0);
```

应在 `ul` 无序列表中添加三个 `li` 条目。

```js
assert($('ul li').length > 2);
```

确保 `ul` 无序列表有结束标签。

```js
assert(
  code.match(/<\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length
);
```

确保每个 `li` 条目都有结束标签。

```js
assert(
  code.match(/<\/li>/gi) &&
    code.match(/<li[\s>]/gi) &&
    code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length
);
```

每个 `li` 元素不应只包含空字符串或只包含空格。

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
