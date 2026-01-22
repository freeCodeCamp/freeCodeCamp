---
id: 672a549231b8728f7171ed9d
title: What Are ARIA Roles?
challengeType: 19
dashedName: what-are-aria-roles
---

# --interactive--

**NOTE**: Some of these interactive examples might include CSS and JavaScript code. Don't worry about trying to understand the code. The previews are there to help illustrate some of the main points discussed in the lesson. To see the previews, you will need to enable the interactive editor.

ARIA stands for Accessible Rich Internet Applications.

ARIA roles specify the semantic meaning of HTML elements. They're essential for making web content accessible to people who use assistive technologies, like screen readers.

HTML has semantic and non-semantic elements, based on whether they convey meaning about their content.

Many semantic HTML elements already have an ARIA role assigned by default. For example, the `button` element has a default ARIA role of `button`. 

:::interactive_editor

```html
<button>Example button</button>
```

:::

But non-semantic elements don't have a role. For example, screen readers will not know how to interpret the purpose of a `div` if you don't specify its role explicitly.

```html
<div>
  <!-- more elements go here -->
</div>
```

To specify the ARIA role of an element, you just need to add the `role` attribute, like this `role="ARIA role"`, where value is the name of a role in the ARIA specification.

Here is an example of using the `role` attribute with a value of `"alert"`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="alert" id="exp-warning" role="alert">
  <span class="hidden">Your log in session will expire in 3 minutes.</span>
</div>
```

```css
.alert {
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 1em;
  margin-top: 1em;
  border-radius: 4px;
  font-weight: bold;
}

.alert span {
  display: inline-block;
}
```

:::

It is important to note that specifying a role on an element only does one thing: It informs assistive technology of the purpose of the element. It does not add any functionality or behavior to the element. If people expect a role to behave a certain way, it is up to you, the developer, to add that expected behavior. 

For example, adding a `role` of `button` to a `div` does not automatically make it clickable with a mouse or usable with a keyboard. It is the responsibility of the developer to add the expected behavior that allows the `div` to act like a button, and in most cases, it is just better to use the `button` element.

There are six main categories of ARIA roles:

- Document structure roles
- Widget roles
- Landmark roles
- Live region roles
- Window roles
- And Abstract roles

Let's take a look at them in more detail.

Document structure roles define the overall structure of the web page. With these roles, assistive technologies can understand the relationships between different sections and help users navigate the content.

However, most of the document structure roles are not used in modern web development because browsers already support equivalent semantic HTML elements, which should be prioritized whenever possible.

You should specify the roles that don't have an equivalent semantic element. For example: `toolbar`, `tooltip`, `feed`, `math`, `presentation`, `none`, and `note`.

There are other similar roles but these are the most commonly used ones. This is an example of a `div` with the `math` ARIA role. The `div` contains a mathematical equation.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div role="math" aria-label="x squared + y squared = 3">
  x<sup>2</sup> + y<sup>2</sup> = 3
</div>
```

```css
.math-expression {
  font-family: "Times New Roman", serif;
  font-size: 1.2rem;
  background-color: #f4f4f4;
  border-left: 4px solid #007acc;
  padding: 0.75em 1em;
  margin-top: 1em;
  display: inline-block;
}

.math-expression sup {
  font-size: 0.8em;
}
```

:::

You'll also notice that the `div` has an `aria-label` attribute. The value of this attribute should be a string that represents the expression.

Widget roles define the purpose and functionality of interactive elements, like scrollbars.

Examples of widget roles include `scrollbar`, `searchbox`, `separator` (when focusable), `slider`, `spinbutton`, `switch`, `tab`, `tabpanel`, and `treeitem`.

Here is an example of a searchbox:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="search-container" role="search">
  <label for="searchbox" class="visually-hidden">Search</label>

  <div
    id="searchbox"
    class="searchbox"
    role="searchbox"
    aria-label="Search the site"
    tabindex="0"
    contenteditable="true">
  </div>

  <button type="button" aria-label="Submit search">Search</button>
</div>

```

```css
.search-container {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
}

.searchbox {
  flex: 1;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  min-height: 1.5em;
}

.searchbox:focus {
  border-color: #007acc;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.3);
}

button {
  padding: 0.5em 1em;
  background-color: #007acc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}

/* Hide visually but keep for screen readers */
.visually-hidden {
  position: absolute;
  left: -9999px;
}
```

:::

Some of these roles have equivalent semantic elements. You should prioritize the semantic element over the role if there is one. For example, you should favor using the HTML `button` element over adding a `role` of `button` to a `div`.

Landmark roles classify and label the primary sections of a web page. Screen readers use them to provide convenient navigation to important sections of a page. You should use them sparingly to keep the overall layout simple and easy to understand. Examples of landmark roles are `banner`, `complementary`, `contentinfo`, `form`, `main`, `navigation`, `region`, and `search`. Each of these roles has a corresponding HTML equivalent, such as `header`, `footer`, `aside`, `form`, `main`, `nav`, `section`, and `search`. If you use the proper HTML elements to define the sections of your page then it is not necessary to explicitly add the `role` attribute to these elements.

Here is an example of a banner:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">


<div role="banner" class="site-banner">
  <h1>Accessible Web Design</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
```

```css
.site-banner {
  background-color: #007acc;
  color: #fff;
  padding: 1em 1.5em;
  border-radius: 4px;
}

.site-banner h1 {
  margin: 0 0 0.5em;
  font-size: 1.5em;
}

.site-banner nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1em;
}

.site-banner nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.site-banner nav a:hover {
  text-decoration: underline;
}
```

:::

Live region roles define elements with content that will change dynamically. This way, screen readers and other assistive technologies can announce changes to users with visual disabilities. These roles include: `alert`, `log`, `marquee`, `status`, and `timer`.

Here is an example of a status:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="status-demo">
  <button id="update-status-btn">Check Status</button>
  <div id="status-msg" role="status" class="status-message">
    No updates yet.
  </div>
</div>

<script src="index.js"></script>
```

```css
.status-demo {
  margin-top: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #007acc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}

.status-message {
  margin-top: 0.75em;
  padding: 0.75em;
  background-color: #e8f4ff;
  border: 1px solid #b3d8ff;
  border-radius: 4px;
  font-weight: 500;
}
```

```js
const button = document.getElementById("update-status-btn");
const statusMessage = document.getElementById("status-msg");

button.addEventListener("click", () => {
  statusMessage.textContent = "Your upload has completed successfully.";
});
```

:::

Window roles define sub-windows, like pop up modal dialogues. These roles include `alertdialog` and `dialog`. Please note that it is now considered a best practice to use the HTML `dialog` element and its associated JavaScript methods instead of manually creating a dialog.

Here is an example of using a `dialog` role for a custom dialog:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<button id="open-dialog">Open Dialog</button>

<div id="custom-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="dialog">
  <div class="dialog-content">
    <h3 id="dialog-title">Confirm Action</h3>
    <p>Are you sure you want to delete this file?</p>
    <div class="dialog-actions">
      <button id="confirm-btn">Yes</button>
      <button id="close-dialog">Cancel</button>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 2em;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007acc;
  color: white;
  font-size: 1em;
}

button:hover {
  background-color: #005fa3;
}

.dialog {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  justify-content: center; 
  align-items: center;   
  z-index: 1000;
}

.dialog-content {
  background-color: white;
  padding: 1.5em;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  margin-top: 1em;
}
```

```js
const dialog = document.getElementById("custom-dialog");
const openBtn = document.getElementById("open-dialog");
const closeBtn = document.getElementById("close-dialog");
const confirmBtn = document.getElementById("confirm-btn");

openBtn.addEventListener("click", () => {
  dialog.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  dialog.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  alert("File deleted.");
  dialog.style.display = "none";
});
```

:::

And finally, we have abstract roles. These roles help organize the document. They're only meant to be used internally by the browser, not by developers, so you should know that they exist but you shouldn't use them on your websites or web applications.

With ARIA roles, you can create accessible and inclusive websites and web applications. They provide semantic information about the purpose and function of HTML elements.

Screen readers and other assistive technologies use this information to help users understand the content of your page and set expectations for how to use it, which helps ensure  that everyone can have a great user experience.

# --questions--

## --text--

What is the primary purpose of ARIA roles?

## --answers--

To define the visual appearance of elements.

### --feedback--

Think about how ARIA roles help assistive technologies understand the content.

---

To improve website performance.

### --feedback--

Think about how ARIA roles help assistive technologies understand the content.

---

To provide semantic information about the purpose of elements.

---

To enhance browser compatibility.

### --feedback--

Think about how ARIA roles help assistive technologies understand the content.

## --video-solution--

3

## --text--

Which category of ARIA roles is used to define the purpose and behavior of sub-windows, like pop-up modal dialogues?

## --answers--

Widget roles.

### --feedback--

Think about how to define sub-windows with ARIA roles.

---

Document structure roles.

### --feedback--

Think about how to define sub-windows with ARIA roles.

---

Landmark roles.

### --feedback--

Think about how to define sub-windows with ARIA roles.

---

Window roles.

## --video-solution--

4

## --text--

Which category of ARIA roles is used to indicate dynamic content that must be announced to users?

## --answers--

Widget roles.

### --feedback--

Think about how to provide updates or alerts to users.

---

Document structure roles.

### --feedback--

Think about how to provide updates or alerts to users.

---

Landmark roles.

### --feedback--

Think about how to provide updates or alerts to users.

---

Live region roles.

## --video-solution--

4
