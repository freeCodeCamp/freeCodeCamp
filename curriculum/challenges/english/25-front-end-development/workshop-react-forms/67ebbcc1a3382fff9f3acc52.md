---
id: 67ebbcc1a3382fff9f3acc52
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

You can get into fleshing out the form now and handle the submission later.

Return a `div` element with a `className` of `form-wrap`. Inside the `div`, create a `h2` element with the text `Superhero Application Form` and a `p` element with the text `Please complete all fields`.

# --hints--

You should have a `div` element.

```js
assert.exists(document.querySelector("div"));
```

Your `div` element should have a `className` of `form-wrap`.

```js
assert.exists(document.querySelector("div.form-wrap"));
```

You should create an `h2` element inside your `div` element.

```js
assert.exists(document.querySelector(".form-wrap > h2"));
```

Your `h2` element should have the text `Superhero Application Form`.

```js
const h2El = document.querySelector("h2")
assert.equal(h2El.textContent, "Superhero Application Form");
```

You should create a `p` element inside your `div` element. Make sure it comes after the `h2`.

```js
assert.exists(document.querySelector(".form-wrap > h2 + p"));
```

Your `p` element should have the text `Please complete all fields`.

```js
const pEl = document.querySelector("p")
assert.equal(pEl.textContent, "Please complete all fields");
```

# --seed--

## --seed-contents--

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Superhero Application Form</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.0/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.0/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { SuperheroForm } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<SuperheroForm />);
    </script>
  </body>
</html>
```

```css
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(30deg, #ff9999 50%, #6699ff 50%)
}

.form-wrap {
  background-color: white;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px 10px black;
}

.form-wrap h2,
.form-wrap p {
  text-align: center;
}

.form-wrap p {
  position: relative;
  top: -18px;
}

.section {
  display: flex;
  margin-bottom: 30px;
}

.column {
  flex-direction: column;
}

.submit-wrap {
  text-align: center;
}

.submit-btn {
  display: block;
  margin: 0 auto;
}

.submit-btn:disabled {
  cursor: not-allowed;
}
```

```jsx
const { useState } = React;

export const SuperheroForm = () => {

  const [heroName, setHeroName] = React.useState('');
  const [realName, setRealName] = React.useState('');
  const [powerSource, setPowerSource] = React.useState('');
  const [powers, setPowers] = React.useState([]);

  return (
    --fcc-editable-region--
    <>
      
    </>
    --fcc-editable-region--
  )
};
```
