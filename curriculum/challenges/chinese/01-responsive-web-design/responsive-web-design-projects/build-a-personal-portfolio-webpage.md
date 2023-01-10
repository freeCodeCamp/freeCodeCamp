---
id: bd7158d8c242eddfaeb5bd13
title: 制作一个个人作品集展示页
challengeType: 14
forumTopicId: 301143
dashedName: build-a-personal-portfolio-webpage
---

# --description--

**目标：** 构建一个功能类似于 <a href="https://personal-portfolio.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://personal-portfolio.freecodecamp.rocks</a> 的应用程序

**需求：**

1. 你的作品集应该有一个 `id` 为 `welcome-section` 的欢迎部分
1. 欢迎部分应该有一个包含文本的 `h1` 元素
1. 你的作品集应该有一个 `id` 为 `projects` 的项目部分
1. 项目部分应该包含至少一个 `class` 为 `project-tile` 的元素来保存项目
1. 项目部分应该包含至少一个项目的链接
1. 你的作品集应该有一个 id 为 `navbar` 的导航栏
1. 导航栏应该至少包含一个链接，你可以点击它来导航到页面的不同部分
1. 你的作品集应该有一个 id 为 `profile-link` 的链接，在新标签中打开你的 GitHub 或 freeCodeCodeCamp 个人主页
1. 你的作品集应该至少有一个媒体查询
1. 欢迎部分的高度应该等于视口的高度
1. 导航栏应该始终位于视口的顶部

完成需求并通过下面的所有测试来完成这个项目。 赋予它你自己的个人风格。 编程愉快！

**注意：** 请在你的 HTML 中添加 `<link rel="stylesheet" href="styles.css">` 以链接你的样式表并应用你的 CSS

# --hints--

你的作品集应该有一个 `id` 为 `welcome-section` 的欢迎部分。

```js
const el = document.getElementById('welcome-section')
assert(!!el);
```

你的 `#welcome-section` 元素应该包含一个 `h1` 元素。

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1').length,
  0,
  'Welcome section should contain an h1 element '
);
```

在 `#welcome-section` 元素中，你不应该有任何空的 `h1` 元素。

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1')?.[0]?.innerText?.length,
  0,
  'h1 element in welcome section should contain your name or camper ' +
    'name '
);
```

你应该有一个 `id` 为 `projects` 的项目部分。

```js
const el = document.getElementById('projects')
assert(!!el);
```

你的作品集应该包含至少一个 class 为 `project-tile` 的元素。

```js
assert.isAbove(
  document.querySelectorAll('#projects .project-tile').length,
  0
);
```

你的 `#projects` 元素应该包含至少一个 `a` 元素。

```js
assert.isAbove(document.querySelectorAll('#projects a').length, 0);
```

你的作品集应该有一个 `id` 为 `navbar` 的导航栏。

```js
const el = document.getElementById('navbar');
assert(!!el);
```

你的 `#navbar` 元素应该包含至少一个 `a` 元素，它的 `href` 属性以 `#` 开头。

```js
const links = [...document.querySelectorAll('#navbar a')].filter(
  (nav) => (nav?.getAttribute('href') || '').substring(0, 1) === '#'
);

assert.isAbove(
  links.length,
  0,
  'Navbar should contain an anchor link '
);
```

你的作品集应该有一个 `id` 为 `profile-link` 的 `a` 元素。

```js
const el = document.getElementById('profile-link');
assert(!!el && el.tagName === 'A')
```

你的 `#profile-link` 元素应该有一个值为 `_blank` 的 `target` 属性。

```js
const el = document.getElementById('profile-link');
assert(!!el && el.target === '_blank')
```

你的作品集应该至少有一个媒体查询。

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

你的 `#navbar` 元素应该始终位于视口的顶部。

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const navbar = document.getElementById('navbar');
  assert.approximately(
    navbar?.getBoundingClientRect().top,
    0,
    15,
    "Navbar's parent should be body and it should be at the top of " +
    'the viewport '
  );

  window.scroll(0, 500);

  await timeout(1);

  assert.approximately(
    navbar?.getBoundingClientRect().top,
    0,
    15,
    'Navbar should be at the top of the viewport even after ' +
    'scrolling '
  );
  window.scroll(0, 0);
})();
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <title>Personal Portfolio</title>
</head>
<body>
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
<!--Font Reference-->
<nav id="navbar">
  <a href="#projects">Projects</a> |
  <a href="#contact">Contact me</a>
</nav>
<main>
  <section id="welcome-section">
    <br>
    <h1>It's me!</h1>
    <img src="https://s.cdpn.io/profiles/user/4369153/512.jpg?1587151780" height=100px>
    <h2>Naomi Carrigan</h2>
    <p>Welcome to my portfolio page!</p>
  </section><hr>
  <section id="projects">
    <h1>Projects</h1>
    <h2><a href="https://codepen.io/nhcarrigan">Here's what I've worked on!</a></h2>
    <p class="project-tile">
<iframe height="265" style="width: 25;" scrolling="no" title="Algebraic Concepts" src="https://codepen.io/nhcarrigan/embed/preview/NWGrWBR?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/NWGrWBR'>Algebraic Concepts</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<iframe height="265" style="width: 25;" scrolling="no" title="Pokemon Daycare Service" src="https://codepen.io/nhcarrigan/embed/preview/mdeEbeq?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/mdeEbeq'>Pokemon Daycare Service</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<iframe height="265" style="width: 25;" scrolling="no" title="Togepi Fan Club" src="https://codepen.io/nhcarrigan/embed/preview/vYNGoBE?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/vYNGoBE'>Togepi Fan Club</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<iframe height="265" style="width: 25;" scrolling="no" title="Togepi" src="https://codepen.io/nhcarrigan/embed/preview/yLYOWEN?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/yLYOWEN'>Togepi</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
    </p></section><hr>
  <section id="contact">
    <h1>Contact me!</h1>
    <h2>Use the links below to get in touch.</h2>
    <p><a href="https://www.freecodecamp.org/nhcarrigan" id="profile-link" target="_blank" rel="noopener noreferrer">FreeCodeCamp.org</a> | <a href="https://github.com/nhcarrigan" id="github-link" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.facebook.com/nhcarrigan" id="facebook-link" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.linkedin.com/in/Naomi-l-carrigan/" id="linkedin-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </section>
<footer><a href="../">Return to Project List</a> | <a href="https://www.nhcarrigan.com">Return to HomePage</a></footer>
</body>
</html>
```

```css
nav{
  position: fixed;
  width: 100%;
  text-align: right;
  font-size: 24pt;
  top: 0%;
  right: 5px;
  background-color: #000000;
  color: #ffffff;
}
@media (max-width: 500px){
  nav{
    display: none;
  }
}
a{
  color: #ffffff;
}
main{
  text-align: center;
  background-color: black;
  font-family:Pacifico
}
h1{
  font-size: 48pt;
}
h2{
  font-size: 24pt;
}
p{
  font-size: 12pt;
}
#welcome-section{
  background-color:#251a4a;
  color: #FFFFFF;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
#projects{
  background-color: #060a9c;
  color: #ffffff;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
#contact{
  background-color: #03300b;
  color: #ffffff;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
```
