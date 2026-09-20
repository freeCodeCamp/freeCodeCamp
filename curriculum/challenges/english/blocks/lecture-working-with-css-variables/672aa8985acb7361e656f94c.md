---
id: 672aa8985acb7361e656f94c
title: What Are CSS Custom Properties, and How Do They Work?
challengeType: 19
dashedName: what-are-css-custom-properties
---

# --interactive--

CSS custom properties, also known as CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document. They are a powerful feature that allows for more efficient, maintainable, and flexible stylesheets.

The syntax for declaring a custom property is straightforward. It begins with two dashes (`--`) followed by the property name:

```css
:root {
  --main-color: #3498db;
}
```

In this example, we're declaring a custom property named `--main-color` with a value of `#3498db`. The `:root` pseudo-class is commonly used to declare global custom properties, as it represents the highest-level parent in the DOM tree.

To use a custom property, you employ the `var()` function:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Click Me</button>
```

```css
:root {
  --main-color: #3498db;
}

.button {
  background-color: var(--main-color);
}
```

:::

This sets the background color of elements with the class `button` to the value stored in `--main-color`.

One of the key features of custom properties is that they follow the CSS cascade. This means that you can redefine them for specific elements or contexts:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="alert">This is an alert message.</div>
```

```css
.alert {
  --main-color: #e74c3c;
  background-color: var(--main-color);
}
```

:::

In this case, elements with the class `alert` will use a different `--main-color` value, overriding the global definition.

Custom properties also support fallback values. If a custom property is not defined or is invalid, you can provide a fallback value:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="text">This is some text.</div>
```

```css
:root {
  --text-color: green;
}

.text {
  color: var(--text-color, green);
}
```

:::

Here, if `--text-color` is not defined, the `color` will default to `green`.

Custom properties are particularly useful in creating themeable designs. You can define a set of properties for different themes:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="light-theme">
  <p>This is some light themed text.</p>
</div>
```

```css
:root {
  --bg-color: black;
}

body {
  background-color: var(--bg-color);
}

.light-theme {
  --bg-color: white;
  --text-color: black;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 10px;
}

```

:::

Switching themes becomes as simple as adding or removing a class from the `body` element.

Custom properties can also be used with media queries to create responsive designs:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <h2>Responsive Design</h2>
  <p>Resize the window to see the card adapt!</p>
</div>

```

```css
:root {
  --card-width: 90%;
  --card-bg: #f0f0f0;
  --card-padding: 1rem;
  --text-color: #333;
}

/* Tablet screens and up */
@media (min-width: 600px) {
  :root {
    --card-width: 70%;
    --card-bg: #e8f5e9;
    --card-padding: 1.5rem;
  }
}

/* Desktop screens and up */
@media (min-width: 1024px) {
  :root {
    --card-width: 50%;
    --card-bg: #d0f0ff;
    --card-padding: 2rem;
  }
}

body {
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fafafa;
}

.card {
  width: var(--card-width);
  background-color: var(--card-bg);
  padding: var(--card-padding);
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
}

```

:::

This approach allows for more maintainable responsive layouts, as you can change values in one place rather than throughout your stylesheet. This can significantly reduce repetition in your stylesheets, especially for frequently used, complex values.

Custom properties can also reference other custom properties:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Click Me</button>
```

```css
:root {
  --primary-color: #3498db;
  --button-bg: var(--primary-color);
}

button {
  background-color: var(--button-bg);
}

```

:::

This allows for creating relationships between different style aspects, making it easier to maintain consistent themes across your site.

While custom properties offer many advantages, it's important to be aware of their browser support. They are well-supported in modern browsers, but older browsers may not recognize them. Always have a fallback plan when using cutting-edge features.

In conclusion, CSS custom properties provide a powerful way to create more dynamic, flexible, and maintainable stylesheets. They allow for the creation of themeable designs, simplify responsive layouts, and enable runtime manipulation of styles. 

As web development continues to evolve, custom properties are becoming an increasingly important tool in a developer's toolkit, offering new possibilities for creating adaptable and efficient CSS.

# --questions--

## --text--

What is the correct syntax for declaring a CSS custom property?

## --answers--

`$main-color: #3498db;`

### --feedback--

Remember that custom properties have a unique prefix in their declaration.

---

`@main-color: #3498db;`

### --feedback--

Remember that custom properties have a unique prefix in their declaration.

---

`--main-color: #3498db;`

---

`main-color: #3498db;`

### --feedback--

Remember that custom properties have a unique prefix in their declaration.

## --video-solution--

3

## --text--

How do you use a CSS custom property in a style declaration?

## --answers--

`use(--main-color)`

### --feedback--

Think about the function used to reference custom properties in CSS.

---

`var(--main-color)`

---

`@main-color`

### --feedback--

Think about the function used to reference custom properties in CSS.

---

`$(--main-color)`

### --feedback--

Think about the function used to reference custom properties in CSS.

## --video-solution--

2

## --text--

What is something you should be aware of when using CSS custom properties?

## --answers--

They can be used with older versions of CSS.

### --feedback--

Consider how recently CSS custom properties were introduced, and how that might cause issues for people with older devices.

---

They might not be supported by older browsers.

---

They can lead to faster page speeds.

### --feedback--

Consider how recently CSS custom properties were introduced, and how that might cause issues for people with older devices.

---

They increase repetition in your stylesheets.

### --feedback--

Consider how recently CSS custom properties were introduced, and how that might cause issues for people with older devices.

## --video-solution--

2
