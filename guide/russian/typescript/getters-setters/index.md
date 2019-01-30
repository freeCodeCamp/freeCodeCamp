---
title: Getters & Setters
localeTitle: Геттеры и сеттеры
---
# Геттеры и сеттеры

TypeScript поддерживает свойства `get` и `set` . На самом деле они называются свойствами доступа (accessors). Аксессоры атрибута есть функции, связанные с получением (чтением, геттеры) или установкой (записью, сеттеры) атрибута. Объявления класса могут содержать геттер и сеттер как вместе, так и порознь.

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
