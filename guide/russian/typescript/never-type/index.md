---
title: Never Type
localeTitle: Никогда не вводите
---
# Никогда не вводите

Тип `never` представляет тип значений, которые никогда не возникают. Например, `never` является типом возврата для выражения функции или выражения функции стрелки, которое всегда выдает исключение или никогда не возвращается; Переменные также приобретают тип, который `never` сужается `any` охранниками `any` типа, которые никогда не могут быть правдой.

Тип `never` является подтипом и присваивается каждому типу; однако ни один из типов не является подтипом или не назначается `never` (кроме самого себя). Даже никто не может быть привязан к никогда.

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