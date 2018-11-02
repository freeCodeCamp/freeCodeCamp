---
title: Optional Tags
localeTitle: Etiquetas opcionales
---
## Etiquetas opcionales de HTML5

En HTML5, puede omitir ciertas etiquetas de apertura y cierre bajo condiciones específicas. Por ejemplo, el siguiente código HTML ...

```html

<!DOCTYPE html> 
 <p>Hello World. 
```

Evaluará automáticamente a ...

```html

<!DOCTYPE html> 
 <html> 
  <head></head> 
  <body> 
    <p>Hello world. 
    </p> 
  </body> 
 </html> 
```

Las especificaciones de etiquetas opcionales para las etiquetas HTML5 más comunes son las siguientes:

*   La etiqueta de inicio de un elemento `html` puede omitirse si lo primero dentro del elemento `html` no es un comentario.
*   La etiqueta final de un elemento `html` puede omitirse si el elemento `html` no es seguido inmediatamente por un comentario.
*   Una `head` la etiqueta inicial del elemento puede omitirse si el elemento está vacío, o si lo primero dentro de la `head` elemento es un elemento.
*   Una `head` etiqueta final del elemento puede omitirse si la `head` elemento no es seguida inmediatamente por un carácter de espacio o un comentario.
*   La etiqueta de inicio de un elemento del `body` se puede omitir si el elemento está vacío, o si la primera cosa dentro del elemento del `body` no es un carácter de espacio o un comentario, excepto si la primera cosa dentro del elemento del `body` es un `meta` , `link` , `script` , `style` , o elemento de `template` .
*   La etiqueta final de un elemento del `body` puede omitirse si el elemento del cuerpo no es seguido inmediatamente por un comentario.

### Más información

Para obtener más información sobre las etiquetas opcionales de HTML5, visite ![Recomendaciones del Consorcio World Wide Web](https://www.w3.org/TR/html5/syntax.html#optional-tags) .