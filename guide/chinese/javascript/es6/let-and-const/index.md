---
title: Let and Const
localeTitle: let 和 const
---
## let

let类似于var，但是let有作用域。 let只能在定义的块级作用域中访问。
```
if (true) { 
 let a = 40; 
 console.log(a); //40 
 } 
 console.log(a); // undefined 
```

在上面的示例中，变量'a'在If语句中定义，因此在函数外部无法访问。

另一个例子：
```
let a = 50; 
 let b = 100; 
 if (true) { 
 let a = 60; 
 var c = 10; 
 console.log(a/c); // 6 
 console.log(b/c); // 10 
 } 
 console.log(c); // 10 
 console.log(a); // 50 
```

## const

const声明一个常量。常量的值不能修改。
```
const a = 50; 
 a = 60; // shows error. You cannot change the value of const. 
 const b = "Constant variable"; 
 b = "Assigning new value"; // shows error. 
```

看另一个例子。
```
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go']; 
 LANGUAGES = "Javascript"; // shows error. 
 LANGUAGES.push('Java'); // Works fine. 
 console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java'] 
```

可能会有点迷惑。

换一种方式想。无论何时定义const变量，Javascript都会将值的地址引用给变量。在我们的示例中，变量'LANGUAGES'实际上引用了分配给数组的内存。因此，您无法更改变量以引用其他内存位置。在整个程序中它只引用数组。
