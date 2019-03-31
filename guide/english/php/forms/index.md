---
title: Forms
---
## Forms

Forms are a way for users to enter data or select data from the webpage. Forms can store data as well as allow the information to be retrieved for later use.

To make a form to work in languages like PHP you need some basic attributes in html. In most cases PHP uses 'post' and 'get' super global variables to get the data from form.

#### Example

```html
<html>
<body>
  <form method="get" action="target_proccessor.php">
      <input type="search" name="search" /><br />
      <input type="submit" name="submit" value="Search" /><br />
  </form>
<body>
</html>
```

The 'method' attribute here tell the form the way to send the form data. Then the 'action' attribute tell where to send form data to proccess. Now the 'name' attribute is very important and it should be unique because in php the value of the name work as the identity of that input field.
#### More Information:
