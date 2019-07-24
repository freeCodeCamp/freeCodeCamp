---
title: Store Data with Sass Variables
---
# Store Data with Sass Variables


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style type='text/sass'>
  
  $text-color: red; // Declaration of the variable "text-color".
  
  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color; // Changing the value of color with the value of "text-color".
  }
</style>


</details>