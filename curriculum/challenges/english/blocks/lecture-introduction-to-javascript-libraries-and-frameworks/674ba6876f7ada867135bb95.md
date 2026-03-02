---
id: 674ba6876f7ada867135bb95
title: How Do Default and Named Exports Work in React Components?
challengeType: 19
dashedName: how-can-you-import-and-export-components-in-react
---

# --description--

In earlier lessons, you learned how to work with imports and exports in JavaScript. In this lesson, we will take a look at how to import and export components in React.

An export makes a component available to other files. An import allows a file to use a component that was exported elsewhere. In React projects, this is how components are reused and combined to build user interfaces.

In this lesson, you will learn how to export React components using default exports and named exports, and how to import them where they are needed.

In this example, we have a `Cat` component that belongs in a file called `Cat.jsx`. For the file extension, we are using the `.jsx` file extension because this file is mainly working with JSX.

This `Cat` component returns a JSX markup with a title and image for a cat called Mr. Whiskers:

```jsx
function Cat() {
  return (
    <div className="card">
      <h2>Mr. Whiskers</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
        alt="Tuxedo cats running on dirt ground."
      />
    </div>
  );
}
```

If we want to use our `Cat` component in another file, we need to first export it like this:

```jsx
function Cat() {
  return (
    <div className="card">
      <h2>Mr. Whiskers</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
        alt="Tuxedo cats running on dirt ground."
      />
    </div>
  );
}

export default Cat;
```

We are using the `default` keyword because this will be the default export from the module. You can also choose to export the component on the same line as the component definition like this:

```jsx
export default function Cat() {
  return (
    <div className="card">
      <h2>Mr. Whiskers</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
        alt="Tuxedo cats running on dirt ground."
      />
    </div>
  );
}
```

You can choose to import child components in other parent component files, or import them in the root component file. For this example, we will import the `Cat` component inside the root component file.

Every React project will have a top-level component, typically called `App.jsx`:

```jsx
export default function App() {
  return (
    // return component here
  );
}
```

This file is usually located in the `src` directory of your project. You’ll learn more about common project layouts in a future lesson.

To use the `Cat` component inside the root `App` component, you will need to import it like this:

```jsx
import Cat from "./Cat";

export default function App() {
  return (
    // return component here
  );
}
```

Now, you can return the `Cat` component inside the `App` component like this:

```jsx
import Cat from "./Cat";

export default function App() {
  return (
    <Cat />
  );
}
```

This approach works well when a file is responsible for exporting a single main component, keeping the import syntax simple and easy to read. Remember, a file can only have one default export, which makes it ideal for a file that primarily contains a single component.


Now that you know how to use default exports, let's look at named exports. Named exports allow a file to share multiple components or functions. Unlike default exports, these must be imported using the exact name they were exported with (unless you rename them using `as` term). 

This is useful when a file serves as a library of components. For example, here is a file containing two components, Cat and Dog:

```jsx
// Animals.jsx
export function Cat() {
  return <h2>Mr. Whiskers</h2>;
}

export function Dog() {
  return <h2>Fido</h2>;
}
```

We use the export keyword individually on each component. To use these in another file, we import them using curly braces:


```jsx
import { Cat, Dog } from "./Animals";

export default function App() {
  return (
    <div>
      <Cat />
      <Dog />
    </div>
  );
}
```

The `{ Cat, Dog }` syntax tells JavaScript to import the specific named exports from the `Animals.jsx` file. The names inside the curly braces must match the exported names exactly. If you need to avoid naming conflicts, or if you prefer a different name in the current file, you can rename a component during import using the as keyword.

```jsx
import { Cat as Kitty } from "./Animals";

export default function App() {
  return <Kitty />;
}
```

Finally, a file can have one default export and multiple named exports.

```jsx
// Animals.jsx
export default function Cat() {
  return <h2>Mr. Whiskers</h2>;
}

export function Dog() {
  return <h2>Fido</h2>;
}
```

When importing mixed exports, the default export comes first (without braces), followed by the named exports (inside braces):

```jsx
// App.jsx
import Cat, { Dog } from "./Animals";

export default function App() {
  return (
    <div>
      <Cat />
      <Dog />
    </div>
  );
}
```

In this example, `Cat` is the default export, so it does not use curly braces. `Dog` is a named export, so it requires them.

By understanding how default and named exports work, you can organize React components across multiple files and reuse them where needed. As you build larger applications, choosing the right export style will help keep your code clear and maintainable, and make it easier to work with components created by others.

# --questions--

## --text--

How would you export multiple components from the same file using named exports?

## --answers--

```jsx
export function Cat() { ... } export function Dog() { ... }
```

---

```jsx
export default { Cat, Dog };
```

### --feedback--

Ensure you are using valid function keywords and not relying on the single default export.

---

```jsx
export component Cat { ... } export component Dog { ... }
```

### --feedback--

Ensure you are using valid function keywords and not relying on the single default export.

---

```jsx
default export Cat; default export Dog;
```

### --feedback--

Ensure you are using valid function keywords and not relying on the single default export.

## --video-solution--

1

## --text--

Where would you typically import a child component like the `Cat` component in a React project?

## --answers--

Inside the `index.html` file.

### --feedback--

Think about where components are commonly composed together in a React project.

---

Inside the `cat-photo-app.css` file.

### --feedback--

Think about where components are commonly composed together in a React project.

---

In a parent component or the root component file (typically `App.jsx`).

---

In the public folder.

### --feedback--

Think about where components are commonly composed together in a React project.

## --video-solution--

3

## --text--

What is the purpose of the `import` statement in the `App` component?

## --answers--

It automatically styles the `App` component.

### --feedback--

Remember that you learned how to work with imports in earlier lessons.

---

It imports the `Cat` component, allowing it to be used within the `App` component.

---

It sets the default state for the `App` component.

### --feedback--

Remember that you learned how to work with imports in earlier lessons.

---

It allows the `App` to run faster.

### --feedback--

Remember that you learned how to work with imports in earlier lessons.

## --video-solution--

2
