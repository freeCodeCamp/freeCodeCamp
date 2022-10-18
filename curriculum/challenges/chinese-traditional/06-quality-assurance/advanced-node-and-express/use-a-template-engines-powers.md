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

 Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site. Read the Pug documentation for more information on usage and syntax.

 Here is an example:

 ```html
 <!--Typing this using Pug-->
 head
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    if youAreUsingPug
        p You are amazing
      else
        p Get on it!

<!--will lead to creating this code-->
  <head>
    <script type="text/javascript">
      if (foo) bar(1 + 5);
    </script>
  </head>
  <body>
    <p>You are amazing</p>
  </body>
  ```

Looking at our pug file `index.pug` included in your project, we used the variables `title` and `message`.

To pass those along from our server, you will need to add an object as a second argument to your `res.render` with the variables and their values. For example, pass this object along setting the variables for your index view: `{title: 'Hello', message: 'Please login'}`

It should look like: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` Now refresh your page and you should see those values rendered in your view in the correct spot as laid out in your `index.pug` file!

Submit your page when you think you've got it right. If you're running into errors, you can check out the <a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" target="_blank" rel="noopener noreferrer nofollow">project completed up to this point</a>.

# --hints--

Pug should correctly render variables.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
