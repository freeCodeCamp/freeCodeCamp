---
title: Store Data with Sass Variables
localeTitle: Almacenar datos con variables Sass
---
## Almacenar datos con variables Sass

## Solución

```javascript
<style type='text/sass'> 
 
  $text-color: red; // Declaration of the variable "text-color". 
 
  .header{ 
    text-align: center; 
  } 
  .blog-post, h2 { 
    color: $text-color; // Changing the value of color with the value of "text-color". 
  } 
 </style> 

```