---
title: Structure of CSS
localeTitle: Estructura de CSS
---
## Estructura CSS

Una regla CSS sigue esta estructura básica:

```CSS
selector { 
  property: value; 
  property: value; 
 } 
```

Todo lo que esté dentro de los corchetes diseña lo que sea seleccionado por el [selector](https://guide.freecodecamp.org/css/selectors) . Dentro de las reglas de CSS hay un conjunto de pares de [propiedad](https://guide.freecodecamp.org/css/properties) / valor.

Puedes tener diferentes selectores separados por comas:

```CSS
selector1, 
 selector2 { 
  property: value; 
 } 
```

Se pueden poner varias reglas CSS en un archivo CSS, aquí hay un ejemplo:

```CSS
h1 { 
  color: red; 
 } 
 
 div { 
  text-align: center; 
  color: blue; 
 } 
 
 img { 
  margin-left: 2px; 
  margin-top: 100px; 
 } 
```

#### Más información:

*   [Sintaxis CSS en Code The Web](https://codetheweb.blog/2017/11/11/css-syntax/)
*   Más sobre los [selectores de CSS](https://guide.freecodecamp.org/css/selectors)
*   Más sobre [propiedades CSS](https://guide.freecodecamp.org/css/properties)