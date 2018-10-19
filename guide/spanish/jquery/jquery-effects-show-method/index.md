---
title: jQuery Effects Show Method
localeTitle: Método de demostración de efectos jQuery
---
## Método de demostración de efectos jQuery

En su forma más simple, **.show ()** muestra el elemento coincidente inmediatamente, sin animación. Por ejemplo:

```javascript
$(".myclass").show(); 
```

_Mostrará_ todos los elementos cuya clase es _myclass_ . Se puede usar cualquier selector de jQuery.

Sin embargo, este método no se anula `!important` en el estilo CSS, como `display: none !important` .

### .show () como método de animación.

Gracias a sus opciones, **.show ()** puede animar el ancho, la altura y la opacidad de los elementos emparejados simultáneamente.

*   La duración se puede proporcionar en milisegundos, o usando los literales lento (600 ms) y rápido (200ms). por ejemplo:

```javascript
$("#myobject").show("slow"); 
```

*   Se puede especificar que una función se llame una vez que se complete la animación, una vez por cada elemento coincidente. por ejemplo

```javascript
$("#title").show( "slow", function() { 
    $("p").show("fast"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .slideDown() method 
 This method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items. 
 Usage: 
```

javascript $ (". myclass"). slideDown (); // expandirá el elemento con el identificador myclass durante 400 ms. $ (". myclass"). slideDown (1000); // expandirá el elemento con el identificador myclass durante 1000 ms. $ (". myclass"). slideDown ("slow"); // expandirá el elemento con el identificador myclass durante 600 ms. $ (". myclass"). slideDown ("fast"); // expandirá el elemento con el identificador myclass durante 200 ms. \`\` \`

#### Más información:

Método JQuery Show () en el [sitio web oficial](http://api.jquery.com/show/)