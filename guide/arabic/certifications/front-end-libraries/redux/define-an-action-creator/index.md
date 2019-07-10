---
title: Define an Action Creator
localeTitle: قم بتعريف عمل الخالق
---
## قم بتعريف عمل الخالق

### تلميح 1

يتم تعريف الدالة باستخدام بناء الجملة التالي:

```javascript
functionName(){
  console.log("Do something");
}
``` 

حيث يمكن تغيير console.log حسب الحاجة.

### تلميح 2

يتم إرجاع القيمة باستخدام `return` الكلمة

### حل

```javascript
function actionCreator(){
    return action;
}
```