---
id: 674ef2d357676e50e4691659
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Inside the `div` element, create an `h2` element and interpolate the `name` prop as its text.

Also, inside the `div`, create a paragraph with the `className` of `card-title` to interpolate the `title` prop, and another paragraph to interpolate the `bio` prop.

# --hints--

You should create an `h2` element inside your `div` element.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card);
  const h2Elem = testElem.querySelector('div > h2');
  assert.exists(h2Elem);
```

Your `h2` element should have `{name}` as its text content.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card, { name: 'nameVal' });
  const h2Elem = testElem.querySelector('div > h2');
  // trimming because we don't need to be picky about whitespace
  assert.equal(h2Elem.textContent.trim(), 'nameVal');
```

You should create a `p` tag with the `className` of `card-title` inside your `div` element.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card);
  const pElem = testElem.querySelector('div > p.card-title');
  assert.exists(pElem);
```

Your `p` element with `className` of `card-title` should have `{title}` as its text content.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card, { title: 'titleVal' });
  const pElem = testElem.querySelector('div > p.card-title');
  // trimming because we don't need to be picky about whitespace
  assert.equal(pElem.textContent.trim(), 'titleVal');
```

You should create another `p` element with `{bio}` as its text.

```js
  const testElem = await __helpers.prepTestComponent(window.index.Card, {title: 'titleVal', bio: 'bioVal' });
  // trimming because we don't need to be picky about whitespace
  const texts = [...testElem.querySelectorAll('div > p')].map((p) => p.textContent.trim());
  const bioText = texts.find((text) => text.includes('bioVal'));
  assert.exists(bioText);
  assert.equal(bioText, 'bioVal');
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
    <div className="card">
      
    </div>
    --fcc-editable-region--
  )
}
```
