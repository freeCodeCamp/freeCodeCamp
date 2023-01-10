---
id: 587d78af367417b2b2512b04
title: 制作一个产品登录页
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**目标：** 构建一个功能类似于 <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a> 的应用程序

**需求：**

1. 你的产品登录页应该有一个 `id="header"` 的 `header` 元素
1. 你可以在 `header` 元素中看到一个 `id="header-img"` 的图像（比如一个 logo）
1. 在 `#header` 元素中，你可以看到一个 `id="nav-bar"` 的 `nav` 元素
1. 在 `nav` 元素中，你可以看到至少三个可点击的元素，每个元素的 class 为 `nav-link`
1. 当你点击 `nav` 内的 `.nav-link` 按钮时，应滚动到登录页相应的部分
1. 你可以观看一个 `id="video"` 的嵌入的产品视频
1. 你的登录页有一个 `id="form"` 的 `form` 元素
1. 在表单中，应存在一个 `id="email"` 的 `input` 输入框供用户填写邮箱地址
1. 在 `#email` 输入框内应有描述该区域用途的占位符文本
1. `#email` 输入框应该用 HTML5 验证来确认输入的内容是否为邮箱地址
1. 在表单中，有一个 `id="submit"` 的 `input` 提交按钮
1. 当你点击 `#submit` 元素时，邮箱会被提交到一个静态页面 (使用这个模拟 URL：`https://www.freecodecamp.com/email-submit`)
1. 导航栏应该始终位于视口的顶部
1. 你的产品登陆页面至少要有一个媒体查询
1. 你的产品登陆页面应该至少使用一次 CSS flexbox

完成需求并通过下面的所有测试来完成这个项目。 赋予它你自己的个人风格。 编程愉快！

**注意：** 请在你的 HTML 中添加 `<link rel="stylesheet" href="styles.css">` 以链接你的样式表并应用你的 CSS

# --hints--

你应该有一个 `id` 为 `header` 的 `header` 元素。

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

你应该有一个 `id` 为 `header-img` 的 `img` 元素。

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

你的 `#header-img` 元素应该是 `#header` 元素的子元素。

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

你的 `#header-img` 应该有一个 `src` 属性。

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

你的 `#header-img` 的 `src` 值应该是一个有效的 URL（以 `http` 开头）。

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

你应该有一个 `nav` 元素，其 `id` 为 `nav-bar`。

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

你的 `#nav-bar` 应该是 `#header` 的后代。

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

`#nav-bar` 中应该至少有 3 个 `.nav-link` 元素。

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

每个 `.nav-link` 元素都应该有一个 `href` 属性。

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

每个 `.nav-link` 元素都应该链接到登录页上的相应元素（有一个 `href` 值是另一个元素的 id。例如 `#footer`）。

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

你应该有一个 `video` 或 `iframe` 元素，其中 `id` 为 `video`。

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

你的 `#video` 应该有一个 `src` 属性。

```js
let el = document.getElementById('video')
const sourceNode = el.children;
let sourceElement = null;
if (sourceNode.length) {
  sourceElement = [...video.children].filter(el => el.localName === 'source')[0];
}
if (sourceElement) {
  el = sourceElement;
}
assert(el.hasAttribute('src'));
```

你应该有一个 `form` 元素，其 `id` 为 `form`。

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

你应该有一个 `input` 元素，其中 `id` 为 `email`。

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#email` 应该是 `#form` 的后代。

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

你的 `#email` 应该具有带有占位符文本的 `placeholder` 属性。

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你的 `#email` 应该通过将其 `type` 设置为 `email` 来使用 HTML5 验证。

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

你应该有一个 `input` 元素，其中 `id` 为`submit`。

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#submit` 应该是 `#form` 的后代。

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

你的 `#submit` 应该具有 `submit` 的 `type`。

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

你的 `#form` 应该具有 `action` 属性为 `https://www.freecodecamp.com/email-submit`。

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

你的 `#email` 元素应该具有值为 `email` 的 `name` 属性。

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

你的 `#nav-bar` 应该始终位于视口的顶部。

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const header = document.getElementById('header');
  const headerChildren = header.children;
  const navbarCandidates = [header, ...headerChildren];

  // Return smallest top position of all navbar candidates
  const getNavbarPosition = (candidates = []) => {
    return candidates.reduce(
      (min, candidate) =>
        Math.min(min, Math.abs(candidate?.getBoundingClientRect().top)),
      Infinity
    );
  };
  assert.approximately(
    getNavbarPosition(navbarCandidates),
    0,
    15,
    '#header or one of its children should be at the top of the viewport '
  );

  window.scroll(0, 500);
  await timeout(1);

  assert.approximately(
    getNavbarPosition(navbarCandidates),
    0,
    15,
    '#header or one of its children should be at the top of the ' +
      'viewport even after scrolling '
  );

  window.scroll(0, 0);
})();
```

你的产品登陆页面至少要有一个媒体查询。

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

你的产品登陆页面应该至少使用一次 CSS Flexbox。

```js
const hasFlex = (rule) => ["flex", "inline-flex"].includes(rule.style?.display)
const stylesheet = new __helpers.CSSHelp(document).getStyleSheet()
const cssRules = new __helpers.CSSHelp(document).styleSheetToCssRulesArray(stylesheet)
const mediaRules = new __helpers.CSSHelp(document).getCSSRules('media')
const usesFlex = cssRules.find(rule => hasFlex(rule))
const usesFlexMedia = mediaRules.find(mediaRule => {
  return [...mediaRule.cssRules].find(rule => hasFlex(rule))
})
assert(usesFlex || usesFlexMedia)
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
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <title>Product Landing Page</title>
  </head>
  <body>
    <header id="header">
      <nav id="nav-bar">
        <img
          id="header-img"
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
          max-height="50px"
        />
        <a href="#Features" class="nav-link">Features</a> |
        <a href="#Video" class="nav-link">See our facility!</a> |
        <a href="#Pricing" class="nav-link">Purchase</a>
        <hr />
      </nav>
    </header>
    <main>
      <h1>
        Pokemon Daycare Service
      </h1>
      <section id="Features">
        <h2>What we offer</h2>
        <div class="flex-here">
          <div class="flex-left">
            <img
              id="bullet"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              max-height="25px"
            />
          </div>
          <div class="flex-right">Guaranteed friendly and loving staff!</div>
        </div>
        <div class="flex-here">
          <div class="flex-left">
            <img
              id="bullet"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              max-height="25px"
            />
          </div>
          <div class="flex-right">
            Comfortable environment for Pokemon to explore and play!
          </div>
        </div>
        <div class="flex-here">
          <div class="flex-left">
            <img
              id="bullet"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              max-height="25px"
            />
          </div>
          <div class="flex-right">
            Multiple membership plans to fit your lifestyle!
          </div>
        </div>
      </section>
      <section id="Video">
        <h2>Check us out!</h2>
        A sneak peek into our facility:
        <br />
        <iframe
          id="video"
          width="520"
          height="347"
          src="https://www.youtube.com/embed/Nw-ksH2r6AQ"
          frameborder="0"
          allowfullscreen
          alt="A video tour of our facility"
        >
        </iframe>
      </section>
      <section id="Pricing">
        <h2>Membership Plans</h2>
        <div class="flex-mem">
          <div class="flex-mem-box">
            <font size="+2">Basic Membership</font><br />
            <ul>
              <li>One Pokemon</li>
              <li>Food and berries provided</li>
            </ul>
            <em>$9.99/month</em>
          </div>
          <div class="flex-mem-box">
            <font size="+2">Silver Membership</font><br />
            <ul>
              <li>Up to Three Pokemon</li>
              <li>Food and berries provided</li>
              <li>Grooming and accessories included</li>
            </ul>
            <em>$19.99/month</em>
          </div>
          <div class="flex-mem-box">
            <font size="+2">Gold Membership</font><br />
            <ul>
              <li>Up to six Pokemon!</li>
              <li>Food and berries provided</li>
              <li>Grooming and accessories included</li>
              <li>Personal training for each Pokemon</li>
              <li>Breeding and egg hatching</li>
            </ul>
            <em>$29.99/month</em>
          </div>
        </div>
      </section>
      <form id="form" action="https://www.freecodecamp.com/email-submit">
        <p>Sign up for our newsletter!</p>
        <label for="email"><p>Email:</p><input name="email" id="email" type="email" placeholder="johnsmith@email.com" required></label>
        <input type="submit" id="submit">
      </form>
      <footer>
        <a href="../">Return to Project List</a> |
        <a href="https://www.nhcarrigan.com">Return to HomePage</a>
      </footer>
    </main>
  </body>
</html>
```

```css
body {
  background-color: #3a3240;
  color: white;
}
main {
  max-width: 750px;
  margin: 50px auto;
}
input {
  background-color: #92869c;
}
a:not(.nav-link) {
  color: white;
}
#header-img {
  max-height: 25px;
}
#nav-bar {
  position: fixed;
  width: 100%;
  text-align: center;
  top: 0%;
  background-color: #92869c;
}
h1 {
  text-align: center;
}
body {
  text-align: center;
}
footer {
  text-align: center;
}
#bullet {
  max-height: 25px;
}
.flex-here {
  display: flex;
  justify-content: center;
}
.flex-left {
  height: 25px;
}
.flex-mem {
  display: flex;
  justify-content: center;
}
.flex-mem-box {
  background-color: #92869c;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  margin: 10px;
  padding: 10px;
  color: black;
}
@media (max-width: 350px) {
  #video {
    width: 300;
    height: 200;
  }
}
```
