---
title: Generics
localeTitle: Дженерики
---
## Дженерики

Разработчики могут использовать `Generics` для указания ограничений типов для классов, членов экземпляра, статических членов и функций.

### Что делают дженерики?

По сути, они служат заполнителями для типов, так что компонент может использоваться в разных местах вашего приложения путем размещения разных типов.

### Какая проблема решает?

Предположим, вы хотели убедиться, что входные и возвращаемые значения для функции имеют один и тот же тип, вот где появляются дженерики.

##### функции

```typescript
function printMessage(arg: any): any { 
  return arg; 
 } 
 
 // typescript won't complain because the argument type and return type aren't being typed properly 
 const myMessage: string = printMessage(1); 
```

Как видно из вышеизложенного, передача `any` типа аргумента в функции, а также типа возврата не является идеальной, поскольку информация о типе теряется в процессе.

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

Включение `<T>` с помощью функции сообщает TypeScript, что оно является общим, и передача этого в качестве ссылки заставит TypeScript знать, что связанные с ним значения имеют один и тот же тип.

##### Классы

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