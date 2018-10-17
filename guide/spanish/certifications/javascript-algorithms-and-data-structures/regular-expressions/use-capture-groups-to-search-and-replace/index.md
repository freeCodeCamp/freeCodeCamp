---
title: Use Capture Groups to Search and Replace
localeTitle: Utilice los grupos de captura para buscar y reemplazar
---
## Utilice los grupos de captura para buscar y reemplazar

El uso de `.replace()` con el primer parámetro establecido para encontrar la parte de la cadena original a reemplazar, y el segundo parámetro debe ser el reemplazo.

## Sugerencia 1:

Modifique la expresión regular para que `fixRegex` detecte la parte de la cadena a reemplazar y la variable `replaceText` debe modificar a la cadena que reemplazará a `fixRegex` .

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
let huhText = "This sandwich is good."; 
 let fixRegex = /good/; // Change this line 
 let replaceText = "okey-dokey"; // Change this line 
 let result = huhText.replace(fixRegex, replaceText); 

```