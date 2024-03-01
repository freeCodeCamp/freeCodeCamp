---
id: 65e185b1500d930ce8ed909b
title: Learn Variables and Operators Question A
challengeType: 15
dashedName: learn-variables-and-operators-question-a
---
# --description--
The simplest way to get started is to create an HTML file with the JavaScript code inside of it. Type the basic HTML skeleton into a file on your computer somewhere:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Save and open this file up in a web browser (you can use <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" >"Live Server" on Visual Studio Code</a> to do this!) and then open up the browser’s console by right-clicking on the blank webpage and selecting "Inspect" or "Inspect Element". In the ‘Developer Tools’ pane find and select the ‘Console’ tab, where you should see the output of our `console.log` statement.

> `console.log()` is the command to print something to the developer console in your browser. You can use this to print the results from any of the following articles and exercises to the console. We encourage you to code along with all of the examples in this and future lessons.

Another way to include JavaScript in a webpage is through an external script. This is very similar to linking external CSS docs to your website.

```html
  <script src="javascript.js"></script>
```

JavaScript files have the extension `.js` similar to `.css` for stylesheets. External JavaScript files are used for more complex scripts.

# --question--

## --text--

Which statement accurately describes how to include JavaScript in an HTML document?

## --answers--

JavaScript can only be included internally within a `<script>` tag in the HTML body.

---

JavaScript code must be written in the `<head>` section of an HTML document for it to execute properly.

---

JavaScript can be included directly in an HTML file using a `<script>` tag or linked externally via a `<script src="javascript.js">` tag. 

---

External JavaScript files require a special attribute in the `<script>` tag to be recognized by web browsers.


## --video-solution--

3
