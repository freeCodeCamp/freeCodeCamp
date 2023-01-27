---
id: 587d78af367417b2b2512b04
title: 製作一個產品登錄頁
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**目標：** 構建一個功能類似於 <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a> 的應用程序

**需求：**

1. 你的產品登錄頁應該有一個 `id="header"` 的 `header` 元素
1. 你可以在 `header` 元素中看到一個 `id="header-img"` 的圖像（比如一個 logo）
1. 在 `#header` 元素中，你可以看到一個 `id="nav-bar"` 的 `nav` 元素
1. 在 `nav` 元素中，你可以看到至少三個可點擊的元素，每個元素的 class 爲 `nav-link`
1. 當你點擊 `nav` 內的 `.nav-link` 按鈕時，應滾動到登錄頁相應的部分
1. 你可以觀看一個 `id="video"` 的嵌入的產品視頻
1. 你的登錄頁有一個 `id="form"` 的 `form` 元素
1. 在表單中，應存在一個 `id="email"` 的 `input` 輸入框供用戶填寫郵箱地址
1. 在 `#email` 輸入框內應有描述該區域用途的佔位符文本
1. `#email` 輸入框應該用 HTML5 驗證來確認輸入的內容是否爲郵箱地址
1. 在表單中，有一個 `id="submit"` 的 `input` 提交按鈕
1. 當你點擊 `#submit` 元素時，郵箱會被提交到一個靜態頁面 (使用這個模擬 URL：`https://www.freecodecamp.com/email-submit`)
1. 導航欄應該始終位於視口的頂部
1. 你的產品登陸頁面至少要有一個媒體查詢
1. 你的產品登陸頁面應該至少使用一次 CSS flexbox

完成需求並通過下面的所有測試來完成這個項目。 賦予它你自己的個人風格。 編程愉快！

**注意：** 請在你的 HTML 中添加 `<link rel="stylesheet" href="styles.css">` 以鏈接你的樣式表並應用你的 CSS

# --hints--

你應該有一個 `id` 爲 `header` 的 `header` 元素。

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

你應該有一個 `id` 爲 `header-img` 的 `img` 元素。

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

你的 `#header-img` 元素應該是 `#header` 元素的子元素。

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

你的 `#header-img` 應該有一個 `src` 屬性。

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

你的 `#header-img` 的 `src` 值應該是一個有效的 URL（以 `http` 開頭）。

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

你應該有一個 `nav` 元素，其 `id` 爲 `nav-bar`。

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

你的 `#nav-bar` 應該是 `#header` 的後代。

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

`#nav-bar` 中應該至少有 3 個 `.nav-link` 元素。

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

每個 `.nav-link` 元素都應該有一個 `href` 屬性。

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

每個 `.nav-link` 元素都應該鏈接到登錄頁上的相應元素（有一個 `href` 值是另一個元素的 id。例如 `#footer`）。

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

你應該有一個 `video` 或 `iframe` 元素，其中 `id` 爲 `video`。

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

你的 `#video` 應該有一個 `src` 屬性。

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

你應該有一個 `form` 元素，其 `id` 爲 `form`。

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

你應該有一個 `input` 元素，其中 `id` 爲 `email`。

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#email` 應該是 `#form` 的後代。

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

你的 `#email` 應該具有帶有佔位符文本的 `placeholder` 屬性。

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你的 `#email` 應該通過將其 `type` 設置爲 `email` 來使用 HTML5 驗證。

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

你應該有一個 `input` 元素，其中 `id` 爲`submit`。

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#submit` 應該是 `#form` 的後代。

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

你的 `#submit` 應該具有 `submit` 的 `type`。

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

你的 `#form` 應該具有 `action` 屬性爲 `https://www.freecodecamp.com/email-submit`。

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

你的 `#email` 元素應該具有值爲 `email` 的 `name` 屬性。

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

你的 `#nav-bar` 應該始終位於視口的頂部。

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

你的產品登陸頁面至少要有一個媒體查詢。

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

你的產品登陸頁面應該至少使用一次 CSS Flexbox。

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
