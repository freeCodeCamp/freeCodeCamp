---
title: Class Selector
localeTitle: Selector de clase
---
## Selector de clase

Se utiliza un selector de clase en un archivo CSS para aplicar estilo a los elementos HTML con el nombre de clase correspondiente. En HTML, puede establecer el nombre de clase para cualquier elemento agregando un atributo de "clase".

Para seleccionar elementos con una clase específica, usamos un (.) Llamado como carácter de período, con el nombre de la clase.

Por ejemplo .center { text-align: center; color rojo; }

Aquí, todos los elementos HTML con `class="center"` estarán rojos y alineados en el centro.

Ejemplos:

```html

<h1 class="test">This is a heading 1</h1> 
 <p class="test">This is a paragraph 1</p> 
 <h2 class="test">This is a heading 2</h2> 
 <p class="test">This is a paragraph 2</p> 
 <div class="test2 test3">This is a div 1</div> 
```

Dado que un nombre de clase no es único, el atributo de clase HTML hace posible definir estilos iguales para elementos con el mismo nombre de clase. **Aquí es cómo puede seleccionar la clase en un archivo CSS para elementos de estilo (observe la notación.):**

**Todos los elementos de la `test` de clase se aplicarán con este estilo:**

```css
.test { 
  color: green; 
 } 
```

**Todos los elementos `<p>` de la `test` de clase se aplicarán con este estilo:**

```css
p.test { 
  border: 1px solid black; 
  color: red; 
 } 
```

**Todos los elementos `<h1>` y `<h2>` de la `test` de clase se aplicarán con este estilo:**

```css
h1.test, h2.test { 
  color: blue; 
 } 
```

**Todos los elementos que tengan ambas clases `test2` y `test3` se aplicarán con este estilo:**

```css
.test2.test3 { 
  color: green; 
 } 
```

**Consejos: No hay espacio entre varias clases.**

#### Más información:

Sintaxis CSS y selectores: [w3schools](https://www.w3schools.com/css/css_syntax.asp)