---
id: 6723cc7a8e7aa3b9befd4bac
title: DOM Manipulation and Click Events with JavaScript Review
challengeType: 31
dashedName: review-dom-manipulation-and-click-events-with-javascript
---

# --interactive--

## Working with the DOM and Web APIs

- **API**: An API (Application Programming Interface) is a set of rules and protocols that allow software applications to communicate with each other and exchange data efficiently.
- **Web API**: Web APIs are specifically designed for web applications.
- **DOM**: The DOM (Document Object Model) lets you interact with HTML documents.

:::interactive_editor

```js
// Simulated DOM-like object (no real DOM access)
const element = {
  textContent: "Hello",
  classList: {
    classes: [],
    add(className) {
      this.classes.push(className);
    }
  }
};

element.textContent = "Hello, DOM!";
element.classList.add("active");

console.log(element.textContent); // Hello, DOM!
console.log(element.classList.classes); // ["active"]
```

:::

## Working with the `querySelector()`, `querySelectorAll()` and `getElementById()` Methods

```html
<div id="container"></div>
```

```js
const container = document.getElementById("container");
```

## Working with the `innerHTML`, `innerText`, `createElement()` and `textContent()` Methods

```js
const div = document.createElement("div");
div.textContent = "Hello World";
```

## Working with the `appendChild()` and `removeChild()` Methods

```js
const listItem = document.createElement("li");
listItem.textContent = "Cookies";
```

## Working with the `setAttribute()` Method

```js
const para = document.getElementById("para");
para.setAttribute("class", "my-class");
```

## Event Object

- The `Event` object contains information about user interactions.

## `addEventListener()` and `removeEventListener()` Methods

```js
btn.addEventListener("click", () => alert("You clicked the button"));
```

## The Change Event

```js
selectEl.addEventListener("change", (e) => {
  console.log(e.target.value);
});
```

## Event Bubbling and Delegation

- Events bubble from child to parent elements.

## DOMContentLoaded

```js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
});
```

## Working with `style` and `classList`

```js
paraEl.style.color = "red";
paraEl.classList.toggle("active");
```

## Working with the `setTimeout()` and `setInterval()` Methods

```js
setTimeout(() => {
  console.log("Runs after delay");
}, 3000);
```

## The `requestAnimationFrame()` Method

```js
function animate() {
  requestAnimationFrame(animate);
}
animate();
```

# --assignment--

Review the DOM Manipulation and Click Events with JavaScript topics and concepts.
