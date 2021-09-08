---
id: 612ea4c4993aba52ab4aa32e
title: Part 18
challengeType: 0
dashedName: part-18
---

# --description--

Now it is time to use the pseudo-selectors you prepared for earlier. To create the black keys, add a new `.key.black--key::after` selector. This will target the elements with the class `key black--key`, and select the pseudo-element after these elements in the HTML.

In the new selector, set the `content` property to `""`. This will make the pseudo-elements empty.

# --hints--

You should have a `.key.black--key::after` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key.black--key::after'));
```

Your `.key.black--key::after` selector should have a `content` property set to `""`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key.black--key::after')?.content === '""');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Responsive Web Design Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div id="piano">
      <div class="keys">
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#piano {
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
  background-color: #00471b;
}

.keys {
  width: 949px;
  height: 180px;
  padding-left: 2px;
  background-color: #040404;
}

.key {
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
  background-color: #ffffff;
}

--fcc-editable-region--

--fcc-editable-region--
```
