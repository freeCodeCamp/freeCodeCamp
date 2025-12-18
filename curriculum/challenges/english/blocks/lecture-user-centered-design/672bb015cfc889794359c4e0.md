---
id: 672bb015cfc889794359c4e0
title: What Are Best Practices for Designing Modal Dialogs?
challengeType: 19
dashedName: what-are-best-practices-for-designing-modal-dialogs
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS and JavaScript that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

What is a modal? It's the type of pop-up that a website might show you on top of their content. HTML has a `dialog` element that you can use to create modals.

The content behind a modal is usually dimmed. This helps the user visually focus on the area you want them to interact with – in this case, the modal.

It's always a good idea to allow the user to click outside of the modal to close it.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<button id="open-modal">Open Modal</button>
<dialog>
  <h2>Subscribe to our Newsletter!</h2>
  <p>Get the latest updates and offers.</p>
  <button>Subscribe</button>
  <button>Close</button>
</dialog>

<script src="index.js"></script>
```

```css
dialog {
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}
```

```js
const dialog = document.querySelector('dialog');
const closeButton = dialog.querySelector('button:last-of-type');
const openModalButton = document.getElementById('open-modal');

closeButton.addEventListener('click', () => {
  dialog.close();
});

openModalButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the modal when clicking outside of it
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
}); 

```

:::

You'll often see very prominent buttons on modals. These are called CTAs, or call-to-action. You want these to be easily identifiable since the purpose of interrupting the user's flow with a modal is to prompt them to take a specific action.

Modals should also have a close button. While you may really want the user to click on your CTAs, it's important to give them an option to back out of the modal and resume whatever they were previously doing.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<button id="open-modal">Open Modal</button>
<dialog>
  <h2>Subscribe to our Newsletter!</h2>
  <p>Get the latest updates and offers.</p>
  <button class="cta">Subscribe</button>
  <button class="close">Close</button>
</dialog>
<script src="index.js"></script>
```

```css
.cta {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.close {
  background-color: transparent;
  color: #007BFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
```

```js
const dialog = document.querySelector('dialog');
const closeButton = dialog.querySelector('.close');
const openModalButton = document.getElementById('open-modal');

closeButton.addEventListener('click', () => {
  dialog.close();
});

openModalButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the modal when clicking outside of it
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
});

```

:::

There are, of course, accessibility concerns with modals, such as correctly managing focus on elements. However, if you use these general practices as your starting point, you'll have a solid foundation to build on.

# --questions--

## --text--

What is the purpose of dimming the content behind a modal dialog?

## --answers--

To save battery life on mobile devices.

### --feedback--

The lesson mentions a specific reason for this visual effect.

---

To help users visually identify the area they should interact with.

---

To make the website load faster.

### --feedback--

The lesson mentions a specific reason for this visual effect.

---

To prevent users from seeing sensitive information.

### --feedback--

The lesson mentions a specific reason for this visual effect.

## --video-solution--

2

## --text--

What does CTA stand for in the context of modal design?

## --answers--

Click To Activate.

### --feedback--

The lesson provides the full term for this acronym when discussing prominent buttons in modals.

---

Complete The Action.

### --feedback--

The lesson provides the full term for this acronym when discussing prominent buttons in modals.

---

Call-to-Action.

---

Close The Application.

### --feedback--

The lesson provides the full term for this acronym when discussing prominent buttons in modals.

## --video-solution--

3

## --text--

Why is it important to include a close button in a modal dialog?

## --answers--

It's required by law in some countries.

### --feedback--

The lesson emphasizes the importance of allowing users to back out of the modal.

---

To prevent the modal from crashing the browser.

### --feedback--

The lesson emphasizes the importance of allowing users to back out of the modal.

---

To give users an option to exit the modal and resume their previous activity.

---

To make the modal look more professional.

### --feedback--

The lesson emphasizes the importance of allowing users to back out of the modal.

## --video-solution--

3
