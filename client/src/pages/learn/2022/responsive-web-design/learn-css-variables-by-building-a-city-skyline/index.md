---
title: Introduction to the Learn CSS Variables by Building a City Skyline
block: learn-css-variables-by-building-a-city-skyline
superBlock: 2022/responsive-web-design
---

## Introduction to the Learn CSS Variables by Building a City Skyline

CSS Variables, also known as custom properties, allow you to store values that you can reuse throughout your stylesheet. This makes it easy to manage and update your styles, giving you the power to create dynamic and maintainable designs.

CSS Variables are defined using the -- prefix and are typically declared inside a :root selector to make them globally accessible.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
}
```

To use a CSS Variable, you reference it with the `var()` function. This allows you to apply the variable's value to any CSS property.

```css
body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: var(--font-size);
}
```

With variables, you can dynamically adjust the styling of your page. For example, you could have a default theme, a night theme, and a festive theme, each with its own set of colors and styles.
