---
title: Background Repeat Property
localeTitle: Propiedad de repetición de fondo
---
## Propiedad de repetición de fondo

La propiedad CSS de repetición de fondo define cómo se repiten las imágenes de fondo.

Una imagen de fondo se puede repetir a lo largo del eje horizontal, el eje vertical, ambos ejes, o no se puede repetir en absoluto. Por defecto, una imagen de fondo se repite tanto vertical como horizontalmente.

Sintaxis:

```css
background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit; 
```

*   repetir: la imagen de fondo se repetirá tanto vertical como horizontalmente. Esto es por defecto
    
*   repetir-x: la imagen de fondo se repetirá solo horizontalmente
    
*   repetir y: la imagen de fondo se repetirá solo verticalmente.
    
*   no-repetir: la imagen de fondo no se repetirá.
    
*   inicial: establece esta propiedad a su valor predeterminado.
    
*   heredar: hereda esta propiedad de su elemento padre.
    

Ejemplos: Para repetir la imagen tanto horizontal como verticalmente.

```css
body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat; 
 } 
```

Para repetir la imagen horizontalmente.

```css
body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat-x; 
 } 
```

#### Más información:

[Para más información sobre la propiedad de repetición de fondo.](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)