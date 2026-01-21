---
id: 671a967424a00e8c6561b182
title: CSS Positioning Review
challengeType: 31
dashedName: review-css-positioning
---

# --interactive--

## Working With Floats

- **Definition**: Floats are used to remove an element from its normal flow on the page and position it either on the left or right side of its container. When this happens, the text will wrap around that floated content.

```css
float: left;
float: right;
```

- **Clearing Floats**: The `clear` property is used to determine if an element needs to be moved below the floated content. When you have multiple floated elements stacked next to each other, there could be issues with overlap and collapsing in the layouts. So a `clearfix` hack was created to fix this issue.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="clearfix">
  <div class="box left">Left</div>
  <div class="box right">Right</div>
</div>
```

```css
.box {
  width: 100px;
  height: 60px;
  color: white;
  text-align: center;
  line-height: 60px;
}

.left {
  float: left;
  background: teal;
}

.right {
  float: right;
  background: purple;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

:::

## Static, Relative and Absolute Positioning 

- **Static Positioning**: This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.
- **Relative Positioning**: This allows you to use the `top`, `left`, `right` and `bottom` properties to position the element within the normal document flow. You can also use relative positioning to make elements overlap with other elements on the page.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="relative">Relative Element</div>
```

```css
.relative {
    position: relative;
    top: 30px;
    left: 30px;
}
```

:::

- **Absolute Positioning**: This allows you to take an element out of the normal document flow, making it behave independently from other elements. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="parent">
  Parent
  <div class="positioned">Absolute</div>
</div>
```

```css
.parent {
  position: relative;
  height: 120px;
  background: #eee;
}

.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: coral;
}
```

:::

## Fixed and Sticky Positioning

- **Fixed Positioning**: When an element is positioned with `position: fixed`, it is removed from the normal document flow and placed relative to the viewport, meaning it stays in the same position even when the user scrolls. This is often used for elements like headers or navigation bars that need to remain visible at all times.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="navbar">Fixed Navbar</div>
<div style="height: 600px;"></div>
```

```css
.navbar {
  position: fixed; 
  top: 0; 
  width: 100%;
  background: #0077ff;
  color: white;
  padding: 8px; 
}
```

:::

- **Sticky Positioning**: This type of positioning will act as a hybrid between relative and fixed positioning. Initially, the element behaves as though it's positioned relatively, staying within the flow of the document. However, once the user scrolls the element past a certain point, it "sticks" to the viewport (usually the top) and behaves as though it is fixed. This is great for creating elements like sticky navigation bars, which only become fixed once the user scrolls to a certain position.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p>Scroll down</p>
<div class="positioned">Sticky Element</div>
<div style="height: 500px;"></div>
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
  background: #4caf50;
  color: white;
  padding: 6px;
}
```

:::

## Working With the `z-index` Property 

- **Definition**: The `z-index` property in CSS is used to control the vertical stacking order of positioned elements that overlap on the page. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <div class="box box1">1</div>
  <div class="box box2">2</div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black;
}

.box {
  position: absolute;
  width: 100px;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box1 {
  background: lightcoral;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.box2 {
  background: steelblue;
  top: 40px;
  left: 40px;
  z-index: 2;
}
```

:::

# --assignment--

Review the CSS Positioning topics and concepts.
