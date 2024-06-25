---
title: Introduction to the Learn CSS Animation by Building a Ferris Wheel
block: learn-css-animation-by-building-a-ferris-wheel
superBlock: 2022/responsive-web-design
---

## Introduction to the Learn CSS Animation by Building a Ferris Wheel

Have you ever wanted to bring your web pages to life with fun and interactive animations? CSS animation allows you to add movement and interactivity to your web pages, making them more engaging and dynamic. It’s like adding a sprinkle of magic to your design!

You will learn techniques like using CSS `keyframes` to control how your elements behave.

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

And how to apply those animations to an element:

```css
.wheel {
  animation: spin 10s linear infinite;
}
```

Ready to create some enchanting animations?
