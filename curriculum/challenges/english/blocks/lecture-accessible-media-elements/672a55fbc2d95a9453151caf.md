---
id: 672a55fbc2d95a9453151caf
title: What Are Some Ways to Make Web Applications Keyboard Accessible?
challengeType: 19
dashedName: what-are-some-ways-to-make-web-applications-keyboard-accessible
---

# --interactive--

Many users rely on keyboards instead of mice due to physical disabilities, repetitive strain injuries, or personal preference. This includes users of screen readers and those who may not have a working mouse.
Keyboard accessibility ensures these users can navigate web applications effectively without barriers.

Let's look at some practical techniques you can employ to make web applications keyboard accessible.

Many users rely on the `Tab` key to move through interactive elements on a webpage. By default, browsers let users tab through elements like links, buttons, and form fields in the order they appear in the HTML. This is called the natural tab order.

Sometimes, you may want to adjust which elements are focusable or change their focus order. The `tabindex` attribute allows you do this.

Here is the basic syntax:

```html
<element tabindex="number">Element Text</element>
```

The value of `tabindex` determines how the element behaves in keyboard navigation:

`tabindex="0"` adds the element to the natural tab order. 

Tabbing will move focus from the `button` to the `div`, then to the link, following their order in the HTML.

Click anywhere in the whitespace of the preview window. Then use the `Tab` key to see the focus move between the different elements. To interact with the example, you will need to enable the interactive editor.

:::interactive_editor

```html
<button>First</button>
<div tabindex="0">Second</div>
<a href="#">Third</a>
```

:::

`tabindex="-1"` makes an element focusable programmatically. This is useful for managing focus in elements that are not normally focusable, such as headings, containers, dialogs, or error messages:

```html
<p tabindex="-1">Sorry, there was an error with your submission.</p>
```

In this example, the paragraph is not part of the normal tab order, so users cannot reach it by pressing the `Tab` key. However, if you set focus to this element via a script, the message will be brought to the user's attention. You'll learn more about this technique in JavaScript lessons.

When the `tabindex` is greater than `0` it sets a custom tab order. So elements with lower positive values are focused first.

In this example, tabbing will focus the `input` with `tabindex="1"` first, then `2`, then `3`, regardless of their order in the HTML.

```html
<input tabindex="2">
<input tabindex="1">
<input tabindex="3">
```

Custom positive values are sometimes used in complex widgets, such as a toolbar where you want a specific navigation order. However, this approach is discouraged because it can make navigation confusing and hard to maintain, especially as the page grows or changes.

`accesskey` is another attribute you can use to make your web project keyboard accessible. It allows you to define a key that focuses on or activates a particular element.

Here is an interactive example you can try out following the suggestions below (enable the interactive editor first):

- `accesskey="s"` assigns the key `S` to the `Save` button. On most browsers, pressing `ALT + S` (on Windows) and `CTRL + Option + S` (on Mac) will activate this button.
- `accesskey="c"` sets the key `C` to the `Cancel` button, allowing users to activate it using `ALT + C` (Windows) and `CTRL + Option + C` (Mac).
- `accesskey="h"` assigns the key `H` to the `Home` link, allowing users to navigate to the homepage using `ALT + H` (Windows) and `CTRL + Option + H` (Mac).

Please note that the exact key combination to activate the accesskey might vary depending on the browser and operating system. It's typically `ALT + Specified Key` on Windows and `CTRL + Option + Specified Key` on Mac.

:::interactive_editor

```html
<button accesskey="s">Save</button>
<button accesskey="c">Cancel</button>
<a href="index.html" accesskey="h">Home</a>
```

:::

Another way to make the keyboard accessible in your apps is to make sure you provide clear focus indicators. If you feel the default browser focus indicator is not enough, you can override it by targeting the focus state of the element.

Here is an example of styling the focus state for a `button` element. Click anywhere in the whitespace of the preview window followed by pressing the `Tab` key to focus the button. To interact with the example, you will need to enable the interactive editor.

:::interactive_editor

```html
<link href="styles.css" rel="stylesheet">

<button>Example button</button>
```

```css
button:focus {
  outline: 2px solid #005fcc;
}
```

:::

The `outline` property is used to define the outline around the element. This example sets the outline to a solid blue line with 2 pixels set for the thickness. The focus indicator should be styled in a way that makes it obvious which element currently has focus. In order to be accessible, the indicator must have a minimum color contrast of at least 3:1 with the background color it covers. 

You should also avoid keyboard traps, which occur when a user cannot move focus away from a certain element in components like modals and popups.

# --questions--

## --text--

Why is the `tabindex` property important when managing keyboard navigation on a webpage?

## --answers--

It makes the page load faster.

### --feedback--

Think about how you control the sequence of focusable elements.

---

It allows you to control the order in which elements are focused when using the tab key.

---

It adds animations to focusable elements.

### --feedback--

Think about how you control the sequence of focusable elements.

---

It hides non-essential elements from keyboard navigation.

### --feedback--

Think about how you control the sequence of focusable elements.

## --video-solution--

2

## --text--

How does the `accesskey` attribute contribute to keyboard accessibility on a webpage?

## --answers--

It enhances the visual appearance of the webpage.

### --feedback--

Think about how users can quickly access important elements using the keyboard.

---

It speeds up the loading time of the website.

### --feedback--

Think about how users can quickly access important elements using the keyboard.

---

It allows you to define a specific key that focuses on or activates a particular element.

---

It automatically generates shortcut keys for all elements.

### --feedback--

Think about how users can quickly access important elements using the keyboard.

## --video-solution--

3

## --text--

Why exactly is it important to avoid keyboard traps in web applications?

## --answers--

It improves SEO.

### --feedback--

Think about how users should be able to navigate freely without getting stuck.

---

It lets the developer work faster.

### --feedback--

Think about how users should be able to navigate freely without getting stuck.

---

It ensures the page has fewer interactive elements.

### --feedback--

Think about how users should be able to navigate freely without getting stuck.

---

It ensures users can move focus away from elements like modals and popups.

## --video-solution--

4
