---
title: Give a Background Color to a div Element
localeTitle: Dê uma cor de fundo para um elemento div
---
## Dê uma cor de fundo para um elemento div

Você pode alterar a `color` do `background` para um Elemento `div` (ou seção) por uma de duas maneiras.

**O primeiro método:**

Crie uma `class` nos colchetes de estilo.

```html

<style> 
 .blue-background { 
    background-color: blue; 
  } 
 </style> 
```

Você pode então adicionar a `class` ao seu elemento `div` :

```html

<div class="blue-background"> 
  <p> Example </p> 
 </div> 
```

**O segundo método:**

Em vez de criar uma `class` como no primeiro método, você pode criar uma `class` Element `div` nos colchetes de estilo.

Cada elemento `div` terá a `class` você criou e atribuiu.

(Isso significa que é uma `class` repetição para cada Elemento `div` que você cria.)

```html

<style> 
  div { 
    background-color: blue; 
  } 
 </style> 

```