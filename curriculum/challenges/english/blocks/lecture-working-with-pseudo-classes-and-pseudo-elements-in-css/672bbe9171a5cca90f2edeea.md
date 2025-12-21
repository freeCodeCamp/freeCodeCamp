---
id: 672bbe9171a5cca90f2edeea
title: What Are Examples of Element User Action Pseudo-classes?
challengeType: 19
dashedName: what-are-examples-of-element-user-action-pseudo-classes
---

# --interactive--

User feedback is a crucial element of web design. For instance, it's important for users to receive visual cues when they interact with elements on a website, such as hovering over a button or clicking a link. This feedback helps users understand the state of interactive elements, like indicating whether a link has been visited or not.

User action pseudo-classes in CSS are special keywords that allow you to provide this kind of feedback without needing JavaScript or other programming languages.

These pseudo-classes include `:hover`, `:active`, `:focus`, and `:visited`, among others. They enable you to change the appearance of elements based on user interactions, improving the overall user experience.

Let's dive into some of the user action pseudo-classes we have and see how they work.

The `:active` pseudo-class applies styles when an element is activated by the user. For example, when the user clicks a button or a link, it provides immediate visual feedback, showing users that their actions are being recognized.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Example link</a>
```

```css
a:active {
  color: crimson;
}
```

:::

The `:hover` pseudo-class is triggered when a user hovers over an element with their mouse or other pointing device. Developers often use it to create visual feedback for buttons, links, or any element that should respond to user attention. Here's a button a user would hover over before clicking:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<button class="btn">Hover Over Me</button>
```

```css
.btn:hover {
  background-color: darkgreen;
  color: white;
  cursor: pointer;
}
```

:::

The `:focus` pseudo-class applies styles when an element gains focus, typically through keyboard navigation or when a user clicks into a form input. This is not just for feedback but also crucial for accessibility. It ensures that users who rely heavily on keyboards can easily identify which element they are interacting with. 

Here's an example of an input field that gains focus when clicked or navigated to via the keyboard:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  outline: 2px solid darkgreen;
  border-radius: 4px;
}
```

:::

The `:visited` pseudo-class targets a link the user has visited. This can be useful for helping users distinguish between pages they have already visited and the ones they are yet to visit. Here is an example of changing the anchor text color to cyan when the link is visited:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: cyan;
}
```

:::

The `:checked` pseudo-class in CSS allows you to style form elements such as checkboxes and radio buttons when they are selected (checked). This pseudo-class is useful for customizing the appearance of these elements to enhance user experience, even though browsers provide default styles for them.

Here is an example with a checkbox to agree to terms on a website. 

**NOTE**: Some of the CSS in this example uses properties that haven't been covered yet. This is just to give you an idea of how to create a custom checkbox. You will learn how all of this works in future lessons and workshops. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
  Agree <input class="checkbox" type="checkbox" />
  </label>
</form>
```

```css
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  vertical-align: middle; 
}

.checkbox:hover {
  border-color: #888;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: 2px solid #90caf9;
  outline-offset: 2px;
}

```

:::

In this example, we are using the `appearance` property set to `none` to remove the default styling applied by the browser to checkbox inputs. When the user checks the box, it will have a background color of `green`.

Other examples of action pseudo-classes are:

- `:focus-within`: for applying styles to an element when it or any of its descendants have focus.
- `:enabled`: for targeting form buttons or other elements that are currently enabled.
- `:disabled`: for targeting form buttons or other elements that are disabled.
- `:target`: for applying styles to an element that is the target of a URL fragment (the part of a URL after the `#` symbol).

# --questions--

## --text--

What do user action pseudo-classes allow you to do?

## --answers--

They enable animations and transitions.

### --feedback--

Think about how you can interact with users purely with CSS.

---

They allow you to modify the DOM structure dynamically.

### --feedback--

Think about how you can interact with users purely with CSS.

---

They let you provide feedback to the user without relying on JavaScript.

---

They let you style the last element in a list.

### --feedback--

Think about how you can interact with users purely with CSS.

## --video-solution--

3

## --text--

What does the `:checked` pseudo-class do in CSS?

## --answers--

It selects an element when it is disabled.

### --feedback--

Think about how forms handle user selections.

---

It selects an element when it is being hovered over.

### --feedback--

Think about how forms handle user selections.

---

It styles elements like checkboxes or radio buttons that are checked.

---

It styles an element when it gains focus.

### --feedback--

Think about how forms handle user selections.

## --video-solution--

3

## --text--

What does the `:focus` pseudo-class do?

## --answers--

It selects an element when it is hovered over by a mouse.

### --feedback--

Think about how users navigate forms using a keyboard.

---

It applies styles when an element gains focus, usually through keyboard navigation or a click.

---

It selects an element after a form is submitted.

### --feedback--

Think about how users navigate forms using a keyboard.

---

It applies styles to an element when it is disabled.

### --feedback--

Think about how users navigate forms using a keyboard.

## --video-solution--

2
