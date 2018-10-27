---
title: Use a CSS Class to Style an Element
---
## Use a CSS Class to Style an Element

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

To style an element using a class add the `class` attribute to the desired element.
```HTML
<p class="myclass">This element has class myclass.</p>
```

Now use the `.` selector inside the style tag or a separate CSS file as shown:
```css
.myclass {
  color: red;
  font-size: 30px;
}
```
