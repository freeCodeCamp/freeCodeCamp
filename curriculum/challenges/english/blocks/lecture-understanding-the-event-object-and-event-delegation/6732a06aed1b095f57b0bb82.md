---
id: 6732a06aed1b095f57b0bb82
title: What Is the Change Event, and How Does It Work?
challengeType: 19
dashedName: what-is-the-change-event-and-how-does-it-work
---

# --interactive--

The `change` event is a special event which is fired when the user modifies the value of certain input elements. More specifically:

- When a checkbox is ticked or unticked.

- When a radio button is ticked.

- When the user makes a selection from something like a date picker or dropdown menu.

- When an input loses focus (the user tabs to the next field, or clicks out of the form) after the user has changed the value.

- When the user otherwise confirms the value, such as by hitting enter after typing some text.

Note that the `change` event does NOT fire when your user types in an input. The `change` event will only fire after they have focused on another element.

Here is an example of using the `change` event with a dropdown menu:

:::interactive_editor

```html
<select id="select-menu">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<script src="index.js"></script>
```

```js
const selectMenu = document.getElementById("select-menu");
selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});
```

:::

Each time the user selects a different option from the dropdown menu, the `change` event will fire, and the selected value will be logged to the console.

The `change` event still generates an `Event` object, but unlike most other events it does not generate a custom implementation – the only properties and methods you will have access to are those on the base `Event` object.

This differs from the `input` event, which generates a dedicated `InputEvent` object. The change event also differs in a few ways. An `input` event WILL trigger when a user types content into a field, for example.

These differences are important to remember, as you might get tripped up by the timing of these events firing.

# --questions--

## --text--

When does the `change` event fire for a text input element?

## --answers--

As soon as the user starts typing.

### --feedback--

The lesson mentions a specific condition for text inputs that differs from immediate typing.

---

Every time a character is typed.

### --feedback--

The lesson mentions a specific condition for text inputs that differs from immediate typing.

---

When the input loses focus after its value has been modified.

---

Only when the user presses the `Enter` key.

### --feedback--

The lesson mentions a specific condition for text inputs that differs from immediate typing.

## --video-solution--

3

## --text--

Which of the following will NOT trigger a `change` event?

## --answers--

Selecting an option from a dropdown menu.

### --feedback--

The lesson discusses several triggers for the `change` event, but mentions one common action that doesn't trigger it immediately.

---

Typing text into an input field without leaving it.

---

Ticking a checkbox.

### --feedback--

The lesson discusses several triggers for the `change` event, but mentions one common action that doesn't trigger it immediately.

---

Selecting a date from a date picker.

### --feedback--

The lesson discusses several triggers for the `change` event, but mentions one common action that doesn't trigger it immediately.

## --video-solution--

2

## --text--

How does the `Event` object for the `change` event differ from the `Event` object for the `input` event?

## --answers--

The `change` event has more properties than the `input` event.

### --feedback--

The lesson mentions a specific difference in the `Event` object implementations for these two events.

---

The `change` event uses a custom implementation of the `Event` object

### --feedback--

The lesson mentions a specific difference in the `Event` object implementations for these two events.

---

The `input` event uses a dedicated `InputEvent` object, while the `change` event uses the base `Event` object

---

There is no difference between the two `Event` objects.

### --feedback--

The lesson mentions a specific difference in the `Event` object implementations for these two events.

## --video-solution--

3
