---
title: Any Type
localeTitle: Qualquer tipo
---
# Qualquer tipo

O tipo Any instrui o Typescript a suspender a verificação de tipos para as variáveis ​​especificadas. Útil ao trabalhar com conteúdo dinâmico para o qual você não conhece o tipo e para fazer a transição de sua base de código para Javascript para Datilografado em partes. Você pode usar a digitação implícita do Javascript com variáveis ​​declaradas com um tipo Any.

```typescript
  let notSure: any = 4; 
  notSure = "maybe a string instead"; 
  notSure = false; 

```