# --seed--

## --before-user-code--

```css
body {
  etc: ''
}
```

```html
<!-- comment -->
```

## --seed-contents--

```html
<html>
  <body>
  </body>
</html>
```

```css
body {
  background: green;
}
```

```js
var x = 'y';
```

## --after-user-code--

```css
body {
  background: blue;
}
```

```js
function teardown(params) {
  // after
}
```


# --solutions--

::id{#html-key}

```html
<html>
  <body>
  </body>
</html>
```

```css
body {
  background: white;
}
```

```js
var x = 'y';
```

---

::id{#html-key}

```html
<html>
  <body>
  solution number two
  </body>
</html>
```

```css
body {
  background: white;
}
```

```js
var x = 'y';
```

---

::id{#html-key}

```html
<html>
  <body>
  </body>
</html>
```

```css
body {
  background: white;
}
```

```js
var x = 'y3';
```
