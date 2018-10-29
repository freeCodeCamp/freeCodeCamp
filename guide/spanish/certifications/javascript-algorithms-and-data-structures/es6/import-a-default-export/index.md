---
title: Import a Default Export
localeTitle: Importar una exportación predeterminada
---
## Importar una exportación predeterminada

Importar un valor predeterminado de exportación es casi lo mismo que importar una exportación normal; ¡simplemente no necesita las llaves para definir el nombre de lo que está importando desde el archivo!

## Sugerencia 1:

Rellene los espacios en blanco: `import _ from "file-name"` . Conecte el nombre de su módulo (que es `subtract` ) en `_` , y ponga `"math-functions"` en `"file-name"` .

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```javascript
"use strict"; 
 import subtract from "math_functions"; 
 subtract(7,4); 

```