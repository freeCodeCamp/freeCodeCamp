---
title: Nest CSS with Sass
localeTitle: Nest CSS с Sass
---
## Nest CSS с Sass

*   В Sass вложения правил CSS позволяют определять селектора иерархии.
*   Вы можете организовать свои таблицы стилей, вставив правила CSS.

## пример

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

## Подсказка 1:

*   Вы можете изменить положение «}» в строке 4.

## Решение

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