---
title: Border Property
localeTitle: Propiedad de borde
---
## Propiedad de borde

## CSS Border

Nuestro atributo personal favorito de CSS, permite personalizar completamente los bordes que aparecen alrededor de los elementos HTML. Con HTML, solía ser imposible colocar un borde alrededor de un elemento, excepto en la tabla. Los bordes de CSS te permiten crear estilos de bordes personalizados y nítidos con muy poco trabajo, en comparación con los métodos anticuados de HTML.

La propiedad abreviada de `border` establece todas las propiedades de borde en una declaración. \`\` \`css borde: 1px sólido # 000;
```
Las propiedades que pueden utilizarse son (en orden): 
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
 No importa si falta alguno de los valores de arriba, por ejemplo: 
```

css borde: rojo sólido;
```
El código de arriba también es CSS válido. 
 
 ### Estilo de Borde  
 
 La propiedad `border-style` (estilo de borde) establece el tipo de borde. Hay varios tipos de borde que puedes utilizar. 
 
 Los valores pueden ser: 
 - `dotted` - Establece un borde punteado. 
 - `dashed` - Establece un borde de guiones. 
 - `solid` - Establece un borde sólido. 
 - `double` - Establece un borde de doble ancho. 
 - `groove` - Establece un borde acanalado en 3D. 
 - `ridge` - Establece un borde en relieve 3D. 
 - `inset` - Establece un borde cóncavo en 3D. 
 - `outset` - Establece un borde saliente en 3D. 
 - `none` - Establece que no hay borde. 
 - `hidden` - Establece un borde oculto. 
 
 Basado en la propiedad que elijas estos estilos pueden no coincidir. 
 Puedes darle un borde diferente a cada lado del elemento: 
```

css border-top-style: 'solid'; border-left-style: 'dotted'; border-right-style: 'dotted'; border-bottom-style: 'double';
```
O puedes estilizarlos todos a la vez: 
```

css border-style: dotted solid double dashed;
```
Aquí queda demostrado que la propiedad de borde permite seleccionar sus diferentes secciones. [superior, inferios, izquierda , derecha] 
 
 ### Grosor del Borde 
 
 Para alterar el grosor del borde debes usar el atributo border-width. Puedes utilizar las palabras clave o valores exactos para definir el grosor del borde. Nota: Debes definir un estilo de borde (border-style) para poder aplicarle el grosor y que se vea.  
 El grosor puede ser un tamaño específico (en px, pt, cm, em, etc) o también se puede usar uno de los tres valores predeterminados: 
 
 thin (delgado), medium (medio), or thick (grueso). 
 
 Ejemplo: 
```

css

table { border-width: 7px; border-style: outset; } td { border-width: medium; border-style: outset; } p { border-width: thick; border-style: solid; }
```
### Color del Borde 
 
¡Ahora viene el aspecto creativo de los bordes de CSS! Usando el atributo border-color puedes creat bordes personalizados que encajen el flujo y el diseño de tu página web. El color del borde puede ser cualquier color definido con RGB, hexadecimal, o palabras clave. A continuación hay un ejemplo para cada una de las opciones. 
 
 Ejemplo: 
```

css

table { border-color: rgb( 100, 100, 255); border-style: dashed; } td { border-color: #FFBD32; border-style: ridge; } p { border-color: blue; border-style: solid; }
```
### Radio del Borde 
 La propiedad `border-radius` te permite redondear las esquinas de un borde. Ésto se hace al establecer un tamaño que indique cuanto se quiere redondear el borde. Este tamaño puede estar en px o %. 
```

css border-radius: 25px;
```
Puedes ajustar cada lado del borde usando `border-radius`. El orden es superior, inferior, izquierda, derecha. 
```

css border-radius: 15% 10px 30% 5px;
```
### Borde Todo en Uno 
 
 Es excelente que CSS permita al desarrollador ser tan específico como quiera al crear un borde personalizado, aunque a veces es más fácil crear un borde uniforme en una sola línea de código CSS. 
 
 Ejemplo: 
```

css

p { border: 20px outset blue; } h4 { border: 5px solid; } h5 { border: dotted; }

\`\` \`

### Más información:

*   [Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [Radio de borde CSS3](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### Otros atributos de borde

*   'border-radius' - Esto puede establecer el radio del borde.
*   'espacio entre bordes': esto puede establecer el espacio entre el texto y el borde.
*   'border-image': establece una imagen como borde.

Soporte del navegador: IE6 +
