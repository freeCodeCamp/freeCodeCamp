---
title: CSS3 Shadow Effects
localeTitle: CSS3 Shadow Effects
---
## CSS3 Shadow Effects

Con CSS3 puede crear dos tipos de sombras: `text-shadow` (agrega shadow a text) y `box-shadow` (agrega shadow a otros elementos).

### CSS3 Text Shadow

La propiedad `text-shadow` puede tomar hasta cuatro valores:

*   la sombra horizontal
*   la sombra vertical
*   el efecto borroso
*   el color

##### Ejemplos:

*   Sombra de texto normal

```css
h1 { 
    text-shadow: 2px 2px 5px crimson; 
 } 
```

![Ejemplo de sombra de texto normal](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow1.png)

*   Efecto de texto brillante

```css
h1 { 
    text-shadow: 0 0 4px #00FF9C; 
 } 
```

![Ejemplo de texto brillante](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow2.png)

#### Sombras multiples

Para lograr esto, simplemente agregue una coma entre dos (o más) conjuntos de valores:

```css
h1 { 
    color: white; 
    text-shadow: 0 0 3px #F10D58, 0 0 7px #4578D5; 
 } 
```

![Múltiples sombras con texto en blanco.](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow3.png)

### CSS3 Box Shadow

La propiedad `box-shadow` puede tomar hasta seis valores:

*   (opcional) la palabra clave `inset` (cambia la sombra a una dentro del marco)
*   la sombra horizontal
*   la sombra vertical
*   el efecto borroso
*   la propagación
*   el color

##### Ejemplos:

```css
.first-div { 
    box-shadow: 1px 1px 5px 3px grey; 
 } 
 
 .second-div { 
    box-shadow: 0 0 5px 1px lightgrey; 
 } 
 
 .third-div { 
    box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75); 
 } 
```

![Ejemplos de sombra de caja](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/box-shadows.png)

#### Más información:

*   [Documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b)
*   [Compruebe la compatibilidad del navegador](https://caniuse.com/#search=box-shadow)
*   [CSS box-shadow generator](https://www.cssmatic.com/box-shadow) (siéntase libre de experimentar con box-shadows)