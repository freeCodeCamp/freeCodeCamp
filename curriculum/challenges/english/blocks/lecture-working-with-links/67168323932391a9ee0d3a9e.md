---
id: 67168323932391a9ee0d3a9e
title: What Are the Different Link States, and Why Are They Important?
challengeType: 19
dashedName: what-are-the-different-link-states
---

# --interactive--

You may have seen a link on a web page become purple after you click it. This is because the state of the link has changed, so different styling gets applied. There are five different states a link can be in.

The first is the default state, which is `:link`. This state represents a link which the user has not visited, clicked, or interacted with yet. You can think of this state as providing the base styles for all links on your page. The other states build on top of it.

Enable the interactive editor and take a look at the link in the preview window. It should be the default color of blue which represents the default state. If you click on it, then it will turn purple. 

:::interactive_editor

```html
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```

:::

The second state is `:visited`, which applies when a user has already visited the page being linked to. By default, this turns the link purple - but you can leverage CSS to provide a different visual indication to the user. This is helpful to let someone know they have already read a portion of your documentation. Or, that the site is one they can trust because they have used it before.

Click on the link in the preview window and you should see that the visited link changes to the color brown. To see the previews, you will need to enable the interactive editor.

**NOTE**: Some CSS has been provided for this interactive example so you can see the changes in the link styles. Don't worry about trying to understand the CSS code because you will learn what it all means in future modules. 

:::interactive_editor

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:visited {
  color: brown;
}
```

:::

The third state is `:hover`. This state applies when a user is hovering their cursor over a link. This state is helpful for providing extra attention to a link, to ensure a user actually intends to click it.

Enable the interactive editor and try hovering your mouse over the link. You will see the color change to red. 

:::interactive_editor

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:hover {
  color: red;
}
```

:::

Then we have `:focus`. This state applies when we focus on a link.

Click on any portion of the whitespace in the preview window and then press `tab` on your keyboard. You should see the link change to green. To see the previews, you will need to enable the interactive editor.

:::interactive_editor

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:focus {
  color: green;
}
```

:::

And finally, we have `:active`. This state applies to links that are being activated by the user. This typically means clicking on the link with the primary mouse button by left clicking, in most cases. This state can be helpful for showing a user that the element they clicked on is interactive.

Enable the interactive editor and click on the link. You should see the link turn to black. This happens pretty quickly so you might need to click on it a few times to see the color change. 

:::interactive_editor

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:active {
  color: black;
}
```

:::

When you use these states to style your links, there is a specific order you need to write your CSS in: `link`, `visited`, `hover`, `focus`, then `active`.

You should now know how to give links in your page your own personal flair, while still providing the important information a user needs about the state of each link.

# --questions--

## --text--

What is the default state of a link?

## --answers--

`:link`

---

`:visited`

### --feedback--

A user has not visited or interacted with a link in this state.

---

`:hover`

### --feedback--

A user has not visited or interacted with a link in this state.

---

`:active`

### --feedback--

A user has not visited or interacted with a link in this state.

## --video-solution--

1

## --text--

Which state applies while a user is clicking the link?

## --answers--

`:link`

### --feedback--

Clicking a link activates it.

---

`:visited`

### --feedback--

Clicking a link activates it.

---

`:hover`

### --feedback--

Clicking a link activates it.

---

`:active`

## --video-solution--

4

## --text--

In what order should you style your links?

## --answers--

`visited`, `link`, `active`, `hover`.

### --feedback--

Review the last part of the lesson for the answer.

---

`link`, `active`, `hover`, `visited`.

### --feedback--

Review the last part of the lesson for the answer.

---

`hover`, `active`, `link`, `visited`.

### --feedback--

Review the last part of the lesson for the answer.

---

`link`, `visited`, `hover`, `active`.

## --video-solution--

4
