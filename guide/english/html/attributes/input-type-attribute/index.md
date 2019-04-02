---
title: Input Type Attribute
---
## Input Type Attribute

The input type attribute specifies the type of the input the user should put in your form.

### text
One line of text.
```html
    <form>
      <label for="login">Login:</label>
      <input type="text" name="login">
    </form>
```

### password
One line of text. Text is automatically displayed as a series of dots or asterisks (depends on the browser and OS).
```html
    <form>
      <label for="password">Password:</label>
      <input type="password" name="password">
    </form>
```

### email
The HTML checks if the input matches the e-mail address format (something@something).
```html
    <form>
      <label for="email">E-mail address:</label>
      <input type="email" name="email">
    </form>
```

### number
Allow only numeric input. You can also specify the min and max value allowed. The example below checks that the input is number between 1 and 120.
```html
    <form>
      <label for="age">Age:</label>
      <input type="number" name="age" min="1" max="120">
    </form>
```

### date
Create input fields that let the user enter a date , either using a text box that automatically validates the content, or using a special date picker interface .
```html
    <form>
      <label for="date">Date:</label>
      <input type="date" name="date">
    </form>
```

### file
Let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission
```html
    <form>
      <label for="photo">Profile Picture:</label>
      <input type="file" name="photo">
    </form>
```

### radio
Only one option can be selected by the user. The group of radio buttons needs to have the same name attribute. You can select  one option automatically by using `checked` property (in the example below the value Blue is selected).
```html
    <form>
      <label><input type="radio" name="color" value="red">Red</label>
      <label><input type="radio" name="color" value="green">Green</label>
      <label><input type="radio" name="color" value="blue" checked>Blue</label>
    </form>
```

### checkbox
A user can select zero or more options from the group of checkboxes. You can use `checked` property here too for one or more options.
```html
    <form>
      <label><input type="checkbox" name="lang" value="english">English</label>
      <label><input type="checkbox" name="lang" value="spanish">Spanish</label>
      <label><input type="checkbox" name="lang" value="french">French</label>
    </form>
```

### button
The input is displayed as a button, the text which should be displayed in the button is in the value attribute.
```html
    <form>
      <input type="button" value="click here">
    </form>
```

### submit
Displays the submit button. The text which should be displayed in the button is in the value attribute. After clicking on the button, HTML validation is performed and if it passes, the form is submitted.

```html
    <form>
      <input type="submit" value="SUBMIT">
    </form>
```

### reset
Displays the reset button. The text which should be displayed in the button is in the value attribute. After clicking on the button, all entered values from the form are deleted.
```html
    <form>
      <input type="reset" value="CANCEL">
    </form>
```
### color
Allows color input through a color picker. The color which should be displayed by default in the box is in the `value` attribute, and should be specified in hexadecimal format.
```html
<form>
    <input type="color" name="myfavcolor" value="#ba1e1e">
</form>
```
Note: `type="color"` is not supported in Internet Explorer 11.


There are more types of elements. For more information visit [MSDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or [W3schools](https://www.w3schools.com/Html/html_form_input_types.asp).
