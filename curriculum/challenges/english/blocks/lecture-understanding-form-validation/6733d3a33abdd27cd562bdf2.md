---
id: 6733d3a33abdd27cd562bdf2
title: What Is the Purpose of the preventDefault() Method?
challengeType: 19
dashedName: what-is-the-purpose-of-e-preventdefault
---

# --interactive--

Let's learn about the purpose of the `preventDefault()` method on events.

Every event that triggers in the DOM has some sort of default behavior. The `click` event on a checkbox toggles the state of that checkbox, by default. Pressing the space bar on a focused button activates the button. The `preventDefault()` method on these event objects stops that behavior from happening.

Let's take a look at an example. Let's define an `input` element for a user to type in:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<label>Enter some characters:
  <input type="text">
</label>
```

```css
label {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
}

input[type="text"] {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input[type="text"]:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}

```

:::

And if we look at the result, we can type in the input field as expected. But maybe we don't want that. Maybe, instead, we'd like to show the character the user types in a separate element. First, let's define our element for that:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<label>Enter some characters:
  <input type="text">
</label>
<p id="output"></p>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

#output {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #555;
}

```

:::

And then, we need to hook into the `keydown` event to listen for a character being typed on the keyboard. Note that we do not want the `change` or `input` events here, because we need the keyboard information.

```js
const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
    
})
```

The `keydown` event fires when you press down on a keyboard key. When this happens, let's display the character in our `p` element.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<label>Enter some characters:
  <input type="text">
</label>
<p id="output"></p>
<script src="index.js"></script>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

#output {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #555;
}

```

```js
const input = document.querySelector("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  output.innerText = `You pressed the ${e.key} key`;
});
```

:::

`e.key` gives you the value of the key pressed, such as `a` for the `a` key or `Enter` for the `Enter` key.

With the above code, when you type in the `input`, the character you type will be displayed in the `p` element. 

This is great, but we don't want to show the characters in the `input` as well. This is where our `preventDefault()` method comes in. The default behavior of a `keydown` is to render the character in the input. Let's avoid that by calling `e.preventDefault()`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<label>Enter some characters:
  <input type="text">
</label>
<p id="output"></p>
<script src="index.js"></script>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

#output {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #555;
}

```

```js
const input = document.querySelector("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  e.preventDefault();
  output.innerText = `You pressed the ${e.key} key`;
});
```

:::

And just like that, you have prevented the default behavior to allow yourself to implement your own custom event handling.

Another common example of when to use the `e.preventDefault` method has to deal with form submissions. By default, submitting a form sends data to the server and reloads the page. Using `e.preventDefault()` prevents this from happening.

```js
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // rest of code goes here
});
```

Preventing the default behavior is great when you need more control over how a user interacts with the page, but it's important to keep things like accessibility in mind – your custom behavior should provide the same features as the default.

# --questions--

## --text--

What is the primary purpose of the `preventDefault()` method in event handling?

## --answers--

To stop event propagation.

### --feedback--

The lesson explains what this method does to the default behavior of events.

---

To remove event listeners.

### --feedback--

The lesson explains what this method does to the default behavior of events.

---

To stop the default behavior of an event.

---

To trigger custom events.

### --feedback--

The lesson explains what this method does to the default behavior of events.

## --video-solution--

3

## --text--

In the example given, what default behavior is being prevented when `preventDefault()` is called on a `keydown` event for an `input` element?

## --answers--

The input losing focus.

### --feedback--

Think about what normally happens when you type in an input field.

---

The key being displayed in the input field.

---

The form being submitted.

### --feedback--

Think about what normally happens when you type in an input field.

---

The page scrolling.

### --feedback--

Think about what normally happens when you type in an input field.

## --video-solution--

2

## --text--

When using `preventDefault()`, what important consideration should developers keep in mind?

## --answers--

It should only be used on form submissions.

### --feedback--

The lesson mentions a specific concern related to user interaction when using custom behaviors.

---

It will automatically improve performance.

### --feedback--

The lesson mentions a specific concern related to user interaction when using custom behaviors.

---

It should maintain the same features as the default behavior for accessibility.

---

It will prevent all future events on the element.

### --feedback--

The lesson mentions a specific concern related to user interaction when using custom behaviors.

## --video-solution--

3
