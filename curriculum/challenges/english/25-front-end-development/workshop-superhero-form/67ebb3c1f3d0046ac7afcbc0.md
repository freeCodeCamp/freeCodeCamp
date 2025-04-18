---
id: 67ebb3c1f3d0046ac7afcbc0
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you'll learn how to work with forms in React by building a superhero application form.

The starting points of the project like the CSS, `useState` import, and the base function have been created for you.

So, begin by creating the state variables and setter functions you need: `heroName`, `realName`, `powerSource`, and `powers`.

`powers` should start with an empty array, and the others start with empty strings.

# --hints--

You should use the array destructuring syntax to set a `heroName` state variable and a `setHeroName` setter.

```js
assert.match(code, /(const|let)\s+\[\s*heroName\s*,\s*setHeroName\s*\]/);
```

Your `heroName` `useState` should have an initial value of empty string.

```js
assert.match(code, /(const|let)\s+\[\s*heroName\s*,\s*setHeroName\s*\]\s*=\s*(React.)?useState\(("|')\s*("|')\)?/)
```

You should use the array destructuring syntax to set a `realName` state variable and a `setRealName` setter.

```js
assert.match(code, /(const|let)\s+\[\s*realName\s*,\s*setRealName\s*\]/);
```

Your `realName` `useState` should have an initial value of empty string.

```js
assert.match(code, /(const|let)\s+\[\s*realName\s*,\s*setRealName\s*\]\s*=\s*(React.)?useState\(('|")\s*('|")\);?/)
```

You should use the array destructuring syntax to set a `powerSource` state variable and a `setPowerSource` setter.

```js
assert.match(code, /(const|let)\s+\[\s*powerSource\s*,\s*setPowerSource\s*\]/);
```

Your `powerSource` `useState` should have an initial value of empty string.

```js
assert.match(code, /(const|let)\s+\[\s*powerSource\s*,\s*setPowerSource\s*\]\s*=\s*(React.)?useState\(('|")\s*('|")\);?/)
```

You should use the array destructuring syntax to set a `powers` state variable and a `setPowers` setter.

```js
assert.match(code, /(const|let)\s+\[\s*powers\s*,\s*setPowers\s*\]/);
```

Your `powers` `useState` should have an intial value of empty array.

```js
assert.match(code, /(const|let)\s+\[\s*powers\s*,\s*setPowers\s*\]\s*=\s*(React.)?useState\(\[\s*\]\);?/)
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
  padding: 0.4rem 0.5rem;
  border: 1px solid black
}

.submit-btn:hover {
  cursor: pointer;
  background-color: #f3f3f3;
}

.submit-btn:disabled {
  cursor: not-allowed;
}
```

```jsx
const { useState } = React;

export const SuperheroForm = () => {
  --fcc-editable-region--

  --fcc-editable-region--

  return (
    <>

    </>
  )
};
```
