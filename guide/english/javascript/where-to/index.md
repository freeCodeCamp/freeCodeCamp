---
title: Where to
---
## Where to

JavaScript is the programming language of HTML and the Web. In HTML, JavaScript must be inserted in the `<script>` container tag.

### Example

```html
<script>
  window.alert("This JavaScript Works!");
</script>
```

Also, remember that you can place any number of `<script>` tags in an HTML document.

### Where does the `<script>` tag go?

The `<script>` tag can be placed in the `<head>` or the `<body>`.

### JavaScript in the `<head>`

In this example, the JavaScript is placed in the `<head>` section of the document. A function **onClicked** is created, which is called when a button is pressed.

```html
<!DOCTYPE html>
<html>
<head>
<script>
function onClicked() {
    window.alert("Hi, there!");
}
</script>
</head>

<body>

<h1>JavaScript Testing</h1>
<button type="button" onclick="onClicked()">Try it</button>

</body>
</html>
```

### JavaScript in the `<body>`

Here, the JavaScript is placed in the <body>. The function **onClicked** is created and is set to be fired when the button is clicked.
  
```html
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Testing</h1>
<button type="button" id="buttonClicked">Try it</button>

<script>
document.getElementById("buttonClicked").onclick = onClicked;
  
function onClicked() {
    window.alert("Hi, there!");
}
</script>

</body>
</html>
```

### External Scripts

Scripts can also be placed in external files. Let's create a file **script.js**.
##### script.js
```javascript
window.alert("Hi!");
```

This script can be included in an HTML document as so:
```html
<!DOCTYPE html>
<html>
<body>
  
<script src="script.js"></script>

</body>
</html>
```

_Hi!_ will still be alerted when the page is rendered. Remember, you do not need to include `<script>` tags in JavaScript files (the files which have the extension **.js**).

#### More Information:
Yahoo recommends placing scripts at the bottom. This is elaborated [here](https://developer.yahoo.com/performance/rules.html#js_bottom), with the reason for this recommendation.
