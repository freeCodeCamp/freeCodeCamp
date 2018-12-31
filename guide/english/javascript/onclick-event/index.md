---
title: Onclick Event
---
## Onclick Event
The `onclick` event in JavaScript lets you as a programmer execute a function when an element is clicked. 

### Example
```javascript
<button onclick="myFunction()">Click me</button>

<script>
  function myFunction() {
    alert('Button was clicked!');
  }
</script>
```

In the simple example above, when a user clicks on the button they will see an alert in their browser showing `Button was clicked!`. 

### Adding `onclick` dynamically
The `onclick` event can also be programmatically added to any element using the following code in the following example:

```javascript
<p id="foo">click on this element.</p>

<script>
  var p = document.getElementById("foo"); // Find the paragraph element in the page
  p.onclick = showAlert; // Add onclick function to element
    
  function showAlert(event) {
    alert("onclick Event triggered!");
  }
</script>
```


### Note ###

It's important to note that using onclick we can add just one listener function. If you want to add more, just use addEventListener(), which is the preferred way for adding events listener.

In the above example, when a user clicks on the `paragraph` element in the `html`, they will see an alert showing `onclick Event triggered`. 

### Preventing default action
By attaching `onclick` to links (HTML's `a` tag), we can also prevent the default click action from occurring.

```javascript
<a href="https://guide.freecodecamp.org" onclick="myAlert(event)">Guides</a>

<script>
  function myAlert(e) {
    e.preventDefault();
    alert("Link was clicked but page was not open");
  }
</script>
```

In the above example we prevented default behavior of `a` element (opening link) using `event.preventDefault()` inside our `onclick` callback function.

<a href='https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick' target='_blank' rel='nofollow'>MDN</a>

#### Other Resources
<a href='https://api.jquery.com/on/' target='_blank' rel='nofollow'>jQuery .on() Event Handler Attachment</a>
