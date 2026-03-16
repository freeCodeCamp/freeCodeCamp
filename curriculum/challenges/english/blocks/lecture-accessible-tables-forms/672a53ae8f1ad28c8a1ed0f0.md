---
id: 672a53ae8f1ad28c8a1ed0f0
title: Why Is It Important for Inputs to Have an Associated Label?
challengeType: 19
dashedName: why-is-it-important-for-inputs-to-have-an-associated-label
---

# --interactive--

Labels on input fields might seem like small details, but they play a crucial role in making forms easier for everyone to use.

Labels help people with disabilities, make forms more user-friendly for everyone, and ultimately improve form conversion rates.

Let's dive into why adding labels to input elements is important for accessibility and usability.

Screen readers often rely on labels to describe the purpose of input fields. In order for this to work properly, the label must be programmatically associated with the `input`. While there are several ways to do that, the most common is to use the HTML `label` element.

Here's how to associate a `label` with an `input`:

:::interactive_editor

```html
<form>
   <label for="name">Your Name</label>
   <input type="text" id="name" />
</form>
```

:::

In this example, the `for` attribute of the `label` element is associated with the `id` of the `input` element. This connection allows screen readers to announce the `label` when the `input` is in a focused state, allowing screen reader users to understand the purpose of the `input`.

Associating labels with all input fields also benefits SEO.  With proper labels, search engines will understand the page content better, leading to a positive impact on the page search rankings.

But it is important to understand that you're making content for humans, not search engines. So, you should make sure the labels are as clear and descriptive as possible.

# --questions--

## --text--

Why is adding labels to input elements important for accessibility?

## --answers--

They provide visual styling to input fields.

### --feedback--

Think about how screen readers provide information to users.

---

They help screen readers describe the purpose of input fields.

---

They increase the loading speed of web pages.

### --feedback--

Think about how screen readers provide information to users.

---

They enable input fields to accept multiple types of data.

### --feedback--

Think about how screen readers provide information to users.

## --video-solution--

2

## --text--

What is the correct way to programmatically associate a label with an input in HTML?

## --answers--

Give both elements the same `name` attribute.

### --feedback--

Review the example in the lesson showing how `for` and `id` are used together.

---

Set the label's `for` attribute to match the input's `id`.

---

Place the `<label>` immediately after the `<input>` element in the DOM.

### --feedback--

Review the example in the lesson showing how `for` and `id` are used together.

---

Use the input's `placeholder` text instead of a label.

### --feedback--

Review the example in the lesson showing how `for` and `id` are used together.

## --video-solution--

2

## --text--

Besides accessibility, what is another benefit of associating labels with inputs?

## --answers--

It makes the page load significantly faster.

### --feedback--

Review the end of the lesson for other benefits mentioned.

---

It can help search engines better understand the page content.

---

It allows inputs to accept multiple data types automatically.

### --feedback--

Review the end of the lesson for other benefits mentioned.

---

It automatically translates labels for international users.

### --feedback--

Review the end of the lesson for other benefits mentioned.

## --video-solution--

2
