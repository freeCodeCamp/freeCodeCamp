---
id: 672a53cf67140d8cd85d4b0f
title: What Is the Purpose of WAI-ARIA, and How Does It Work?
challengeType: 19
dashedName: what-is-the-purpose-of-wai-aria
---

# --interactive--

Making static content accessible can be relatively straightforward, but dynamic content can be more challenging. This is where WAI-ARIA comes in.

Let's look at what WAI-ARIA is, its purpose, how it works, and some examples.

WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications. It's a specification that enhances accessibility for dynamic content and UI (User Interface) components.

Note that WCAG and WAI-ARIA are not the same. WCAG provides general guidelines for web accessibility, while WAI-ARIA offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

So, the primary purpose of WAI-ARIA is to improve accessibility for dynamic content and UI components that do not have native HTML equivalents.

WAI-ARIA works by introducing a set of attributes you can add to HTML elements to provide additional semantic information. These attributes are categorized into roles, states, and properties.

ARIA role defines the purpose of an element within a website or web app. Here is an example of setting the role to `button` for a `div` element.

```html
<div role="button">Click Me</div>
```

By doing this you are indicating to assistive technology that the element is a button. Roles do not provide any functionality however. Merely giving this `div` a `role` of `button` will not make it act like a button. To make it look and behave like a button you would need to use CSS and JavaScript to get the desired result. 

Here is an example of using HTML, CSS and JavaScript to create a custom `button` element. 

**NOTE**: Don't worry about trying to understand the CSS and JavaScript code. You will learn those languages in future modules. 

:::interactive_editor

```html
<link href="styles.css" rel="stylesheet">
<div id="custom-btn" role="button">Click Me</div>
<script src="index.js"></script>
```

```css
#custom-btn {
  display: inline-block;
  padding: 0.4em 1em;
  font-size: 1rem;
  font-family: sans-serif;
  color: buttontext;
  background-color: buttonface;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

#custom-btn:focus {
  outline: 2px solid Highlight;
  outline-offset: 2px;
}

#custom-btn:active {
  background-color: #ddd;
}
```

```js
const button = document.getElementById("custom-btn");

button.addEventListener("click", () => {
  alert("Button clicked!");
});

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); 
    button.click();
  }
});
```

:::

It is always better to use the native `button` or `input` element with `type="button"` instead.

ARIA properties provide additional details about elements. For example, the `aria-labelledby` property lets you connect an element to a specific label:

```html
<h2 id="header-id">About freeCodeCamp</h2>
<button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
```

This will make the elements understandable and navigable for users of assistive technologies.

To get the best out of WAI-ARIA, try to stick with native HTML whenever possible since it generally provides more accessibility out of the box.

Use WAI-ARIA only when HTML falls short, and don’t forget to test with assistive technologies like screen readers, or have people with disabilities test your work. Also, make sure your WAI-ARIA states and properties update with the content in real time. Avoid overusing ARIA, as it can often be confusing.

# --questions--

## --text--

What is the primary purpose of WAI-ARIA attributes in HTML?

## --answers--

To change the visual appearance of elements.

### --feedback--

Focus on how WAI-ARIA enhances HTML elements accessibility.

---

To provide additional semantic information for accessibility.

---

To display tooltips on elements.

### --feedback--

Focus on how WAI-ARIA enhances HTML elements accessibility.

---

To add animations to elements.

### --feedback--

Focus on how WAI-ARIA enhances HTML elements accessibility.

## --video-solution--

2

## --text--

How does WAI-ARIA work to enhance web accessibility?

## --answers--

By improving page load speed.

### --feedback--

Consider how WAI-ARIA categorizes roles, states, and properties.

---

By introducing attributes that provide additional semantic information.

---

By encrypting data.

### --feedback--

Consider how WAI-ARIA categorizes roles, states, and properties.

---

By creating visual effects for elements.

### --feedback--

Consider how WAI-ARIA categorizes roles, states, and properties.

## --video-solution--

2

## --text--

What does WAI-ARIA stand for?

## --answers--

Web Accessibility Initiative - Advanced Responsive Internet Applications

### --feedback--

Focus on the accessibility aspect and its impact on dynamic content and UI components.

---

Web Accessibility Interface - Accessible Resource Internet Applications

### --feedback--

Focus on the accessibility aspect and its impact on dynamic content and UI components.

---

Web Accessibility Initiative - Accessible Rich Internet Applications

---

Web Application Interface - Accessibility and Richness

### --feedback--

Focus on the accessibility aspect and its impact on dynamic content and UI components.

## --video-solution--

3
