---
title: Object Freeze
localeTitle: 对象冻结
---
## 对象冻结

`Object.freeze()`方法冻结了一个对象。冻结的对象会_阻止您_ ：

*   添加新属性
*   从中删除现有的特性
*   更改其现有属性的可枚举性，可配置性或可写性

### 句法

```javascript
Object.freeze(obj) 
```

### 参数

`obj`

*   要冻结的对象。

### 返回

冻结的物体。

### 重要的提示

尝试添加，删除或修改冻结对象的属性将导致失败。此失败将是静默或抛出`TypeError` （如果启用了严格模式）。另外， `Object.freeze()`是一个浅操作。这意味着冻结对象的嵌套对象是可修改的。

### 例

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

#### 更多信息：

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)