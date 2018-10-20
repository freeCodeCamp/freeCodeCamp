---
title: Set the id of an Element
---
## Set the id of an Element

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to give our ```form``` element the id ```cat-photo-form```.

### Example

```css
<h2 id="cat-photo-app">
```

### Solution

In the opening tag ```form``` we need add id with value ```cat-photo-form```:

```css
<form id="cat-photo-form" action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
  ```
