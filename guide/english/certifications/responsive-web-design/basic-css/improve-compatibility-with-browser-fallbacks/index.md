---
title: Improve Compatibility with Browser Fallbacks
---
## Improve Compatibility with Browser Fallbacks

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to add a fallback to the ```background``` property of the ```.black-box`` class.

### Example

```css
  :root {
    --black-color: black;
  }
  .black-box {
    background: var(--black-color);
    width: 100px;
    height: 100px;
  }
```

## Solution

Add a fallback to the ```background``` property before the existing background declaration:

```css
  :root {
    --black-color: black;
  }
  .black-box {
    background: black;
    background: var(--black-color);
    width: 100px;
    height: 100px;
  }
```

