---
id: 5ccfad82bb2dc6c965a848e5
title: Get JSON with the JavaScript fetch() method.
challengeType: 6
---

## Description
<section id='description'>
Another way to request external data is to use the JavaScript <code>fetch()</code>  method. It is equivalent to XMLHttpRequest, but the syntax is considered easier to understand.
Here is the code for making a GET request to <code>/json/dogs.json</code>
<blockquote>	
fetch('/json/cats.json')<br>
&nbsp;&nbsp;.then(response => response.json())<br>
&nbsp;&nbsp;.then(data => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(data);<br>
&nbsp;&nbsp;})
</blockquote>
Let's analyze each piece of this code. 
The first line is the one that makes the request. So, <code>fetch(URL)</code> makes a GET request to the URL specified. The method returns a JavaScript object called a Promise.
A Promise is an object to handle asynchronous calls, by treating success and error cases. In other words, it treats a function response differently for success and error.
After a Promise is returned, if the request was successful, the <code>then</code> method is executed, by taking the response and converting it to a JSON format.
The <code>then</code> method also returns a Promise, which is handled by the next <code>then</code> method. The argument in the second <code>then</code> is the JSON object we were looking for! Now, we select the elements we want to insert the data, by using <code>document.getElementsByClassName()</code>, and then we modify the HTML code of these elements, inserting a string created from the JSON object returned from the request.
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
    testString: assert(code.match(/fetch\(\s*?('|")\/json\/cats\.json('|")\s*?\)/g));
  - text: Your code should use <code>then</code> to convert the response to JSON.
    testString: assert(code.match(/\.then\(.*\=\>.*\.json\(\s*\)\s*\)/g))
  - text: Your code should use <code>then</code> to handle da data converted to JSON by the other <code>then</code>.
    testString: assert(code.match(/\.then\(.*\=\>\s*\{.*\}\s*\)/g))
  - text: Your code should get the element with class <code>message</code> and change its inner HTML to the string of JSON data.
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
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

```js
// solution required
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(data);
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
