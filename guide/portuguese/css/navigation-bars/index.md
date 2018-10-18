---
title: Navigation Bars
localeTitle: Barras de Navegação
---
## Barras de Navegação

Barras de navegação são um elemento muito importante para qualquer site. Eles fornecem o principal método de navegação, fornecendo uma lista principal de links para um usuário. Existem muitos métodos para criar uma barra de navegação. A maneira mais fácil de criar uma barra de navegação é usar uma lista não ordenada e estilizá-la com CSS.

As barras de navegação são compostas principalmente por listas `<ul>` que são organizadas e estilizadas horizontalmente.

Ao estilizar as barras de navegação, é comum remover o espaçamento extra criado pelas tags `<ul>` e `<li>` , bem como os pontos de marcação que são inseridos automaticamente:

```css
   list-style-type: none; 
   margin: 0px; 
   padding: 0px; 
```

**Exemplo:**

Existem duas partes para qualquer navegação: o HTML e o CSS. Este é apenas um exemplo rápido.

```html

<nav class="myNav">                                 <!-- Any element can be used here --> 
    <ul> 
        <li><a href="index.html">Home</a></li> 
        <li><a href="about.html">About</a></li> 
        <li><a href="contact.html">Contact</a></li> 
    </ul> 
 </nav> 
```

```css
/* Define the main Navigation block */ 
 .myNav { 
    display: block; 
    height: 50px; 
    line-height: 50px; 
    background-color: #333; 
 } 
 /* Remove bullets, margin and padding */ 
 .myNav ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
 } 
 .myNav li { 
    float: left; 
    /* Or you can use display: inline; */ 
 } 
 /* Define the block styling for the links */ 
 .myNav li a { 
    display: inline-block; 
    text-align: center; 
    padding: 14px 16px; 
 } 
 /* This is optional, however if you want to display the active link differently apply a background to it */ 
 .myNav li a.active { 
    background-color: #3786E1; 
 } 
```

#### Mais Informações:

Mais exemplos de navegação: [W3Schools](https://www.w3schools.com/css/css_navbar.asp)