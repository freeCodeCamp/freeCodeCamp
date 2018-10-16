---
title: Window clearTimeout Method
localeTitle: Método clearTimeout de la ventana
---
## Método clearTimeout de la ventana

El método 'clearTimeout ()' se usa para detener un conjunto de temporizadores con el método 'setTimeout ()'.

```js
    clearTimeout(setTimeout_ID); 
```

Si se llama al método 'clearTimeout ()' antes de que el temporizador haya terminado de contar, el método 'clearTimeout ()' detendrá la ejecución del método 'setTimeout ()'.

Para poder usar el método 'clearTimeout ()', debes usar una variable global. Vea el ejemplo a continuación

```js
    myID = setTimeout(function, milliseconds); 
```

#### Más información:

Documentación: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)