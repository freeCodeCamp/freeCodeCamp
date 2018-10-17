---
title: Popup Boxes
localeTitle: Cajas Popup
---
## Cajas Popup

Los cuadros emergentes (o cuadros de diálogo) son ventanas modales que se usan para notificar o advertir al usuario o para obtener información del usuario.

Los cuadros emergentes evitan que el usuario acceda a otros aspectos de un programa hasta que se cierre la ventana emergente, por lo que no deben utilizarse en exceso.

Hay tres tipos diferentes de métodos emergentes que se usan en JavaScript: [window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) , [window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) y [window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) .

### Alerta

El [método de alerta](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) muestra mensajes que no requieren que el usuario ingrese una respuesta. Una vez que se llama a esta función, aparecerá un cuadro de diálogo de alerta con el mensaje especificado (opcional). Los usuarios deberán confirmar el mensaje antes de que desaparezca la alerta.

### Ejemplo:

`window.alert("Welcome to our website");`

![Ejemplo de alerta MDN](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### Confirmar

El [método de confirmación](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) es similar a `window.alert()` , pero también muestra un botón de cancelación en la ventana emergente. Los botones devuelven valores booleanos: verdadero para Aceptar y falso para Cancelar.

### Ejemplo:

```javascript
var result = window.confirm('Are you sure?'); 
 if (result === true) { 
    window.alert('Okay, if you're sure.'); 
 } else { 
    window.alert('You seem uncertain.'); 
 } 
```

![Ejemplo de confirmación de MDN](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### Rápido

El [método de solicitud](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) se utiliza normalmente para obtener la entrada de texto del usuario. Esta función puede tomar dos argumentos, los cuales son opcionales: un mensaje para mostrar al usuario y un valor predeterminado para mostrar en el campo de texto.

### Ejemplo:

`var age = prompt('How old are you?', '100');`

![Ejemplo de solicitud de MDN](https://mdn.mozillademos.org/files/11303/prompt.png)

### Otras opciones de diseño:

Si no está satisfecho con las ventanas emergentes predeterminadas de JavaScript, puede sustituirlas en varias bibliotecas de UI. Por ejemplo, SweetAlert proporciona un buen reemplazo para los modales estándar de JavaScript. Puede incluirlo en su HTML a través de un CDN (red de entrega de contenido) y comenzar a usarlo.

```HTML
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
```

La sintaxis es como tal: `swal(title, subtitle, messageType)`

```javascript
swal("Oops!", "Something went wrong on the page!", "error"); 
```

El código anterior producirá la siguiente ventana emergente: ![Ejemplo de SweetAlert](https://ludu-assets.s3.amazonaws.com/lesson-content/rWqOoQXgDrSVSMrAKiZ9) SweetAlert no es de ninguna manera el único subsituto para los modales estándar, pero es limpio y fácil de implementar.

#### Más información:

*   [MDN window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
*   [MDN window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
*   [MDN window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)