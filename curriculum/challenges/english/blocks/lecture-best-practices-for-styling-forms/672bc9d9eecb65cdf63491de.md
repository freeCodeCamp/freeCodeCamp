---
id: 672bc9d9eecb65cdf63491de
title: "When Should You Use appearance: none to Deal with Issues Styling Search Inputs and Checkboxes?"
challengeType: 19
dashedName: when-should-you-use-appearance-none-to-deal-with-issues-styling-search-inputs-and-checkboxes
---

# --interactive--

Let's learn when to use `appearance: none` to address styling issues for search input, checkboxes and radio buttons.

Browsers apply default styling to a lot of elements. In the case of input elements your ability to style them with CSS can feel rather restricted. So, you may want to use `appearance: none` to hide aspects of the default element and build your own instead. For example, this would hide the default checkboxes for a checkbox input allowing you to use custom indicators like a green tick and a red X to show the state. For a search input, WebKit based browsers will show a default search icon and a cancel button. Hiding these allows you to create your own indicators that would appear on all browsers. 

Here is an example of a custom checkbox:

**NOTE**: Some of the CSS in this example uses properties that haven't been covered yet. This is just to give you an idea of how to create a custom checkbox. You will learn how all of this works in future lessons and workshops. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
    <input class="checkbox" type="checkbox" /> Agree
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

WebKit is a software engine that helps web browsers display websites. Browsers like Safari use WebKit to make sure web pages look and work correctly. This `appearance: none` CSS property gives you complete control over the styling, but it does come with some things to look out for. The default interactive components of input elements include features such as focus and error indicators which you will need to ensure aren't lost.

Creating consistent cross-platform styling is a great reason to use this property. You can also use it to ensure that tap targets on a mobile device are large enough or that the colors of a checkbox have enough contrast. 

# --questions--

## --text--

What is the primary purpose of using `appearance: none` on `input` elements?

## --answers--

To improve page load times.

### --feedback--

Think about what this property allows developers to do with `input` elements.

---

To hide the `input` element completely.

### --feedback--

Think about what this property allows developers to do with `input` elements.

---

To remove default browser styling and allow custom styling.

---

To make the `input` element non-interactive.

### --feedback--

Think about what this property allows developers to do with `input` elements.

## --video-solution--

3

## --text--

Which of the following is NOT mentioned as a benefit of using `appearance: none` on `input` elements?

## --answers--

Creating consistent cross-platform styling.

### --feedback--

The lesson discusses several advantages, but one of these is not among them.

---

Allowing custom indicators for checkboxes.

### --feedback--

The lesson discusses several advantages, but one of these is not among them.

---

Improving the security of form submissions.

---

Enabling larger tap targets on mobile devices.

### --feedback--

The lesson discusses several advantages, but one of these is not among them.

## --video-solution--

3

## --text--

What potential drawback of using `appearance: none` is mentioned in the lesson?

## --answers--

It may cause the input to stop functioning.

### --feedback--

The lesson mentions a caveat related to default interactive components.

---

It can significantly slow down the page.

### --feedback--

The lesson mentions a caveat related to default interactive components.

---

It might remove important default features like focus indicators.

---

It's not supported in all modern browsers.

### --feedback--

The lesson mentions a caveat related to default interactive components.

## --video-solution--

3
