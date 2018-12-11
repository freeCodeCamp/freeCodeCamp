---
title: Window Open Method
localeTitle: Método de abrir ventana
---
## Método de abrir ventana

El método de ventana `open()` se puede usar para cargar un recurso específico en el contexto de navegación (ventana o pestaña) con el nombre especificado. Si tal nombre no existe, entonces se crea una nueva ventana y el recurso se carga en su contexto.

## Prametros

`url` Un DOMString que indica el recurso a cargar. Esto puede ser una ruta o URL a cualquier recurso que sea compatible con el navegador.

`windowName` Una DOMString que especifica el nombre del contexto de navegación (ventana o pestaña) en el que se cargará el contenido; Si el nombre no indica un contexto existente, se crea una nueva ventana y se le asigna el nombre especificado por windowName. Este nombre se puede usar como destino de enlaces y formularios especificándolo como el atributo de destino.

`windowFeatures` `optional` Una DOMString que contiene una lista separada por comas de las características de la ventana con sus valores correspondientes en la forma "nombre = valor". Estas características incluyen opciones como el tamaño y la posición predeterminados de la ventana, etc.

## Sintaxis

```javascript
  var window =  window.open(url, windowName, [windowFeatures]); 
```

## Ejemplo

```javascript
var windowObjectReference; 
 var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
 
 function openRequestedPopup() { 
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures); 
 } 
```

Si ya existe una ventana con el nombre, entonces strURL se carga en la ventana existente. En este caso, el valor de retorno del método es la ventana existente y se ignoran strWindowFeatures.

#### Más información:

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)