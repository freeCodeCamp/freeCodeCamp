---
title: Change Text with Click Events
---
## Different Ways of Handling Click Events
> Coders often face a variety of options when confronting a challenge. One of these is their problem solving strategy. A simple example is letting the user interact with a website in the most basic of ways, a click. Let's take a look at a few different strategies: 
1. HTML onclick
2. Javascript addEventListener
3. jQuery click event
```html
<body>
    <div onclick="handleClick" id="listening">Click here!</div>
    <p id="toChange"></p>
</body>

```

```javascript
// HTML onclick
function handleClick(message = 'HTML onclick used'){
    document.getElementById("toChange").innerText = message;
}
// Javascript click events
document.getElementById("listening").addEventListener('click', 'Javascript addEventListener used');

// jQuery click events
$("#listening").click(handleClick, 'jQuery event listener');
```

> With most situations, web developers have a few options on how to proceed. Depending on how you're organizing your work, you can put an emphasis on the utility of your HTML, JavaScript, jQuery, or any other number of libraries or strategies.
