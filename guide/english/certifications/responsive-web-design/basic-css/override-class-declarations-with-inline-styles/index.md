---
title: Override Class Declarations with Inline Styles
---
# Override Class Declarations with Inline Styles

---
## Problem Explanation
We need to use an ```inline style``` to try to make our ```h1``` element white.

**Example:**

Inline styles look like this:

```css
<h1 style="color: green;">
```

**NOTE:** An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

In this line:

```css
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```
In opening tag ```<h1>``` we need to add ```inline style``` to make our ```h1``` element white:

```css
<h1 style="color: white;" id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

</details>