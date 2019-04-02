---
title: Getters & Setters
localeTitle: 吸气者和二传手
---# 吸气者和二传手

Typescript还支持`get`和`set`属性。 Get和Set Properties实际上称为Accessors。属性的访问器包含与获取（读取）或设置（写入）属性相关联的可执行语句。声明可以包含get访问器或set访问器或两者。

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