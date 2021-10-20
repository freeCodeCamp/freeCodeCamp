---
id: 5ccfad82bb2dc6c965a848e5
title: Get JSON with the JavaScript fetch method
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

Another way to request external data is to use the JavaScript `fetch()` method. It is equivalent to `XMLHttpRequest`, but the syntax is considered easier to understand.

Here is the code for making a GET request to `/json/cats.json`

```js

fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

```

Take a look at each piece of this code.

The first line is the one that makes the request. So, `fetch(URL)` makes a `GET` request to the URL specified. The method returns a Promise.

After a Promise is returned, if the request was successful, the `then` method is executed, which takes the response and converts it to JSON format.

The `then` method also returns a Promise, which is handled by the next `then` method. The argument in the second `then` is the JSON object you are looking for!

Now, it selects the element that will receive the data by using `document.getElementById()`. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.

# --instructions--

Update the code to create and send a `GET` request to the freeCodeCamp Cat Photo API. But this time, using the `fetch` method instead of `XMLHttpRequest`.

# --hints--

Your code should make a `GET` request with `fetch`.

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

Your code should use `then` to convert the response to JSON.

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

Your code should use `then` to handle the data converted to JSON by the other `then`.

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

Your code should get the element with id `message` and change its inner HTML to the string of JSON data.

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
