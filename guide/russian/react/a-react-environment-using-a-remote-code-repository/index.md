---
title: A React Environment Using a Remote Code Repository
localeTitle: Среда разработки для React с использованием удаленного репозитория
---
Данное руководство поможет создать рабочую среду разработки для React, используя удаленные репозитории с необходимыми библиотеками. Для этого мы будем использовать cdnjs.cloudflare.com, react 16.0.0, react-dom, and babel-standalone 6.26.0. babel-polyfill используется для совместимости со старыми браузерами.

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

Если этот код сохраняется с расширением .html (helloReact.html), то его можно открыть в веб-браузере,
который, в свою очередь, запустит React и Babel.

