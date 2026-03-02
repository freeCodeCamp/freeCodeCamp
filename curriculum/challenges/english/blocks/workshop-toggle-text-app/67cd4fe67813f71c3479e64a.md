---
id: 67cd4fe67813f71c3479e64a
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

One way to show the paragraph text is to change the initial value for the `useState` hook.

Change the current `useState` value from `false` to `true` and you should see that the paragraph text is now displaying on the screen. 

# --hints--

You should change the initial value for `useState` to `true`.

```js
  const abuseState = __helpers.spyOn(React, "useState");
  const script = [...document.querySelectorAll("script")].find((s) => s.dataset.src ===  "index.jsx").innerText;
  const exports = {};
  const _a = eval(script);
  const _b = await __helpers.prepTestComponent(exports.ToggleApp);
  assert.equal(abuseState.calls[0]?.[0], true);
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

export const ToggleApp = () => {
  --fcc-editable-region--
  const [isVisible, setIsVisible] = useState(false);
  --fcc-editable-region--

  return (
    <div id="toggle-container">
      <button id="toggle-button">Message</button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};
```
