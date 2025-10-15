---
id: 67cd59f6581d3a20c9cc6460
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

If you looked at the console, you might have been surprised to see the value of `false` instead of `true`. This is happening because React doesn't immediately update state. The state will only be updated on the next render cycle. 

It is a common mistake for developers new to React to place console statements right after a set function. So this is something to be aware when you are building out your React applications.

Since the `console.log()` is no longer needed, remove it from your `handleToggleVisibility` function.

# --hints--

You should no longer have the `console.log(isVisible);` in your code.

```js
assert.notMatch(code, /console\.log\s*\(\s*isVisible\s*\)\s*;?/);
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
const { useState, useEffect } = React;

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  --fcc-editable-region--
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  }
  --fcc-editable-region--

  useEffect(() => {
    handleToggleVisibility(); 
  }, [])

  return (
    <div id="toggle-container">
      <button id="toggle-button">Message</button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};
```
