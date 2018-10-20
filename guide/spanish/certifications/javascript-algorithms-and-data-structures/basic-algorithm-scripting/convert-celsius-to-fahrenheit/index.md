---
title: Convert Celsius to Fahrenheit
localeTitle: Convertir Celsius a Fahrenheit
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

El algoritmo para convertir de Celsius a Fahrenheit es la temperatura en grados Celsius `9/5` , más `32` .

Te dan una variable **celsius que** representa una temperatura en grados celsius. Utilice la variable **fahrenheit** ya definida y aplique el algoritmo para asignarle la temperatura correspondiente en Fahrenheit.

#### Enlaces relevantes

*   [La Orden de Operaciones: PEMDAS](http://www.purplemath.com/modules/orderops.htm)
*   [Orden de Operación: Video](https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Echa un vistazo al código. Hay un área que no debes editar. A partir de ahí, pregúntate: ¿qué se usa allí que no haya visto antes?

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Tenga en cuenta el **orden de operación;** consulte el enlace en la sección de _enlaces_ para obtener más información.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function convertToF(celsius) { 
      // Only change code below this line 
      var fahrenheit = (celsius * (9/5)) + 32; 
 
      // Only change code above this line 
      if ( typeof fahrenheit !== 'undefined' ) { 
      return fahrenheit; 
      } else { 
        return 'fahrenheit not defined'; 
      } 
    } 
 
    // Change the inputs below to test your code 
    convertToF(30); 
```

### Explicación del código:

*   Declara la variable **fahrenheit** .
*   Asegúrese de seguir el orden correcto de las operaciones aritméticas usando paréntesis ( `()` ) cuando sea necesario.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.