---
title: Generics
localeTitle: Genéricos
---
## Genéricos

Los desarrolladores pueden usar `Generics` para especificar restricciones de tipo para clases, miembros de instancia, miembros estáticos y funciones.

### ¿Qué hacen los genéricos?

Esencialmente, sirven como marcadores de posición para los tipos, de modo que un componente se puede usar en varios lugares de la aplicación al acomodar diferentes tipos.

### ¿Qué problema resuelven los genéricos?

Digamos que quería asegurarse de que los valores de entrada y retorno de una función sean del mismo tipo, aquí es donde entran los genéricos.

##### Funciones

```typescript
function printMessage(arg: any): any { 
  return arg; 
 } 
 
 // typescript won't complain because the argument type and return type aren't being typed properly 
 const myMessage: string = printMessage(1); 
```

Como se puede ver desde arriba, pasando en `any` para el tipo de argumento de la función, así como el tipo de retorno, no es ideal como información de tipo se pierde en el proceso.

```typescript
// updated example 
 function printMessage<T>(arg: T): T { 
  return arg; 
 } 
 
 // typescript complains because the variable type and the return type of the function don't match 
 const myMessage: string = printMessage(1); 
 
 // resolve the issue by making sure both types match each other 
 const myMessage: number = printMessage(1); 
```

Incluir `<T>` con la función le dice a TypeScript que es genérico, y pasar eso como referencia hará que TypeScript tenga en cuenta que los valores asociados con él son del mismo tipo.

##### Las clases

```typescript
class Person { 
  fullName: string; 
 
  constructor(fullName: string) { 
    this.fullName = fullName; 
  } 
 
  getFullName() { 
    return 'My name is ' + this.fullName; 
  } 
 } 
 
 class Guest extends Person {}; 
 
 let guest = new Guest('abc'); 
 
 function getUser<T>(user: T): T { 
  return user; 
 } 
 
 // foo will be of type 'guest' because it's being passed in as the argument 
 const foo = getUser(guest); 

```