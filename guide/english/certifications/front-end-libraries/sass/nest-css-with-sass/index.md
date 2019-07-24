---
title: Nest CSS with Sass
---
# Nest CSS with Sass

---
## Problem Explanation
- In Sass, nesting CSS rules allows to define hierarchy selectors.
- You can organize your style sheets by nesting CSS rules.
 
**Example:**

```scss
.title{
  strong{}
  em{}
}

// This will be compiled into:

.title{}
.title strong{}
.title em{}
```


---
## Hints

### Hint 1

 - You may want to change the position of "}" at line 4.
 

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```scss
<style type='text/sass'>
  .blog-post { 
    h1 {
     text-align: center;
     color: blue;
    }
    p {
        font-size: 20px;
    } 
  }  
</style>
```
</details>
