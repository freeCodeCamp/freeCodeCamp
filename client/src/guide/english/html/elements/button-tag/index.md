---
title: Button Tag
---
## Button Tag

A `<button>` tag specifies a clickable button on the HTML document.
Between the `<button>` tags, you can put content, like text or images. This is different from the button created using `<input>` tag, which only takes text as content.

**Syntax:**

`<button type="submit">Click Here!</button>`

**Atributes:**

Following are the associated attribute supported by HTML 4:

| **Attributes** | **Value** | **What it does** |
|---|---|---|
| disabled | disabled | Disables the button |
| name | name | Specifies a name for the button. The name is for referencing the button in HTML form, JS, etc. |
| type | button or reset or submit | Sets the type of the button. A button with `button` type is a simple clickable button, with `submit` type it submits form-data, and with `reset` type it resets form-data. |
| value | text | Sets an initial value for the button. This value is sent along with the form-data. |

HTML 5 supports the following extra attributes:

| **Attributes** | **Value** | **What it does** |
|---|---|---|
| autofocus | autofocus | Should the button automatically get focus when the page loads. For example, see Google. As the page gets loaded completely, the text-box get focus automatically. |
| form | form_id | Specifies one or more forms the button belongs to. |
| formaction | URL | Specifies where to send the form-data once the `submit` type button is pressed. |
| formmethod | get or post | Specifies how to send the form-data. Only for `submit` type button. |
| formtarget | `_blank` or `_self` or `_parent` or `_top` or framename | Specifies the location where the result is to be displayed after submitting form-data. |

**Example:**

```html
<html>
  <head>
    <title>Button Tag example</title>
  </head>
  <body>
    <form>
      First name:<br>
      <input type="text" name="firstname" value="Free">
      <br>
      Last name:<br>
      <input type="text" name="lastname" value="CodeCamp">
      <br><br>
      <input type="submit" value="Submit" formtarget="_self">
    </form>
  </body>
</html>
```

All major browsers support the `<button>` tag. `<button>` tag also supports event attributes in HTML.
**Note:** Different browsers may send different values if you use `<button>` element. It is advised to either specify the button value or use the `<input>` tag to create button in an HTML form.

**Other resources:**
* Other attributes:

| **Attributes** | **Link** |
|---|---|
| formenctype | https://www.w3schools.com/TAgs/att_button_formenctype.asp |
| formnovalidate | https://www.w3schools.com/TAgs/att_button_formnovalidate.asp |

* `<input>` tag: https://www.w3schools.com/TAgs/tag_input.asp
* Event Attributes: https://www.w3schools.com/TAgs/ref_eventattributes.asp
* `formtarget` attribute values: https://www.w3schools.com/TAgs/att_button_formtarget.asp
* HTML Form: 
