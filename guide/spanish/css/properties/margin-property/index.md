---
title: Margin Property
localeTitle: Propiedad de margen
---
## Propiedad de margen

La propiedad de margen es el espacio alrededor de un elemento, a diferencia del relleno, que es el espacio dentro del elemento. El margen es transparente y es el elemento más externo en el Modelo de caja (vea el diagrama a continuación).

![Diagrama modelo de caja](https://css-tricks.com/wp-content/csstricks-uploads/thebox.png)

Fuente: https://css-tricks.com/the-css-box-model/

### Margen de ajuste

Existen múltiples formas de configurar el margen de un elemento.

La forma más sencilla ...

```css
  margin: 10px; 
```

Esto pondrá 10 píxeles de espacio completamente alrededor del elemento.

También puede colocar diferentes cantidades de espacio en cada lado de un elemento. Por ejemplo:

```css
  margin-top: 10px; 
  margin-bottom: 15px; 
  margin-left: 20px; 
  margin-right: 25px; 
```

Sin embargo, hay una abreviatura que se puede usar al definir diferentes lados de un elemento. Comienza en la parte superior y gira en sentido horario alrededor del elemento (arriba, derecha, abajo, izquierda). Por ejemplo, el código sobre se escribiría en corto como este:

```css
  margin: 10px 25px 15px 25px; 
```

Además, si los márgenes inferior y superior son iguales, y los márgenes izquierdo y derecho son iguales, se puede escribir así:

```css
  margin: 10px 20px; 
```

donde los márgenes superior e inferior son 10 píxeles y los márgenes izquierdo y derecho son 20 píxeles.

### Otros valores de propiedad

automático: el navegador calcula los márgenes.

inicial - establece la propiedad a su valor inicial

heredar - el elemento hereda el margen de su elemento padre

### Espacio de medición

Al igual que hay varias formas de establecer el margen, también hay varias formas de medir el margen.

px: medida en píxeles, la unidad estándar de medida del espacio de la pantalla.

% - Porcentaje de la pantalla. Esto hará que el elemento se contraiga y crezca con el navegador y es una de las unidades de medida recomendadas para el diseño web sensible.

em: unidad de tamaño relativa al tamaño de fuente del elemento actual.

rem: unidad de tamaño relativa al tamaño de fuente del elemento raíz de la página.

[Aquí](https://www.w3schools.com/CSSref/css_units.asp) hay una guía sobre las unidades CSS.

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Más información:

*   [Escuelas w3](https://www.w3schools.com/CSSref/pr_margin.asp)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [Trucos CSS](https://css-tricks.com/almanac/properties/m/margin/)