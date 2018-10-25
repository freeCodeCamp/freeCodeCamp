---
title: Object Destructuring
localeTitle: 对象解构
---
# 对象解构

解构是从存储在对象中的数据中提取多个值的便捷方式。它可以在接收数据的位置使用（例如，分配的左侧）。 `ECMAScript 6`引入了此功能。

如何提取值通过模式指定（请参阅示例）。

### 基本任务
```
var userInfo = {name: 'neel', age: 22}; 
 var {name, age} = userInfo; 
 
 console.log(name); // neel 
 console.log(age); // 22 
```

### 没有声明的作业

变量可以通过与其声明分开的解构来赋值。
```
var name, age; 
 
 ({name, age} = {name: 'neel', age: 22}); 
```

> 在没有声明的情况下使用对象文字解构赋值时，赋值语句周围的`( .. )`是必需的语法。
> 
> `{name, age} = {name: 'neel', age: 22}`不是有效的独立语法，因为左侧的`{name, age}`被视为块而不是对象文字。
> 
> 但是， `({name, age} = {name: 'neel', age: 22})`是有效的，因为`var {name, age} = {name: 'neel', age: 22}`

### 分配给新变量名称

可以从对象解压缩属性，并将其分配给名称与对象属性不同的变量。
```
var userInfo = {a: 'neel', b: 22}; 
 var {a: name, b: bar} = userInfo; 
 
 console.log(name); // neel 
 console.log(bar); // 22 
```

### 默认值

如果`undefined`从对象解压缩的值，则可以为变量分配默认值。
```
var {name = 'ananonumys', age = 20} = {name: 'neel'}; 
 
 console.log(name); // neel 
 console.log(age); // 20 
```

### 分配新变量名称并提供默认值

房产可以是两者

1.  从对象解压缩并分配给具有不同名称的变量
2.  如果unpacked值`undefined`分配一个默认值。
```
var {a:name = 'ananonumys', b:age = 20} = {age: 22}; 
 
 console.log(name); // ananonumys 
 console.log(age); // 22 
```

### 设置函数参数的默认值

#### ES5版本
```
function getUserInfo(data) { 
  data = data === undefined ? {} : data; 
  var name = data.name === undefined ? 'ananonumys' : data.name; 
  var age = data.age === undefined ? 20 : data.age; 
  var location = data.location === undefined ? 'india' : data.location; 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

#### ES2015版本
```
function getUserInfo({name = 'ananonumys', age = 20, location = 'india'} = {}) { 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

> 在上面的`getUserInfo`的函数签名中，解构的左侧被分配给右侧的空对象文字： `{name = 'ananonumys', age = 20, location = 'india'} = {}` 。您也可以在没有右侧分配的情况下编写该函数。但是，如果省略右侧赋值，函数将在调用时查找至少一个要提供的参数，而在当前形式中，您只需调用`getUserInfo()`而不提供任何参数。如果您希望能够在不提供任何参数的情况下调用函数，则当前设计非常有用，另一个在您希望确保将对象传递给函数时非常有用。

### 嵌套对象和数组解构
```
var metadata = { 
    title: 'Scratchpad', 
    translations: [ 
       { 
        locale: 'de', 
        localization_tags: [], 
        last_edit: '2014-04-14T08:43:37', 
        url: '/de/docs/Tools/Scratchpad', 
        title: 'JavaScript-Umgebung' 
       } 
    ], 
    url: '/en-US/docs/Tools/Scratchpad' 
 }; 
 
 var {title: englishTitle, translations: [{title: localeTitle}]} = metadata; 
 
 console.log(englishTitle); // "Scratchpad" 
 console.log(localeTitle);  // "JavaScript-Umgebung" 
```

### 用于迭代和解构
```
var people = [ 
  { 
    name: 'Mike Smith', 
    family: { 
      mother: 'Jane Smith', 
      father: 'Harry Smith', 
      sister: 'Samantha Smith' 
    }, 
    age: 35 
  }, 
  { 
    name: 'Tom Jones', 
    family: { 
      mother: 'Norah Jones', 
      father: 'Richard Jones', 
      brother: 'Howard Jones' 
    }, 
    age: 25 
  } 
 ]; 
 
 for (var {name: n, family: {father: f}} of people) { 
  console.log('Name: ' + n + ', Father: ' + f); 
 } 
 
 // "Name: Mike Smith, Father: Harry Smith" 
 // "Name: Tom Jones, Father: Richard Jones" 
```

### 从作为函数参数传递的对象中解压缩字段
```
function userId({id}) { 
  return id; 
 } 
 
 function whois({displayName, fullName: {firstName: name}}) { 
  console.log(displayName + ' is ' + name); 
 } 
 
 var user = { 
  id: 42, 
  displayName: 'jdoe', 
  fullName: { 
      firstName: 'John', 
      lastName: 'Doe' 
  } 
 }; 
 
 console.log('userId: ' + userId(user)); // "userId: 42" 
 whois(user); // "jdoe is John" 
```

这将解压缩用户对象中的`id` ， `displayName`和`firstName`并打印它们。

### 计算对象属性名称和解构
```
let key = 'z'; 
 let {[key]: foo} = {z: 'bar'}; 
 
 console.log(foo); // "bar" 
```

另请参见： **对象解构** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)