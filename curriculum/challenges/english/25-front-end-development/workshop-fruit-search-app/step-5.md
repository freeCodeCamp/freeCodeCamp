---
id: 65aa8fb508c3c3ac9c08f4d5
title: Step 5 - Controlled Inputs
challengeType: 0
forumTopicId: null
---

# --description--

Now that the search input is inside your component's state, you need to update it properly whenever the user types. This is called making the input a **controlled input**.

# --instructions--

Update the input's `onChange` handler so it updates the state using the event's value.

Remember:

```js
onChange={(e) => setSearch(e.target.value)}
```

# --seed--

```jsx
function FruitSearchApp() {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <input
        value={search}
        onChange={/* your code here */}
        placeholder="Search for a fruit..."
      />
    </div>
  );
}
```

# --solution--

```jsx
function FruitSearchApp() {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a fruit..."
      />
    </div>
  );
}
```
