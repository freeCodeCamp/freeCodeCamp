---
title: Nest CSS with Sass
localeTitle: Nest CSS com Sass
---
## Nest CSS com Sass

*   No Sass, as regras CSS de aninhamento permitem definir seletores de hierarquia.
*   Você pode organizar suas folhas de estilo aninhando regras CSS.

## Exemplo

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

## Sugestão 1:

*   Você pode querer mudar a posição de "}" na linha 4.

## Solução

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