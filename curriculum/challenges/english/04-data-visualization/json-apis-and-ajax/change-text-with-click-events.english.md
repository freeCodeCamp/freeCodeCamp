---
id: 587d7fad367417b2b2512be2
title: Change Text with click Events
challengeType: 6
isHidden: false
forumTopicId: 301500
---

## Description
<section id='description'>
When the click event happens, you can use JavaScript to update an HTML element.
For example, when a user clicks the "Get Message" button, it changes the text of the element with the class <code>message</code> to say "Here is the message".
This works by adding the following code within the click event:
<code>document.getElementsByClassName('message')[0].textContent="Here is the message";</code>
</section>

## Instructions
<section id='instructions'>
Add code inside the <code>onclick</code> event handler to change the text inside the <code>message</code> element to say "Here is the message".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>document.getElementsByClassName</code> method to select the element with class <code>message</code> and set its <code>textContent</code> to the given string.
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line


      // Add your code above this line
    }
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
<p class="message box">
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
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line
      document.getElementsByClassName('message')[0].textContent = "Here is the message";
      // Add your code above this line
    }
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

</section>
