---
title: How to Create Popups
localeTitle: Cómo crear ventanas emergentes
---
## Cómo crear ventanas emergentes

Popup es una ventana que aparece (aparece) cuando selecciona una opción con el mouse o presiona una tecla de función especial.

En este ejemplo, la ventana emergente aparecerá cuando haga clic en un botón y permanecerá en la pantalla hasta que presione la opción X.

Construiremos la ventana emergente usando `HTML` , `CSS` y `JavaScript`

### Paso 1 HTML

El HTML proporciona la estructura para la ventana emergente.

\`\` \`html

Abrir el popup

Popup con JavaScript

X
```
### Step 2 CSS 
 We will choose our own style for the popup window. Notice: the popup div should be hidden at first, so in the style I will select display: none; 
```

css .popup _main_ div { posición: fijo ancho: 800px; altura: 400px; borde: 2px negro sólido; radio del borde: 5px; color de fondo: #fff; izquierda: 50%; margen izquierdo: -400px; superior: 50%; margen superior: -250px; pantalla: ninguna;

} .close _popup { posición: absoluta; ancho: 25px; altura: 25px; radio del borde: 25px; borde: 2px negro sólido; text-align: center; derecha: 5px; superior: 5px; cursor: puntero; } .close_ popup p { margen superior: 5px; peso de la fuente: 400;

} .texto{ text-align: center; tamaño de fuente: 30px; peso de la fuente: 400; margen superior: 22%; } #Btn { posición: absoluta; izquierda: 50%; superior: 20%;

}
```
### Step 3 JavaScript 
```

js // En primer lugar voy a inicializar mis variables // Seleccione los elementos que usaremos del DOM // Se agregará un evento en el botón que activará una función que cambiará el estilo de visualización de la ventana emergente de ninguno a bloque

const Btn = document.getElementById ("Btn") const PopupDiv = document.querySelector (". popup _main_ div") const ClosePopup = document.querySelector (". close\_popup") Btn.addEventListener ('clic', función () { PopupDiv.style.display = "bloque" }) ClosePopup.addEventListener ('clic', función () { PopupDiv.style.display = "ninguno" })

\`\` \`

Código en directo en: [Codepen.io](https://codepen.io/voula12/pen/qyyNeK)