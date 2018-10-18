---
title: Render HTML Elements to the DOM
localeTitle: Renderizar elementos HTML al DOM
---
# Renderizar elementos HTML al DOM

Para renderizar un elemento al DOm, usamos la siguiente sintaxis

```javascript
ReactDOM.render(<item to be rendered>, <where to be rendered>); 
```

## Solución

Siguiendo la sintaxis, agregaríamos esta línea de código para representar el elemento JSX en el div con el id de challenge-node.

```javascript
ReactDOM.render(JSX,document.getElementById('challenge-node')); 

```