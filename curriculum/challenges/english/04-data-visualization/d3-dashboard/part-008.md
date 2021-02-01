---
id: 5d8a4cfbe6b6180ed9a1c9e5
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

Give the dashboard a `background-color` of `white` and a `box-shadow` of `5px 5px 5px 5px #888` to give it a little depth.

# --hints--

test-text

```js
const dashboard = $('.dashboard');
assert(
  dashboard.css('background-color') === 'rgb(255, 255, 255)' &&
    dashboard.css('box-shadow') === 'rgb(136, 136, 136) 5px 5px 5px 5px'
);
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
}
</style>
```
