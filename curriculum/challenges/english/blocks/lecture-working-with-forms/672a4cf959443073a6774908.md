---
id: 672a4cf959443073a6774908
title: What Are the Different Form States, and Why Are They Important?
challengeType: 19
dashedName: what-are-the-different-form-states
---

# --interactive--

In HTML, form controls, like inputs, can be in different stages or conditions like a `focused` state, `readonly` state, or `disabled` state.

The first state would be considered the `default` state. The default state of an email address input is a blank input. That is what the email input looks like when it is first rendered on the page. 

:::interactive_editor

```html
<input type="email" name="email" id="email" />
```

:::

When the user clicks on a form control or selects it with the keyboard's tab key, then that means it is in the `focused` state. When an input is in the `focused` state, most browsers will show a blue highlighted border around the input. But you can choose to add additional styles in CSS.

Click on any part of the whitespace in the preview window and then press the `tab` key to see the focus state. To see the previews, you will need to enable the interactive editor.

:::interactive_editor

```html
<input type="email" name="email" id="email" />
```

:::

Another form state is the `disabled` state. This state shows users that an input cannot be focused or activated. 

Enable the interactive editor and try clicking on the email input and you will notice that it will not focus anymore.

:::interactive_editor

```html
<input disabled type="email" name="email" id="email" />
```

:::

Similar to the `focused` state, you can choose to add additional styles for the `disabled` state using CSS.

Another type of form state is the `readonly` state. This is when a form control, like an input, is not editable by the user. Here is an example of setting an email input to read-only. The `value` attribute is used to set the value shown inside the input field.

Enable the interactive editor and try editing the current value of `example@email.com` in the preview window, and you will notice that is not possible.

:::interactive_editor

```html
<input
  readonly
  type="email"
  name="email"
  id="email"
  value="example@email.com"
/>
```

:::

A key difference between the `disabled` state and `readonly` state is that `readonly` can be focused while the `disabled` state cannot.

Understanding the different form states is important because they ensure a smooth user experience by providing clear feedback and guidance while handling errors.

# --questions--

## --text--

Which attribute is used to disable an input?

## --answers--

`readonly`

### --feedback--

The name of the attribute strongly implies the answer.

---

`required`

### --feedback--

The name of the attribute strongly implies the answer.

---

`checked`

### --feedback--

The name of the attribute strongly implies the answer.

---

`disabled`

## --video-solution--

4

## --text--

Which attribute is used to mark an input read only?

## --answers--

`checked`

### --feedback--

The name of the attribute strongly implies the answer.

---

`readonly`

---

`size`

### --feedback--

The name of the attribute strongly implies the answer.

---

`capture`

### --feedback--

The name of the attribute strongly implies the answer.

## --video-solution--

2

## --text--

When does the focus state occur?

## --answers--

When an input field is disabled and cannot be interacted with.

### --feedback--

Refer back to the beginning of the lesson where the focused state was discussed.

---

When an input field is validated and shows an error message.

### --feedback--

Refer back to the beginning of the lesson where the focused state was discussed.

---

When the user clicks on an input or selects it using the tab key to focus it.

---

When an input field has been pre-filled with default values by the browser.

### --feedback--

Refer back to the beginning of the lesson where the focused state was discussed.

## --video-solution--

3
