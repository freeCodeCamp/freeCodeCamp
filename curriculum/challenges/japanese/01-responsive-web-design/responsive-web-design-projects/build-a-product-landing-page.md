---
id: 587d78af367417b2b2512b04
title: プロダクトのランディングページを作成する
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**目標:** <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a> と似た機能を持つアプリを作成します

**ユーザーストーリー:**

1. このプロダクトランディングページには、`id="header"` を持つ `header` 要素があります
1. `header` 要素内に、`id="header-img"` を持つ画像があります (ロゴのような画像を表示すると良いでしょう)
1. `#header` の要素内には、`id="nav-bar"` を持つ `nav` 要素があります
1. `nav` 要素内に少なくとも 3 つ、クリック可能な `nav-link` クラスの要素があります
1. `nav` 要素内の `.nav-link` ボタンをクリックすると、ランディングページの対応するセクションに移動します
1. `id="video"` を持つ、プロダクトに関する埋め込み動画を見ることができます
1. このプロダクトランディングページには、`id="form"` を持つ `form` 要素があります
1. フォーム内には、E メールアドレスが入力可能な `id="email"` を持つ `input` 欄があります
1. `#email` 入力欄には、その用途をユーザーに知らせるためのプレイスホルダーテキストが表示されます
1. `#email` 入力欄は、入力されたテキストがメールアドレスであるか確認するために HTML5 のバリデーションを使用します
1. フォーム内には、`id="submit"` を持つ送信ボタンの `input` があります
1. `#submit` 要素をクリックすると、email の情報が静的ページに送信されます (このモック URL を使用してください: `https://www.freecodecamp.com/email-submit`)
1. ナビゲーションバーは常にビューポートの上部に表示されます
1. このプロダクトランディングページには、少なくとも 1 つのメディアクエリが必要です
1. このプロダクトランディングページでは、少なくとも 1 つの CSS フレックスボックスが使用されている必要があります

上記のユーザーストーリーを満たし、以下のすべてのテストが通るようにして、このプロジェクトを完成させてください。 あなた独自のスタイルを加えましょう。 ハッピーコーディング！

**注:** スタイルシートをリンクして CSS を適用するため、HTML のコード内に必ず `<link rel="stylesheet" href="styles.css">` を追加してください。

# --hints--

`id` が `header` である `header` 要素が 1 つ必要です。

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

`id` が `header-img` である `img` 要素が 1 つ必要です。

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

`#header-img` は `#header` の子孫要素である必要があります。

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

`#header-img` には `src` 属性が必要です。

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

`#header-img` の `src` の値は (`http` から始まる) 有効な URL である必要があります。

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

`id` が `nav-bar` である `nav` 要素が 1 つ必要です。

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

`#nav-bar` は `#header` の子孫要素である必要があります。

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

`#nav-bar` の中に最低 3 つの `.nav-link` 要素が必要です。

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

各 `.nav-link` 要素には `href` 属性が必要です。

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

各 `.nav-link` 要素は、ランディングページ内の対応する要素にリンクされている必要があります (対応する要素の id (例えば `#footer`) が値に設定された `href` を持つ必要があります) 。

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

`id` が `video` である、`video` または `iframe` 要素が 1 つ必要です。

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

`#video` には `src` 属性が必要です。

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

`id` が `form` である `form` 要素が 1 つ必要です。

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

`id` の値が `email` に設定されている `input` 要素が 1 つ必要です。

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

`#email` は `#form` の子孫要素である必要があります。

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

`#email` は、プレイスホルダーテキストが設定された `placeholder` 属性を持つ必要があります。

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`#email` は、`type` を `email` に設定することによって、HTML5 のバリデーションが使用されている必要があります。

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

`id` が `submit` である `input` 要素が 1 つ必要です。

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

`#submit` は `#form` の子孫要素である必要があります。

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

`#submit` は `type` が `submit` に設定されている必要があります。

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

`#form` の `action` 属性には `https://www.freecodecamp.com/email-submit` を設定する必要があります。

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

`#email` の `name` 属性は `email` である必要があります。

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

`#nav-bar` は常にビューポートの上部にある必要があります。

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

プロダクトランディングページには、少なくとも 1 つのメディアクエリが使われている必要があります。

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

プロダクトランディングページには、少なくとも 1 つの CSS フレックスボックスが使われている必要があります。

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
