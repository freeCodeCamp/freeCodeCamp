---
title: Height and Width Dimensions
localeTitle: Dimensiones de altura y anchura
---
## Dimensiones de altura y anchura

### Definición

Los programadores pueden usar las propiedades de altura y anchura para cambiar la altura y la anchura de elementos específicos. Para que sus dimensiones se modifiquen, el valor de la propiedad de `display` de estos elementos debe configurarse en `block` o `inline-block` .

### Sintaxis

#### Altura:

*   `height: auto|length|initial|inherit;`
*   `min-height: length|initial|inherit;`
*   `max-height: none|length|initial|inherit;`

#### Anchura:

*   `width: auto|value|initial|inherit;`
*   `min-width: length|initial|inherit;`
*   `max-width: none|length|initial|inherit;`

### Uso y ejemplos

Todas las propiedades mencionadas anteriormente solo pueden tener **un** valor.

#### Altura:

La propiedad de `height` establece la altura exacta de un elemento. El valor `auto` es el predeterminado y permite que el navegador establezca automáticamente la altura. Esto suele estar determinado por la cantidad de espacio vertical que ocupa el contenido de un elemento. La longitud de la altura se puede establecer en fija en `px` , relativa a la altura del elemento padre más cercano utilizando la unidad `%` , o relativa a la altura de la ventana `vh` utilizando la unidad `vh` . El valor `initial` tendrá el mismo efecto que el valor `auto` , mientras que el valor `inherit` dará al elemento la misma altura que el elemento principal más cercano.

**Ejemplo:**

```html

<p id="red">Example text</p> 
```

```css
p#red { 
    margin: 0; 
  background-color: red; 
  height: 50vh; 
    line-height: 50vh; 
    text-align:center; 
 } 
```

**Resultado:** ![Ejemplo uno](https://image.prntscr.com/image/dbKSQofTThGZRD7FJLyjJQ.png) El ejemplo anterior utiliza la unidad `vh` para establecer la altura. Esta unidad se utiliza para establecer la altura de un elemento en relación con la altura de la ventana gráfica. En este caso, al párrafo rojo se le da una altura de la mitad de la altura de la ventana gráfica, de modo que ocupa el 50% de la pantalla. _Nota: Todos los márgenes predeterminados deben eliminarse del cuerpo para que el resultado aparezca como debería._

La propiedad `min-height` establece la altura mínima que debe tener un elemento. Esta propiedad es útil cuando se redimensiona verticalmente una página, ya que el programador puede evitar que un elemento se reduzca demasiado y no se vea bien. El valor predeterminado de la `min-height` de un elemento se establece en 0. El código CSS a continuación evitaría que el párrafo con un `ID` de **ejemplo se** redujera a menos de 400 px en altura.

**Ejemplo:**

```css
p#example { 
  min-height: 400px; 
 } 
```

La propiedad `max-height` establece la altura máxima que un elemento puede alcanzar. Esto puede ser útil cuando no desea que un elemento sea más grande que un tamaño específico. Si el contenido del elemento tiene una altura mayor que el valor de `max-height` , el contenido se desbordará.

**Ejemplo:**

```css
p { 
  max-height: 40px; 
  background-color: red; 
 } 
```

**Resultado:** ![Ejemplo 3](https://image.prntscr.com/image/eRdqazdUSWO2rdVfcUb5rQ.png)

#### Anchura:

Las explicaciones de las propiedades de ancho de CSS son exactamente las mismas que las propiedades de altura, excepto que alteran el ancho de un elemento. Por lo tanto, solo mostraré algunos ejemplos del uso de estas propiedades a continuación.

**Ejemplo:**

```css
p { 
  width: 150px; 
  background-color: red; 
 } 
```

**Resultado:** ![Ejemplo 4](https://image.prntscr.com/image/x1_khU6TQsmZQznt7YU9qw.png)

_Nota: el contenido no se desborda a la derecha, solo ocupa el ancho especificado y luego se desplaza a la siguiente línea._

**Ejemplo:**

```css
p { 
  min-width: 50px; 
 } 
```

El código anterior simplemente no permitirá que un elemento de párrafo se reduzca horizontalmente a menos de 50px.

**Ejemplo:**

```css
p { 
  max-width: 300px; 
  background-color: red; 
 } 
```

El código anterior no permitirá que el ancho de un elemento sea mayor que 300 px.

Espero que este artículo te haya ayudado a sentirte cómodo con las dimensiones de altura y anchura de CSS. He incluido algunos enlaces a continuación, si desea leer más sobre estas propiedades.

#### Más información:

*   Dimensiones de altura y anchura de CSS: https://www.w3schools.com/css/css\_dimension.asp
*   Propiedad de altura CSS: https://www.w3schools.com/cssref/pr _dim_ height.asp
*   Propiedad de ancho CSS: https://css-tricks.com/almanac/properties/w/width/
*   Longitudes de CSS: https://developer.mozilla.org/en-US/docs/Web/CSS/length