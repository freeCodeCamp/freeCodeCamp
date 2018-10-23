---
title: Radio Button
---

# Radio Button

```html
<!DOCTYPE html>
<html>
<body>

<form action="/action_page.php">
  <input type="radio" name="gender" value="male"> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other"> Other<br>  
  <input type="submit" value="Submit">
</form>

</body>
</html> 
```
Radio buttons can be used to select a single option out of multiple options. You aren't allowed to choose 2 or more radio buttons in the same selection field.

The name attribute will be sent to the server with the value for the option selected. If radio buttons are used to answer a single question, the value of the name attribute will be the same for each option used to answer the question.

The value attribute indicates the value sent to the server for the selected option. The value for each button in a group will be different so the server can tell which option has been selected.

Note that once a radio button has been selected, it cannot be deselected. The user will only be able to select a different option. If you only have one option that you want the user to be able to deselect, a checkbox should be used instead.
