---
title: Units
localeTitle: Unidades
---
## Unidades

Muchas propiedades de CSS, como el `width` , el `margin` , el `padding` , `font-size` etc. toman longitud. CSS tiene una forma de expresar longitud en unidades múltiples. La longitud es una combinación de un número y una unidad sin espacios en blanco. Ej. `5px` , `0.9em` etc.

### Longitud

#### Unidades de longitud comunes

Hay varias unidades utilizadas por CSS para expresar la longitud. Los más antiguos, soportados por todos los navegadores, son:

*   **rem** - "r" significa "raíz": "root em" -, que es igual al tamaño de fuente fijado al elemento raíz (casi siempre `<html>` ).
*   **vh** y **vw** : muchas técnicas de diseño web receptivo dependen en gran medida de las reglas de porcentaje. Sin embargo, las medidas de porcentaje de CSS no siempre son la mejor solución para todos los problemas. La medida **vh** es igual a 1/100 de la altura de la ventana gráfica. Entonces, por ejemplo, si la altura del navegador es 800px, 1vh es igual a 8px y, de manera similar, si el ancho de la ventana gráfica es 650px, 1vw es equivalente a 6.5px.
*   **vmin** y **vmax** : estas unidades están relacionadas con el valor máximo o mínimo de **vh** y **vw** . Por ejemplo, si el navegador se configuró a 1200px de ancho y la altura de 600px, 1vmin sería de 6px y 1vmax sería de 12px. Sin embargo, si el ancho se establece en 700px y la altura se establece en 1080px, vmin sería igual a 7px y vmax 10.8px.
*   **ex** y **ch** : estas unidades, similares a **em** y **rem** , se basan en la fuente y el tamaño de fuente actuales. Sin embargo, a diferencia de **em** y **rem** , estas unidades también dependen de `font-family` ya que se determinan en función de las medidas específicas de cada fuente. La unidad **ch** ("unidad de caracteres") se define como el ancho del cero de caracteres ("0"). La unidad **ex** se define como "la altura x actual de la fuente actual o la mitad de 1em". La altura-x de una fuente dada es la altura de la "x" minúscula de esa fuente. A menudo es la marca media de la fuente.

| Unidad | Descripción | | --------------- | ----------------------- | | em | 1 em es el valor calculado del tamaño de fuente en el elemento en el que se utiliza. | | ex | 1 ex es la altura x de la fuente actual. La altura x suele ser (pero no siempre, por ejemplo, si no hay una 'x' en la fuente) igual a la altura de una 'x' en minúsculas | | ch | 1 ch es el avance del '0' (cero) glifo en la fuente actual. 'ch' significa carácter. | | rem | 1 rem es el valor calculado de la propiedad de tamaño de fuente para el elemento raíz del documento. | vw | 1vw es 1% del ancho de la ventana gráfica. 'vw' significa 'ancho de la ventana gráfica'. | | vh | 1vh es el 1% de la altura de la ventana gráfica. 'vh' significa 'altura de la ventana gráfica'. | | vmin | Igual al menor de 'vw' o 'vh' | | vmax | Igual al mayor de 'vw' o 'vh' |

Hay dos tipos generales de unidades utilizadas para la longitud y el tamaño en CSS: relativo y absoluto.

### Unidades Relativas

Las unidades relativas cambian en relación con el tamaño de fuente actual del elemento u otras configuraciones. Algunas unidades relativas son

*   `em`
*   el ancho de una letra mayúscula M del `font-size` de `font-size` del elemento actual.
*   Los tamaños de fuente se heredan de los elementos principales.
*   Ejemplo: `html div { font-size: 16px; } div h3 { font-size: 2rem; }` Aquí, `<h3>` será igual a `32px` ya que el `font-size` de `font-size` del elemento actual o principal es `16px` .
*   `rem`
*   root `em` , o el ancho de una letra mayúscula M del `font-size` base predeterminado.
*   Los tamaños de fuente padre no tendrán efecto.
*   Ejemplo: `html body { font-size: 16px; } p { font-size: 1.5rem; }` Aquí, `<p>` será igual a `24px` ya que el `font-size` base predeterminado es `16px` .
*   `%`
*   el porcentaje de tamaño relativo al tamaño de un padre.
*   Ejemplo: `html div { width: 400px; } div p { width: 75%; }` Dado que el ancho de los padres es de `400px` , el ancho del diagrama interno sería de `300px` o el 75% de `400px` .
*   `vw`
*   ancho de la vista, o 1/100 del ancho de la ventana gráfica
*   Ejemplo: `html body { width: 100vw; }` El `body` rellena el ancho de la ventana gráfica, ya sea 417px, 690px o cualquier ancho.
*   `vh`
*   altura de la vista, o 1/100 de la altura de la ventana gráfica
*   Ejemplo: `html div { height: 50vh; }` Este `div` llenará la mitad de la altura de la ventana gráfica, ya sea 1080px, 1300px o cualquier altura.

### Unidades Absolutas

Las unidades absolutas serán las mismas independientemente del tamaño de la pantalla u otras configuraciones. Algunas unidades absolutas son

*   `px`
*   píxel
*   los conteos de píxeles son relativos a la calidad de la pantalla del dispositivo de visualización
*   `in` , `cm` , `mm`
*   pulgada, centímetro, milímetro
*   Una pulgada es una pulgada en una pantalla pequeña o una pantalla grande
*   `pt` , `pc`
*   Puntos (1/72 de pulgada) y picas (12 puntos)

Ejemplo

```html

p { 
  font-size: 24px; 
 } 
 div { 
  width: 3in; 
  border-width: 3pt; 
 } 
```

Un párrafo con `font-size: 24px` se mostrará como 24px en una pantalla de teléfono, tableta o escritorio.

El `div` aparecerá como 3 pulgadas de ancho, y el `border` en el `div` tendrá 3/72 de pulgada de espesor, independientemente del tamaño de la pantalla.

### Más información:

*   [WebPlatforms Entendiendo los píxeles y otras unidades CSS](https://webplatform.github.io/docs/tutorials/understanding-css-units/)
*   [Documentos Web MDN - Unidades CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
*   [Tutoriales de Diseño Web]('https://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573)
*   [Ayuda HTML en Unidades CSS](http://www.htmlhelp.com/reference/css/units.html)