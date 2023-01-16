---
id: 587d78af367417b2b2512b04
title: أنشئ صفحة لعرض لمنتج
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Objective:** كم ببناء تطبيق يشبه وظيفيا إلي <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>

**المطلبيات:**

1. صفحة هبوط المنتج الخاصة بي يجب أن تحتوي على عنصر `header` مع عنصر مقابل `id="header"`
1. يمكنك رؤية صورة داخل عنصر `header` مع `id="header-img"` (الشعار من شأنه أن يجعل صورة جيدة هنا)
1. داخل عنصر `#header` يمكنك رؤية عنصر `nav` مع `id="nav-bar"`
1. يمكنك أن ترى على الأقل ثلاثة عناصر قابلة للنقر داخل عنصر `nav` كل منها مع class بأسم `nav-link`
1. عندما تنقر على زر `.nav-link` في عنصر `nav` ، يتم نقلك إلى القسم المقابل من صفحة الهبوط
1. يمكنك مشاهدة فيديو منتج مدمج مع `id="video"`
1. صفحة هبوط المنتج الخاصة بك يجب أن تحتوي على عنصر `form` مع `id="form"`
1. ضمن الـ form، هناك حقل `input` مع `id="email"` حيث يمكنك إدخال عنوان البريد الإلكتروني
1. حقل الإدخال `#email` يجب أن يحتوي على placeholder text للسماح للمستخدم بمعرفة الغرض من الحقل
1. حقل الإدخال `#email` يستخدم HTML5 validation لتأكيد أن النص الذي تم إدخاله هو عنوان بريد إلكتروني
1. ضمن الـ form، هناك `input` للـ submit مع `id="submit"`
1. عندما تنقر على العنصر `#submit`، يتم إرسال بريد الإلكتروني إلى صفحة ثابتة (استخدم عنوان URL الوهمي:`https://www.freecodecamp.com/email-submit`)
1. عنصر navbar يجب أن يكون دائما في الجزء العلوي من الـ viewport
1. يجب أن تحتوي صفحة هبوط المنتج على media query واحد على الأقل
1. صفحة هبوط المنتج الخاص بك يجب أن تستخدم CSS flexbox مرة واحدة على الأقل

أكمل المطلبيات و قم باجتياز جميع الاختبارات أدناه لإكمال هذا المشروع. أعطيها أسلوبك الشخصي الخاص. برمجة سعيدة!

**ملاحظة:** تيقن من إضافة `<link rel="stylesheet" href="styles.css">` في HTML الخاص بك لربط ورقة الأسلوب الخاصة بك وتطبيق CSS

# --hints--

يجب أن تحتوي صفحتك على عنصر `header` مع `id` بقيمة `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

يجب أن يكون لديك عنصر `img` مع `id` بقيمة `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

يجب أن يكون `#header-img` تابعا إلى `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

يجب أن يحتوي `#header-img` على سمة `src`.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

يجب أن يحتوي `#header-img` قيمة `src` ويكون عنوان URL صالح (يبدأ بكلمة `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

يجب أن يكون لديك عنصر `nav` مع `id` بقيمة `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

يجب أن يكون `#nav-bar` تابعا إلى `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

يجب أن يكون لديك 3 عناصر `.nav-link` على الأقل داخل `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

كل عنصر `.nav-link` يجب أن يحتوي على سمة `href`.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

يجب أن يرتبط كل عنصر من عناصر `.nav-link` بعنصر مقابل في الصفحة المقصودة (له `href` بقيمة id عنصر آخر، على سبيل المثال `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

يجب أن يكون لديك عنصر `video` أو `iframe` مع `id` بقيمة `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

يجب أن يحتوي `#video` على سمة `src`.

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

يجب أن يكون لديك عنصر `form` مع `id` بقيمة `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

يجب أن يكون لديك عنصر `input` مع `id` بقيمة `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

يجب أن يكون `#email` الخاص بك تابعا إلى `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

يجب أن يحتوي `#email` على سمة `placeholder` مع نص نائب.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

يجب أن يستخدم `#email` الخاص بك محقق HTML5 عن طريق تعيين `type` إلى `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

يجب أن يكون لديك عنصر `input` مع `id` بقيمة `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

يجب أن يكون `#submit` الخاص بك تابعا إلى `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

يجب أن يحتوي `#submit` الخاص بك `type` بقيمة `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

يجب أن تحتوي `#form` على سمة `action` بقيمة `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

يجب أن يحتوي `#email` الخاص بك على سمة `name` بقيمة `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

يجب أن يكون عنصر `#nav-bar` الخاص بك دائما في الجزء العلوي من نافذة العرض.

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

يجب أن تحتوي صفحة هبوط المنتج على media query واحد على الأقل.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

صفحة هبوط المنتج الخاص بك يجب أن تستخدم CSS flexbox مرة واحدة على الأقل.

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
