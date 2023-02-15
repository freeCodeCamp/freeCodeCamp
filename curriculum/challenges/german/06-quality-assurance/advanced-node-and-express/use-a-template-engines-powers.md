---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

One of the greatest features of using a template engine is being able to pass variables from the server to the template file before rendering it to HTML.

In your Pug file, you're able to use a variable by referencing the variable name as `#{variable_name}` inline with other text on an element or by using an equal sign on the element without a space such as `p=variable_name` which assigns the variable's value to the p element's text.

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

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can check out the <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">project completed up to this point</a>.

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
