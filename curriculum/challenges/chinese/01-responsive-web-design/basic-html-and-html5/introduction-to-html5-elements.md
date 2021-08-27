---
id: bad87fee1348bd9aecf08801
title: HTML5 元素介绍
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5 引入了很多更具描述性的 HTML 元素， 包括 `main`、`header`、`footer`、`nav`、`video`、`article`、`section` 等等。

这些元素让 HTML 更易读，同时有助于搜索引擎优化和无障碍访问。 `main` 元素让搜索引擎和开发者能很快地找到网页的主要内容。

举个例子，下面的 `main` 元素嵌套了两个子元素：

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**提示：** 在后面的应用无障碍课程中我们会接触到更多新的 HTML5 元素，以及明白它们的用处。

# --instructions--

创建一个新的 `p` 元素，内容为：`Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

然后，请添加一个 `main` 元素，将现有的两个 `p` 元素嵌套在这个 `main` 元素里。

# --hints--

页面中应该有两个 `p` 元素。

```js
assert($('p').length > 1);
```

每个 `p` 元素都应有结束标签。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

你的 `p` 元素应包含 `kitty ipsum` 文本的前面几个词。

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

应该存在 `main` 元素。

```js
assert($('main').length === 1);
```

`main` 元素应有两个段落元素作为它的子元素。

```js
assert($('main').children('p').length === 2);
```

`main` 的开始标签应位于第一个段落之前。

```js
assert(code.match(/<main>\s*?<p>/g));
```

`main` 的结束标签应位于第二个段落之后。

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
