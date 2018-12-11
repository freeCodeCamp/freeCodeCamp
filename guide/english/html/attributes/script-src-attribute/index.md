---
title: Script Src Attribute
---
## Script Src Attribute

The 'src' attribute in a <script></script> tag is the path to an external file or resource that you want to link to your HTML document.

For example, if you had your own custom JavaScript file named 'script.js' and wanted to add its functionality to your HTML page, you would add it like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Script Src Attribute Example</title>
  </head>
  <body>

  <script src="./script.js"></script>
  </body>
</html>
```

This would point to a file named 'script.js' that is in the same directory as the .html file. You can also link to other directories by using '..' in the file path.

```html
<script src="../public/js/script.js"></script>
```

This jumps up one directory level then into a 'public' directory then to a 'js' directory and then to the 'script.js' file.

You can also use the 'src' attribute to link to external .js files hosted by a third party. This is used if you don't want to download a local copy of the file.  Just note that if the link changes or network access is down, then the external file you are linking to won't work.

This example links to a jQuery file.

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src' target='_blank' rel='nofollow'>MDN Article on the HTML <script> tag</a>

