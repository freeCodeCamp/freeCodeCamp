---
id: 673500b41af8500191febedc
title: How Do You Render Lists in React?
challengeType: 19
dashedName: how-do-you-render-lists-in-react
---

# --description--

Rendering lists is a fundamental task in React web apps, and is used for displaying data to users. In React, the `map` method is used to transform an array of data into an array of JSX elements that can be rendered in the UI.

Here is an example of a component called `FruitList` that displays a list of fruits:

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

In this example, the `map` function iterates over each item in the `fruits` array. For each fruit, it creates a new `li` element containing the fruit's name. The newly created array of `li` elements is then displayed inside the `ul` parent tags.

However, when rendering lists in React, it is important not to forget the `key` prop for each element in the list. The key must always be unique and it helps React identify which items have changed, been added, or been removed, which is essential for efficient rendering and updating the list.

If you forget the key, React will show a warning in the console, but it will not throw a fatal error. The application might still render and function, but you may encounter subtle bugs, especially when the list changes. These bugs can be difficult to debug because the UI might look correct initially.

A common mistake is to use the array index as the key, like this:

```jsx
{fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
```

While this silences the warning, it is generally considered an anti-pattern. Using the index as a key can cause issues when the list is reordered, sorted, or filtered. React uses the key to track elements. If the list order changes, React might incorrectly reuse component state or fail to update the DOM efficiently because the keys (indexes) stay the same even if the content at that index has changed.

The best practice is to use a stable, unique identifier for each item. This is typically an ID from your database, like a UUID or a database ID.

If your data doesn't have a unique ID, you can generate one when the data is created (e.g., using `crypto.randomUUID()` or a library like `uuid`), or use a combination of fields that are guaranteed to be unique. However, you should avoid generating keys on the fly during rendering (e.g., `key={Math.random()}`), as this will cause React to recreate the DOM elements on every render and reset their state.

Let's modify our example to include keys:

```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}
```

In this refactored example, we are creating a unique key for each list item by concatenating the fruit name with its index. This ensures that each list item has a distinct key, which helps React efficiently manage and update the list when items are added, removed, or reordered.

React also allows you to render more complex structures. For instance, you might have an array of objects representing users, each with multiple properties that you want to display:

```jsx
function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

In this example, we're creating a more complex JSX structure for each user, displaying both their name and email address. We're using the user's `id` as the `key`, which is a good practice.

In conclusion, rendering lists in React involves converting arrays of data into JSX elements, typically using the `map` function.

# --questions--

## --text--

What is the primary purpose of using the `key` prop when rendering lists in React?

## --answers--

To style list items.

### --feedback--

Think about what we said regarding React's rendering optimization.

---

To help React identify changes in the list efficiently.

---

To sort the list items.

### --feedback--

Think about what we said regarding React's rendering optimization.

---

To filter the list items.

### --feedback--

Think about what we said regarding React's rendering optimization.

## --video-solution--

2

## --text--

Which JavaScript method is typically used to transform an array of data into an array of JSX elements in React?

## --answers--

`forEach()`

### --feedback--

Recall the method we consistently used in our examples for creating JSX elements from array items.

---

`reduce()`

### --feedback--

Recall the method we consistently used in our examples for creating JSX elements from array items.

---

`map()`

---

`filter()`

### --feedback--

Recall the method we consistently used in our examples for creating JSX elements from array items.

## --video-solution--

3

## --text--

When rendering a list of items that have unique IDs, what is considered the best practice for the `key` prop?

## --answers--

Use the index of the item in the array.

### --feedback--

Remember what we said about using stable and unique identifiers for keys.

---

Use a random number.

### --feedback--

Remember what we said about using stable and unique identifiers for keys.

---

Use the item's unique ID.

---

Use the item's name or title.

### --feedback--

Remember what we said about using stable and unique identifiers for keys.

## --video-solution--

3
