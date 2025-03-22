---
id: 67d1ad82cff954a854bcbcaa
title: What Is Prop Drilling?
challengeType: 11
videoId: nVAaxZ34khk
dashedName: what-is-prop-drilling
---

# --description--

Watch the video lecture and answer the questions below.

# --questions--

## --text--

How would a prop flow from a parent to a grandchild component?

## --answers--

By defining the prop inside the grandchild component.

### --feedback--

The prop must go through the child before reaching the grandchild.

---

By passing it from parent to child, then from child to grandchild.

---

By using the `useEffect` hook to fetch the prop dynamically.

### --feedback--

The prop must go through the child before reaching grandchild.

---

By using the `useState` hook in the grandchild.

### --feedback--

The prop must go through the child before reaching grandchild.

## --video-solution--

2

## --text--

What is prop drilling in React?

## --answers--

Passing props directly to only the components that need them.

### --feedback--

It happens when props are passed through multiple levels unnecessarily.

---

Using context to share state between components.

### --feedback--

It happens when props are passed through multiple levels unnecessarily.

---

Passing props from a parent to deeply nested child components.

---

Drilling down into component state using hooks.

### --feedback--

It happens when props are passed through multiple levels unnecessarily.

## --video-solution--

3

## --text--

Why is prop drilling considered a problem in larger applications?

## --answers--

It makes it easier to manage state.

### --feedback--

Too many props passing through multiple components can make the code messy.

---

It improves performance by reducing re-renders.

### --feedback--

Too many props passing through multiple components can make the code messy.

---

It makes the code harder to read, debug, and maintain.

---

It eliminates the need for state management libraries.

### --feedback--

Too many props passing through multiple components can make the code messy.

## --video-solution--

3
