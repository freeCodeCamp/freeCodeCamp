---
id: 672a4cd3d59756726657efb8
title: What Are the Different Types of Buttons, and When Should You Use Them?
challengeType: 19
dashedName: what-are-the-different-types-of-buttons
---

# --interactive--

The `button` element is used to perform a particular action when it is activated. Here is an example of a `button` element with the button text of `Start Game`.

```html
<button>Start Game</button>
```

Other examples of using the `button` element include submitting a form, showing a modal, or toggling a side menu open and closed. The `button` element has a `type` attribute which controls the behavior of the button when it is activated. The first possible value for the `type` attribute would be the `button` type. Here is an example of using the `button` element with the `button` type and a text of `Show Alert`:

```html
<button type="button">Show Alert</button>
```

By default, the button will not do anything when activated. However, you can add some JavaScript code to make the button interactive, such as showing an alert in this case. 

Click on the `Show Alert` button to see an alert pop up on the screen. To interact with the example, you will need to enable the interactive editor.


**NOTE**: This interactive example is using JavaScript but you don't need to worry about understanding the JavaScript code. You will learn about JavaScript in future modules. 

:::interactive_editor

```html
<button type="button">Show Alert</button>
<script src="index.js"></script>
```

```js
const btn = document.querySelector("button");
btn.addEventListener("click", () => alert("You clicked on the alert button"));
```

:::

Another possible value for the `type` attribute is the `submit` value. Here is an example of using a `button` element with the `submit` type.

:::interactive_editor

```html
<form action="">
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" />
  <button type="submit">Submit form</button>
</form>
```

:::

Inside this `form` element, there is a `label` and `input` element for the user's email address. When the user clicks on the submit button, their data will be sent to the server and will be processed. The third possible value for the `type` attribute is the `reset` value. Here is an example of a `form` element with reset and submit buttons.

Enable the interactive editor and interact with the email input in the preview window by providing a fake email address. Then click on the reset button to see your email disappear from the field. 

:::interactive_editor

```html
<form action="">
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" />
  <button type="reset">Reset form</button>
  <button type="submit">Submit form</button>
</form>
```

:::

In this modified example, a `label` and `input` element are used to collect the user's email address. When the user clicks on the reset button, then it will clear out all of their input data. It is important to note that reset buttons are usually not the best idea because they could lead to users accidentally resetting their data. Also, multiple buttons in your form could clutter up the user interface.

Another way to create buttons in HTML is to use the `input` element. The `input` element also has a `type` attribute with the possible values of `submit`, `reset`, and `button`. Here is an example of using the `input` element with the `type` set to `button`:

:::interactive_editor

```html
<input class="start-btn" type="button" value="Start Game" />
<script src="index.js"></script>
```

```js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".start-btn");
  btn.addEventListener("click", () => {
    const paraEl = document.createElement("p");
    const bodyEl = document.querySelector("body");

    bodyEl.appendChild(paraEl);
    paraEl.textContent = "The game has started!!!";
  });
});
```

:::

The `value` attribute is used to show the button text. So, what is the difference between using the `input` and `button` elements? `input` elements are void elements, which means they cannot have child nodes, such as text, and can only have a start tag. On the other hand, the `button` element offers more flexibility because you can nest text, images, and icons inside it.

# --questions--

## --text--

Which of the following is NOT a valid value for the `type` attribute inside buttons?

## --answers--

`src`

---

`button`

### --feedback--

One of these options is the name of an attribute and not a valid value.

---

`reset`

### --feedback--

One of these options is the name of an attribute and not a valid value.

---

`submit`

### --feedback--

One of these options is the name of an attribute and not a valid value.

## --video-solution--

1

## --text--

What is the role of `type="reset"` inside the `button` element?

## --answers--

It submits the form data.

### --feedback--

The reset value implies what its role is inside the `button` element.

---

It only resets `textarea` elements.

### --feedback--

The reset value implies what its role is inside the `button` element.

---

It resets the form.

---

There is no behavior for the `reset` type.

### --feedback--

The `reset` value implies what its role is inside the `button` element.

## --video-solution--

3

## --text--

What is another element you can use to represent a button?

## --answers--

`img`

### --feedback--

Review the last part of the lesson where this is discussed in more detail.

---

`form`

### --feedback--

Review the last part of the lesson where this is discussed in more detail.

---

`header`

### --feedback--

Review the last part of the lesson where this is discussed in more detail.

---

`input`

## --video-solution--

4
