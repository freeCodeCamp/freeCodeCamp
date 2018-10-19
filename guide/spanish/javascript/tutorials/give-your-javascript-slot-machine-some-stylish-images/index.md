---
title: Give Your JavaScript Slot Machine Some Stylish Images
localeTitle: Dale a tu tragamonedas JavaScript algunas imágenes elegantes
---
Ya hemos configurado las imágenes para usted en una matriz llamada imágenes. Podemos usar diferentes índices para agarrar cada uno de estos.

Así es como configuraríamos la primera ranura para mostrar una imagen diferente según el número que genere su número aleatorio:
```
$($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">'); 

```