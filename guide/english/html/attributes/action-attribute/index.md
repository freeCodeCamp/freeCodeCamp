---
title: The action attribute
---
## Action attribute

The `<action>` specifies where to send the form-data when a form is submitted.
In the example below, the data obtained from the user's input will be sent to the server and processed by action_page.php, which is specified in the  **action** attribute.

#### Example below:

```html
<form action="/action_page.php" method="get">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
</form>
```

### Support

The _action_ attribute is supported by all browsers
For more information visit [W3 Schools](https://www.w3schools.com/tags/att_action.asp)