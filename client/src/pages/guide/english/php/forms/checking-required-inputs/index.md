---
title: Checking Required Inputs
---
## Checking Required Inputs
Basic example:

```
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["username"])) {
    $nameErr = "Name is required";
  } else {
    $name = $_POST["name"];
  }
}
```

So after a form submit this code checks whether an input with name 'username' is empty or not.

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/php/forms/checking-required-inputs/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
