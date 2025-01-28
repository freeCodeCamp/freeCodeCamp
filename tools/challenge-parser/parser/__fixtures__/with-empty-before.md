# --description--

Paragraph 1

```html
code example
```

# --instructions--

Paragraph 0

```html
code example 0
```

# --hints--

First hint

```js
// test code
```

Second hint with <code>code</code>

```js
// more test code
```

Third *hint* with <code>code</code> and `inline code`

```js
// more test code
if(let x of xs) {
  console.log(x);
}
```

# --seed--

## --before-user-code--

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
``
