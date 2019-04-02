---
title: Manipulate JavaScript Objects
localeTitle: Манипулирование объектами JavaScript
---
Существует несколько способов манипулирования объектными свойствами, нотной меткой и скобкой.

Добавление свойств к объектам с точечной нотацией:
```
myObject.myProperty = "myValue"; 
```

Добавление свойств к объектам с использованием скобок:

```javascript
myObject['myProperty'] = "myValue"; 
```

Используя обозначения в виде скобок, мы можем использовать переменные в качестве имен свойств:

```javascript
var dynamicProperty = "myProperty"; 
 myObject[dynamicProperty] = "myValue"; 
```

Мы также можем удалить их следующим образом:
```
delete(myObject.myProperty); 

```