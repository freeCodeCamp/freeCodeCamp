::import{component="Script" from="./script.md" }
::import{component="Second" from="./script-two.md" }
::import

# --description--

Paragraph 1 ::import

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


# --seed--

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

::use{component="Second"}

::id{#custom-name}

```js
var x = 'y';
```

::use{component="Script"}
