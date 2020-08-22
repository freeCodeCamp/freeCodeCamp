---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
isHidden: false
forumTopicId: 301567
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
One of the greatest features of using a template engine is being able to pass variables from the server to the template file before rendering it to HTML.
In your Pug file, you're able to use a variable by referencing the variable name as <code>#{variable_name}</code> inline with other text on an element or by using an equal sign on the element without a space such as <code>p=variable_name</code> which assigns the variable's value to the p element's text.
We strongly recommend looking at the syntax and structure of Pug <a href='https://github.com/pugjs/pug'>here</a> on GitHub's README. Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site.
Looking at our pug file 'index.pug' included in your project, we used the variables <em>title</em> and <em>message</em>.
To pass those along from our server, you will need to add an object as a second argument to your <em>res.render</em> with the variables and their values. For example, pass this object along setting the variables for your index view: <code>{title: 'Hello', message: 'Please login'}</code>
It should look like: <code>res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});</code>
Now refresh your page and you should see those values rendered in your view in the correct spot as laid out in your index.pug file! Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug should correctly render variables.
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-variable("|')>Please login/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
