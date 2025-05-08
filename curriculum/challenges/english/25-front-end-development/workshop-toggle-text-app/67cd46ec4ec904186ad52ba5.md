---
id: 67cd46ec4ec904186ad52ba5
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Below your `button` element, add a paragraph element with an `id` of `message` and the text `I love freeCodeCamp!`.

# --hints--

You should have a paragraph element.

```js
assert.exists(document.querySelector("p"));
```

Your paragraph element should have an `id` of `message`.

```js
assert.exists(document.getElementById("message"))
```

Your paragraph element should have the text `I love freeCodeCamp!`.

```js
const paraEl = document.querySelector("p");
assert.equal(paraEl?.textContent, "I love freeCodeCamp!");
```

Your paragraph element should be below the `button` element.

```js
const paraEl = document.querySelector("button + p");
assert.exists(paraEl);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Toggle Visibility</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
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
    import { ToggleApp } from "./index.jsx";
    ReactDOM.createRoot(document.getElementById("root")).render(<ToggleApp />);
  </script>
</body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

#toggle-container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#toggle-button {
  padding: 10px 20px;
  border: none;
  background: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

#toggle-button:hover {
  background: #0056b3;
}

#message {
  margin-top: 20px;
  font-size: 1.125rem;
  color: #333;
}
```

```jsx
const { useState } = React;

--fcc-editable-region--
export const ToggleApp = () => {
  return (
    <div id="toggle-container">
      <button id="toggle-button">Message</button>

    </div>
  );
};
--fcc-editable-region--
```
