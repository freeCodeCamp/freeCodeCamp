---
id: 61967e74a8e3690ab6292daa
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Target the `body` element to set the `background` to a linear gradient angled 45 degrees clockwise, starting at `rgb(118, 201, 255)` and ending at `rgb(247, 255, 222)`.

# --hints--

You should use the `body` element selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('body'));
```

You should use the `background` property in the `body` selector.

```js
assert.isTrue(new __helpers.CSSHelp(document).isPropertyUsed('background'));
```

You should set `background` to `linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222))`.

```js
assert.include(['linear-gradient(45deg,rgb(118,201,255),rgb(247,255,222))', 'rgba(0,0,0,0)linear-gradient(45deg,rgb(118,201,255),rgb(247,255,222))repeatscroll0%0%'], new __helpers.CSSHelp(document).getStyle('body')?.getPropVal('background', true));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Penguin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
  </body>
</html>
```

```css
--fcc-editable-region--

--fcc-editable-region--
```
