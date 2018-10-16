---
title: Get Timestamp
localeTitle: Obter timestamp
---
Você pode usar `Date.now()` para obter o timestamp atual em milissegundos.

Você pode facilmente converter o timestamp para segundos como este: `Math.floor(Date.now() / 1000)`

Se o seu navegador não suportar `Date.now()` , você poderá usar o `new Date().getTime()` para obter o registro de data e hora em milissegundos.