---
id: 672a54dff9dc439089f1a219
title: What Is the aria-live Attribute, and How Does It Work?
challengeType: 19
dashedName: what-is-the-aria-live-attribute
---

# --interactive--

The `aria-live` attribute creates a live region on your page which can be used to notify screen reader users of dynamic content changes in the live region as they occur.

Common uses of live regions include messages that are displayed after an action has been taken (such as an error message or confirmation), content that updates periodically (such as a ticker, marquee, or countdown timer), or general status messages (such as updates about a process).

Because the reading focus for screen readers can only be at one place at a time, screen reader users will not notice a content change if their focus is on another part of the page. Live regions allow screen reader users to be automatically notified of changes that happen on the page in real time. Without a live region, screen reader users might miss important content updates available to sighted users, since a sighted user has the ability to scan the entire page. 

There are three possible values for this attribute, based on the priority of the information.

If you set `aria-live` to the value `assertive` that means that the update is very important. It has the highest priority, so the user should be notified immediately.

This means that the screen reader will interrupt any announcement it is currently making to announce the content change in the live region. Such interruptions can be extremely disruptive, so the `assertive` value should only be used for time-sensitive or critical notifications.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="session-warning" aria-live="assertive">
  <p>Your session will expire in 30 seconds.</p>
</div>

<script src="index.js"></script>

```

```css
.session-warning {
  background-color: #ffcc00;
  color: #000;
  font-family: system-ui, sans-serif;
  font-weight: 500;
  padding: 1em 1.5em;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.session-warning.visible {
  opacity: 1;
  transform: translateY(0);
}

.session-warning.fade-out {
  opacity: 0;
  transform: translateY(10px);
}

```

```js
document.addEventListener("DOMContentLoaded", () => {
  const warning = document.querySelector(".session-warning");

  setTimeout(() => {
    warning.classList.add("visible");
  }, 100);

  setTimeout(() => {
    warning.classList.add("fade-out");
  }, 8000);

  warning.addEventListener("transitionend", () => {
    if (warning.classList.contains("fade-out")) {
      warning.remove();
    }
  });
});

```

:::

The next value in order of priority is `polite`.

This value means that the update is not urgent, so the screen reader can wait until any current announcement is finished or until the user stops typing before announcing the update. Most live regions will use the `polite` value.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="upload-success" aria-live="polite">
  <p>File successfully uploaded</p>
</div>

<script src="index.js"></script>

```

```css
.upload-success {
  background-color: #4caf50;
  color: #fff;
  font-family: system-ui, sans-serif;
  font-weight: 500;
  padding: 1em 1.5em;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.upload-success.visible {
  opacity: 1;
  transform: translateY(0);
}

.upload-success.fade-out {
  opacity: 0;
  transform: translateY(-10px);
}

```

```js
document.addEventListener("DOMContentLoaded", () => {
  const success = document.querySelector(".upload-success");

  setTimeout(() => {
    success.classList.add("visible");
  }, 100);

  setTimeout(() => {
    success.classList.add("fade-out");
  }, 8000);

  success.addEventListener("transitionend", () => {
    if (success.classList.contains("fade-out")) {
      success.remove();
    }
  });
});

```

:::

The lowest priority value for `aria-live` is `off` which means that the update will not be announced unless the content is in an element that currently has keyboard focus. Realistically, this value is almost never used as the use case is very narrow and it is not implemented consistently (if at all) across screen readers. If you need live regions, plan on using `polite` for everything except critical messages that need `assertive`.

It's also important to note that the `aria-live` attribute is not required if the updated information is contained in an element with an ARIA role of `alert`, `log`, `marquee`, `status`, or `timer`, as these roles already have default `aria-live` values. But the default value can be changed by explicitly setting `aria-live` on the element.

Choosing the right `aria-live` value depends on the priority of the updated information.

If the updates are urgent, you should notify the user immediately with `assertive`. But you should use this only if the updates are really urgent because sudden interruptions can potentially disorient users and affect the user experience.

If the update can wait until the current task is finished, you should use `polite` instead.

The `aria-live` attribute lets assistive technologies know when the content is changing dynamically on a web page. This helps users with disabilities stay updated on important announcements and updates.

By using `aria-live` appropriately, you can ensure that users are aware of these updates based on their priority.

# --questions--

## --text--

What is the primary purpose of the `aria-live` attribute?

## --answers--

To define the visual appearance of an element.

### --feedback--

Think about how `aria-live` helps assistive technologies understand the content.

---

To improve website performance.

### --feedback--

Think about how `aria-live` helps assistive technologies understand the content.

---

To indicate that an element's content is changing dynamically.

---

To enhance browser compatibility.

### --feedback--

Think about how `aria-live` helps assistive technologies understand the content.

## --video-solution--

3

## --text--

Which of the following values can be used for the `aria-live` attribute?

## --answers--

`true`, `false`, `off`.

### --feedback--

Think about the different levels of urgency for announcing changes to dynamic content.

---

`visible`, `hidden`, `off`.

### --feedback--

Think about the different levels of urgency for announcing changes to dynamic content.

---

`assertive`, `polite`, `off`.

---

`open`, `closed`, `off`.

### --feedback--

Think about the different levels of urgency for announcing changes to dynamic content.

## --video-solution--

3

## --text--

What is the difference between the `polite` and `assertive` values for the `aria-live` attribute?

## --answers--

`polite` announces updates immediately, while `assertive` announces updates when the focus is on another element.

### --feedback--

Think about the level of urgency for announcing dynamic content.

---

`polite` announces updates after the current task is finished, while `assertive` announces updates immediately.

---

There is no difference between `polite` and `assertive`.

### --feedback--

Think about the level of urgency for announcing dynamic content.

---

`polite` is used for important updates, while `assertive` is used for less urgent updates.

### --feedback--

Think about the level of urgency for announcing dynamic content.

## --video-solution--

2
