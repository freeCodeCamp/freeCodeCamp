---
id: 672c3a9d32c56113fcaedf24
title: What Is Fixed and Sticky Positioning, and How Does It Differ from Absolute Positioning?
challengeType: 19
dashedName: what-is-fixed-and-sticky-positioning
---

# --interactive--

Fixed and sticky positioning are two important CSS positioning strategies, each offering distinct behaviors compared to absolute positioning. When an element is positioned with `position: fixed`, it is removed from the normal document flow and placed relative to the viewport, meaning it stays in the same position even when the user scrolls. This is often used for elements like headers or navigation bars that need to remain visible at all times. For example, if you want a heading to stay fixed at the top of the page, you can use the following code:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<h1>Fixed Header</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
<p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
<p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
<p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
<p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
<p>Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus.</p>
<p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.</p>
<p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
```

```css
body {
  margin: 0;
  padding-top: 60px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  position: fixed;
  top: 0;
  width: 500px;
  background: white;
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

p {
  max-width: 600px;
  margin: 20px auto;
}
```

:::

In this example, the `h1` element will stick to the top of the viewport, and even when the user scrolls, it will remain in place. This is especially useful for creating persistent UI elements, like sticky headers or always-visible navigation.

`position: sticky` behaves as a hybrid between relative and fixed positioning. Initially, the element behaves as though it's positioned relatively, staying within the flow of the document. However, once the user scrolls the element past a certain point, it "sticks" to the viewport (usually the top) and behaves as though it is fixed. This is great for creating elements like sticky navigation bars, which only become fixed once the user scrolls to a certain position. Here's how you can apply sticky positioning:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<h1>Sticky Header</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
<p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
<p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
<p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
<p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
<p>Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus.</p>
<p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.</p>
<p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
```

```css
h1 {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

:::

In this example, the `h1` element will behave normally until the user scrolls it `30px` away from the top, at which point it will "stick" to the top of the viewport.

Here are some key differences between absolute, fixed and sticky positioning:

- Absolute positioning removes an element from the document flow and positions it relative to the nearest positioned ancestor, or the initial containing block if none exists. The element stays in that position regardless of scrolling.
- Fixed positioning also removes the element from the document flow but fixes it relative to the viewport, meaning it will stay visible in the same spot even as the page is scrolled.
- Sticky positioning keeps the element in the normal flow initially but allows it to stick in place after scrolling past a defined threshold.

These strategies allow you to create layouts that include floating elements, sticky headers, and more dynamic UI components, enhancing user experience by making important information always accessible.

# --questions--

## --text--

What is the main difference between `fixed` and `sticky` positioning?

## --answers--

`fixed` stays in place relative to the viewport, `sticky` moves based on scroll position.

---

`sticky` stays in place relative to the viewport, `fixed` moves based on scroll position.

### --feedback--

One becomes `fixed` after scrolling past a threshold.

---

Both `fixed` and `sticky` behave the same way.

### --feedback--

One becomes `fixed` after scrolling past a threshold.

---

Neither works for headers or navigation bars.

### --feedback--

One becomes `fixed` after scrolling past a threshold.

## --video-solution--

1

## --text--

What property must be defined for `sticky` positioning to work?

## --answers--

`position: absolute`

### --feedback--

It's a hybrid of `fixed` and `relative` positioning.

---

`position: fixed`

### --feedback--

It's a hybrid of `fixed` and `relative` positioning.

---

`position: sticky`

---

`z-index`

### --feedback--

It's a hybrid of `fixed` and `relative` positioning.

## --video-solution--

3

## --text--

How does `fixed` positioning differ from `absolute` positioning?

## --answers--

`fixed` is relative to the viewport, while `absolute` is relative to the nearest positioned ancestor.

---

`fixed` positioning doesn't allow scrolling.

### --feedback--

Think about what stays visible when scrolling.

---

`absolute` positioning keeps the element within the normal document flow.

### --feedback--

Think about what stays visible when scrolling.

---

`fixed` positioning hides the element when scrolled.

### --feedback--

Think about what stays visible when scrolling.

## --video-solution--

1
