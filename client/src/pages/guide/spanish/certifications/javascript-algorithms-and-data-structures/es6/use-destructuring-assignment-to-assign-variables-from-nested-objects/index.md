---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
localeTitle: Utilice la asignación de destrucción para asignar variables de objetos anidados
---
## Utilice la asignación de destrucción para asignar variables de objetos anidados

Sugerencia para pasar la prueba final: _se usó la desestructuración anidada_

La prueba quiere que obtengas `max` y `max` solo. Si destruye su constante para contener tanto el `max` como el `min` , la prueba fallará.

## Spoiler!

Aquí está la solución del código:

```javascript
const { tomorrow: { max: maxOfTomorrow } } = forecast; 

```