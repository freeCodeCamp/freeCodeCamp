---
title: Window Confirm Method
localeTitle: Método de confirmación de ventana
---
## Método de confirmación de ventana

Puede utilizar el método de `confirm` para pedirle a un usuario que verifique una decisión en una página web. Cuando llame a este método, el navegador mostrará un cuadro de diálogo con dos opciones en las líneas "Aceptar" y "Cancelar".

Por ejemplo, digamos que alguien acaba de hacer clic en un botón Eliminar. Podrías ejecutar el siguiente código:

```javascript
if (window.confirm("Are you sure you want to delete this item?")) { 
  // Delete the item 
 } 
```

El mensaje "¿Está seguro de que desea eliminar este elemento?" aparecerá en el cuadro de diálogo. Si el usuario hace clic en Aceptar, el método de confirmación devolverá `true` y el navegador ejecutará el código dentro de la declaración if. Si él o ella hace clic en Cancelar, el método devolverá el valor `false` y no ocurrirá nada más. Esto proporciona cierta protección contra alguien que accidentalmente haga clic en Eliminar.

#### Más información:

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)