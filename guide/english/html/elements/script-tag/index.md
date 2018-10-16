---
title: Script Tag
---
## Script Tag

The HTML Script tag is used to either contain client side JavaScript or reference an external JavaScript file using the script “src” attribute.

The `<script>` tag/element is used to incorporate client-side Javascript into your HTML file which can be used to add interactivity and logic to your website 

```
<script>
  //JavaScript code is written here
</script>

<script src="js/app.js">
```

The tag can be used to encompass actual Javascript code right in the HTML itself like this
```
<script>
  alert('hello this is my Javascript doing things!');
</script>
```

Or you can use it as a way to reference an external javascript file like this
```
<script src="main.js" />
```
Here the `src` attribute of the element takes in a path to a Javascript file

Script tags are loaded into your HTML in-order and syncronously so it is usually best practice to add your scripts right before the ending of your `<body>` tag in your HTML like so
```
  <script src="main.js" />
  <script>
    alert('hello this is my Javascript doing things!');
  </script>
</body>
```

You can see the official documentation for the script element on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)