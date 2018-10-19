---
title: Checking Required Inputs
---
## Checking Required Inputs

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/php/forms/checking-required-inputs/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
PHP has a few functions to check if the required inputs have been met. Those functions are ```isset```, ```empty```, and ```is_numeric```.

### Checking form to make sure its set
The ```isset``` checks to see if the field has been set and isn't null.
Example:
```php
$firstName = $_GET['firstName']

if(isset($firstName)){
  echo "firstName field is set". "<br>";
}
else{
  echo "The field is not set."."<br>";
}
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
