---
id: 646cecc9eb5c4f4f73dafd07
title: Step 23
challengeType: 0
dashedName: step-23
---

# --description--

Move the left ear into position by setting a position of `absolute`, a `top` of `-26px`, and a `left` of `-31px`.

# --hints--

Il selettore `.cat-left-ear` dovrebbe avere una proprietà `position` con il valore `absolute`. Non dimenticare di aggiungere il punto e virgola.

```js
assert(new __helpers.CSSHelp(document).getStyle('.cat-left-ear')?.position === 'absolute')
```

Il selettore `.cat-left-ear` dovrebbe avere una proprietà `top` impostata su `-26px`

```js
assert(new __helpers.CSSHelp(document).getStyle('.cat-left-ear')?.top === '-26px')
```

Il selettore `.cat-left-ear` dovrebbe avere una proprietà `left` impostata su `-31px`

```js
assert(new __helpers.CSSHelp(document).getStyle('.cat-left-ear')?.left === '-31px')
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>fCC Cat Painting</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <main>
      <div class="cat-head">
        <div class="cat-ears">
          <div class="cat-left-ear">
            <div class="cat-left-inner-ear"></div>
          </div>
          <div class="cat-right-ear">
            <div class="cat-right-inner-ear"></div>
          </div>
        </div>
      </div>
    </main>
</body>
</html>
```

```css
* {
  box-sizing: border-box;
}

body {
  background-color: #c9d2fc;
}

.cat-head {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: linear-gradient(#5e5e5e 85%, #45454f 100%);
  width: 205px;
  height: 180px;
  border: 1px solid #000;
  border-radius: 46%;
}

--fcc-editable-region--
.cat-left-ear {

  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 70px solid #5e5e5e;
}
--fcc-editable-region--
```
