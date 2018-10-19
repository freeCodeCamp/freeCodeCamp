---
title: Getters & Setters
localeTitle: Getters & Setters
---# Getters & Setters

Typcript также поддерживает свойство `get` и `set` . Get и Set Properties на самом деле называются Accessors. Аксессоры свойства содержат исполняемые операторы, связанные с получением (чтением) или установкой (записью) свойства. В объявлениях может быть указатель доступа или установить аксессуар или и то, и другое.

```typescript
class User { 
    private _fullName: string = ''; 
 
    get fullName() { 
        return this._fullName; 
    } 
 
    set fullName(name) { 
        this._fullName = name; 
    } 
 } 
 
 let user = new User(); 
 
 user.fullName = 'John Doe'; 
 
 console.log(user.fullName); 

```