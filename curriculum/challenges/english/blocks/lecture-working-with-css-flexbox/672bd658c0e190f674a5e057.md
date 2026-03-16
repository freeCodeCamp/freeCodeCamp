---
id: 672bd658c0e190f674a5e057
title: What Are Some Common Flex Properties, and How Do They Work?
challengeType: 19
dashedName: what-are-some-common-flex-properties
---

# --interactive--

Flex properties are properties that you can apply to flex containers to determine the distribution of child elements. We'll cover some of the most commonly used ones: `flex-wrap`, `justify-content`, and `align-items`.

Let's start with `flex-wrap`. This property determines how flex items are wrapped within a flex container to fit the available space. `flex-wrap` can take three possible values: `nowrap`, `wrap`, and `wrap-reverse`. `nowrap` is the default value—flex items won't be wrapped onto a new line, even if their width exceeds the container's width.

In the code below, we have three `div` elements. Let's focus on the `width`. The `main` container bordered in red has a `width` of `200px`, while its three child `div` elements combined have a `width` of `240px` (`80px` each):

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  display: flex;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::


The width of the `div` elements exceeds the width of their container, but by default they will be shrunk to fit the available space. If you do want to wrap them when they exceed the width of their container, you can set `flex-wrap: wrap` on the flex container:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

The `div` elements will be rearranged in rows when they exceed the width of their container. You can wrap flex items in reverse order with `flex-wrap: wrap-reverse`. The `flex-flow` property is a shorthand property for `flex-direction` and `flex-wrap`. In this example, we set `flex-direction` to `column` and `flex-wrap` to `wrap-reverse`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  display: flex;
  flex-flow: column wrap-reverse;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

Great. Now let's talk about `justify-content`. `justify-content` aligns the child elements along the main axis of the flex container. If you assign the value `flex-start` to `justify-content`, the flex items will be aligned to the start of the main axis. This could be horizontal or vertical:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: flex-start;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

With `justify-content: flex-end`, flex items are aligned to the end of the main axis, horizontally or vertically. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: flex-end;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

To center the flex items along the main axis, you can use `justify-content: center`. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: center;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

To distribute the elements evenly along the main axis, you can use `justify-content: space-between`. This will add some space between the flex items if needed.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

`justify-content: space-around` distributes flex items evenly within the main axis, adding a space before the first item and after the last item. This additional space is half of the space between each pair of adjacent items. If there's only one item to distribute, it will be centered.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: space-around;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::


And last but not least, we have `justify-content: space-evenly`, which distributes the items evenly along the main axis. The space between the items and the space before and after the first and last elements, are exactly the same:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: space-evenly;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

Great. Now you know how to distribute flex items along the main axis. But you may also want to distribute them along the cross axis. Remember that the cross axis is perpendicular to the main axis. You can do this with the `align-items` property. To center the items along the cross axis, you just need to add `align-items: center` to the flex container: 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  height: 300px;
  display: flex;
  align-items: center;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

In this example, the flex items are centered along the cross axis, which is vertical by default. If the cross axis is horizontal, they will be centered horizontally instead. In contrast, `align-items: flex-start` aligns the items to the start of the cross axis:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  height: 300px;
  display: flex;
  align-items: flex-start;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

The opposite is `align-items: flex-end`. This will align flex items to the end of the cross axis, vertically or horizontally. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  height: 300px;
  display: flex;
  align-items: flex-end;
  border: 2px solid red;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

:::

To stretch the flex items along the cross axis, you can use `align-items: stretch`. This also works with elements that are automatically sized, such as those without set `width` or `height`, or with only a minimum `width` or `height`. The flex items will stretch to fill the container in the direction of the cross axis.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>

```

```css
.container {
  display: flex;
  align-items: stretch; 
  border: 2px solid #444;
  height: 200px; 
}

.box {
  width: 100px;           
  border: 1px solid #888;
  background-color: lightblue;
}
```

:::

And finally, you can use the `align-self` property to assign a different alignment on the cross axis to an individual flex item. For example, you can stretch it with `align-self: stretch`. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box special">Three</div>
</div>

```

```css
.container {
  display: flex;
  align-items: flex-start; 
  border: 2px solid #444;
  height: 200px; 
}

.box {
  width: 100px;
  border: 1px solid #888;
  background-color: lightblue;
  margin: 4px;
}

.special {
  align-self: stretch; 
  background-color: lightcoral;
}
```

:::

You can center it with `align-self: center`. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box special">Three</div>
</div>

```

```css
.container {
  display: flex;
  align-items: flex-start; 
  border: 2px solid #444;
  height: 200px; 
}

.box {
  width: 100px;
  border: 1px solid #888;
  background-color: lightblue;
  margin: 4px;
}

.special {
  align-self: center; 
  background-color: lightcoral;
}
```

:::

You can align it to the start of the cross axis with `align-self: flex-start`. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box special">Three</div>
</div>

```

```css
.container {
  display: flex;
  align-items: flex-start; 
  border: 2px solid #444;
  height: 200px; 
}

.box {
  width: 100px;
  border: 1px solid #888;
  background-color: lightblue;
  margin: 4px;
}

.special {
  align-self: flex-start; 
  background-color: lightcoral;
}
```

:::

Or you can align it to the end of the cross axis with `align-self: flex-end`.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box special">Three</div>
</div>

```

```css
.container {
  display: flex;
  align-items: flex-start; 
  border: 2px solid #444;
  height: 200px; 
}

.box {
  width: 100px;
  border: 1px solid #888;
  background-color: lightblue;
  margin: 4px;
}

.special {
  align-self: flex-end; 
  background-color: lightcoral;
}
```

:::

There are other flex properties and values that you can choose from to create the responsive layout that you envision, but these are the most commonly-used ones. With these CSS flex properties and your new knowledge of the CSS flex model, you can start creating responsive layouts to create a smooth and inclusive user experience across devices.

# --questions--

## --text--

Which CSS property is used to align child elements horizontally (by default) within a flex container?

## --answers--

`flex-direction`

### --feedback--

Think about how elements are aligned horizontally within a flex container.

---

`justify-content`

---

`align-items`

### --feedback--

Think about how elements are aligned horizontally within a flex container.

---

`flex-wrap`

### --feedback--

Think about how elements are aligned horizontally within a flex container.

## --video-solution--

2

## --text--

Which CSS property is used to align child elements vertically (by default) within a flex container?

## --answers--

`flex-direction`

### --feedback--

Think about how elements are aligned vertically within a flex container.

---

`justify-content`

### --feedback--

Think about how elements are aligned vertically within a flex container.

---

`align-items`

---

`flex-wrap`

### --feedback--

Think about how elements are aligned vertically within a flex container.

## --video-solution--

3

## --text--

Which of the following properties can be combined into the `flex-flow` property?

## --answers--

`flex-direction` and `justify-content`.

### --feedback--

Think about the two main aspects of how flex items are laid out.

---

`flex-direction` and `align-items`.

### --feedback--

Think about the two main aspects of how flex items are laid out.

---

`flex-direction` and `align-content`.

### --feedback--

Think about the two main aspects of how flex items are laid out.

---

`flex-direction` and `flex-wrap`.

## --video-solution--

4
