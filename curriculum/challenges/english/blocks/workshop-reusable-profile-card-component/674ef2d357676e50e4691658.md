---
id: 674ef2d357676e50e4691658
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Inside the `return` statement, remove the empty string, then create a `div` element with a `className` of `card`.

# --hints--

Your `Card` component should not render an empty string.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card);
  assert.notEqual(testElem.innerHTML, '');
```

You should create a `div` element with the `className` of `card` at the top level of your `Card` component.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card);
  const div = testElem.firstElementChild;
  assert.include([...div?.classList], 'card');
```

# --seed--

## --seed-contents--

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Reusable Card component</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
     <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { App } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
      );
    </script>
  </body>
</html>
```

```css
:root {
  --dark-grey: #1b1b32;
  --light-grey: #f5f6f7;
  --dark-orange: #f89808;
}

body {
  background-color: var(--dark-grey);
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.card {
  border: 5px solid var(--dark-orange);
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  background-color: var(--light-grey);
}

.card-title {
  border-bottom: 4px solid var(--dark-orange);
  width: fit-content;
}

@media (min-width: 768px) {
  .card {
    width: 300px;
  }
}
```

```jsx
export function Card({ name, title, bio }) {
  return (
  --fcc-editable-region--
    ""
  --fcc-editable-region--
  )
}
```
