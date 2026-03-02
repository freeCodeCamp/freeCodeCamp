---
id: 672bccc8ea33bad87abb3c56
title: What Is the Difference Between content-box and border-box?
challengeType: 19
dashedName: what-is-the-difference-between-content-box-and-border-box
---

# --interactive--

The `box-sizing` property can be set to either `content-box` or `border-box` to control how the width and height of elements are calculated.

This property can be set on the universal selector (`*`) to apply to all the elements in the document:

```css
* {
  box-sizing: border-box;
}
```

The value of the `box-sizing` property is `content-box` by default, but you can choose `border-box` if you need to. We will explore `content-box` first and then we will go into `border-box`.

To understand how the models work, you need to be familiar with the four core concepts from the CSS box model. Let's review them quickly.

- The content area is the space occupied by the element's content.
- The padding is the space between the content area and the border.
- The border is the outline that surrounds the content area and the padding.
- The margin is the space outside the border that separates the element from other elements.

In the `content-box` model, the width and height that you set for an element determine the dimensions of the content area, but they don't include the padding, border, or margin. Use `content-box` when you need precise control over the content area. When you set `width` and `height`, you're only setting the size of the content itself.

To find the total width of the element, you will need to add the left and right padding, and the left and right borders. Likewise, the total height of an element can be found by adding the content height, the top and bottom padding, and the top and bottom borders.

For example, here we have a CSS type selector for all the `div` elements. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div></div>
```

```css
div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 4px solid black;
}
```

:::

In this case, if `content-box` is used the content area will be 300px by 200px. The total rendered size includes padding and borders — for example, total width = 300px (content) + 40px (padding) + 8px (borders) = 348px; the total height is calculated in the same way.

Great! Now let's explore `border-box`. It's different because the width and height you set include the element's content, padding, and border (but not its margin). Use `border-box` when you want the element's total size to stay fixed even if padding or borders change — that's often helpful in responsive layouts.

With `border-box`, padding and borders are included inside the element's specified size. The `width` and `height` you set become the element's total dimensions: content + padding + border; margins remain excluded.

In the following example, there are two `div` elements with the same dimensions but different `box-sizing` values. Notice how this results in different total sizes when viewed in the browser:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="box" id="red-div"></div>
<div class="box" id="blue-div"></div>
```


```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 4px solid black;
  margin: 10px;
}

#red-div {
  box-sizing: content-box;
  background-color: red;
}

#blue-div {
  box-sizing: border-box;
  background-color: blue;
}
```

:::

You can see that they both have the same `width`, `height`, `padding`, `border` and `margin`. The only differences are in the colors and the value of the `box-sizing` property. This small difference has a very important impact on the final dimensions. 

Choosing between `content-box` and `border-box` really depends on the specific needs of your project. While `border-box` is becoming increasingly popular for its simplicity and flexibility, understanding both models is important for implementing effective CSS layouts.

# --questions--

## --text--

Which of the following is the default value for the `box-sizing` property in most browsers?

## --answers--

`content-box`

---

`border-box`

### --feedback--

Think about the default behavior for element sizing.

---

`padding-box`

### --feedback--

Think about the default behavior for element sizing.

---

`margin-box`

### --feedback--

Think about the default behavior for element sizing.

## --video-solution--

1

## --text--

What is the primary advantage of using `border-box` for creating responsive layouts?

## --answers--

It makes the calculations more complicated.

### --feedback--

Think about how the `border-box` model handles `padding` and `border` within the specified `width` and `height`.

---

It allows for more precise control over element dimensions.

### --feedback--

Think about how the `border-box` model handles `padding` and `border` within the specified `width` and `height`.

---

It ensures that elements maintain their specified dimensions regardless of changes in `padding` or `border`.

---

It improves browser compatibility.

### --feedback--

Think about how the `border-box` model handles `padding` and `border` within the specified `width` and `height`.

## --video-solution--

3

## --text--

In the `content-box` model, what does the specified `width` of an element represent?

## --answers--

The total `width` of the element, including `padding`, `border`, and `margin`.

### --feedback--

Think about the relationship between the content area and the overall element dimensions in the `content-box` model.

---

The `width` of the content area only.

---

The `width` of the `border`.

### --feedback--

Think about the relationship between the content area and the overall element dimensions in the `content-box` model.

---

The `width` of the `padding`.

### --feedback--

Think about the relationship between the content area and the overall element dimensions in the `content-box` model.

## --video-solution--

2
