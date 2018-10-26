---
title: Markdown Code Formatting
localeTitle: Formato de código de rebaja
---
# Formato de código de rebaja

Hay dos formas de formatear el código en Markdown. Puede usar código en línea, colocando comillas en las partes de una línea, o puede usar un bloque de código, al que algunos procesadores aplicarán el resaltado de sintaxis.

## Código en línea

Puede usar el formato de código en línea para enfatizar un pequeño comando o parte de la sintaxis dentro de la línea que está escribiendo.

Por ejemplo, es posible que desee mencionar la función `Array.protoype.map()` Javascript. Al utilizar el formato de código en línea, está claro que se trata de un fragmento de código. También puede usarlo para ilustrar un comando de terminal, como la `yarn install` .

Para utilizar el formato de código en línea, simplemente envuelva el código que desea formatear en backticks. En un teclado QWERTY de diseño estándar de EE. UU., Se puede encontrar a la izquierda de '1', y arriba de Tab. A continuación, se proporciona más información sobre la ubicación de la marca en los teclados internacionales.

Por ejemplo, escribir \`Array.prototype.map ()\` en markdown se representará como `Array.prototype.map()` .

## Bloques de código

Para escribir fragmentos de código más largos o más detallados, a menudo es mejor colocarlos dentro de un bloque de código. Los bloques de código le permiten usar varias líneas, y markdown lo renderizará dentro de su propia caja y con fuente de tipo de código.

Para lograr esto, comience su bloque con una línea de tres backticks. Esto indica a Markdown que está creando un bloque de código. Tendrás que terminar con otra línea de tres backticks. Por ejemplo:

\`\` \`

var add2 = función (número) {

número de retorno + 2;

}

\`\` \`

se renderizará en markdown como:
```
var add2 = function(number) { 
    return number + 2; 
 } 
```

Si bien no es compatible de forma nativa con markdown, muchos motores de markdown, incluido el que usa GitHub, admiten el resaltado de sintaxis. Esto significa que al decirle a Markdown qué idioma estamos usando dentro de nuestro bloque, agregará colores como lo haría un IDE. Puede hacer esto agregando el nombre del idioma en la misma línea en la que abre las tres marcas anteriores. En el ejemplo anterior, si en lugar de la primera línea es \`\` \`usamos\` \`\` js, entonces el resaltado se aplicará a nuestro bloque.

```js
var add2 = function(number) { 
    return number + 2; 
 } 
```

Sin embargo, esto se puede aplicar a más que solo javascript. Puedo usar \`\` \`html:

```html

<div class="row"> 
    <div class="col-md-6 col-md-offset-3"> 
        <h1>Hello World</h1> 
    </div> 
 </div> 
```

\`\` \`rubí:

```ruby
"Hello World".split('').each do |letter| 
    puts letter 
 end 
```

o \`\` \`python:

```python
a, b = 0, 1 
 while b < 10: 
    print(b) 
    a, b = a, a + b 
```

mas muchos otros Pero recuerde, no todos los motores de rebajas aplicarán el resaltado de sintaxis.

## Escribiendo Backticks

La ubicación de la tecla de comillas invertidas puede ser diferente en diferentes teclados, y si no está usando un teclado QWERTY de diseño de EE. UU., Puede ser difícil de encontrar. [Esta](http://superuser.com/a/254077/122424) guía útil enumera algunas de las formas de encontrar su clave de comillas invertidas, que hemos recopilado a continuación.

#### QWERTY y QWERTZ (clave marcada con un borde rojo)

![QWERTY](//discourse-user-assets.s3.amazonaws.com/optimized/2X/a/a7daf1d707e12e207d47f0eb70ba01d97ffd1924_1_690x327.png)

#### AZERTY Francia ( tecla Alt Gr + que ha sido marcada con un borde rojo)

![AZERTY](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f65c339ce4eefd9d79841f3dc54f4c37cab2e77.png)

#### AZERTY Bélgica ( tecla Alt Gr + que ha sido marcada con un borde rojo)

![introduzca la descripción de la imagen aquí](//discourse-user-assets.s3.amazonaws.com/original/2X/d/de291f0895b0fed992726a62d654f4e1f0e421f3.png)

#### QWERTY estonio (claves que han sido marcadas con borde rojo)

![Disposición del teclado estonio](//discourse-user-assets.s3.amazonaws.com/optimized/2X/0/089b26510b1dcc7553625ba162582cf55837b6cd_1_690x230.png)

### Código alternativo

Finalmente, la tecla de comilla invertida tiene un código alt, que debería funcionar en cualquier teclado. Si no puede encontrar una tecla de comillas invertidas en su teclado, puede mantener presionada la tecla Alt y presionar 9, luego 6 (Alt + 9, 6). Esto insertará un backtick.