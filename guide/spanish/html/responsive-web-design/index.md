---
title: Responsive Web Design
localeTitle: Diseño web adaptable
---
## Diseño web adaptable

El diseño web sensible es el concepto de diseño de páginas web que se adaptan a diferentes tamaños de pantalla. Por lo general, implica el uso de diferentes diseños, tamaños de fuente y ubicación de los menús de navegación.

Con el fin de crear una página web receptiva, CSS se usa comúnmente para estilizar sus elementos HTML. Algunos métodos comunes en CSS que se usan para crear diseños web sensibles son:

1.  Escribiendo [consultas de medios](https://guide.freecodecamp.org/css/media-queries)
2.  Usando [frameworks CSS](https://guide.freecodecamp.org/css/css-frameworks) preexistentes
3.  Usando el [modelo Flexbox](https://guide.freecodecamp.org/css/layout/flexbox)
4.  Usando [CSS Grid](https://guide.freecodecamp.org/css/layout/grid-layout)

### 1\. Consultas de medios

Las consultas de medios le dicen al navegador web que ignore o reemplace las propiedades de la página web en función de atributos específicos como el ancho de la pantalla o si el usuario está imprimiendo.
```
@media (query) { 
  /* The browser will use the CSS rules within the curly braces when the query is true */ 
 } 
```

El siguiente ejemplo establece el `padding-left` y `padding-right` dentro de la clase `more-padding` si el ancho de la pantalla es menor o igual a 768 px.
```
@media screen and (max-width: 768px) { 
    .more-padding { 
        padding-left: 10px; 
        padding-right: 10px; 
    } 
 } 
```

### 2\. CSS Frameworks

Los marcos de trabajo CSS como [Bootstrap](https://www.getbootstrap.com/) , [Material Design Lite](https://getmdl.io/) y [Foundation](https://foundation.zurb.com/) tienen clases CSS pre-construidas que simplifican la codificación del diseño responsivo. Estas clases funcionan como las clases estándar de HTML.

En este ejemplo, `col-md-9` y `col-sm-6` establecen el ancho de la etiqueta `<div>` función de si la pantalla es pequeña o mediana.

```html

<div class="col-12 col-md-6"></div> 
```

El marco de Bootstrap divide una fila en doce columnas. En el ejemplo anterior, `<div>` se extenderá a través de nueve o seis de ellos. El sistema de cuadrícula, que se muestra a continuación, es fundamental para que Bootstrap facilite el diseño receptivo.

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Ejemplo de rejilla básica")

### Más información:

1.  [CSS Flexbox Complete tutorial en 8 minutos](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
2.  [Sección CSS de Freecodecamp](https://guide.freecodecamp.org/css) .
3.  [CSS Flexbox tutorial por CodingTutorials360](https://www.youtube.com/watch?v=zBjUEDzK-ow)