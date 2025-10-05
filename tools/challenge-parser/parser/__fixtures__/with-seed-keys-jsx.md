# --seed--

## --seed-contents--

```html
<html>
  <body>
  </body>
</html>
```

::id{#key-for-css}

```css
body {
  background: green;
}
```

::id{#key-for-jsx}

```jsx
var x = 'y';

/* comment */
const Button = () => {
  return <button> {/* another comment! */} text </button>;
};
```

## --before-user-code--

```jsx
function setup() {}
```

## --after-user-code--

```jsx
function teardown(params) {
  // after
}
```
