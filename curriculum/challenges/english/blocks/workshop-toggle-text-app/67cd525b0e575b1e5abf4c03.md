---
id: 67cd525b0e575b1e5abf4c03
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

As mentioned earlier, the set function is responsible for updating state. A common approach when toggling between boolean state values is to update the state in this way:

```js
const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

// updating state
setIsUserLoggedIn(!isUserLoggedIn);
```

The following example is using the set function called `setIsUserLoggedIn` to update the login status for the user. It is common practice to use the logical NOT (`!`) operator to toggle between `true` and `false`. Since the initial value is `false`, applying the `!` operator will change it to `true`.

Inside of the `handleToggleVisibility` function, use `setIsVisible` to update the visibility state using the logical NOT (`!`) operator. 

# --hints--

You should use `setIsVisible` to update the visibility for the text. Refer to the example if you need help.

```js
assert.match(code, /setIsVisible\s*\(\s*!isVisible\s*\)/);  
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
  const [isVisible, setIsVisible] = useState(false);
  
  --fcc-editable-region--
  const handleToggleVisibility = () => {

  }
  --fcc-editable-region--

  return (
    <div id="toggle-container">
      <button id="toggle-button">Message</button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};
```
