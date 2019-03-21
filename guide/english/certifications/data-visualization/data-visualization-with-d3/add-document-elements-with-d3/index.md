---
title: Add Document Elements with D3
---
## Add Document Elements with D3

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
