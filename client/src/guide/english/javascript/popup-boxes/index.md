---
title: Popup Boxes
---
## Popup Boxes
Popup boxes (or dialog boxes) are modal windows used to notify or warn the user, or to get input from the user.

Popup boxes prevent the user from accessing other aspects of a program until the popup is closed, so they should not be overused. 

There are three different kinds of popup methods used in JavaScript: <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/alert' target='_blank' rel='nofollow'>window.alert()</a>, <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm' target='_blank' rel='nofollow'>window.confirm()</a> and <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt' target='_blank' rel='nofollow'>window.prompt()</a>. 

### Alert
The <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/alert' target='_blank' rel='nofollow'>alert method</a> displays messages that don't require the user to enter a response. Once this function is called, an alert dialog box will appear with the specified (optional) message. Users will be required to confirm the message before the alert goes away. 

### Example:
`window.alert("Welcome to our website");`

![MDN Alert Example](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### Confirm
The <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm' target='_blank' rel='nofollow'>confirm method</a> is similar to `window.alert()`, but also displays a cancel button in the popup. The buttons return boolean values: true for OK and false for Cancel. 

### Example:
```javascript
var result = window.confirm('Are you sure?');
if (result === true) {
    window.alert('Okay, if you're sure.');
} else { 
    window.alert('You seem uncertain.');
}
```

![MDN Confirm Example](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### Prompt
The <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt' target='_blank' rel='nofollow'>prompt method</a> is typically used to get text input from the user. This function can take two arguments, both of which are optional: a message to display to the user and a default value to display in the text field. 

### Example:
`var age = prompt('How old are you?', '100');`

![MDN Prompt Example](https://mdn.mozillademos.org/files/11303/prompt.png)

### Other Design Options:
If you are unhappy with the default JavaScript popups, you can substitute in various UI libraries.  For example, SweetAlert provides a nice replacement for standard JavaScript modals.  You can include it in your HTML via a CDN (content delivery network) and begin use.
```HTML
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
```
The syntax is as such: ```swal(title, subtitle, messageType)```

```javascript
swal("Oops!", "Something went wrong on the page!", "error");
```
The above code will produce the following popup: 
![SweetAlert Example](https://ludu-assets.s3.amazonaws.com/lesson-content/rWqOoQXgDrSVSMrAKiZ9)
SweetAlert is by no means the only subsitute for standard modals, but it is clean and easy to implement. 




#### More Information:

* <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/alert' target='_blank' rel='nofollow'>MDN window.alert()</a>
* <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm' target='_blank' rel='nofollow'>MDN window.confirm()</a>
* <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt' target='_blank' rel='nofollow'>MDN window.prompt()</a>
