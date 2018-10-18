---
title: Never Type
localeTitle: Nunca digite
---
# Nunca digite

O tipo `never` representa o tipo de valores que nunca ocorrem. Por exemplo, `never` é o tipo de retorno para uma expressão de função ou uma expressão de função de seta que sempre lança uma exceção ou uma que nunca retorna; Variáveis ​​também adquirem o tipo `never` quando estreitadas por `any` tipo de guardas que nunca podem ser verdadeiras.

O tipo `never` é um subtipo de, e atribuível a, todo tipo; no entanto, nenhum tipo é um subtipo de, ou atribuível a, `never` (exceto nunca em si). Mesmo qualquer não é atribuível a nunca.

```typescript
// Function returning never must have unreachable end point 
 function error(message: string): never { 
    throw new Error(message); 
 } 
 
 // Inferred return type is never 
 function fail() { 
    return error("Something failed"); 
 } 
 
 // Function returning never must have unreachable end point 
 function infiniteLoop(): never { 
    while (true) { 
    } 
 } 

```