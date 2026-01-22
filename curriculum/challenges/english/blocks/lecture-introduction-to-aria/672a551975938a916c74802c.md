---
id: 672a551975938a916c74802c
title: What Is the aria-describedby Attribute, and How Does It Work?
challengeType: 19
dashedName: what-is-the-aria-describedby-attribute
---

# --interactive--

The `aria-describedby` attribute is used to provide additional information about an element to screen reader users by referencing existing content on the page. It creates a programmatic association between the element and the content (technically referred to as an accessible description), which screen readers can use to inform users of the additional information when they interact with the element. 

The most common use for `aria-describedby` is to associate instructions and error messages with form inputs. Due to the various methods screen reader users have for navigating a page, they may miss these messages when navigating between inputs. Using `aria-describedby` helps ensure that they will hear them.

Let's take a look at a few examples to understand how it works. In this first example, we have a `form` element that accepts a password.

Enable the interactive editor and type a few characters into the password input field. You will see that the password is masked in the preview window. You should also see that the `password-help` text remains red until you provide 8 or more characters into the input. 

NOTE: This interactive example is using CSS and JavaScript to dynamically update the color for the `password-help` text. Don't worry about trying to understand the JavaScript code because you will learn JavaScript in future modules.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>

<script src="index.js"></script>
```

```css
#password-help {
  color: red;
}
```

```js
const passwordEl = document.getElementById("password");
const passwordHelpText = document.getElementById("password-help");

passwordEl.addEventListener("input", (e) => { 
  const userInput = e.target.value;
  passwordHelpText.style.color = userInput.length >= 8 ? "green" : "red";
});
```

:::

We are using a `label` element for the `Password` text and associating that with the password `input` field.

We also have a paragraph element that describes the password requirements. We are using the `aria-describedby` attribute to associate the password `input` field with the password requirements in the paragraph element. When a screen reader user interacts with this `input`, their screen reader will announce the name of the `input` (`Password`) and may then also announce the password requirements. This is not an absolute guarantee however as some screen readers may not automatically announce the additional content, or may only announce it in specific circumstances. This is not uncommon. Each screen reader is different and handles ARIA attributes in their own way. This does not negate the use of `aria-describedby`, as it will benefit screen reader users in general.

Another good use case for the `aria-describedby` attribute is when you have a delete `button`. Here is an example of a delete `button` followed by a message describing what will happen when the button is clicked:

:::interactive_editor

```html
<button aria-describedby="delete-message">Delete</button>

<p id="delete-message">Warning! All deletions are permanent.</p>
```

:::

Just like in the earlier example, we associate the delete button with the message using the `aria-describedby` attribute. The `id` value and the value of the `aria-describedby` attribute must match. 

The `aria-describedby` attribute is a powerful attribute that can be used to help ensure that additional information about an element is provided to screen reader users when they interact with the element. It is most commonly used to associate instructions and error messages with form inputs in order to reduce the chance that screen reader users will miss these messages as they navigate the form. 

# --questions--

## --text--

What is the purpose of the `aria-describedby` attribute in HTML?

## --answers--

To specify a unique identifier for an element.

### --feedback--

It helps screen readers provide more context about elements to users with disabilities.

---

To provide additional information about an element to assistive technologies.

---

To define the language of an HTML document.

### --feedback--

It helps screen readers provide more context about elements to users with disabilities.

---

To control the visibility of an HTML element.

### --feedback--

It helps screen readers provide more context about elements to users with disabilities.

## --video-solution--

2

## --text--

In the examples provided, how does the `aria-describedby` attribute enhance the user experience for form fields?

## --answers--

It changes the visual appearance of the form fields.

### --feedback--

Think about additional information helpful for users filling out the form.

---

It associates additional descriptive text with form fields to provide more context or instructions.

---

It validates the form fields' input values.

### --feedback--

Think about additional information helpful for users filling out the form.

---

It automatically populates the form fields with default values.

### --feedback--

Think about additional information helpful for users filling out the form.

## --video-solution--

2

## --text--

Which of the following is the correct way to use the `aria-describedby` attribute inside of a form?

## --answers--

```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```

---

```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```

### --feedback--

It helps users understand how the descriptive text is connected to the input field.

---

```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p>Your password must be at least 8 characters long.</p>
</form>
```

### --feedback--

It helps users understand how the descriptive text is connected to the input field.

---

```html
<form>
  <label for="password">Password:</label>
  <input
    type="password"
    id="password"
    aria-label="Your password must be at least 8 characters long."
  />
</form>
```

### --feedback--

It helps users understand how the descriptive text is connected to the input field.

## --video-solution--

1
