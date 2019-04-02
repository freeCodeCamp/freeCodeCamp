---
title: Interfaces
localeTitle: Interfaces
---# Interfaces

Uno de los principios básicos de TypeScript es que la verificación de tipos se centra en la forma que tienen los valores. Esto a veces se denomina "tipificación de pato" o "subtipo estructural". En TypeScript, las `interfaces` cumplen el rol de nombrar estos tipos, y son una forma poderosa de definir contratos dentro de su código así como contratos con código fuera de su proyecto.

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

Las interfaces pueden contener parámetros opcionales

```typescript
interface User = { 
    email?: string; 
 } 

```