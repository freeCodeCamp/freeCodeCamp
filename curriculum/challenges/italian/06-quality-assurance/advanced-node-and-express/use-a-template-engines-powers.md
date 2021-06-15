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

We strongly recommend looking at the syntax and structure of Pug [here](https://github.com/pugjs/pug) on GitHub's README. Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site.

Looking at our pug file 'index.pug' included in your project, we used the variables *title* and *message*.

To pass those along from our server, you will need to add an object as a second argument to your *res.render* with the variables and their values. For example, pass this object along setting the variables for your index view: `{title: 'Hello', message: 'Please login'}`

It should look like: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` Now refresh your page and you should see those values rendered in your view in the correct spot as laid out in your index.pug file!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871).

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
