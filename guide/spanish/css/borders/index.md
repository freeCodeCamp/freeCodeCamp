---
title: Border Property
localeTitle: Propiedad de la frontera
---
## Propiedad de la frontera

## CSS Border

Nuestro atributo personal favorito de CSS, le permite personalizar completamente los bordes que aparecen alrededor de los elementos HTML. Con HTML, solía ser imposible colocar un borde alrededor de un elemento, excepto la tabla. Los bordes de CSS le permiten crear estilos de bordes personalizados y nítidos con muy poco trabajo, en comparación con los métodos anticuados de HTML.

La propiedad abreviada de `border` establece todas las propiedades de borde en una declaración. \`\` \`css borde: 1px sólido # 000;
```
The properties that can be set, are (in order): 
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
 It does not matter if one of the values above are missing, for example: 
```

css borde: rojo sólido;
```
The above code is also valid CSS. 
 
 ### Border Styles 
 
 The `border-style` property sets a wide range of different types of borders. 
 
 The various values are: 
 - `dotted` - Sets a dotted border. 
 - `dashed` - Sets a dashed border. 
 - `solid` - Sets a solid border. 
 - `double` - Sets a double border. 
 - `groove` - Sets a 3D grooved border. 
 - `ridge` - Sets a 3D ridged border. 
 - `inset` - Sets a 3D inset border. 
 - `outset` - Sets a 3D outset border. 
 - `none` - Sets no border. 
 - `hidden` - Sets a hidden border. 
 
 Based on the property you choose, these styles can be mismatched. 
 You can style each side seperately: 
```

css estilo de borde superior: sólido; estilo de borde izquierdo: punteado; estilo de borde derecho: punteado; estilo de borde inferior: doble;
```
Or you can style them all at once: 
```

css estilo de borde: punteado sólido con puntos dobles;
```
As shown, the border property allows you to select different sections of it. [top, bottom, left, right] 
 
 ### Border Width 
 
 To alter the thickness of your border use the border-width attribute. You may use key terms or exact values to define the border width. Note: You must 
 define a border-style for the border to show up. The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined 
 values: thin, medium, or thick. 
 
 Example: 
```

css

table { border-width: 7px; border-style: outset; } td { border-width: medium; border-style: outset; } p { border-width: thick; border-style: solid; }
```
### Border Color 
 
 Now for the creative aspect of CSS Borders! With the use of the border-color attribute, you will be able to create customized borders to fit the flow and layout 
 of your website. Border colors can be any color defined by RGB, hexadecimal, or key terms. Below is an example of each of these types. 
 
 Example: 
```

css

table { border-color: rgb( 100, 100, 255); border-style: dashed; } td { border-color: #FFBD32; border-style: ridge; } p { border-color: blue; border-style: solid; }
```
### Border-Radius 
 The `border-radius` property allows the corners of a border to be rounded. This is done by providing a size for 
 how much the border is to be rounded. Size can be in px or %. 
```

css radio del borde: 25px;
```
Each corner of `border-radius` can be adjusted. The order is top, bottom, left, right. 
```

css radio del borde: 15% 10px 30% 5px;
```
### Border: All in One 
 
 While it is nice that CSS allows a web developer to be very specific in creating a customized border, sometimes it is just easier and less of a headache to create a uniform border, all in single line of CSS code. 
 
 Example: 
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