---
title: Introduction to the Learn HTML Forms by Building a Registration Form
block: learn-html-forms-by-building-a-registration-form
superBlock: 2022/responsive-web-design
---

## Introduction to the Registration Form

HTML Forms are essential for gathering user input and submitting data to a server. They allow you to create interactive and dynamic web applications by collecting information such as names, emails, and preferences.

The `<form>` element acts as a container for all your form elements. It defines the method and action for submitting data.

```html
<form action="/submit-enrollment" method="post"></form>
```

Within your form, you can have various `input` elements to collect user inputs.

```html
<form action="/submit-enrollment" method="post">
  <input type="text" id="name" name="name" required />
</form>
```

You will also label those inputs using a `label` element.

```html
<form action="/submit-enrollment" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
</form>
```

With these concepts in mind, you’re ready to start experimenting with HTML Forms and create interactive web pages.
