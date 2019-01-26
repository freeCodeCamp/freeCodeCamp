---
title: Classes
---

# Classes

Object Oriented Programming is an important programming principle, especially where a lot of code is written. By structuring the code in classes and objects, it makes the code easier to understand.
Class is one of the paradigm of `OOP`.

TypeScript uses the `class` keyword to create a class, like so - 

```typescript
class <class_name> {
      // Fields 
      
      // Constructors
      
      // Functions
      }
```
Class can embrace fields, constructors and functions in it.

```typescript
class Pet {  
   name:string; 
 
   constructor(name:string) { 
      this.name = name;
   }  

   function show():void { 
      console.log("Pet name is : " + this.name); 
   } 
}
```
To access the attributes of class `Pet`, It needs to create an instance of the class like under the hood -

```typescript
let pet = new Pet('Bruno');

pet.show(); // Pet name is: Bruno
```
