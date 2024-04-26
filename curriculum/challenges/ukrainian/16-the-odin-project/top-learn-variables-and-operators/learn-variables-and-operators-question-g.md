---
id: 65e1aaf8500d930ce8ed90aa
title: Вивчіть змінні та оператори. Запитання G
challengeType: 15
dashedName: learn-variables-and-operators-question-g
---

# --description--

`+` існує в двох формах: бінарна (як в попередньому завданні) та унарна.

Унарний плюс (або іншими словами — оператор `+`, застосований до одного значення) нічого не робить з числами. Але, якщо операнд не є числом, то унарний плюс перетворить його на число.

Наприклад:

```js
// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   //
```

Часто виникає потреба перетворити рядки на числа. Наприклад, ви отримуєте значення з полів форми HTML, але вони є рядками. Що робити, якщо їх потрібно додати?

Бінарний плюс додасть їх як рядки:

```js
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
```

Якщо ви хочете поводитись з ними як з числами, їх потрібно перетворити та додати:

```js
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

З точки зору математика, велика кількість плюсів може здатися дивною. Але з точки зору програміста нічого особливого: спочатку застосовуються унарні плюси, які перетворюють рядки на числа, а потім бінарний плюс додає їх.

Чому унарні плюси застосовуються до значень перед бінарними? Як побачите пізніше, причина в їхньому _пріоритеті_.

# --question--

## --text--
Ви дізнались про різницю між унарним та бінарним операторами `+` в JavaScript. Як правильно додати значення рядків `'2'` та `'3'` як чисел, використовуючи унарний `+`?

## --answers--

`console.log('2' + '3'); // Outputs: '23'`

---

`console.log(+2 + +3); // Outputs: 5`

---

`console.log(+'2' + +'3'); // Outputs: 5`

---

`console.log(Number('2') + Number('3')); // Outputs: '23'`


## --video-solution--

3
