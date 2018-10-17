---
title: Font Size Property
localeTitle: Propiedad de tamaño de fuente
---
## Propiedad de tamaño de fuente

### Definición y uso

La propiedad de `font-size` se utiliza para establecer el tamaño de la fuente de un elemento. A continuación se muestra la sintaxis predeterminada para esta propiedad.

```css
font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit; 
```

Como se muestra arriba, esta propiedad puede tomar varios valores. El valor predeterminado es _mediano_ y los valores de _xx-small_ a _xx-large_ configuran el tamaño de fuente de muy pequeño a muy grande (como el tamaño de la ropa). Los valores _más_ _pequeños_ y _más grandes_ establecen el tamaño de fuente en un tamaño más pequeño que el tamaño de fuente del elemento principal y más grande que el tamaño de fuente del elemento principal, respectivamente. A pesar de la disponibilidad de los valores mencionados anteriormente, el tipo más común de valor utilizado es una unidad de longitud. Las unidades de longitud pueden incluir: **px** , **%** , **em** , **rem** y **pt** .

### Unidades de longitud explicadas

#### px

Puede usar la unidad \* _px_ para establecer un tamaño de fuente fijo para un elemento en píxeles. Un píxel es un punto en la pantalla del usuario. Dado que los píxeles proporcionan un tamaño de fuente fijo, el tamaño de fuente no puede responder. Esto es negativo porque los tamaños de fuente pueden no aparecer bien en diferentes dimensiones de la pantalla y tendría que usar consultas de medios para hacer la escala de la fuente.

**Ejemplo:**

```css
p { 
  font-size: 20px; 
 } 
```

**Resultado:** ![Ejemplo uno](https://image.prntscr.com/image/TI_29z3FRO20dJD2Dc7JJA.png)

#### %

Puede utilizar la unidad de porcentaje **%** para establecer el tamaño de fuente en relación con el tamaño de fuente del elemento del cuerpo. El valor predeterminado es 16px, por lo que 100% sería igual a 16px. Si se cambia el tamaño de fuente del cuerpo, también cambiará el tamaño de fuente de cualquier elemento contenido dentro del cuerpo que tenga un valor como porcentaje. Esta unidad permite escalar la fuente en varios tamaños de pantalla.

**Ejemplo:**

```css
p { 
  font-size: 120%; 
 } 
```

**Resultado:** ![Ejemplo Dos](https://image.prntscr.com/image/P9HTpWbETeyjZhxzf9z-SA.png) El código anterior cambia el tamaño de fuente al 120% del tamaño de fuente predeterminado, que es de 16 px.

#### em

Otra unidad que se puede usar para el tamaño de fuente es la unidad **em** . Una unidad **em** es igual al tamaño de fuente predeterminado del elemento padre más cercano. Esto significa que 2em duplicaría el tamaño de la fuente y 4em sería 4 veces el tamaño de la fuente. La unidad **em se** está volviendo más popular ya que puede escalar y es compatible con dispositivos móviles.

**Ejemplo:**

```css
p { 
  font-size: 1.4em; 
 } 
```

**Resultado:** ![Ejemplo tres](https://image.prntscr.com/image/AeCJ0TCbRHqOTAFJ9CYNUQ.png) El código anterior establece el tamaño de fuente del párrafo en 1,4 veces el tamaño de fuente de su padre más cercano, que es el elemento del cuerpo. El elemento del cuerpo tiene un tamaño de fuente predeterminado de 16px, por lo que este párrafo tendría un tamaño de fuente de 1.4 \* 16 = 22.4px.

#### movimiento rápido del ojo

La unidad **rem** es muy similar a la unidad **em** , pero el tamaño de fuente es relativo al tamaño de fuente predeterminado del elemento raíz. El elemento raíz es el elemento `<html>` .

**Ejemplo:**

```css
html { 
    font-size: 12px; 
 } 
 p { 
    font-size: 1.4rem; 
 } 
```

**Resultado:** ![Ejemplo Cuatro](https://image.prntscr.com/image/V5bn69UmSPOHSVM5YSAcyw.png) El párrafo anterior tiene un tamaño de letra 1.4em. Esta vez, el tamaño de fuente del elemento raíz se ha cambiado a 12px, por lo que la fuente del párrafo ahora es 12 \* 1.4 = 16.8px. La unidad **rem** no considera la fuente del elemento del cuerpo a pesar de que todavía es 16px.

#### pt

La unidad final para los tamaños de fuente es el valor del punto ( **pt** ). Este valor es relativo al tamaño real del texto. Una **pt** es igual a 1/72 pulgadas en papel, por lo que 72pt es igual a 1 pulgada. Los valores de los puntos son precisos en el papel, pero pueden verse diferentes en diferentes navegadores. Esta unidad solo es útil cuando necesita imprimir páginas con un tamaño de fuente preciso. La unidad **pt** no es escalable.

**Ejemplo:**

```css
p { 
  font-size: 16pt; 
 } 
```

**Resultado:** ![Ejemplo cinco](https://image.prntscr.com/image/IyOOr_WCT963wa0DoWyoOg.png) El tamaño de fuente anterior es 16pt.

He adjuntado algunos enlaces de artículos a continuación si desea leer más sobre este tema.

#### Más información:

*   https://css-tricks.com/css-font-size/
*   https://www.w3schools.com/cssref/pr _font_ font-size.asp
*   https://css-tricks.com/confused-rem-em/
*   https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/