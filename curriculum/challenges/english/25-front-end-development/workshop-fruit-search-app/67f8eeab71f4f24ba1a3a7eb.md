---
id: 67f8eeab71f4f24ba1a3a7eb
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

After the form, add a `div` element with an `id` of `results` that will display the search results.

# --hints--

You should have a `div` element with the `id` of `results` after the form.

```js
const searchContainer = document.getElementById("search-container");
assert.exists(searchContainer);

const children = [...searchContainer.children];

assert.strictEqual(children.length, 2);
assert.strictEqual(children[0].tagName, "FORM");

const resultsDiv = children[1];
assert.strictEqual(resultsDiv.tagName, "DIV");
assert.strictEqual(resultsDiv.getAttribute("id"), "results");
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Fruits Search</title>
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
    import { FruitsSearch } from './index.jsx';
    ReactDOM.createRoot(document.getElementById('root')).render(<FruitsSearch />);
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

#search-container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#search-input {
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

#results {
  text-align: left;
  max-height: 150px;
  overflow-y: auto;
}
.result-item {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
```

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
    --fcc-editable-region--
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
    --fcc-editable-region--
  );
}
```
