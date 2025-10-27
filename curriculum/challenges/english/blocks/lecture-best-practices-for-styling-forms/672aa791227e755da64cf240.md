---
id: 672aa791227e755da64cf240
title: What Are Some Best Practices for Styling Text Inputs?
challengeType: 19
dashedName: what-are-some-best-practices-for-styling-text-inputs
---

# --interactive--

As with all text elements you need to ensure the styles you apply to the text input are accessible. This means the font needs to be adequately sized and the color needs to have sufficient contrast with the background.  

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" placeholder="Enter your username">
  <button type="submit">Submit</button>
</form>

```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 320px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
}

input[type="text"]:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}

```

:::

The placeholder, however, is often forgotten. It's important to remember that this is also text and you will likely need to change the styling to ensure it's readable.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="you@example.com">
  <button type="submit">Submit</button>
</form>

```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 320px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
}

input[type="email"]::placeholder {
  color: #555; 
  opacity: 1; 
  font-style: italic;
}

input[type="email"]:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}

```

:::

Another thing to keep in mind is that you should allow the user to modify the input. For example, if it's a text area you should not remove the ability to resize it. The input should also scale accordingly when the user zooms the page.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="message">Your message</label>
  <textarea id="message" name="message" placeholder="Type your message here..."></textarea>
  <button type="submit">Send</button>
</form>

```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
  line-height: 1.5;
}

.accessible-form {
  max-width: 480px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

textarea {
  width: 100%;
  min-height: 120px;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  resize: both; 
  box-sizing: border-box; 
}

textarea::placeholder {
  color: #555;
  opacity: 1;
}

textarea:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}

```

:::

Input elements are also focusable. When you are editing your styles you should take care that you preserve a noticeable indicator when the element has focus such as a bold border. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="name">Full name</label>
  <input type="text" id="name" name="name" placeholder="Enter your full name">

  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="you@example.com">

  <button type="submit">Submit</button>
</form>

```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 360px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #555;
  opacity: 1;
}

input:focus {
  border-color: #1e90ff;      
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4); 
  outline: none;              
}

button {
  margin-top: 1.5rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}

```

:::

Additionally there is the error state to consider. When the user's text does not pass the input validation there is a visual indicator that shows there is something wrong. 

To have the error message dynamically update, you would need to use JavaScript, which you will learn about in future lessons. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="email">Email address</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="you@example.com" 
    aria-describedby="email-error"
  >
  <p id="email-error" class="error-message">
    Please enter a valid email address.
  </p>

  <button type="submit">Submit</button>
</form>

<script src="index.js"></script>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.accessible-form {
  max-width: 360px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #555;
  opacity: 1;
}

input:focus {
  border-color: #1e90ff;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4);
  outline: none;
}

input.error {
  border-color: #d93025;
  background-color: #fff5f5;
}

input.error:focus {
  border-color: #d93025;
  box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.4);
}

.error-message {
  color: #d93025;
  font-size: 0.95rem;
  margin-top: 0.4rem;
}

button {
  margin-top: 1.5rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}

```

:::

As you give your element your personal flair, you want to be sure that the error state is still noticeable and that it does not look similar to the focus indicator. With all this in mind you can now create captivating user forms.

# --questions--

## --text--

When styling text inputs, which of the following is NOT mentioned as a key consideration for accessibility?

## --answers--

Font size.

### --feedback--

The lesson focuses on visual aspects of accessibility for text inputs.

---

Color contrast with the background.

### --feedback--

The lesson focuses on visual aspects of accessibility for text inputs.

---

Placeholder text readability.

### --feedback--

The lesson focuses on visual aspects of accessibility for text inputs.

---

Animation speed of focus transitions.

## --video-solution--

4

## --text--

What is recommended regarding the resizing ability of a `textarea` input?

## --answers--

Remove the ability to resize for a consistent look.

### --feedback--

The lesson mentions preserving certain functionalities for user convenience.

---

Allow the user to resize it.

---

Automatically resize based on content length.

### --feedback--

The lesson mentions preserving certain functionalities for user convenience.

---

Lock the size after initial page load.

### --feedback--

The lesson mentions preserving certain functionalities for user convenience.

## --video-solution--

2

## --text--

How should the error state of an input be styled?

## --answers--

It should be identical to the focus state.

### --feedback--

The lesson discusses the importance of clear visual feedback for different input states.

---

It should be subtle to not distract the user.

### --feedback--

The lesson discusses the importance of clear visual feedback for different input states.

---

It should be noticeable and distinct from the focus indicator.

---

It should only be indicated through text, not visual styling.

### --feedback--

The lesson discusses the importance of clear visual feedback for different input states.

## --video-solution--

3
