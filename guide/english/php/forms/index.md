---
title: Forms
---
## Forms

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/php/forms/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
To make a form to work in php we need some basic attributes in html. So Any form is used for proccessing data. In most cases php use 'post' and 'get' super global variable to get the data from form.

#### Example

`
<html>
<body>
  <form method="get" action="target_proccessor.php">
      <input type="search" name="search" /><br />
      <input type="submit" name="submit" value="Search" /><br />
  </form>
<body>
</html>

`
The 'method' attribute here tell the form the way to send the form data. Then the 'action' attribute tell where to send form data to proccess. Now the 'name' attribute is very important and it should be unique because in php the value of the name work as the identity of that input field.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
