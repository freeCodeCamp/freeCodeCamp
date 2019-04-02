---
title: Define an Action Creator
localeTitle: Definir un creador de acción
---
## Definir un creador de acción

### Sugerencia 1

Una función se define utilizando la siguiente sintaxis:

```javascript
functionName(){ 
  console.log("Do something"); 
 } 
```

Donde console.log se puede cambiar según la necesidad.

### Sugerencia 2

Se devuelve un valor utilizando la palabra clave `return`

### Solución

```javascript
function actionCreator(){ 
    return action; 
 } 

```