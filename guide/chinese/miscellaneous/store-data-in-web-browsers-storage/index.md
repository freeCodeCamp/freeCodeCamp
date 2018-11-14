---
title: Store Data in Web Browsers Storage
localeTitle: 将数据存储在Web浏览器存储中
---
为了管理Web应用程序处理的数据，您不一定需要数据库。 Chrome（版本4及更高版本），Mozilla Firefox（版本3.5及更高版本）和Internet Explorer（版本8及更高版本）以及一系列其他浏览器（包括iOS和Android版本）均支持各自的浏览器存储功能。

浏览器存储有两种主要可能性：

## 1\. localStorage

重新启动浏览器（关闭并再次打开）后，保存到`localStorage`对象的任何内容/数据都将可用。为了**_将项目保存_**到`localStorage` ，您可以使用方法`setItem()` 。这个方法必须是一个键和一个值。
```
Example: localStorage.setItem("mykey","myvalue"); 
```

要从**_localStorage检索项目_** ，必须使用方法`getItem` 。必须将`getItem`方法传递给您要检索的数据的键：
```
  Example: localStorage.getItem("mykey"); 
```

您可以使用`removeItem()`方法从`localStorage`删除项目。必须将此方法交给要删除的项目的键：
```
  Example: localStorage.removeItem("mykey"); 
```

要清除整个`localStorage` ，您应该在`localStorage`对象上使用`clear()`方法：
```
  Example: localStorage.clear(); 
```

## 2\. sessionStorage

保存在`sessionStorage`对象中的项目将保留，直到用户关闭浏览器。然后，存储将被清除。

您可以将项目保存到`sessionStorage` ，请使用`sessionStorage`对象上的方法`setItem()` ：
```
Example: sessionStorage.setItem("mykey","myvalue"); 
```

要从**_sessionStorage检索项目_** ，必须使用方法`getItem` 。必须将`getItem`方法传递给您要检索的数据的键：
```
  Example: sessionStorage.getItem("mykey"); 
```

您可以使用`removeItem()`方法从`sessionStorage`删除项目。必须将此方法交给要删除的项目的键：
```
  Example: sessionStorage.removeItem("mykey"); 
```

要清除整个`sessionStorage` ，您应该在`sessionStorage`对象上使用`clear()`方法：
```
  Example: sessionStorage.clear(); 
```

## 将数组保存到localStorage和sessionStorage

您不仅可以将单个值保存到`localStorage`和`sessionStorage` ，还可以保存数组的内容。

在这个例子中，我们有一个带数字的数组：
```
var ourArray =[1,2,3,4,5]; 
```

我们现在可以使用`setItem()`方法将其保存到`localStorage`或`sessionStorage` ：
```
localStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

或者，对于`sessionStorage` ：
```
sessionStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

为了保存，必须首先将数组转换为字符串。在上面显示的示例中，我们使用`JSON.stringify`方法来完成此任务。

从`localStorage`或`sessionStorage`检索数据时，将其转换回数组：
```
var storedArray = localStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 
```

或者，对于`sessionStorage` ：
```
var storedArray = sessionStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 

```