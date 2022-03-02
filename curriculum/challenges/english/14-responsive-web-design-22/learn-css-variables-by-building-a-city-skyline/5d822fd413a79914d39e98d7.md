---
id: 5d822fd413a79914d39e98d7
title: Step 15
challengeType: 0
dashedName: step-15
---

# --description--

To use a variable, put the variable name in parentheses with `var` in front of them like this: `var(--variable-name)`. Add your variable as the value of the `background-color` property of the `.bb1a` class. Whatever value you gave the variable will be applied to whatever property you use it on. In this case, your variable has the value of `#999`. So `#999` will be used as the value for the `background-color` property.

# --hints--

The `background-color` of the `bb1a` element should be set.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1a')?.backgroundColor)
```

You should use `var(--building-color1)` to set the `background-color` of the `.bb1a` element.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1a')?.backgroundColor.trim(), 'var(--building-color1)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />   
  </head>

  <body>
    <div class="background-buildings">
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
    </div>
  </body>
</html>
```

```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.background-buildings {
  width: 100%;
  height: 100%;
}

.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  --building-color1: #999;
}
--fcc-editable-region--
.bb1a {
  width: 70%;
  height: 10%;
}
--fcc-editable-region--
.bb1b {
  width: 80%;
  height: 10%;
}

.bb1c {
  width: 90%;
  height: 10%;
}

.bb1d {
  width: 100%;
  height: 70%;
}
    
```
