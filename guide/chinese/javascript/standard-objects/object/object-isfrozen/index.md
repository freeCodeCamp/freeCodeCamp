---
title: Object isFrozen
localeTitle: 对象是冷冻
---
## 对象是冷冻

您可以使用**`Object.isFrozen()`**来确定对象是否已冻结。它返回**`true`**或**`false`**布尔值。

#### **句法**

```javascript
Object.isFrozen(obj) 
```

**例如：**

```javascript
var foods = { 
    grain : "wheat", 
    dairy  : "milk", 
    vegetable : "carrot", 
    fruit  : "grape" 
 }; 
 
 var frozenFoods = Object.freeze(foods); 
 
 var areMyFoodsFrozen = Object.isFrozen(frozenFoods); 
 
 \\ returns true 
```

请记住，冻结的对象**不能**更改其属性。  
  
如果您尝试在非对象参数上使用**`Object.isFrozen()`** ，它将返回`true` 。

#### 更多信息：

[MDN Object.isFrozen（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)  
[MDN Object.freeze（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)