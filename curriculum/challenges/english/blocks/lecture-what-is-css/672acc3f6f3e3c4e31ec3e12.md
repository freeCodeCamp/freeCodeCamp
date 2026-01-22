---
id: 672acc3f6f3e3c4e31ec3e12
title: How Does Inline-Block Work, and How Does It Differ from Inline and Block Elements?
challengeType: 19
dashedName: how-does-inline-block-work
---

# --interactive--

When working with CSS, you often encounter three different types of display behaviors for elements: `inline`, `block`, and `inline-block`.

Each of these properties affects how elements are positioned and how they interact with other elements on the page.

In this lesson, we will focus on how the `inline-block` property works and how it differs from both inline and block-level elements.

Block-level elements behave like large containers or "blocks" that take up the full width of their parent container. They always start on a new line, and their height and width can be adjusted.

Inline elements only take up as much space as they need. They flow within the surrounding content and do not break onto a new line.

The `inline-block` property is a hybrid of these two behaviors. Like inline elements, `inline-block` elements remain in the text flow without starting on a new line.

However, unlike inline elements, you can adjust the width and height of an `inline-block` element, just as you would with block-level elements.

In short, the key difference between `inline` and `inline-block` is that `inline` elements cannot have their size controlled, whereas `inline-block` elements allow for full control over dimensions while still staying inline with other content.

Let's take a look at an example.

:::interactive_editor

```html
<link href="styles.css" rel="stylesheet">

<div class="container">
  <span class="inline-block-element element1">Inline-Block</span>
  <span class="inline-block-element element2">Inline-Block</span>
</div>
```

```css
.inline-block-element {
  display: inline-block;
  width: 150px;
  height: 100px;
}

.element1 {
  background-color: lightblue;
}

.element2 {
  background-color: lightgreen;
}
```

:::

In the above example, we have a `div` with a class of `container`. Inside that `div` element, we have two `span` elements.

Each of the span elements is set to `display:inline-block` and has a width and height set as well.

The inline-block elements will appear side by side because they behave like inline elements, but they also have a specified width and height, which gives them block-like properties.

But, if you remove the `display: inline-block` property, neither the `height` nor the `width` will be applied even though you defined it clearly.

Here is the revised CSS:

:::interactive_editor

```html
<link href="styles.css" rel="stylesheet">

<div class="container">
  <span class="inline-block-element element1">Span element</span>
  <span class="inline-block-element element2">Span element</span>
</div>
```

```css
.inline-block-element {
  width: 150px;
  height: 100px;
}

.element1 {
  background-color: lightblue;
}

.element2 {
  background-color: lightgreen;
}
```

:::

In this code, we removed the `display: inline-block;` property but kept everything else intact. Here, the `span` elements revert to their default behavior as inline elements.

As a result, the specified width and height are ignored, and the elements only take up the space needed for their content.

Understanding how `inline-block` works is useful because you can use it for creating layouts that require both alignment and dimension control within a continuous text flow.

# --questions--

## --text--

What is the key characteristic of an inline-block element that distinguishes it from an inline element?

## --answers--

Inline-block elements cannot be nested inside block elements.

### --feedback--

Think about whether inline elements allow you to adjust their dimensions.

---

Inline-block elements automatically span the full width of their container.

### --feedback--

Think about whether inline elements allow you to adjust their dimensions.

---

Inline-block elements allow setting of height and width, unlike inline elements.

---

Inline-block elements always break onto a new line.

### --feedback--

Think about whether inline elements allow you to adjust their dimensions.

## --video-solution--

3

## --text--

Which scenario is best suited for using inline-block elements over inline or block elements?

## --answers--

When you need an element to take up the entire width of its parent container.

### --feedback--

Consider how inline-block strikes a balance between inline flow and size control.

---

When you want an element to remain inline but need to adjust its size.

---

When you need an element to always start on a new line.

### --feedback--

Consider how inline-block strikes a balance between inline flow and size control.

---

When you don't want an element to be affected by padding and margins.

### --feedback--

Consider how inline-block strikes a balance between inline flow and size control.

## --video-solution--

2

## --text--

In what situation would an element with `display: inline-block;` behave differently than one with `display: block;`?

## --answers--

When you need the element to take up the entire width of the container.

### --feedback--

Think about how inline-block elements behave with respect to text and other inline content.

---

When you want the element to flow alongside text and other inline elements.

---

When you need the element to start on a new line automatically.

### --feedback--

Think about how inline-block elements behave with respect to text and other inline content.

---

When you don't want the element to have any height or width properties.

### --feedback--

Think about how inline-block elements behave with respect to text and other inline content.

## --video-solution--

2
