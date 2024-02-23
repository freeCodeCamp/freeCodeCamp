---
id: 5d8a4cfbe6b6180ed9a1c9e6
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

Now you can see your dashboard element. Center it by adding a `margin` of `auto` to it.

# --hints--

test-text

```js
const dashboard = code.match(/.dashboard\s*{[\s\S]+?[^}]}/g)[0];
assert(/margin\s*:\s*auto\s*(;|})/g.test(dashboard));
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
body {
  background-color: #ccc;
}

.dashboard {
  width: 980px;
  height: 500px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #888;


}
</style>
```

# --solutions--

```html
<style>
body {
  background-color: #ccc;
}

.dashboard {
  width: 980px;
  height: 500px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #888;
  margin: auto;
}
</style>
```
