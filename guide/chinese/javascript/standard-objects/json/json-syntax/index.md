---
title: JSON Syntax
localeTitle: JSON语法
---
## JSON语法

JSON语法是JavaScript语法的子集。

### JSON语法规则

*   JSON Object是一组无序的名称/值对。
*   对象名后跟冒号（:)。
*   大括号{}用于保持对象。对象以{（左大括号）开头，以}结尾（右大括号）。
*   JSON对象数据表示为名称/值对的集合。
*   每个名称/值对用逗号（，）分隔
*   方括号\[\]用于保存数组。

### JSON数据 - 名称和值

JSON数据被写为名称/值对。

名称/值对由字段名称（双引号），后跟冒号，后跟值组成：
```
"handle":"moghya" 
```

*   JSON名称需要双引号。

### JSON - 评估JavaScript对象

JSON格式几乎与JavaScript对象相同。

在JSON中，键必须是字符串，用双引号编写：

*   JSON
```
"handle":"moghya" 
```

*   JavaScript的
```
handle:"moghya" 
```

### JSON值

在JSON中，值必须是以下数据类型之一：

*   一个字符串
*   一个号码
*   一个对象（JSON对象）
*   数组
*   布尔值
*   空值

在JavaScript中，值可以是以上所有，以及任何其他有效的JavaScript表达式，包括：

*   一个功能
*   一个约会
*   未定义

### JSON使用JavaScript语法

因为JSON语法是从JavaScript对象表示法派生的，所以在JavaScript中使用JSON需要很少的额外软件。

使用JavaScript，您可以创建一个对象并为其分配数据，如下所示：
```
var person = { 
  "name":"Shubham", 
  "age":21, 
  "handle":"moghya", 
  "website":"http://moghya.me/" 
  }; 
```

您可以像这样访问JavaScript对象：
```
//returns moghya 
 person.handle; 
```

它也可以像这样访问：
```
//returns http://moghya.me/ 
 person["website"]; 
```

### JSON中的数组
```
var team = { 
  "name":"novatoscript", 
  "members" : 
  [ 
    { 
      "name":"Shubham Sawant", 
      "age":21, 
      "handle":"moghya", 
      "website":"http://moghya.me", 
    }, 
    { 
      "name":"Saurabh Banore", 
      "age":21, 
      "handle":"banoresaurabh", 
      "website":"http://banoresaurabh.me/", 
    } 
  ] 
 } 
```

### 例

这里有一个非常大的JSON示例[！](http://moghya.me/js/profile.json) 。