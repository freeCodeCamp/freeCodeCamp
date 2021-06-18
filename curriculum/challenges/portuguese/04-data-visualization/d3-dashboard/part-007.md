---
id: 5d8a4cfbe6b6180ed9a1c9e4
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

Next, target the `dashboard` class you created and give it a `width` of `980px` and a `height` of `500px`.

# --hints--

test-text

```js
const dashboard = $('.dashboard');
assert(
  dashboard.css('width') === '980px' && dashboard.css('height') === '500px'
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
}
</style>
```
