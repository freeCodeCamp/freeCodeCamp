---
title:  CSS3 Colors
localeTitle:  Colores CSS3
---
## Colores

CSS Colors es un módulo CSS que trata los colores, los tipos de colores, la combinación de colores y la opacidad. No todas las propiedades CSS que toman un valor forman parte de este módulo, pero sí dependen de él. En CSS, puede cambiar el color de casi cualquier elemento en su página HTML. Las propiedades como `background-color` , `color` y `border-color` establecen el color de esos elementos.

CSS soporta nombres de colores, hexadecimales y colores RGB. Además de la introducción de la declaración de `opacity` , los colores en CSS3 ahora se pueden especificar usando nombres de colores, o valores RGB, HEX, HSL, RGBA, HSLA.

HTML admite 140 [nombres de colores](https://www.w3schools.com/colors/colors_names.asp) estándar.

### RGB (A)

RGB significa "rojo, verde, azul". Un valor RGB es una combinación de valores de intensidad para rojo, verde y azul. Cada uno está entre 0 (negro) y 255 (intensidad completa). Los valores de color RGBA son una extensión de los valores de color RGB con un canal alfa, que especifica la opacidad de un color. El parámetro alfa es un número entre 0.0 (totalmente transparente) y 1.0 (totalmente opaco).

Un valor de color RGB se especifica con: rgb (rojo, verde, azul) Un valor de color RGBA es similar, con el valor alfa en la última posición: rgba (rojo, verde, azul, alfa)

### HSL (A)

HSL significa "Tono, saturación y luminosidad". El tono es un ángulo en la rueda de color (de 0 a 360): 0 (o 360) es rojo, 120 es verde, 240 es azul. La saturación es un valor porcentual: el 100% es a todo color. La luminosidad es también un porcentaje; 0% es oscuro (negro) y 100% es blanco. Los valores de color HSLA son una extensión de los valores de color HSL con un canal alfa, que especifica la opacidad de un color.

Un valor de color HSL se especifica con: hsl (tono, saturación, luminosidad). Un valor de color HSLA es similar, con el valor alfa en la última posición: hsla (tono, saturación, luminosidad, alfa)

### CMYK

Los colores CMYK son una combinación de CYAN, MAGENTA, AMARILLO y NEGRO. Las pantallas de computadora muestran colores usando valores de color RGB. Las impresoras a menudo presentan colores utilizando valores de color CMYK. CMYK no es compatible con HTML, pero se sugiere como un nuevo estándar en CSS4.

Colores de ejemplo: CMYK Rojo: cmyk (0%, 100%, 100%, 0%) CMYK Verde: cmyk (100%, 0%, 100%, 0%) Azul CMYK: cmyk (100%, 100%, 0%, 0%)

### Hexcodes

El _hexcode_, abreviatura de código hexadecimal, es una forma de expresar un valor de color a su computadora. Se llama así porque se pueden usar 16 símbolos únicos como valores. En este caso, se utilizan los números 0 a 9 y las letras A a F.

Los códigos hexadecimales se expresan en este formato: # 000000, que sería el color negro en este caso. Se utilizan seis caracteres en cada código hexadecimal, utilizando cualquiera de los 16 caracteres mencionados anteriormente. Estos seis caracteres se dividen en tres pares de dos.

Estos tres pares expresan un valor para la cantidad de rojo, verde y azul en un color particular. Tomando el código hexadecimal color # AA11BB, AA es la cantidad de rojo, 11 la cantidad de verde y BB la cantidad de azul. 0 es el valor más bajo de un color, mientras que F es el valor más alto.

Los códigos hexadecimales no distinguen entre mayúsculas y minúsculas, lo que significa que #FFFFFF y #ffffff serían del mismo color: blanco.

Además, hay 16,777,216 combinaciones de colores posibles utilizando un código hexadecimal.

### Opacidad

La propiedad de opacidad CSS3 establece la opacidad para todo el elemento (tanto el color de fondo como el texto serán opacos / transparentes). A diferencia de los valores alfa especificados con rgba y hsla, la opacidad es heredada por elementos secundarios.

El valor de la propiedad de opacidad debe ser un número entre 0.0 (totalmente transparente) y 1.0 (totalmente opaco).

#### Ejemplos

```html

<html> 
  <body> 
    <p>Hello Moto</p> 
  </body> 
 </html> 
```

```css
body { 
  background-color: green; 
  color: white; 
 } 
```

En el ejemplo anterior, el `background-color: green` convierte el elemento `<body>` verde. Esto hace que toda la página web sea verde. Los elementos `<p>` son todos blancos después del `color: white` también. Puede usar colores con nombre, como `green` , `blue` , `yellow` , `red` , `purple` y muchos otros. Pero para colores personalizados, puede usar códigos hexadecimales ( `#147ACC` ), valores RGB ( `rgb(20, 122, 204)` ) e incluso valores HSL ( `hsl(145, 59%, 30%)` ).

```css
p { 
  color: rgba(244, 145, 14, 0.80); // bright orange 
 } 
 
 h2 { 
 color: #FA8072; //salmon 
 } 
```

También puede agregar un valor alfa, o transparencia a los colores. La transparencia permite que el texto se superponga en una imagen y aún así la imagen se puede ver parcialmente a través del texto, o se puede usar para cambiar el tono del color si no hay otros elementos delante o detrás del texto. Use `rgba()` o `hsla()` y complete sus valores de color. El valor alfa es el último y es un porcentaje convertido a un decimal. (Por ejemplo, 20% es 0.2, 75% es 0.75, etc.)

```css
body { 
  background-color: hsl(184, 87%, 94%); // bright blue 
 } 
```

En la parte superior se muestran los párrafos de estilo naranja brillante y 20% transparentes, los elementos h2 son rosa salmón y el fondo del cuerpo es azul brillante.

Para obtener colores personalizados para usar en CSS, es posible que encuentre útil un selector de color. Algunos editores de texto tienen selectores de color incorporados, como Visual Studio Code. Si busca "selector de color" en Google o DuckDuckGo, obtendrá un selector de color que puede usar. Google Chrome y Firefox también tienen complementos de selección de color que puedes instalar. Adobe Color CC no solo le ayuda a elegir un color, sino que también lo ayudará a elegir un esquema de color para su página web. Es una buena idea verificar que tenga suficiente contraste entre el texto y los colores de fondo utilizando una herramienta como el Comprobador de contraste de color de WebAIM.

#### Más información:

[Adobe Color CC](https://color.adobe.com/) [ColorPick Eyedropper en Chrome Web Store](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) [Complemento ColorZilla para Firefox](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/) [Explora diferentes colores hexagonales](http://www.colorhexa.com/) [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
