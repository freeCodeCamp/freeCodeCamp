---
title: jQuery Effects Hide Method
localeTitle: jQuery Effects Hide Method
---
## jQuery Hide Method

En su forma más simple, **.hide ()** oculta el elemento coincidente inmediatamente, sin animación. Por ejemplo:

```javascript
$(".myclass").hide() 
```

_Ocultará_ todos los elementos cuya clase sea _myclass_ . Se puede usar cualquier selector de jQuery.

### .hide () como método de animación

Gracias a sus opciones, **.hide ()** puede animar el ancho, la altura y la opacidad de los elementos emparejados simultáneamente.

*   La duración se puede proporcionar en milisegundos, o usando los literales lento (600 ms) y rápido (200ms). por ejemplo:

```javascript
$("#myobject").hide(800) 
```

*   Se puede especificar que una función se llame una vez que se complete la animación, una vez por cada elemento coincidente. Esta devolución de llamada es principalmente útil para encadenar diferentes animaciones. Por ejemplo

```javascript
$("p").hide( "slow", function() { 
      $(".titles").hide("fast"); 
      alert("No more text!"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .toggle() method 
 
 To show / hide elements you can use ```toggle()``` method. If element is hidden ```toggle()``` will show it and vice versa. 
 Usage: 
```

javascript $ (". myclass"). toggle () \`\` \`

### .slideDown () método

Este método anima la altura de los elementos emparejados. Esto hace que las partes inferiores de la página se deslicen hacia abajo, dando paso a los elementos revelados. Uso:

```javascript
$(".myclass").slideDown(); //will expand the element with the identifier myclass for 400 ms. 
 $(".myclass").slideDown(1000); //will expand the element with the identifier myclass for 1000 ms. 
 $(".myclass").slideDown("slow"); //will expand the element with the identifier myclass for 600 ms. 
 $(".myclass").slideDown("fast"); //will expand the element with the identifier myclass for 200 ms. 
```

#### Más información:

Método JQuery hide () en el [sitio web oficial](http://api.jquery.com/hide/)