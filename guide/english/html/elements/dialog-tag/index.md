---
title: Dialog Tag
---
## Dialog Tag
The `<dialog>` tag defines a dialog box or window.

The `<dialog>` element makes it easy to create popup dialogs and modals on a web page.

The `<dialog>` tag is new in HTML5.

#### Attributes:
open:
Indicates that the dialog is active and that the user can interact with it.
When the open attribute is not set, the dialog shouldn't be shown to the user.

#### Example:

```html
  <dialog open>
    <p>This is an open dialog window</p>
  </dialog>
```

#### HTML DOM Dialog Object

#### To access a <dialog> element by using getElementById():

  `var dialog = document.getElementById("myDialog");`

####  Create a Dialog Object:
  `var x = document.createElement("DIALOG");`

#### Dialog Object Methods:
close() - Closes the dialog<br />
show() - Shows the dialog<br />
showModal() - Shows the dialog and makes it the top-most modal dialog

#### Further reading:
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
