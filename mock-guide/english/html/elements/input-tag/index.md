---
title: Input Tag
---
## Input
HTML input tag can be included in HTML document like this:

```html
<input type="text">
```

This creates an area within which a user can easily enter information. This information is then sent to a back end database and stored or used further down within the website or application.

An input with "type='text'" will produce a single line field where any information can be entered. Other common types of inputs include but are not limited to: button, checkbox, color, email and password.

### The most common types used

* `text`: A single-line text field.

* `button`: A button with no default behavior.

* `submit`: A button that submits the form.

* `checkbox`: A check box allowing values to be selected/deselected.

* `date`:  For entering a date (year, month, and day).

* `email`: For editing an e-mail address.

* `file`: Lets the user select a file.

* `hidden`: Not displayed but its value is submitted to the server.

* `number`: For entering a number.

* `password`: A single-line text field whose value is obscured.

* `radio`: A radio button, allowing a single value to be selected out of multiple choices.

* `range`: A control for entering a number.

* `url`: For entering a URL.

Example:
```html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="email">
<input type="password">
```

Inputs come with a lot of predetermined attributes.

Some commonly found attributes include autocomplete, checked and placeholder.

```html
<input type="text" placeholder="This is a placeholder">
```

In the above instance, an area within which input can be entered is rendered, with the placeholder stating "This is a placeholder". Once the input line is clicked and a key is pressed, the placeholder disappears and is replaced by your own input.

```html
<input type="checkbox" checked>
```

In this instance, a checkbox appears and it is checked by default due to the attribute 'checked'.

There are many different types of inputs and associated attributes that can all be found on the link found below.

#### More Information:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

https://www.w3schools.com/tags/tag_input.asp
