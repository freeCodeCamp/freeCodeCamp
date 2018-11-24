---
title: Generics
localeTitle: Дженерики (параметризованные типы)
---
## Дженерики

Разработчики могут использовать `Generics` для указания ограничений на типы классов, членов экземпляра объекта, статических членов и функций.

### Что делают дженерики?

По сути, они служат заполнителями для типов; компоненты параметризованного типа могут использоваться в разных местах вашего приложения путем указания разных типов.

### Какую проблему решают дженерики?

Предположим, вы хотите убедиться, что входные и возвращаемые значения для функции имеют один и тот же тип - здесь и появляются дженерики.

##### Функции

```typescript
function printMessage(arg: any): any { 
  return arg; 
 } 
 
 // typescript won't complain because the argument type and return type aren't being typed properly 
 const myMessage: string = printMessage(1); 
```

Как видно из вышеизложенного, указание типа `any` у аргумента в функции и возвращемого значения не является идеальным, поскольку теряется информация о типе.

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

Добавление `<T>` рядом с именем функции сообщает TypeScript, что она является параметризованной, и использование такого синтаксиса функции заставит TypeScript знать, что связанные с ней значения имеют один и тот же тип.

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
