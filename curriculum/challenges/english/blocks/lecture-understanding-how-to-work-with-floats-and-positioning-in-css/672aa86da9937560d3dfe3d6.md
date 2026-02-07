---
id: 672aa86da9937560d3dfe3d6
title: What Are Common Use Cases for Using Floats, and How Do They Work?
challengeType: 19
dashedName: what-are-common-use-cases-for-using-floats
---

# --interactive--

Floats in CSS are a technique originally designed to allow text to wrap around an element, such as an image. Over time, however, developers found new ways to use floats, applying them to layout design in creative ways. While modern layout methods like Flexbox and Grid are now more commonly used, understanding floats is still important, especially when working with older code or needing to achieve specific layout effects.

When an element is floated, it's taken out of the normal document flow and pushed to the left or right of its container. The content that follows will wrap around the floated element, filling the remaining space. One classic use is wrapping text around images, where an image is floated to one side, and text wraps around it. This technique is still widely used, especially in articles and blogs where images need to be placed alongside text. Here is the code example:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <img src="https://placehold.co/150x150" alt="Placeholder Image">
</div>
```

```css
.container {
  border: 1px solid black;
  padding: 10px;
}

img {
  float: left;
  margin-right: 20px;
}
```

:::

In the above example, the container doesn't wrap around the floated image. The image is out of the normal document flow, and the container collapsed to zero height because it doesn't "see" the floated children elements. 

Floats were also popular for creating multi-column layouts before Flexbox and Grid became widespread. By floating elements next to each other, developers could create columns that aligned horizontally. However, when using floats, it's important to handle the problem of collapsing parent elements when their child elements are floated. The clearfix technique solution is applied to the class `container` element to fix this issue.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <img src="https://placehold.co/150x150" alt="Placeholder Image">
  <p> This is an example of text flowing around a floated image.</p>
</div>
```

```css
.container {
  border: 1px solid black;
}

/* Clearfix CSS */
.container::after {
  content: "";  
  display: block;
  clear: both;
}

img {
  float: left;
  margin-right: 20px;
}
```

:::

- `::after` is a pseudo-element that adds an invisible block after the content of the container.
- `content: ""` ensures the pseudo-element is present but doesn’t display any content.
- `display: block` makes the pseudo-element a block-level element.
- `clear: both` ensures the pseudo-element clears both sides of any floated elements above it.

In the above example, we've added a new paragraph element to make the collapse more noticeable. Because the paragraph remains in the normal document flow, the container expands just enough to wrap around it. Then, we apply the clearfix technique to fix the collapse and make the container's border display correctly. You can try removing the clearfix rule to see the container collapse again.

The clearfix technique ensures the parent element wraps around its floated children properly. Clearfix forces the parent container to "see" the floated child elements by adding a clear property after the floated content.

While floats are no longer the go-to method for complex layouts due to more modern techniques like Flexbox and Grid, they still play an essential role in certain scenarios. Whether you're wrapping text around images or working on legacy projects, understanding how floats work and how to clear them properly is key to maintaining well-structured and responsive layouts.

# --questions--

## --text--

What is a common use case for using floats in CSS?

## --answers--

Centering an element vertically.

### --feedback--

Think about how floats were originally used.

---

Wrapping text around images.

---

Creating a fixed header.

### --feedback--

Think about how floats were originally used.

---

Applying a background color.

### --feedback--

Think about how floats were originally used.

## --video-solution--

2

## --text--

Which CSS property is often used to clear floats and maintain the layout flow?

## --answers--

`float`

### --feedback--

Consider the property that stops text from wrapping around floated elements.

---

`margin`

### --feedback--

Consider the property that stops text from wrapping around floated elements.

---

`clear`

---

`padding`

### --feedback--

Consider the property that stops text from wrapping around floated elements.

## --video-solution--

3

## --text--

How does applying `float: left;` to an element affect its position in the layout?

## --answers--

The element is centered on the page.

### --feedback--

Consider what happens when an element is floated to the left.

---

The element is pushed to the right side of its container.

### --feedback--

Consider what happens when an element is floated to the left.

---

The element is removed from the normal document flow and moves to the left side of its container.

---

The element stays in the normal document flow and aligns with the top of its container.

### --feedback--

Consider what happens when an element is floated to the left.

## --video-solution--

3
