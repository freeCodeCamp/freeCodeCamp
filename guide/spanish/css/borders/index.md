---
title: Border Property
localeTitle: Propiedad de la frontera
---
## Propiedad Borde

## CSS Borde

Nuestro atributo favorito en CSS, le permite personalizar completamente los bordes que aparecen alrededor de los elementos HTML. Con HTML, solía ser imposible colocar un borde alrededor de un elemento, excepto en una tabla. Los bordes de CSS le permiten crear estilos de bordes personalizados y nítidos con muy poco trabajo, en comparación con métodos anticuados de HTML.

La propiedad abreviada de `border` establece todas las propiedades de borde en una declaración. 

```css 
  border: 1px solid #000;
```

Las propiedades que pueden definirse son, en orden: 
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
No importa si uno de los valores no está definido, por ejemplo:

```css 
  border: solid red;
```

El codigo mostrado arriba es CSS válido. 
 
 ### Estilos de Borde
 
 La propiedad `border-style` define un amplio rango de tipos de bordes. 
 
 Los diferentes valores son: 
 - `dotted` - Define un borde con puntos. 
 - `dashed` - Define un borde a rallas. 
 - `solid` - Define un borde sólido. 
 - `double` - Define un borde doble. 
 - `groove` - Define un borde en surcos, estriado en 3D. 
 - `ridge` - Define un borde acaballonado en 3D. 
 - `inset` - Define un borde hundido en 3D.
 - `outset` - Define un borde saliente en 3D. 
 - `none` - Sin borde. 
 - `hidden` - Define un borde oculto. 
 
 Dependiendo de la propiedad que elija, estos estilos pueden ser incompatibles.
 Cada lado puede ser estilizado separadamente:

```css
  border-top-style: solid;
  border-left-style: dotted;
  border-right-style: dashed;
  border-bottom-style: double;
```

O pueden ser definidos todos a la vez:

```css
  border-style: solid dashed double dotted;
```
Como se aprecia, la propiedad de borde permite sleccionar diferentes secciones de la misma [top, bottom, left, right] 
 
 ### Ancho de Borde
 
 Para modificar el grosor del borde se usa el atributo `border'width`. Puede usar palabras clave o valores exactos para definir el ancho del borde. Nota: debe definir un estilo de borde para que este aparezca. El ancho puede definirse mediante un tamaño específico (en px, pt, cm, em, etc= o usando uno de los tres valores predefinidos: `thin`, `medium` o `thick`.
 
 Ejemplo:
 
```css
<style type="text/css">
table {
	border-width: 7px;
	border-style: outset;
}
td {
	border-width: medium;
	border-style: outset;
}
p {
	border-width: thick;
	border-style: solid;
}
</style>
```

### Color de Borde
 
 Ahora nos centramos en el aspecto creativo de los bordes en CSS. Mediante el uso del atributo `border-color`, podrá ser capaz de crear bordes acordes con el estilo de su página web. El borde puede tomar cualquier color definido por RGB, hexadecimal o palabras clave. Debajo encontramos un ejemplo de cada uno de estos tipos.
 
 Ejemplo:
 
```css
<style type="text/css">
table {
	border-color: rgb( 100, 100, 255);
	border-style: dashed;
}

td {
	border-color: #FFBD32;
	border-style: ridge;
}

p {
	border-color: blue;
	border-style: solid;
}
</style>
```

### Radio del Borde

 La propiedad `border-radius` permite redondear las esquinas de un borde. Esto se lleva a cabo designando en qué medida debe redondearse el borde. Este tamaño puede definirse en px o %.
 
```css 
  border-radius: 25px;
```

Se puede ajustar cada esquina de `border-radius`. El orden es arriba, abajo, izquierda, derecha. 

```css 
  border-radius: 15% 10px 30% 5px;
```

### Borde: Todo en Uno 
 
 A pesar de que se agradece que CSS permita al desarrollador web ser muy específico a la hora de crear un borde personalizado, a veces es simplement más sencillo crear un border uniforme, todo en una sóla línea de código CSS.

 Ejemplo: 
 
```css
<style type="text/css">
p { border: 20px outset blue; } 
h4 { border: 5px solid; } 
h5 { border: dotted; }
</style>
```

### Más información:

*   [Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [Radio de borde CSS3](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### Otros atributos de borde

*   `border-spacing`: establece el espacio entre el texto y el borde.
*   `border-image`: establece una imagen como borde.

Soporte del navegador: IE6 +
