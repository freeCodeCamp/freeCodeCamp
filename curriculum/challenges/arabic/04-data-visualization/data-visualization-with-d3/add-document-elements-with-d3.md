---
id: 587d7fa6367417b2b2512bc2
title: إضافة عناصر وثيقة (Document) بواسطة D3
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

يحتوي D3 على عدة طرق (methods) التي تسمح لك بإضافة وتغيير العناصر في وثيقتك.

تختار طريقة (method) `select()` عنصراً واحداً من الوثيقة. إنها تأخذ اسم العنصر الذي تريده كمعطى (argument)، وتنتج HTML node لأول عنصر في المستند يطابق الاسم. Here's an example:

```js
const anchor = d3.select("a");
```

يجد المثال السابق أول علامة رابط (anchor) في الصفحة ويحفظ HTML node لها في المتغير `anchor`. يمكنك استخدام طريقة الاختيار (selection) مع طرق (methods) أخرى. The `d3` part of the example is a reference to the D3 object, which is how you access D3 methods.

Two other useful methods are `append()` and `text()`.

The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

Here's an example that selects an unordered list, appends a list item, and adds text:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 allows you to chain several methods together with periods to perform a number of actions in a row.

# --instructions--

Use the `select` method to select the `body` tag in the document. Then `append` an `h1` tag to it, and add the text `Learning D3` into the `h1` element.

# --hints--

The `body` should have one `h1` element.

```js
assert($('body').children('h1').length == 1);
```

The `h1` element should have the text `Learning D3` in it.

```js
assert($('h1').text() == 'Learning D3');
```

Your code should access the `d3` object.

```js
assert(code.match(/d3/g));
```

Your code should use the `select` method.

```js
assert(code.match(/\.select/g));
```

Your code should use the `append` method.

```js
assert(code.match(/\.append/g));
```

Your code should use the `text` method.

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
