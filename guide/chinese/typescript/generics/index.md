---
title: Generics
localeTitle: 泛型
---
## 泛型

开发人员可以使用`Generics`为类，实例成员，静态成员和函数指定类型约束。

### 仿制药做什么？

从本质上讲，它们充当类型的占位符，以便通过适应不同类型，可以在应用程序的多个位置使用组件。

### 泛型解决了什么问题？

假设您希望确保函数的输入和返回值属于同一类型，这就是泛型的用武之地。

##### 功能

```typescript
function printMessage(arg: any): any { 
  return arg; 
 } 
 
 // typescript won't complain because the argument type and return type aren't being typed properly 
 const myMessage: string = printMessage(1); 
```

正如您从上面所看到的，为函数中的参数类型传递`any`以及返回类型并不理想，因为在此过程中类型信息会丢失。

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

在函数中包含`<T>`告诉TypeScript它是泛型函数，并将其作为引用传递将使TypeScript知道与其关联的值具有相同的类型。

##### 类

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