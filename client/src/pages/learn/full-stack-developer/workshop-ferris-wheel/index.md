---
title: Introduction to the Build an Animated Ferris Wheel
block: workshop-ferris-wheel
superBlock: full-stack-developer
---

## Introduction to the Build an Animated Ferris Wheel

Have you ever wanted to bring your web pages to life with fun and interactive animations? CSS animation allows you to add movement and interactivity to your web pages, making them more engaging and dynamic. It’s like adding a sprinkle of magic to your design!

You will practice techniques like using CSS `keyframes` to control how your elements behave.

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
