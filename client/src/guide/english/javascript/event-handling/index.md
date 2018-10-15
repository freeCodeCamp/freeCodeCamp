---
title: Event Handling
---

## Event Handling

Events are (in the context of JavaScript) actions or incidents which happen inside the browser window, such as

* the user clicks on something or hovers over it
* the user presses a key
* the user drags and drops something
* the user submits a form
* content finishes loading
* a video starts or stops playing
* an error occurrs

and many more.

When an event happens it sends a signal which your code can react to.

Events usually occur on a specific item in the browser window, such as an element, a group of elements, the HTML document in your current tab, or the browser window itself.

You can use JavaScript to attach an event handler (also called an event listener) to these items to "listen" for a particular event and run some code when the event happens.

Inside the event handler, you specify two things: the type of event you are listening for, and the code you want to run when the event occurs. 

```html
<button>Click Me!</button>
```

```js
const button = document.querySelector("button");

button.addEventListener("click", () => console.log("Clicked!"));
```

Here you are listening for a click on the button, and when it happens you are logging "Clicked!" to the browser console.

### Avoid inline event handlers

The earliest way of handling events was inline event handlers where you write your JavaScript as the element's attribute value.

```html
<button onclick="alert('I am an inline event handler!');"></button>
```

This can become unmaintainable and inefficient. Just like with inline styles in CSS, if you change your mind later you have to go through your HTML and change every inline event handler one by one; and you might miss one. It's better to select elements and add event listeners in your seperate JavaScript file, where you can select multiple elements at the same time.

### The Event Object

Whenever you interact with the browser window, you create an event object. The event object has properties, such as the type of event (`click`, or `mousedown`), the target (`div` or `button`), and others. 

The event object is often passed as a parameter (by convention called `event`, `evt` or `e`) to event handler functions, for example to help the function to target the desired element. In the following example, `e.target` points to the button that you clicked on. 

```js
const button = document.querySelector("button");

button.addEventListener("click", changeButtonColor;

function changeButtonColor(e) {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = randomColor;
}
```

### Event Bubbling

Any time you click on an element, you are really also clicking on its parent elements because they surround it and so it is part of them. When you click on an element, the browser checks if it has an event handler attached to it and runs the handler. It then moves to the parent element and checks if it has an event handler, and repeats this until it reaches the `<html>` element. The event "bubbles" up through the DOM.

In the example below, if you click on div three it will log `three, two, one` to the console as the click event bubbles up and triggers the event handler on each div.

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
  </div>
</div>
```

```js
const divs = document.querySelectorAll("div");

function logDivs(e){
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener("click", logDivs);
```

Bubbling can be a problem if you have an event handler on an element and a different event handler on a parent element. You don't want them both to run when you click on the child element.

You can prevent bubbling by using `stopPropagation()`, which is a method on the event object. 

```js
function logDivs(e){
  e.stopPropagation();
  console.log(this.classList.value);
}
```

### Event Capturing

Just as an event can bubble up when you click on an element, the same thing can happen in reverse. An event can be registered on an element's parent element and can then "trickle down" to the child element; this is event capturing.

In bubbling, the event passes from the child element that was clicked on to its parent elements, with the browser checking for event handlers along the way.

In capturing, the browser checks the element's outermost parent element, `<html>`, for an event handler, then the next element down, then the element inside that, and so on until it reaches the innermost element.

In modern browsers a capturing phase happens first and then a bubbling phase but all events are handled during the bubbling phase by default. Event capturing is a legacy of early browsers (which were less cross-compatible). Netscape Navigator used event capturing and Internet Explorer used event bubbling. The W3C made a compromise position part of web standards, where developers could tell the browser to use capturing even though bubbling is the default. 

If you want to register events through capturing you can do so by using the optional `options` parameter in `addEventListener()`.

If you make this change to the code from the nested divs example above, it will now log `one, two, three` to the console. The click event trickles down from the outermost div and triggers the event handler on each div.

```js
const divs = document.querySelectorAll("div");

function logDivs(e){
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener("click", logDivs, { capture: true }));
```

### Event Delegation

Event bubbling can cause problems, but it can also be useful. For example, if you attach event handlers to a number of elements on page load, and then dynamically add more elements after the page has loaded, the later elements won't have event handlers attached to them.

You can avoid this by attaching the event handler to the parent element (which exists on page load) and catching the event when it bubbles up from the child element. For example, in a todo app consisting of a `ul` containing `li`s, you can listen on the list instead of on each list item (which might not exist at page load).

When the event bubbles up to the parent element, use `e.target` to check what element was actually clicked on. 

```html
<ul class="parent-list">
  <li id="item-1"></li>
  <li id="item-2"></li>
  <li id="item-3"></li>
  <li id="item-4"></li>
  <li id="item-5"></li>
</ul>
```

```js
document.querySelector(".parent-list").addEventListener("click", function(e) {
  if(e.target && e.target.id === "item-1") {
    e.target.remove();
  }
});
```

### References

["Introduction to events", MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

["EventTarget.addEventListener()", MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[Newman, Tovi "Let's meet the event object", LaunchSchool Medium Publication](https://medium.com/launch-school/javascript-lets-talk-about-events-572ecce968d0)

[Thakuria, Honey "Event Handling in JavaScript", freeCodeCamp Medium Publication](https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57)

[Wilkie, Amber "A simplified explanation of event propagation in JavaScript", freeCodeCamp Medium Publication](https://medium.freecodecamp.org/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e)

[Walsh, David "How JavaScript Event Delegation Works", David Walsh Blog](https://davidwalsh.name/event-delegate)
