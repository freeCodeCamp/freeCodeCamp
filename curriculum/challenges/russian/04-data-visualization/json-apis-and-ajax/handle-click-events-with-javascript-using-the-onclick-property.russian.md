---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
forumTopicId: 301503
localeTitle: Ручка Нажмите «События» с помощью JavaScript, используя свойство onclick
---

## Description
<section id='description'>
You want your code to execute only once your page has finished loading. For that purpose, you can attach a JavaScript event to the document called <code>DOMContentLoaded</code>. Here's the code that does this:

```js
document.addEventListener('DOMContentLoaded',function() {

});
```

You can implement event handlers that go inside of the <code>DOMContentLoaded</code> function. You can implement an <code>onclick</code> event handler which triggers when the user clicks on the element with id <code>getMessage</code>, by adding the following code:

```js
document.getElementById('getMessage').onclick=function(){};
```

</section>

## Instructions
<section id='instructions'>
Add a click event handler inside of the <code>DOMContentLoaded</code> function for the element with id of <code>getMessage</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>document.getElementById</code> method to select the <code>getMessage</code> element.
    testString: assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
  - text: Your code should add an <code>onclick</code> event handler.
    testString: assert(typeof document.getElementById('getMessage').onclick === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    // Add your code below this line


    // Add your code above this line
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>

```

</div>

</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
