---
id: 6729974ec29be33cb00eb54d
title: How Do Forms, Labels, and Inputs Work in HTML?
challengeType: 19
dashedName: how-do-forms-labels-and-inputs-work-in-html
---

# --interactive--

The `form` element in HTML is used to gather user information, such as names and email addresses. Here is an example of a `form` element:

```html
<form action="url-goes-here">
  <!-- input elements go here -->
</form>
```

The `action` attribute specifies where the form data will be sent upon submission. To collect specific information, like names and email addresses, you would use the `input` element. Here is an example of using an `input` element.

Enable the interactive editor and interact with the `input` element in the preview window by typing in your name in the field.

:::interactive_editor

```html
<form action="">
  <input type="text" />
</form>
```

:::

`input` elements are void elements and do not have closing tags. The `type` attribute defines the data type expected from the user. In this case, the data would be plaintext. To add a label for the input, you would use a `label` element. Here is an example of using a `label` element with the text of `Full Name:`.

Click on the text `Full Name:` in the preview window and you will see the input go into focus. To interact with the example, you will need to enable the interactive editor.

:::interactive_editor

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

:::

By nesting an `input` inside a `label` element, you create an implicit association between the `label` and the `input` field. The term "implicit" refers to something that is understood or inferred without needing to be explicitly stated or defined with additional attributes or elements. To explicitly associate a `label` with an `input`, you can use the `for` attribute. Here is an example of using the `for` attribute for an email address label.

Interact with the `input` element in the preview window by typing in a fake email address like `jane@example.com`. To interact with the example, you will need to enable the interactive editor.

:::interactive_editor

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>
```

:::

When using an explicit association, the values for the `for` attribute and `id` need to be the same. In this case, the values are both set to `email`. The `email` type in the input provides basic validation for correctly formatted email addresses. If you want to show additional hints to the users about the expected input, you can use the `placeholder` attribute. Here is an example using the `placeholder` attribute inside the email input.

Enable the interactive editor, click on the email input and start typing in an email and you will see the placeholder text go away. 

:::interactive_editor

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" placeholder="example@email.com" />
</form>
```

:::

For the placeholder text, you want to provide helpful short text to show the format and type of data you expect from your users. In this case, the placeholder text, `example@email.com`, shows the user that they must enter a correctly formatted email address.

# --questions--

## --text--

What is the role of the `for` attribute inside the `label` element?

## --answers--

It indicates the color of the label text.

### --feedback--

Review the middle portion of the lesson where the `for` attribute is discussed.

---

It's used to explicitly associate a label with an input.

---

It specifies the alignment of the label within its container.

### --feedback--

Review the middle portion of the lesson where the `for` attribute is discussed.

---

It defines a JavaScript function to execute when the label is clicked.

### --feedback--

Review the middle portion of the lesson where the `for` attribute is discussed.

## --video-solution--

2

## --text--

Which of the following is a correct value for the `type` attribute used inside inputs?

## --answers--

`choice`

### --feedback--

Refer back to the beginning of the lesson where the example shows a valid value for the `type` attribute.

---

`text-box`

### --feedback--

Refer back to the beginning of the lesson where the example shows a valid value for the `type` attribute.

---

`numberinput`

### --feedback--

Refer back to the beginning of the lesson where the example shows a valid value for the `type` attribute.

---

`text`

## --video-solution--

4

## --text--

What is the role of the `placeholder` attribute inside the `input` element?

## --answers--

It is used to provide a hint or example text within an input field.

---

It specifies the type of input field.

### --feedback--

Review the end of the lesson where the `placeholder` attribute was discussed.

---

It defines the initial value displayed in the input field.

### --feedback--

Review the end of the lesson where the `placeholder` attribute was discussed.

---

It indicates the maximum length of characters allowed in the input field.

### --feedback--

Review the end of the lesson where the `placeholder` attribute was discussed.

## --video-solution--

1
