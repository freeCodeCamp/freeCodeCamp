---
title: Center an Image Using Text Align Center
localeTitle: Centrar una imagen usando el centro de alineación de texto
---
## Centrar una imagen usando el centro de alineación de texto

Un elemento `<img>` es un elemento en línea (muestra el valor del `inline-block` ). Se puede centrar fácilmente agregando el `text-align: center;` Propiedad CSS al elemento padre que lo contiene

Para centrar una imagen usando `text-align: center;` debe colocar `<img>` dentro de un elemento de nivel de bloque, como un `div` . Dado que la propiedad `text-align` solo se aplica a los elementos de nivel de bloque, coloca `text-align: center;` en el elemento de nivel de bloque de envoltura para lograr un `<img>` centrado horizontalmente.

### Ejemplo

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
      } 
    </style> 
  </head> 
  <body> 
    <div class="img-container"> <!-- Block parent element --> 
      <img src="user.png" alt="John Doe"> 
    </div> 
  </body> 
 </html> 
```

**Nota:** El elemento padre debe ser un elemento de bloque. Si no es un elemento de bloque, debe agregar `display: block;` Propiedad CSS junto con la propiedad `text-align` .

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
        display: block; 
      } 
    </style> 
  </head> 
  <body> 
    <span class="img-container"> <!-- Inline parent element --> 
      <img src="user.png" alt=""> 
    </span> 
  </body> 
 </html> 
```

**Demo:** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)

## Documentación

[**alineación de texto** - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

[**\\ ** - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)