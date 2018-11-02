---
title: Interfaces
localeTitle: Interfaces
---# Interfaces

Um dos princípios básicos do TypeScript é que a verificação de tipos se concentra na forma que os valores têm. Isso às vezes é chamado de "tipagem de pato" ou "subtipagem estrutural". Em TypeScript, as `interfaces` preenchem o papel de nomear esses tipos e são uma maneira poderosa de definir contratos em seu código, bem como contratos com código fora de seu projeto.

```typescript
interface User = { 
    firstName: string; 
    lastName: string; 
 } 
 
 function printUserInfo(user: User) { 
    console.log(user.firstName); 
 } 
 
 let myObj = {firstName: 'John', lastName: 'Doe'} 
 printUserInfo(myObj); 
```

Interfaces podem conter parâmetros opcionais

```typescript
interface User = { 
    email?: string; 
 } 

```