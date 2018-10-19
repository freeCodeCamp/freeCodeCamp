---
title: Function.prototype.bind
localeTitle: Function.prototype.bind
---
## Function.prototype.bind

`bind`是JavaScript中所有函数原型的一种方法。 它允许您从现有函数创建新函数，更改新函数的`this`上下文，并提供您希望调用新函数的任何参数。 提供给`bind`的参数将在调用它之前传递给新函数的任何参数之前。

### 使用`bind`在函数中更改`this`

提供给`bind`的第一个参数是函数将`bind`的`this`上下文。 如果您不想`this`传递`null`的值更改为第一个参数。

您的任务是编写代码以更新与会者到达会议时的数量。 您创建一个简单的网页，其中包含一个按钮，单击该按钮`numOfAttendees` 关于confrence对象的属性。您使用jQuery向按钮添加单击处理程序，但单击按钮后，confrence对象未更改。您的代码可能看起来像这样。

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees); 
```

使用jQuery和JavaScript时，这是一个常见问题。当您单击按钮时，传递给jQuery的`on`方法的方法中的`this`关键字引用按钮而不是会议对象。您可以绑定方法的`this`上下文来解决问题。

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember)); 
```

现在，当单击`this`按钮时， `nodevember`引用`nodevember`对象。

### 使用`bind`为函数提供参数

在第一个之后传递给`bind`每个参数都将在调用函数时传递的任何参数之前。 这允许您将参数预先应用于函数。在下面的示例中， `combineStrings`采用两个字符串并将它们连接在一起。然后使用`bind`创建一个始终提供“Cool”作为第一个字符串的函数。

```javascript
function combineStrings(str1, str2) { 
  return str1 + " " + str2 
 } 
 
 var makeCool = combineStrings.bind(null, "Cool"); 
 
 makeCool("trick"); // "Cool trick" 
```

[此参考](https://guide.freecodecamp.org/javascript/this-reference)的指南提供了有关`this`关键字引用的更改方式的更多信息。

关于`bind`方法的更多细节可以在Mozilla的[MDN文档中找到](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 。