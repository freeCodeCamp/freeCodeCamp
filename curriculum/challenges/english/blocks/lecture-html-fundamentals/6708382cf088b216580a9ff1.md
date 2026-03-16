---
id: 6708382cf088b216580a9ff1
title: What Are IDs and Classes, and When Should You Use Them?
challengeType: 19
dashedName: what-are-ids-and-classes
---

# --interactive--

The `id` attribute adds a unique identifier to an HTML element. 

Here is an example of an `h1` element with an `id` of `title`. 

Below the `h1` element, add an `h2` element with an `id` set to `"subtitle"`. You can write whatever text you like for the `h2` and you will see the changes in the preview window. To interact with the example, you will need to enable the interactive editor.

:::interactive_editor

```html
<h1 id="title">Movie Review Page</h1>

```

:::

You can reference the `id` name of `title` within your JavaScript or CSS. Here's a CSS example referencing the `id` of `title` to change the text `color` to `red`.

**NOTE**: Some CSS has been provided for you in this interactive example. Don't worry about trying to understand the CSS code because you will learn more about that in future lessons. But if you want to see the text color change to blue, enable the interactive editor, click on the `styles.css` tab and change the `color: red;` to `color: blue;`. 

:::interactive_editor

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
    <title>Review page Example</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1 id="title">Movie Review Page</h1>
  </body>
</html>
```

```css
#title {
  color: red;
}
```

:::

The hash symbol (`#`) in front of `title`, tells the computer you want to target an `id` with that value. `id` names should not be used more than once, and they should always be unique. Another thing to note about `id` values, is that they cannot have spaces in them. Here is an example of applying the words `main` and `heading` to an `id` attribute value:

```html
<h1 id="main heading">Main heading</h1>
```

Browsers will see this space as part of the `id` which will lead to unwanted issues when it comes to styling and scripting. `id` attribute values should only contain letters, digits, underscores, and dashes.

In contrast to the `id` attribute, the `class` attribute value does not need to be unique and can contain spaces. 

Here is an example of applying a class called `box` to a `div` element.

```html
<div class="box"></div>
```

If you wanted to add multiple class names to an element, you can do so by separating the names by a space. Here is an updated example applying multiple classes to a `div` element.

```html
<div class="box red-box"></div>
```

Here is an another example of applying multiple classes to multiple `div` elements. 

**NOTE**: Some CSS has been provided for you in this interactive example. Don't worry about trying to understand the CSS code because you will learn more about that in future lessons. But if you wanted to change the color of the first and third boxes, enable the interactive editor and click on the `styles.css` tab and change the `background-color: red;` to `background-color: black;`.

:::interactive_editor

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
    <title>Colored boxes example</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
  </body>
</html>
```

```css
.box {
  width: 100px;
  height: 100px;
}

.red-box {
  background-color: red;
}

.blue-box {
  background-color: blue;
}
```

:::

So, to recap, when should you use an `id` versus a `class`? Classes are best used when you want to apply a set of styles to many elements. If you want to target a specific element, it is best to use `id` because those values need to be unique.

# --questions--

## --text--

When should you use an `id` versus a `class`?

## --answers--

Use a `class` when you want a unique identifier that should only apply to one element.

### --feedback--

Remember that an `id` name is unique and should only be used once per HTML document.

---

Use an `id` when you need a unique identifier for a specific element, and use a `class` when you want to apply styles or behavior to multiple elements.

---

Use an `id` when you want to style multiple elements consistently across different parts of your webpage.

### --feedback--

Remember that an `id` name is unique and should only be used once per HTML document.

---

Use an `id` when you want to apply styles that can be easily overridden by other styles in your CSS.

### --feedback--

Remember that an `id` name is unique and should only be used once per HTML document.

## --video-solution--

2

## --text--

What happens if you use the same `id` more than once in your HTML?

## --answers--

It can lead to unwanted results and issues when trying to apply styles or targeting an element in JavaScript.

---

The program will crash.

### --feedback--

Think about how using duplicate `id` names in your HTML can affect your CSS and JavaScript.

---

Nothing will happen.

### --feedback--

Think about how using duplicate `id` names in your HTML can affect your CSS and JavaScript.

---

There will be a popup alert message in the browser window.

### --feedback--

Think about how using duplicate `id` names in your HTML can affect your CSS and JavaScript.

## --video-solution--

1

## --text--

Which of the following is NOT a correct value for the `id` attribute?

## --answers--

`id="heading"`

### --feedback--

Only classes can hold multiple separate values. 

---

`id="main-heading"`

### --feedback--

Only classes can hold multiple separate values. 

---

`id="main"`

### --feedback--

Only classes can hold multiple separate values. 

---

`id="main heading"`

## --video-solution--

4
