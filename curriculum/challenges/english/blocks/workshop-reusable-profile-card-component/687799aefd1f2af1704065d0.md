---
id: 687799aefd1f2af1704065d0
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

You should now see a single card displayed on the page. But there is a piece missing inside the `Card` component.

As you recall from previous lessons, it is best practice to include a `key` prop when rendering a list of components like this:

```jsx
<div>
  {fruits.map(fruit => (
    <Card
      key={fruit.id}
      name={fruit.name}
      color={fruit.color}
    />
  ))}
</div>
```

The `key` prop helps React identify which items have changed, are added, or are removed. This improves performance and allows for more efficient updates.

Update the `Card` component to include a `key` prop with the value of `profile.id`.

# --hints--

You should add a `key` prop to the `Card` component. The value should be `profile.id`.

```js
assert.match(code, /<Card[^>]*key=\{\s*profile\.id\s*\}[^>]*\/?>/);
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
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games."
    }
  ];
  return (
    <div className="flex-container">
      --fcc-editable-region--
      {profiles.map((profile) => (
        <Card
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
      --fcc-editable-region--
    </div>
  );
}
```
