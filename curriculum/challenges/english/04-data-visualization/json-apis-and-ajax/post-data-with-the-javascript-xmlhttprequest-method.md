---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
forumTopicId: 301504
---

## Description
<section id='description'>
In the previous examples, you received data from an external resource. You can also send data to an external resource, as long as that resource supports AJAX requests and you know the URL.
JavaScript's <code>XMLHttpRequest</code> method is also used to post data to a server. Here's an example:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

You've seen several of these methods before. Here the <code>open</code> method initializes the request as a "POST" to the given URL of the external resource, and uses the <code>true</code> Boolean to make it asynchronous.
The <code>setRequestHeader</code> method sets the value of an HTTP request header, which contains information about the sender and the request. It must be called after the <code>open</code> method, but before the <code>send</code> method. The two parameters are the name of the header and the value to set as the body of that header.
Next, the <code>onreadystatechange</code> event listener handles a change in the state of the request. A <code>readyState</code> of 4 means the operation is complete, and a <code>status</code> of 201 means it was a successful request. The document's HTML can be updated.
Finally, the <code>send</code> method sends the request with the <code>body</code> value, which the <code>userName</code> key was given by the user in the <code>input</code> field.
</section>

## Instructions
<section id='instructions'>
Update the code so it makes a "POST" request to the API endpoint. Then type your name in the input field and click "Send Message". Your AJAX function should replace "Reply from Server will be here." with data from the server. Format the response to display your name appended with " loves cats".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should create a new <code>XMLHttpRequest</code>.
    testString: assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
  - text: Your code should use the <code>open</code> method to initialize a "POST" request to the server.
    testString: assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
  - text: Your code should use the <code>setRequestHeader</code> method.
    testString: assert(code.match(/\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g));
  - text: Your code should have an <code>onreadystatechange</code> event handler set to a function.
    testString: assert(code.match(/\.onreadystatechange\s*?=/g));
  - text: Your code should get the element with class <code>message</code> and change its <code>textContent</code> to "<code>userName</code> loves cats"
    testString: assert(code.match(/document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g));
  - text: Your code should use the <code>send</code> method.
    testString: assert(code.match(/\.send\(\s*?body\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
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

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

</section>
