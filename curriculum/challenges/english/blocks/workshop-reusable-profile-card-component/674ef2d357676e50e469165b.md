---
id: 674ef2d357676e50e469165b
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Inside your return statement, replace the empty string with a `div` element with a `className` property of `flex-container`.

# --hints--

Your `App` component should not render an empty string.

```js
  const testElem = await __helpers.prepTestComponent(window.index.App);
  assert.notEqual(testElem.innerHTML, '');
```

Your `App` component should return a single `div` element.

```js
  const testElem = await __helpers.prepTestComponent(window.index.App);
  assert.equal(testElem.firstElementChild?.tagName, 'DIV');
  assert.lengthOf(testElem.children, 1);
```

Your `div` should have a `className` property of `flex-container`.

```js
  const testElem = await __helpers.prepTestComponent(window.index.App);
  assert.include([...testElem.firstElementChild.classList], 'flex-container');
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
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  return (
  --fcc-editable-region--
    ""
  --fcc-editable-region--
  );
}
```
