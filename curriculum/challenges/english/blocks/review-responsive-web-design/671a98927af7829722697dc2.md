---
id: 671a98927af7829722697dc2
title: Responsive Web Design Review
challengeType: 31
dashedName: review-responsive-web-design
---

# --interactive--

## Responsive Web Design

- **Definition**: The core principle of responsive design is adaptability – the ability of a website to adjust its layout and content based on the screen size and capabilities of the device it's being viewed on.
- **Fluid grids**: These use relative units like percentages instead of fixed units like pixels, allowing content to resize and reflow based on screen size.
- **Flexible images**: These are set to resize within their containing elements, ensuring they don't overflow their containers on smaller screens.

## Media Queries

- **Definition**: This allows developers to apply different styles based on the characteristics of the device, primarily the viewport width.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p class="mq-example">The background of this paragraph will change when the viewport is at least 768px wide.</p>
```

```css
.mq-example {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: lightyellow;
}

@media screen and (min-width: 768px) {
  /* Styles for screens at least 768px wide */
  .mq-example {
    background-color: lightblue;
  }
}
```

:::

- **`all` Media Type**: This is suitable for all devices. This is the default if no media type is specified.
- **`print` Media Types**: This is intended for paged material and documents viewed on a screen in print preview mode. 
- **`screen` Media Types**: This is intended primarily for screens.
- **`aspect-ratio`**: This describes the ratio between the width and height of the viewport.

```css
@media screen and (aspect-ratio: 16/9) {
  /* Styles for screens with a 16:9 aspect ratio */
}
```

- **`orientation`**: This is used to indicate whether the device is in landscape or portrait orientation.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p class="orientation-example">This paragraph's background will change in landscape orientation.</p>
```

```css
.orientation-example {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: lightyellow;
}

@media screen and (orientation: landscape) {
  /* Styles for landscape orientation */
  .orientation-example {
    background-color: lightgreen;
  }
}
```

:::

- **`resolution`**: This is used to describe the resolution of the output device in dots per inch (dpi) or dots per centimeter (dpcm).

```css
@media screen and (min-resolution: 300dpi) {
  /* Styles for high-resolution screens */
}
```

- **`hover`**: This is used to test whether the primary input mechanism can hover over elements.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<button>Hover over me</button>
```

```css
button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: lightgray;
  border: 1px solid #999;
  cursor: pointer;
}

@media (hover: hover) {
  /* Styles for devices that support hover */
  button:hover {
    background-color: yellow;
  }
}
```

:::

- **`prefers-color-scheme`**: This is used to detect if the user has requested a light or dark color theme.
- **Media Queries and Logical Operators**: The `and` operator is used to combine multiple media features, while `not` and `only` can be used to negate or isolate media queries.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p class="logical-example">This paragraph's background will change when the screen is at least 768px wide AND in landscape orientation.</p>
```

```css
.logical-example {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: lightyellow;
}

@media screen and (min-width: 768px) and (orientation: landscape) {
  /* Styles for landscape screens at least 768px wide */
  .logical-example {
    background-color: lightcoral;
  }
}
```

:::

## Common Media Breakpoints

- **Definition**: Media breakpoints are specific points in a website's design where the layout and content adjust to accommodate different screen sizes. There are some general breakpoints that you can use to target phones, tablets and desktop screens. But it is not wise to try to chase down every single possible screen size for different devices.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p class="breakpoint-example">This text will change size when the viewport width is at least 768px.</p>
```

```css
.breakpoint-example {
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
}

/* Styles for screens wider than 768px */
@media screen and (min-width: 768px) {
  .breakpoint-example {
    font-size: 1.125rem;
    background-color: lightblue;
  }
}
```

:::

- **Small Devices (smartphones)**: up to 640px
- **Medium Devices (tablets)**: 641px to 1024px
- **Large Devices (desktops)**: 1025px and larger

## Mobile first approach

- **Definition**: The mobile-first approach is a design philosophy and development strategy in responsive web design that prioritizes creating websites for mobile devices before designing for larger screens. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <p>The width of this container changes based on the viewport size.</p>
</div>
```

```css
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 10px;
  background-color: lightblue;
}

/* Styles for larger screens */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```

:::


# --assignment--

Review the Responsive Web Design topics and concepts.
