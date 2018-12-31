---
title: Styling Lists
localeTitle: Listas de estilo
---
## Listas de estilo

### Resumen de listas HTML

Hay dos tipos principales de listas en HTML: **ordenadas** y **desordenadas** .

En las listas **ordenadas** ( `<ol></ol>` ), el orden de los elementos de la lista es importante. Los elementos pueden aparecer ordenados por número, número romano, número alfa u otro tipo de marcador. El marcador predeterminado para las listas ordenadas es un número (o `decimal` ):

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/ordered-list.png?raw=true "lista ordenada")

En las listas **desordenadas** ( `<ul></ul>` ), el orden de los elementos de la lista no importa. Los artículos aparecen en formato de viñeta. El marcador predeterminado para listas desordenadas es un punto o `disc` una viñeta redonda.

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/unordered-list.png?raw=true "lista desordenada")

Cada elemento de la lista dentro de una lista ordenada o desordenada se crea con la etiqueta `<li></li>` .

### Estilos específicos de lista

Hay tres propiedades comunes específicas de las listas `list-style-type` `list-style-position` `list-style-image` , `list-style-position` `list-style-image` . También hay una propiedad taquigráfica que incluye los tres.

#### `list-style-type`

Los marcadores (o viñetas) que aparecen en listas ordenadas y desordenadas se pueden diseñar de varias maneras. La propiedad CSS para diseñar el tipo de marcador es tipo `list-style-type` . El valor predeterminado `list-style-type` para una lista ordenada es `decimal` , mientras que el valor predeterminado para una lista no ordenada es `disc` .

Ejemplo de lista ordenada:

> ```css
> /* css */ 
>  ol { 
>   list-style-type: upper-roman; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-upper-roman.png?raw=true "estilo de lista de tipo romano superior")

Ejemplo de lista desordenada:

> ```css
> /* css */ 
>  ul { 
>   list-style-type: square; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-square.png?raw=true "estilo de lista cuadrado")

Ningún ejemplo de marcador:

> ```css
> /* css */ 
>  ul { 
>   list-style-type: none; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-none.png?raw=true "tipo de estilo de lista ninguno")

Los valores aceptados para la propiedad de `list-style-type` incluyen:

_Desordenado_

*   disco ( _predeterminado_ )
*   circulo
*   cuadrado

_Ordenado:_

*   decimal ( _predeterminado_ )
*   decimal-líder-cero
*   bajo romano
*   alto romano
*   bajo griego
*   bajo latín
*   latín superior
*   armenio
*   georgiano
*   alfa inferior
*   alfa superior

_Otro:_

*   ninguna

Nota: todos los valores de propiedad enumerados anteriormente se pueden usar para diseñar tanto listas ordenadas como desordenadas (por ejemplo, una lista ordenada con marcadores de lista `square` ).

#### `list-style-position`

`list-style-position` controla si el marcador de lista aparece dentro o fuera de cada elemento de la lista ( `<li></li>` ). La propiedad acepta dos valores, `outside` (por defecto) o `inside` .

Coloque el marcador `outside` del elemento del elemento de la lista, y todas las líneas de texto y las líneas secundarias de cada elemento de la lista se alinearán verticalmente:

> ```css
> /* css */ 
>  ul { 
>   list-style-position: outside; /* default */ 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-outside.png?raw=true "lista-estilo-posición fuera")

Coloque el marcador `inside` y la primera línea de texto de cada elemento de la lista se sangrará para dejar espacio para el marcador. Cualquier línea secundaria del mismo elemento de la lista se alineará con el marcador en lugar de con la primera línea de texto:

> ```css
> /* css */ 
>  ul { 
>   list-style-position: inside; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-inside.png?raw=true "lista-estilo-posición dentro")

#### `list-style-image`

La propiedad `list-style-image` acepta una url de imagen en lugar del marcador de lista. El valor predeterminado para esta propiedad es `none` .

> ```css
> /* css */ 
>  ul { 
>   list-style-image: url(https://url-to-image); 
>  } 
> 
> ```

#### `list-style` taquigrafía

`list-style` es una propiedad abreviada de las tres propiedades de estilo enumeradas anteriormente. El orden de los valores que acepta el `list-style` `list-style-type` es `list-style-type` `list-style-position` `list-style-image` , `list-style-position` `list-style-image` . Si se omite algún valor, se utilizará el valor predeterminado para esa propiedad.

> Ejemplo:
> 
> ```css
> /* css */ 
>  ul { 
>   list-style: circle inside none; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-shorthand.png?raw=true "taquigrafía al estilo de lista")

#### Más estilo de lista específica

Las etiquetas de lista ordenadas también aceptan atributos que controlan los valores de flujo, conteo o marcadores específicos de sus elementos de lista. Estos incluyen los atributos de `start` , `reversed` y `value` . Vea los recursos de MDN enumerados a continuación para más detalles.

### Estilo general

El contenido de la lista se puede diseñar al igual que otros elementos `p` o `div` . `color` , `font-family` , `margin` , `padding` o `border` son solo algunos ejemplos de propiedades que se pueden agregar a los elementos `ul` , `ol` o `li` .

Tenga en cuenta que cualquier estilo agregado al elemento `ul` o `ol` afectará a toda la lista. Los estilos agregados directamente a los elementos `li` afectarán los elementos de la lista individual. En el ejemplo a continuación, las propiedades de borde y color de fondo tienen un estilo diferente entre la lista y los elementos de elemento de lista:

> ```css
> /* css */ 
>  ul { 
>   list-style-type: circle; 
>   border: 2px solid blue; 
>   background-color: lightblue; 
>  } 
>  li { 
>   margin: 5px; 
>   background-color: lightyellow; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-styles.png?raw=true "estilo de lista de estilo general")

#### Espaciado de lista

Puede observar un espaciado adicional delante de los elementos de la lista cuando el `list-style-type` se establece en `none` . Establecer el `padding` en `0` (o cualquier espaciado que se prefiera) en el elemento de la lista anulará este relleno predeterminado.

> ```css
> /* css */ 
>  ul { 
>   list-style: none; 
>   padding: 0; 
>  } 
>  li { 
>   padding: 5px 10px; 
>   background-color: #EEEEEE; 
>   border: 1px solid #DDDDDD; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-padding.png?raw=true "estilo de lista de estilo general")

* * *

#### Fuentes:

Los enlaces a continuación fueron referenciados en la compilación de información encontrada en este artículo. Por favor, visite ellos para más detalles sobre este tema.

#### Más información:

[MDN - Listas de estilo](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

[W3Schools - Listas CSS](https://www.w3schools.com/css/css_list.asp)

[Trucos CSS - estilo de lista](https://css-tricks.com/almanac/properties/l/list-style/)