---
title: CSS3 Border Radius Property
localeTitle: Propiedad de radio de borde CSS3
---
## Propiedad de radio de borde CSS3

Con CSS3, puede dar a cualquier elemento "esquinas redondeadas", usando la propiedad `border-radius` . El valor puede estar en cualquier unidad de longitud de CSS válida.

```css
  .rounded-corners { 
    border-radius: 20px; 
  } 
 
  .circle { 
    border-radius: 50%; 
  } 
```

![ejemplos](https://github.com/kaithrendyle/guide-photos/blob/master/rounded-circle.png?raw=true)

**Nota: la** propiedad `border-radius` es en realidad una propiedad abreviada de las propiedades `border-top-left-radius` , `border-top-right-radius` , `border-bottom-right-radius` y `border-bottom-left-radius` .

Si solo se proporciona un valor, el radio del borde será el mismo para las cuatro esquinas, como en los ejemplos anteriores. Pero también tiene la opción de especificar valores diferentes para cada esquina.

```css
.new-shape { 
  border-radius: 20px 50px 5px 0; /* top left, top right, bottom right, bottom left */ 
 } 
```

Si solo se proporcionan dos valores, el primer valor se aplica a la esquina superior izquierda y la esquina inferior derecha, y el segundo valor se aplica a la esquina superior derecha e inferior izquierda.

```css
.leaf-shape { 
  border-radius: 0 50%; 
 } 
```

Si se establecen tres valores, el primero se aplica nuevamente al radio superior izquierdo, el segundo valor indica arriba a la derecha y abajo a la izquierda, dejando el tercer valor para indicar la esquina inferior derecha.

```css
.odd-shape { 
  border-radius: 0 20px 50%; 
 } 
```

![ejemplos](https://github.com/kaithrendyle/guide-photos/blob/master/odd-shapes.png?raw=true)

El redondeo de una esquina no tiene que ser perfectamente simétrico. Puede especificar los radios horizontales y verticales utilizando una barra ("/") para lograr una esquina con una forma elíptica. \`\` \`css .elliptical-1 { radio del borde: 50px / 10px; / \* radio horizontal / radio vertical \* / } .elliptical-2 { radio del borde: 10px / 50px; }
```
![examples](https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-basic.png?raw=true) 
 
 Since only one pair of values is given in the above examples, all four corners are the same. But, of course, if you want a more complex shape, you may supply up to four values for the horizontal radiuses and four for the vertical radiuses. 
```

css .elliptical-3 { radio del borde: 50px 20px 50px 20px / 20px 50px 20px 50px; / \* horizontal superior izquierda, horizontal superior derecha, horizontal inferior derecha, horizontal inferior izquierda / vertical superior izquierda, vertical superior derecha, vertical inferior derecha, vertical inferior izquierda \* / }
```
Notice how the shorthand above produces the same result as specifying individual properties below. Be aware that when corners are set individually the values are space-separated instead of slash-separated. 
```

css .elliptical-4 { borde superior izquierdo del radio: 50 px 20 px; / \* radio horizontal, radio vertical \* / borde superior-derecho-radio: 20px 50px; borde inferior-derecho-radio: 50px 20px; borde inferior-izquierdo-radio: 20px 50px; } \`\` \` ![ejemplos](https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-advance.png?raw=true)

### Más información:

*   Trucos CSS: [Trucos CSS](https://css-tricks.com/almanac/properties/b/border-radius/)
*   Documentación [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
*   Soporte del navegador: [Caniuse](http://caniuse.com/#search=border-radius)