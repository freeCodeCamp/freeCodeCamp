---
id: 6877ffd8e0da9de783a1abdd
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

Use the `map()` method to iterate over the `profiles` array, using `profile` as the parameter name. For each profile, return a `div` element that displays the profile's `name`.

```jsx
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <ul>
      {fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
  );
}
```

# --hints--

You should use the `map()` method on the `profiles` array.

```js
assert.match(code, /profiles\.map\s*\(/);
```

Your `map()` method should use `profile` as the parameter.

```js
assert.match(code, /profiles\.map\s*\(\s*(profile|\(\s*profile\s*\))\s*=>/);
```

You should return a `div` element in your `map()` method.

```js
async () => {
  const testElem = await __helpers.prepTestComponent(window.index.App);
  const profileDivs = testElem.querySelectorAll('.flex-container > div');
  assert.isAtLeast(profileDivs.length, 1);
}
```

The `div` element should display the profile's `name`.

```js
async () => {
  const testElem = await __helpers.prepTestComponent(window.index.App);
  const div = testElem.querySelector('.flex-container > div');
  assert.equal(div.textContent.trim(), 'Mark');
}
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
  const profiles = [
  	{ id: "1", name: "Mark", title: "Frontend developer", bio: "I like to work with different frontend technologies and play video games." }
	];
  return (
    <div className="flex-container">
    	--fcc-editable-region--
      
      --fcc-editable-region--
    </div>
  );
}
```
