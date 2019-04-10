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
Radio buttons can be used when you want to limit a user's selection to one option when multiple options are available. A user cannot choose 2 or more radio buttons in the same selection field. By giving a group of radio buttons the same name attribute, the selection of one button will automatically result in the deselection of other buttons.
