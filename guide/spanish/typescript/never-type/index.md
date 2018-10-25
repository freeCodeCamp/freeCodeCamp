---
title: Never Type
localeTitle: Nunca escribe
---
# Nunca escribe

El tipo `never` representa el tipo de valores que nunca ocurren. Por ejemplo, `never` es el tipo de retorno para una expresión de función o una expresión de función de flecha que siempre lanza una excepción o una que nunca devuelve; Las variables también adquieren el tipo `never` cuando están delimitadas por `any` tipo de protección que nunca puede ser verdadera.

El tipo `never` es un subtipo de, y asignable a, cada tipo; sin embargo, ningún tipo es un subtipo de, o asignable a, `never` (excepto nunca a sí mismo). Incluso cualquiera no es asignable a nunca.

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