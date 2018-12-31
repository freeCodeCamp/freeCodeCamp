---
title: Get Timestamp
localeTitle: Obtener marca de tiempo
---
Puede usar `Date.now()` para obtener la marca de tiempo actual en milisegundos.

Puede convertir fácilmente la marca de tiempo en segundos como este: `Math.floor(Date.now() / 1000)`

Si su navegador no admite `Date.now()` , puede usar la `new Date().getTime()` para obtener la marca de tiempo en milisegundos.