---
title: Strings
---
## Strings

A string is series of characters.
PHP only supports a 256-character set and hence does not offer native Unicode support.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


## Get The Length of a String
The PHP strlen() function returns the length of a string.

The example below returns the length of the string "Hello world!":

  <?php
    echo strlen("Hello world!"); // outputs 12
  ?>

## Count The Number of Words in a String

The PHP str_word_count() function counts the number of words in a string:

<?php
  echo str_word_count("Hello world!"); // outputs 2
?>
