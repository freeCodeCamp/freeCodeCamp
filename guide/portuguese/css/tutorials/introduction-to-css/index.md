---
title: Introduction to CSS
localeTitle: Introdução ao CSS
---
## Introdução ao CSS

### O que é CSS?

Cascading Style Sheets (CSS) descrevem como o html em uma página deve aparecer.

Antes que os desenvolvedores CSS aplicassem estilos usando atributos ou tags especiais em cada nó de uma página. Isso tornou a marcação repetitiva e propensa a erros.

O CSS permite que os seletores descrevam como cada parte do conteúdo correspondente deve aparecer.

```CSS
body { 
    font-size: 15px; 
 } 
 
 a { 
    color: rebeccapurple; 
    text-decoration: underline; 
 } 
```

### Usando CSS

**Folhas de estilo externas** permitem que muitas páginas compartilhem os mesmos estilos.

```HTML
<link href="styles.css" rel="stylesheet" type="text/css"> 
```

**Folhas de estilo internas** aplicam CSS a todas as tags correspondentes em uma página.

```HTML
<style> 
    h1 { 
        font-family: sans-serif; 
        margin-bottom: 1.5em; 
    } 
 </style> 
```

**CSS inline** aplica estilos a uma única tag.

```HTML
<img src="..." style="border: 1px solid red;" /> 
```

#### Mais Informações:

*   [W3Schools](https://www.w3schools.com/css/css_intro.asp)
*   [Almanaque CSS-Tricks](https://css-tricks.com/almanac/)
*   [Sitepoint](https://www.sitepoint.com/html-css/?ref_source=github)