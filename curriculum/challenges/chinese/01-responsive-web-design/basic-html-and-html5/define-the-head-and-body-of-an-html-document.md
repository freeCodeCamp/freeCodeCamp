---
id: 587d78aa367417b2b2512aec
title: 定义 HTML 文档的 head 和 body
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra9bfP'
forumTopicId: 301096
dashedName: define-the-head-and-body-of-an-html-document
---

# --description--

`html` 的结构主要分为两大部分：`head` 和 `body`。网页的描述应放入 `head` 标签，网页的内容则应放入 `body` 标签。

比如 `link`、`meta`、`title` 和 `style` 都应放入 `head` 标签。

这是网页布局的一个例子：

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

# --instructions--

请给网页添加 `head` 和 `body`，`head` 元素应包含 `title`；`body` 元素应该包含 `h1` 和 `p`。

# --hints--

网页应只有一个 `head` 元素。

```js
assert($('head').length == 1);
```

网页应只有一个 `body` 元素。

```js
assert($('body').length == 1);
```

`head` 应为 `html` 的子元素。

```js
assert($('html').children('head').length == 1);
```

`body` 应为 `html` 的子元素。

```js
assert($('html').children('body').length == 1);
```

`title` 应为 `head` 的子元素。

```js
assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi));
```

`h1` 和 `p` 都应为 `body` 的子元素。

```js
assert(
  code.match(
    /<body>\s*?(((<h1>\s*?.*?\s*?<\/h1>\s*?)(<p>(.*\s*)*?<\/p>\s*?))|((<p>\s*?.*?\s*?<\/p>\s*?)(<h1>(.*\s*)*?<\/h1>\s*?)))<\/body>/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
 <head>
  <title>The best page ever</title>
 </head>
 <body>
  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
 </body>
</html>
```
