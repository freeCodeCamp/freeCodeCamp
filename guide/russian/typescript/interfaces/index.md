---
title: Interfaces
localeTitle: Интерфейсы
---# Интерфейсы

Одним из основных принципов TypeScript является то, что проверка типов фокусируется на форме, которую имеют значения. Это иногда называют «утиным набором» или «структурным подтипированием». В TypeScript `interfaces` заполняют роль именования этих типов и являются мощным способом определения контрактов внутри вашего кода, а также контрактов с кодом вне вашего проекта.

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

Интерфейсы могут содержать необязательные параметры

```typescript
interface User = { 
    email?: string; 
 } 

```