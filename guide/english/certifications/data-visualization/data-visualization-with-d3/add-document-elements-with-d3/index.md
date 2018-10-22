---
title: Add Document Elements with D3
---
## Add Document Elements with D3

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/data-visualization/data-visualization-with-d3/add-document-elements-with-d3/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
[This challenge](https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3/add-document-elements-with-d3) introduces three core methods of **d3.js**:
* The `d3.select()` method
* The `d3.append()` method
* The `d3.text()` method

### The select() Method
The select method is crucial, because it tells the browser where to put any _d3.js_ code written afterwords. In _Javascript_, you would write `document.getElementById('#myId');`. In _d3.js_, you would write `d3.select('#myId')`.

### The append() method
The append method is similar to _jsx_ in _react_, markup in _html_ or the `appendChild()` method in _Javascript_. For Example, writing `d3.select('#myId').append('p')` would be the same as writing `...<p></p>...`

### The text() method
The text method is the third step in applying content to a page using _d3.js_. We have selected an element in our html and added an element. Now, we need to fill the empty element. We do that like this: `d3.select('#myId').append('p').text('sup World!')`. This is akin to writing `...<p>'sup World!</p>...` in html.

### The Solution
Add the folowing code to your editor:
```
d3.select('body')
  .append('h1')
  .text('Learning D3');
```
