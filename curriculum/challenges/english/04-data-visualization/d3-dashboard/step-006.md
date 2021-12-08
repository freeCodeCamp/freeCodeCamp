---
id: 5d8a4cfbe6b6180ed9a1c9e3
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

You are now looking at the stylesheet that you linked to earlier. At the top of this file, target the `body` of the HTML document and give it a `background-color` of `#ccc`.

# --hints--

test-text

```js
const body = code.match(/body\s*{[\s\S]+?[^}]}/g)[0];
assert(/background-color\s*:\s*#ccc\s*(;|})/gi.test(body));
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

## --seed-contents--

```html
<style>


</style>
```

# --solutions--

```html
<style>
body {
  background-color: #ccc;
}
</style>
```
