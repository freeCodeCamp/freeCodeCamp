---
title: Required
---
## Required


The HTML `required` attribute is used in an input element to make the input field in a form required to submit the form. This means that the user must fill in the field. <br /> 
If the user does not fill in the input field, the form will not submit and it will give a message asking the user to fill out the field. <br /> <br />
The `required` attribute is applicable to `<input>`, `<select>`, and `<textarea>`. 

`<input>` example: 
```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Required Attribute</title>
  </head>
  <body>
    <form action="/">
      Text Field: <input type="text" name="textfield" required>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

`<select>` Example:
```html
<form action="/action.php">
<select required>
  <option value="">None</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</form>
```
`<textarea>` Example:
```html
<form action="/action.php">
  <textarea name="comment" required></textarea>
  <input type="submit">
</form>
```

#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank">MDN article on the input element</a>

