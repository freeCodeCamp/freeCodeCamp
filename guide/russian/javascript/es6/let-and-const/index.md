---
title: Let and Const
localeTitle: Let и Const
---
## Позволять

пусть аналогичен var, но пусть имеет область видимости. let доступен только на уровне блока, он определен.
```
if (true) { 
 let a = 40; 
 console.log(a); //40 
 } 
 console.log(a); // undefined 
```

В приведенном выше примере переменная 'a' определена внутри оператора If и поэтому недоступна вне функции.

Другой пример:
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

## Const

Константа используется для назначения постоянной переменной переменной. И значение не может быть изменено. Это фиксированная.
```
const a = 50; 
 a = 60; // shows error. You cannot change the value of const. 
 const b = "Constant variable"; 
 b = "Assigning new value"; // shows error. 
```

Рассмотрим другой пример.
```
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go']; 
 LANGUAGES = "Javascript"; // shows error. 
 LANGUAGES.push('Java'); // Works fine. 
 console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java'] 
```

Это может быть немного запутанным.

Рассмотрим таким образом. Всякий раз, когда вы определяете константную переменную, Javascript ссылается на адрес значения переменной. В нашем примере переменная 'LANGUAGES' фактически ссылается на память, выделенную для массива. Поэтому вы не можете изменить эту переменную, чтобы позже ссылаться на другую ячейку памяти. Всюду по программе он ссылается только на массив.