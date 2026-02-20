---
id: 68720c179cd34be6793bfdf6
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

While your application works as expected, you typically would not add multiple `Card` components manually like this.

Remove the three `<Card />` components inside `<div className="flex-container">` element. In the next few steps, you will create an array of data and use the `map()` function to render the `Card` components which is the more common approach in React.

# --hints--

You should remove the three `<Card />` components from your code.

```js
const testElem = await __helpers.prepTestComponent(window.index.App);
const cards = testElem.querySelectorAll(".card");
assert.lengthOf(cards, 0);
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
    <div className="flex-container">
--fcc-editable-region--
      <Card
        name="Mark"
        title="Front-End developer"
        bio="I like to work with different front-end technologies and play video games."
      />
      <Card
        name="Tiffany"
        title="Engineering manager"
        bio="I have worked in tech for 15 years and love to help people grow in this industry."
      />
      <Card
        name="Doug"
        title="Back-End developer"
        bio="I have been a software developer for over 20 years and I love working with Go and Rust."
      />
--fcc-editable-region--
    </div>
  );
}
```
