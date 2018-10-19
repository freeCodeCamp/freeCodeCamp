---
title: Nest CSS with Sass
---
## Nest CSS with Sass

- In Sass, nesting CSS rules allows to define hierarchy selectors.
- You can organize your style sheets by nesting CSS rules.
 
## Example
```sass
.title{
  strong{}
  em{}
}

// This will be compiled into:

.title{}
.title strong{}
.title em{}
```
## Hint 1:

 - You may want to change the position of "}" at line 4.
 
## Solution
```sass
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
