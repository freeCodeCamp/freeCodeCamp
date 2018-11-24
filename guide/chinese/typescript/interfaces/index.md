---
title: Interfaces
localeTitle: 接口
---# 接口

TypeScript的核心原则之一是类型检查关注于值所具有的形状。这有时被称为“鸭子打字”或“结构子类型”。在TypeScript中， `interfaces`充当了命名这些类型的角色，并且是一种在代码中定义合同以及与项目之外的代码签订合同的强大方法。

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

接口可以包含可选参数

```typescript
interface User = { 
    email?: string; 
 } 

```