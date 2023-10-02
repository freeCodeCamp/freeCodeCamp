::import{component="Script" from="./script.md" }

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

::id{#test-id-1}

First hint

```js
// test code
```

::id{#test-id-2}

Second hint with <code>code</code>

```js
// more test code
```


# --seed--

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

::id{#custom-name}

```js
var x = 'y';
```

::use{component="Script"}
