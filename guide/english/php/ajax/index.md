---
title: AJAX
---
## AJAX

<!-- Please add any articles you think might be helpful to read before writing the article -->
<b>AJAX</b> stands for <b>Asynchronous JavaScript And XML</b>. It is not a programming language. It is a technology for developing better, faster and interactive Web Applications using HTML, CSS, JavaScript and XML. 
<ol>
  <li>HTML : Hypertext Markup Language (HTML) is used for defining the structure of a Web Application.</li>
  <li>CSS  : Cascading Style Sheet (CSS) is used to provide look and style to a Web Application.</li>
  <li>JavaScript : JavaScript is used for making a Web Application interactive, interesting and user friendly.</li>
  <li>XML  : Extensible Markup Language (XML) is a format to store and transport data from the Web Server.</li>
</ol>
<h4>What's the meaning of Asynchronous in AJAX?</h4>
<p>Asynchronous means that the the Web Application could send and receive data from the Web Server without refreshing the page. This background process of sending and receiving data from the server along with updating different sections of a web page defines Asynchronous property/feature of AJAX.<p>
<h4>How <b>AJAX</b> works?</h4>
<p>AJAX makes use of a browser built-in <b>XMLHttpRequest object</b> to request data from a Web Server and <b>HTML DOM</b> to display or use the data.</p>
<p><b>XMLHttpRequest Object</b> : It is an API in the form an object whose methods help in transfer of data between a web browser and a web server.</p>
<p><b>HTML DOM</b> : When a web page is loaded, the browser creates a Document Object Model of the page.</p>
<img src="https://i.imgur.com/pfC7QFH.png" title="How AJAX work" />

<b>Create a XMLHttpRequest Object :</b>

```javascript
var xhttp = new XMLHttpRequest();
```
<b>Properties of XMLHttpRequest object :</b>

```readystate``` is a property of the XMLHttpRequest Object which holds the status of the XMLHttpRequest.
<ul>
  <li>0: request not initialized</li>
  <li>1: server connection established</li>
  <li>2: request received</li> 
  <li>3: processing request</li>
  <li>4: request finished and response is ready</li>
 </ul>
 
```onreadystatechange``` is a property of the XMLHttpRequest Object which defines a function to be called when the readyState property changes.<br/>
  
```status``` is a property of the XMLHttpRequest Object which returns the status-number of a request
<ul>
  <li>200: "OK"</li>
  <li>403: "Forbidden"</li>
  <li>404: "Not Found"</li>
</ul> 

<b>XMLHttpRequest Object Methods :</b>
To send a request to a Web Server, we use the open() and send() methods of the XMLHttpRequest object.

```javascript
xhttp.open("GET", "content.txt", true);
xhttp.send();
```

<b>Create a function changeContent() using JavaScript :</b>

```javascript
function changeContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("foo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "content.txt", true);
  xhttp.send();
}
```
<b>AJAX example to change content of a web page :</b>

```HTML
<!DOCTYPE html>
<html>
<body>

<div id="foo">
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="changeContent()">Change Content</button>
</div>

<script>
function changeContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("foo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "content.txt", true);
  xhttp.send();
}
</script>

</body>
</html>
```
The file ```content.txt``` should be present in the root directory of the Web Application.

### Sources

- [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

### Other Resources

- [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
