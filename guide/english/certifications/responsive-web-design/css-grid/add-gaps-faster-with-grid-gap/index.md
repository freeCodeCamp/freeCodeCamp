---
title: Add Gaps Faster with grid-gap
---
## Add Gaps Faster with grid-gap

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to use ```grid-gap``` to introduce a ```10px``` gap between the rows and ```20px``` gap between the columns.

### Solution
  
In the class container we should add a ```grid-gap``` property. 
First value - ```10px``` - introduce gap between rows, second value - ```20px``` introduce gap between columns:

```css
.container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* add your code below this line */
    
    grid-gap: 10px 20px;

    /* add your code above this line */
  }
  ```
