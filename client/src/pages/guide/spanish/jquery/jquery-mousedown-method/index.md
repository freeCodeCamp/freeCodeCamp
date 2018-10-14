---
title: Mousedown Method
localeTitle: Método de Mousedown
---# Método de Mousedown

El evento de mousedown ocurre cuando se presiona el botón izquierdo del ratón. Para desencadenar el evento mousedown para el elemento seleccionado, use esta sintaxis: `$(selector).mousedown();`

Sin embargo, la mayoría de las veces, el método de reducción del ratón se usa con una función asociada al evento de reducción del ratón. Aquí está la sintaxis: `$(selector).mousedown(function);` Por ejemplo:
```
$(#example).mousedown(function(){ 
   alert("Example was clicked"); 
 }); 
```

Ese código hará que la alerta de la página "Se hizo clic en el ejemplo" cuando se haga clic en #ejemplo.

### Más información

Más información se puede encontrar [aquí](https://www.w3schools.com/jquery/event_mousedown.asp) .