---
title: Universal
localeTitle: Universal
---
## Universal

Selector universal (\*) selecciona todos los elementos. También selecciona todos los elementos dentro de un elemento. Puede adjuntar selector universal con cualquier otro selector.

### Sintaxis de código

```css
* { 
  css declarations; 
 } 
```

```css
element * { 
  css declarations; 
 } 
```

#### Ejemplo de código

Este selector hace coincidir todos los elementos y establece el color de la fuente en verde.

```css
* { 
  color: green; 
 } 
```

Este selector selecciona todos los elementos div y establece el color de la fuente en verde.

```css
div * { 
  color: green; 
 } 
```

Este selector selecciona todos los elementos cuyo valor de atributo de idioma comienza con en.

```css
* [lang^=en] { 
  color: green; 
 } 

```