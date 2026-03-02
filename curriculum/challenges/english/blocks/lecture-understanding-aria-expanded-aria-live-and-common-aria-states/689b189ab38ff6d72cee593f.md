---
id: 689b189ab38ff6d72cee593f
title: How Do You Make Dynamic and Interactive Content Accessible?
challengeType: 19
dashedName: how-do-you-make-dynamic-and-interactive-content-accessible
---

# --interactive--

You previously learned how semantic markup and ARIA attributes make content accessible. In real-world apps, content is rarely static, and pages often update dynamically through JavaScript. When this happens, it's important to make sure these changes also are reflected in the HTML. This allows screen readers to accurately convey the updated state to users. Without this, people relying on assistive tools might never know that something changed, or could be given outdated or misleading information.

Let's look at a common scenario where JavaScript changes the state of an element, and how you can keep your HTML accessible by updating ARIA attributes.

Suppose you have a button that opens and closes a dropdown menu:

:::interactive_editor

```html
<button id="menuButton" aria-expanded="false" aria-controls="menuList">
  Menu
</button>

<ul id="menuList" hidden>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<script src="index.js"></script>
```

```js
const button = document.getElementById("menuButton");
const menu = document.getElementById("menuList");

button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  menu.hidden = expanded;
});
```

:::

The HTML sets up a button that controls a dropdown menu. The button uses `aria-expanded` to indicate whether the menu is open, and `aria-controls` to link it to the menu by referencing the menu's `id`.

The JavaScript listens for clicks on the menu button. When clicked, it toggles the value of `aria-expanded` and updates the `hidden` property on the menu. This keeps the menu's visibility and the accessibility information in sync, so both sighted users and screen reader users know whether the menu is open or closed.

You will learn more about those ARIA attributes in the upcoming lessons. For now, just remember that when your JavaScript changes the state of an element, you should also update the relevant ARIA attributes so assistive technologies accurately reflect what's actually on the screen.

# --questions--

## --text--

Why is it important to update the HTML when JavaScript changes the state of a page element?

## --answers--

So assistive technologies can accurately communicate the current state to users.

---

So users with assistive technologies can interact with the element.

### --feedback--

Think about what users with assistive technologies might miss if ARIA attributes don't match what's shown on the page.

---

So the page doesn't crash upon state change.

### --feedback--

Think about what users with assistive technologies might miss if ARIA attributes don't match what's shown on the page.

---

So the element's state can be saved automatically between page loads.

### --feedback--

Think about what users with assistive technologies might miss if ARIA attributes don't match what's shown on the page.

## --video-solution--

1

## --text--

What does the `aria-controls` attribute on the menu button specify?

## --answers--

The default state of the menu when the page loads.

### --feedback--

Refer back to the part of the lesson where `aria-controls` is explained.

---

The keyboard shortcut used to activate the menu.

### --feedback--

Refer back to the part of the lesson where `aria-controls` is explained.

---

The class name of the element that the button controls.

### --feedback--

Refer back to the part of the lesson where `aria-controls` is explained.

---

The ID of the element that the button controls.

## --video-solution--

4

## --text--

What does the `aria-expanded` attribute on the menu button indicate?

## --answers--

Whether the menu button has been clicked.

### --feedback--

Refer back to the part of the lesson where `aria-expanded` is explained.

---

Whether the menu button is enabled or disabled.

### --feedback--

Refer back to the part of the lesson where `aria-expanded` is explained.

---

Whether the menu is open or closed.

---

Whether the menu contains a submenu.

### --feedback--

Refer back to the part of the lesson where `aria-expanded` is explained.

## --video-solution--

3
