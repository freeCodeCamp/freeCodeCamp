---
title: Convert HTML Entities
localeTitle: Convertir entidades HTML
---
![Entidades HTML y '<> "](//discourse-user-assets.s3.amazonaws.com/original/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

*   Debe crear un programa que convierta las entidades HTML de una cadena a sus entidades HTML correspondientes. Solo hay unos pocos para que puedas usar diferentes métodos.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   Puedes usar expresiones regulares, pero en este caso no lo hice.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Usted se beneficiará de un gráfico con todas las entidades html para que sepa cuáles son las correctas para colocar.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   Debe separar la cadena y trabajar con cada carácter para convertir los correctos y luego unir todo de nuevo.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function convertHTML(str) { 
      // Split by character to avoid problems. 
 
      var temp = str.split(''); 
 
      // Since we are only checking for a few HTML elements I used a switch 
 
      for (var i = 0; i < temp.length; i++) { 
        switch (temp[i]) { 
          case '<': 
            temp[i] = '&lt;'; 
            break; 
          case '&': 
            temp[i] = '&amp;'; 
            break; 
          case '>': 
            temp[i] = '&gt;'; 
            break; 
          case '"': 
            temp[i] = '&quot;'; 
            break; 
          case "'": 
            temp[i] = "&apos;"; 
            break; 
        } 
      } 
 
      temp = temp.join(''); 
      return temp; 
    } 
 
    //test here 
    convertHTML("Dolce & Gabbana"); 
```

### Explicación del código:

Explica la solución aquí y agrega cualquier enlace relevante.

#### Enlaces relevantes

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [declaración de cambio](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnP/0)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function convertHTML(str) { 
 //Chaining of replace method with different arguments 
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;"); 
 return str; 
 } 
 
 // test here 
 convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnQ/0)

### Explicación del código:

Explica la solución aquí y agrega cualquier enlace relevante.

#### Enlaces relevantes

*   [str.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [Expresiones regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

```javascript
    function convertHTML(str) { 
      // Use Object Lookup to declare as many HTML entities as needed. 
      const htmlEntities={ 
        '&':'&amp;', 
        '<':'&lt;', 
        '>':'&gt;', 
        '"':'&quot;', 
        '\'':"&apos;" 
      }; 
      //Use map function to return a filtered str with all entities changed automatically. 
      return str.split('').map(entity => htmlEntities[entity] || entity).join(''); 
    } 
 
    // test here 
    convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnR/0)

### Explicación del código:

*   Cree un objeto para usar la funcionalidad de búsqueda para encontrar fácilmente los caracteres.
*   Divida la cadena original por caracteres y use el mapa para verificar la entidad html modificada o use la misma. Alternativamente, puede usar Regex `str.replace(/&|<|>|"|'/gi` .
*   Se agrega la función a, que es lo que devuelve la entidad convertida o la original si no hay conversión. Si sigues la ruta regular, solo tienes que devolver los hits emparejados. `return html[entity];`
*   Por último nos unimos a todos los personajes una vez más.

**Tenga en cuenta** que si tomó la ruta de expresiones regulares, entonces no necesita unirse a nada, solo asegúrese de devolver toda la operación o de guardarla en una variable y luego devolverla.

#### Enlaces relevantes

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.