---
id: 673263f4a5899da8124542fd
title: What Is the prompt() Method, and How Does It Work?
challengeType: 19
dashedName: what-is-the-prompt-method-and-how-does-it-work
---

# --interactive--

The `prompt()` method is an important part of JavaScript's interaction with the user. It’s one of the simplest ways to get input from a user through a small pop-up dialog box.

You'll often see it used in cases where the webpage needs a piece of information from the user, such as a name or some other form of text input.

So, what exactly does the `prompt()` method do? It opens a dialog box that asks the user for some input, and then it returns the text entered by the user as a string.

The `prompt()` method takes two arguments: The first one is the message which will appear inside the dialog box, typically prompting the user to enter information. And the second one is a default value which is optional and will fill the input field initially.

```js
prompt(message, default);
```

Here's an example of how it works.

**NOTE**: This example includes code you have not learned yet. Don't worry about trying to understand everything in the code. This is just to illustrate how the `prompt()` method works and ensure that the prompt doesn't appear immediately when the page loads which can be seen as intrusive. If you have the interactive editor enabled, you can try it out yourself.

:::interactive_editor

```html
<button id="prompt-btn">Show Prompt</button>
<p id="output"></p>
<script src="index.js"></script>
```

```js
const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = "Hello, " + userName + "!";
});
```

:::

In this example, when the user clicks on the button, the `prompt()` method displays a dialog box with the message `What is your name?` and an input field that initially contains the value `Guest`.

If the user types their name and presses "OK", the `userName` variable will store the entered value. If the user presses "Cancel," the `userName` variable will be set to `null`. `null` signifies that the user did not provide any input. The output paragraph will then display a greeting message using the provided name or `null` if the user canceled. You will learn techniques to avoid displaying `null` when a user cancels the prompt in future lessons.

Keep in mind that the `prompt()` method will halt the execution of the script until the user interacts with the dialog box.

This means the rest of your JavaScript code won’t run until the user either provides input and clicks "OK", or cancels the prompt.

One other point to consider is that while `prompt()` is useful for quick testing or small applications, it's generally avoided in modern, complex web applications due to its disruptive nature and inconsistent behavior across different browsers.

By understanding the `prompt()` method, you gain a simple way to interact with users and retrieve information directly through the browser, even though it may not be widely used in modern web applications.

# --questions--

## --text--

What does the `prompt()` method do in JavaScript?

## --answers--

Displays a pop-up asking for user input and returns the input as a string.

---

Logs a message to the console.

### --feedback--

Think about how the method interacts with the user.

---

Opens a new browser window.

### --feedback--

Think about how the method interacts with the user.

---

Stops the script from executing.

### --feedback--

Think about how the method interacts with the user.

## --video-solution--

1

## --text--

What happens if the user cancels the prompt dialog box?

## --answers--

The script breaks.

### --feedback--

Consider what `prompt()` does when the user doesn't provide input.

---

The prompt method returns `null`.

---

The prompt method returns an empty string.

### --feedback--

Consider what `prompt()` does when the user doesn't provide input.

---

The script continues with the default value.

### --feedback--

Consider what `prompt()` does when the user doesn't provide input.

## --video-solution--

2

## --text--

What is the second, optional argument of the `prompt()` method used for?

## --answers--

Specifying the text of the cancel button.

### --feedback--

Think about what can be pre-filled for the user before they start typing.

---

Setting a default value in the input field.

---

Setting a time limit for the input.

### --feedback--

Think about what can be pre-filled for the user before they start typing.

---

Changing the color of the dialog box.

### --feedback--

Think about what can be pre-filled for the user before they start typing.

## --video-solution--

2
