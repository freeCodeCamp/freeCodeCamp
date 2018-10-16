---
title: Object Freeze
localeTitle: Congelación de objetos
---
## Congelación de objetos

El método `Object.freeze()` congela un objeto. Un objeto congelado le _impedirá_ :

*   Añadiéndole nuevas propiedades.
*   Eliminando las propiedades existentes de él.
*   Cambiar la capacidad de enumeración, la capacidad de configuración o la capacidad de escritura de sus propiedades existentes

### Sintaxis

```javascript
Object.freeze(obj) 
```

### Parámetros

`obj`

*   El objeto a congelar.

### Devoluciones

El objeto congelado.

### Nota IMPORTANTE

Si intenta agregar, eliminar o modificar las propiedades de un objeto congelado, se producirá un error. Esta falla será silenciosa o lanzará un `TypeError` (si el Modo estricto está habilitado). Además, `Object.freeze()` es una operación superficial. Esto significa que el objeto anidado, de un objeto congelado, es modificable.

### Ejemplo

```javascript
// Create your object 
 let person = { 
  name: 'Johnny', 
  age: 23, 
  guild: 'Army of Darkness', 
  hobbies: ['music', 'gaming', 'rock climbing'] 
 } 
 
 // Modify your object 
 person.name = 'John' 
 person.age = 24 
 person.hobbies.splice(1,1) 
 delete person.guild 
 
 // Verify your object has been modified 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // Freeze your object 
 Object.freeze(person) 
 
 // Verify that your object can no longer be modified 
 person.name = 'Johnny' // fails silently 
 person.age = 23 // fails silently 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // The freeze is "shallow" and nested objects (including arrays) can still be modified 
 person.hobbies.push('basketball') 
 consol.log(person.hobbies) // ['music', 'rock climbing', 'basketball'] 
```

#### Más información:

[Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)