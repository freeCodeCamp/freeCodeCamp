---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
localeTitle: Use Destructuring Assignment para atribuir variáveis ​​de objetos aninhados
---
## Use Destructuring Assignment para atribuir variáveis ​​de objetos aninhados

Dica para passar no teste final: a _desestruturação aninhada foi usada_

O teste quer que você obtenha apenas `max` e `max` . Se você desestruturar sua constante para conter `max` e `min` , o teste falhará.

## Spoiler!

Aqui está a solução de código:

```javascript
const { tomorrow: { max: maxOfTomorrow } } = forecast; 

```