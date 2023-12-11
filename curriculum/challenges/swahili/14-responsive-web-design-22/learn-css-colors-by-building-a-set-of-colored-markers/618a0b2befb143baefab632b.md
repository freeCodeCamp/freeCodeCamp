---
id: 618a0b2befb143baefab632b
title: Hatua ya 37
challengeType: 0
dashedName: step-37
---

# --description--

Ona kwamba rangi nyekundu na cyan zinang'aa sana karibu na kila mmoja. Tofauti hii inaweza kusumbua ikiwa inatumika kupita kiasi kwenye tovuti, na inaweza kufanya maandishi kuwa magumu kusomeka ikiwa yamewekwa kwenye mandharinyuma yenye rangi inayosaidiana.

Ni vyema kufanya mazoezi ya kuchagua rangi moja kama rangi kuu na kutumia rangi yake inayosaidiana kama lafudhi ili kuleta usikivu wa maudhui fulani kwenye ukurasa.

Kwanza, katika sheria ya `h1`, tumia kitendakazi cha `rgb` kuweka `background-color` kuwa cyan.

# --hints--

Hupaswi kuondoa au kurekebisha kipengele cha sifa ya `text-align` au thamani yake.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

Sheria yako ya CSS ya `h1` inapaswa kuwa na sifa ya `background-color` iliyowekwa kuwa `rgb(0, 255, 255)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor === 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
h1 {
  text-align: center;
}
--fcc-editable-region--

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
