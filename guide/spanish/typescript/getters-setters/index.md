---
title: Getters & Setters
localeTitle: Hechiceros y Setters
---# Hechiceros y Setters

Typescript también admite `get` y `set` propiedades. Las propiedades Get y Set en realidad se llaman Accessors. Los que acceden a una propiedad contienen declaraciones ejecutables asociadas con obtener (leer) o configurar (escribir) la propiedad. Las declaraciones pueden contener get accessor o set accessor o ambos.

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