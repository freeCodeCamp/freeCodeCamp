---
title: A React Environment Using a Remote Code Repository
---

This is how to create a non-production React environment utilizing a remote code repository.
We will use the cdnjs.cloudflare.com 16.0.0 react, react-dom, and babel-standalone 6.26.0
to accomplish this.
babel-polyfill is used for older browsers compatibility.

 ```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello React</title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js">
  </script>
</head>

<body>
  <div id="helloreact"></div>
  <script type="text/babel">
    ReactDOM.render(
    <h1>Hello React</h1>, document.getElementById('helloreact'));
  </script>
</body>

</html>
 ```
 If this code is saved with the html file extension (helloReact.html), it can be opened in a web browser
 it will run React and Babel.
