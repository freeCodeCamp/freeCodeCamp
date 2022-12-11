---
id: 5895f70bf9fc0f352b528e64
title: 使用模板引擎
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

模版引擎最大的特點之一就是在 HTML 頁面展示之前，可以從服務端傳變量到模版文件。

在 Pug 文件中，你可以用變量名來調用變量，比如寫成 `#{variable_name}` 來實現行內調用，或像 `p=variable_name` 把元素與變量直接寫在一起，這表示 p 元素的內容等價於這個變量。

Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site.

Take the following Pug code for example:

```pug
head
  script(type='text/javascript').
    if (foo) bar(1 + 5);
body
  if youAreUsingPug
      p You are amazing
    else
      p Get on it!
```

The above yields the following HTML:

```html
<head>
  <script type="text/javascript">
    if (foo) bar(1 + 5);
  </script>
</head>
<body>
  <p>You are amazing</p>
</body>
```

Your `index.pug` file included in your project, uses the variables `title` and `message`.

Pass those from your server to the Pug file by adding an object as a second argument to your `res.render` call with the variables and their values. Give the `title` a value of `Hello` and `message` a value of `Please log in`.

It should look like:

```javascript
res.render('index', { title: 'Hello', message: 'Please log in' });
```

Now refresh your page, and you should see those values rendered in your view in the correct spot as laid out in your `index.pug` file!

Submit your page when you think you've got it right. If you're running into errors, you can check out the <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">project completed up to this point</a>.

# --hints--

Pug should correctly render variables.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /pug-variable("|')>Please log in/gi,
    'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
