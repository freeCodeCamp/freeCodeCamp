---
title: Border Property
localeTitle: Propiedad de la frontera
---
## Propiedad de la frontera

## CSS Border

Nuestro atributo personal favorito de CSS, le permite personalizar completamente los bordes que aparecen alrededor de los elementos HTML. Con HTML, solía ser imposible colocar un borde alrededor de un elemento, excepto la tabla. Los bordes de CSS le permiten crear estilos de bordes personalizados y nítidos con muy poco trabajo, en comparación con los métodos anticuados de HTML.

La propiedad abreviada de `border` establece todas las propiedades de borde en una declaración. 

```css borde: 1px sólido # 000;
```
Las propiedades que se pueden configurar, son (en orden):
```
 1. `border-style`
 2. `border-width`
 3. `border-color`
 4. `border-radius`
 ```
 No importa si falta alguno de los valores anteriores, por ejemplo:

```
css borde: rojo sólido;
```
El código anterior también es válido CSS.
 
 ### Border Styles 
 
 La propiedad `border-style` establece una amplia gama de diferentes tipos de bordes.
 
 Los diversos valores son:
 - `dotted` - Establece un borde punteado. 
 - `dashed` - Establece un borde discontinuo. 
 - `solid` - Establece un borde sólido. 
 - `double` - Establece un borde doble. 
 - `groove` - Establece un borde estriado 3D. 
 - `ridge` - Establece un borde puntiagudo 3D. 
 - `inset` - Establece un borde de inserción 3D. 
 - `outset` - Establece un borde de inicio 3D. 
 - `none` - No establece ningún borde. 
 - `hidden` - Establece un borde oculto. 
 
 En función de la propiedad que elija, estos estilos pueden no coincidir.
 Puedes diseñar cada lado por separado:
```
css estilo de borde superior: sólido; estilo de borde izquierdo: punteado; estilo de borde derecho: punteado; estilo de borde inferior: doble;
```
O puedes ponerlos todos a la vez:
```
css estilo de borde: punteado sólido con puntos dobles;
```
Como se muestra, la propiedad de borde le permite seleccionar diferentes secciones de la misma. [arriba, abajo, izquierda, derecha]
 
 ### Border Width 
 
 Para alterar el grosor de su borde use el atributo de ancho de borde. Puede usar términos clave o valores exactos para definir el ancho del borde. Nota: debe definir un estilo de borde para que se muestre el borde. El ancho se puede establecer como un tamaño específico (en px, pt, cm, em, etc.) o utilizando uno de los tres valores predefinidos: delgado, medio o grueso.
 
 Ejemplo: 
```

css

table { border-width: 7px; border-style: outset; } td { border-width: medium; border-style: outset; } p { border-width: thick; border-style: solid; }
```
### Border Color

 ¡Ahora para el aspecto creativo de CSS Borders! Con el uso del atributo de color de borde, podrá crear bordes personalizados para adaptarse al flujo y diseño de su sitio web. Los colores de borde pueden ser cualquier color definido por RGB, hexadecimal o términos clave. A continuación se muestra un ejemplo de cada uno de estos tipos. 
 
 Ejemplo: 
```

css

table { border-color: rgb( 100, 100, 255); border-style: dashed; } td { border-color: #FFBD32; border-style: ridge; } p { border-color: blue; border-style: solid; }
```
### Border-Radius 
 La propiedad `border-radius` permite redondear las esquinas de un borde. Esto se hace proporcionando un tamaño para la cantidad que se redondeará el borde. El tamaño puede ser en px o en %. 
```

css radio del borde: 25px;
```
Cada esquina de `border-radius` se puede ajustar. El orden es arriba, abajo, izquierda, derecha.
```

css radio del borde: 15% 10px 30% 5px;
```
### Border: All in One 
 
 Si bien es bueno que CSS le permita a un desarrollador web ser muy específico en la creación de un borde personalizado, a veces es más fácil y menos de un dolor de cabeza crear un borde uniforme, todo en una sola línea de código CSS.
 
 Ejemplo: 
```

css

p { border: 20px outset blue; } h4 { border: 5px solid; } h5 { border: dotted; }

```

### Más información:

*   [Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [Radio de borde CSS3](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### Otros atributos de borde

*   'border-radius' - Esto puede establecer el radio del borde.
*   'espacio entre bordes' - Esto puede establecer el espacio entre el texto y el borde.
*   'border-image' - Esto establece una imagen como borde.

Soporte del navegador: IE6 +
