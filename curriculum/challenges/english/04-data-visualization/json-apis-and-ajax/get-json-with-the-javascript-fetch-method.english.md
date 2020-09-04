---
id: 5ccfad82bb2dc6c965a848e5
title: Get JSON with the JavaScript fetch method
challengeType: 6
forumTopicId: 301501
---

## Description
<section id='description'>
Another way to request external data is to use the JavaScript <code>fetch()</code>  method. It is equivalent to XMLHttpRequest, but the syntax is considered easier to understand.
Here is the code for making a GET request to <code>/json/cats.json</code>

```js

fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

```

Take a look at each piece of this code. 

The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a GET request to the URL specified. The method returns a Promise.

After a Promise is returned, if the request was successful, the <code>then</code> method is executed, which takes the response and converts it to JSON format.

The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object you are looking for! 

Now, it selects the element that will receive the data by using <code>document.getElementById()</code>. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.
</section>

## Instructions
<section id='instructions'>
Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. But this time, using the <code>fetch</code> method instead of <code>XMLHttpRequest</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should make a GET request with <code>fetch</code>.
    testString: assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
  - text: Your code should use <code>then</code> to convert the response to JSON.
    testString: assert(code.match(/\.then\s*\(\s*(response|\(\s*response\s*\))\s*=>\s*response\s*\.json\s*\(\s*\)\s*\)/g))
  - text: Your code should use <code>then</code> to handle the data converted to JSON by the other <code>then</code>.
    testString: assert(code.match(/\.then\s*\(\s*(data|\(\s*data\s*\))\s*=>\s*{[^}]*}\s*\)/g))
  - text: Your code should get the element with id <code>message</code> and change its inner HTML to the string of JSON data.
    testString: assert(code.match(/document\s*\.getElementById\s*\(\s*('|")message\1\s*\)\s*\.innerHTML\s*=\s*JSON\s*\.\s*stringify\s*\(\s*data\s*\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
      // Add your code below this line


      // Add your code above this line
    };
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
    };
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

</section>
