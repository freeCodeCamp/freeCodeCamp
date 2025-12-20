---
id: 672bbe9d6ec03ea954d92ff7
title: What Are Examples of Input Pseudo-classes?
challengeType: 19
dashedName: what-are-examples-of-input-pseudo-classes
---

# --interactive--

The appearance and behavior of input elements matter when building web forms. A form with inputs that respond to user actions goes a long way in improving user experience, and it should not cause confusion or frustration.

CSS provides several input pseudo-classes that can make your forms more intuitive and user-friendly. Let's look at these pseudo-classes in detail.

The `:focus` pseudo-class allows you to target an input element when a user selects or clicks on it, drawing attention to the active input field. This helps users easily identify where they're currently typing:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  border: 2px solid crimson;
  outline: none;
}
```

:::

As the name implies, the `:hover` pseudo-class is triggered when the user places the cursor over an element. It provides visual feedback before the user interacts with the input, effectively alerting them that the input is ready for action.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:hover {
  background-color: orange;
}
```

:::

In the example above, the input element background changes to an orange color when the user hovers over it, letting them know that the field is ready for interaction.

The `:checked` pseudo-class lets you style a radio button or checkbox differently when a user selects it. This way, the user can easily see which option they've chosen.

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

`:required` targets input elements that have the `required` attribute. It signals to the user that they must fill out the field to submit the form.

Here is an example with a form that has some required input fields:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form action="#">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" />

  <button type="submit">Submit</button>
</form>
```

```css
input:required {
  border: 2px solid orange;
}
```

:::

When validating forms, you can use the `:valid` pseudo-class to style the input fields that meet the validation criteria, and `:invalid` to style the input fields that do not meet the criteria. Typically, you will use green for a valid input and red for an invalid input. 

Here is an example using the `:valid` pseudo-class:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form> 
```

```css
input:valid {
  border-color: green;
}
```

:::

Here is an example of using the `:invalid` pseudo-class:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form>
```

```css
input:invalid {
  border-color: crimson;
}
```

:::

The `:disabled` pseudo-class allows you to select and style input elements that are disabled. These elements have the `disabled` attribute, which prevents users from interacting with them. When an input is disabled, it cannot be clicked, focused, or edited.

Here is an example of a label and a disabled input element.

In the CSS, we are targeting that disabled input and giving it a background color of `lightgray` and changing the cursor pointer to `not-allowed`. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label for="name">Name:</label>
  <input class="text-input" type="text" id="name" name="name" disabled />
</form>
```

```css
.text-input:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
```

:::

The `cursor: not-allowed;` CSS property value changes the appearance of the cursor to indicate that an action is not permitted. 

When applied to an element, it shows a cursor with a circle-slash symbol (usually a circle with a diagonal line through it) to signal to users that the element is not interactive or cannot be clicked or interacted with.

Here are some other examples of input pseudo-classes and what they do:

- `:autofill`: applies styles to input fields that the browser automatically fills with saved data.
- `:optional`: styles input elements that are not required and can be left empty.
- `:in-range` and `:out-of-range`: style elements based on whether their values are within or outside specified range constraints.

# --questions--

## --text--

What does the `:focus` pseudo-class let you do?

## --answers--

It enables you to highlight multiple elements simultaneously.

### --feedback--

Consider how you can draw attention to the active input field purely with CSS.

---

It allows you to style an input element when it is selected or clicked.

---

It lets you automatically submit a form when an input is clicked.

### --feedback--

Consider how you can draw attention to the active input field purely with CSS.

---

It allows you to reorder elements in a form dynamically.

### --feedback--

Consider how you can draw attention to the active input field purely with CSS.

## --video-solution--

2

## --text--

What can the `:valid` and `:invalid` pseudo-classes be used for in form validation?

## --answers--

They allow you to reset all input fields automatically.

### --feedback--

Think about how you might visually indicate to users whether their input is correct or not.

---

They let you provide different styles for inputs based on whether they meet validation criteria.

---

They let you disable form submission if any field is left empty.

### --feedback--

Think about how you might visually indicate to users whether their input is correct or not.

---

They allow you to change the placeholder text dynamically.

### --feedback--

Think about how you might visually indicate to users whether their input is correct or not.

## --video-solution--

2

## --text--

Which pseudo-class allows you to style input fields that must be filled out before form submission?

## --answers--

`:optional`

### --feedback--

Think about how you can indicate mandatory fields using CSS.

---

`:disabled`

### --feedback--

Think about how you can indicate mandatory fields using CSS.

---

`:required`

---

`:checked`

### --feedback--

Think about how you can indicate mandatory fields using CSS.

## --video-solution--

3
