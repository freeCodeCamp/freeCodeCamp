---
title: Generics
localeTitle: Genéricos
---
## Genéricos

Os desenvolvedores podem usar `Generics` para especificar restrições de tipo para classes, membros de instância, membros estáticos e funções.

### O que os genéricos fazem?

Essencialmente, eles servem como espaços reservados para tipos, de modo que um componente possa ser usado em vários locais em seu aplicativo, acomodando diferentes tipos.

### Qual problema os Genéricos resolvem?

Digamos que você quisesse garantir que os valores de entrada e retorno para uma função sejam do mesmo tipo, é onde os genéricos entram.

##### Funções

```typescript
function printMessage(arg: any): any { 
  return arg; 
 } 
 
 // typescript won't complain because the argument type and return type aren't being typed properly 
 const myMessage: string = printMessage(1); 
```

Como você pode ver acima, passar `any` para o tipo de argumento na função, assim como o tipo de retorno, não é o ideal, pois as informações do tipo são perdidas no processo.

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

A inclusão de `<T>` à função informa ao TypeScript que é genérico e, ao passar isso como uma referência, o TypeScript reconhece que os valores associados a ele são do mesmo tipo.

##### Classes

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