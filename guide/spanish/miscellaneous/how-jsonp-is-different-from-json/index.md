---
title: How Jsonp Is Different from JSON
localeTitle: Cómo Jsonp es diferente de JSON
---
JSONP es simplemente JSON envuelto en una función de devolución de llamada.

JSONP es útil para realizar solicitudes de dominios cruzados, que a menudo están prohibidos por los navegadores por razones de seguridad.
```
 // an example of JSON 
 {"weapon":"nunchucks","headband":"yellow"} 
 
 // an example of JSONP 
 myCallback({"weapon":"nunchucks","headband":"yellow"}); 
```

Luego, para acceder a los datos almacenados en su JSONP, debe definir la función de devolución de llamada:
```
myCallback = function(data){ 
  alert(data.weapon); 
 }; 

```