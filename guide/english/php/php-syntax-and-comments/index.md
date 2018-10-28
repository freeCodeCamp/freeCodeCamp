---
title: PHP Syntax and Comments
---

## PHP Syntax

The structure of a PHP document may look something like:

```php
<?php

// Your PHP code goes here.
```

**NOTE:** When creating a document with only PHP, the closing tags (see below) should be omitted.

When placing PHP in an HTML document, a closing tag is needed, like so:

```php
<?php

// Your PHP code goes here.

?>
```

**NOTE:** Shorthand syntax is also available, but should be avoided to reduce unwanted behavior.

A PHP file may have HTML tags and / or JavaScript.

The default file extension for PHP files is `.php`.

## Indentation

While this is mostly personal preference, it is most common to see the lines within the <?php / ?> tags at the same level, like so:

```php
<?php

// Same level of indendation.
    // Not indented like so.
```

## How to make comments in PHP?

A comment in PHP code is a line that is not executed as part of the program. Its only purpose is to be read by someone who is looking at the code.

In PHP, comments can be make by two ways — either single-lined or multi-lined.

This can be seen in the example below:

```php
<?

// This is a single-lined comment.

/**
 * This is a multi-lined comment block
 * that spans over multiple
 * lines.
 */
```

## Additional Information

For more information, please see [PHP: Comments](http://php.net/manual/en/language.basic-syntax.comments.php).
