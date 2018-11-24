---
title: Match Characters that Occur Zero or More Times
localeTitle: Символы соответствия, которые имеют нулевой или более длительный период
---
## Символы соответствия, которые имеют нулевой или более длительный период

Любая буква в выражении регулярного выражения, за которой следует `*` , не должна встречаться в тестируемой строке, тогда как любая буква в выражении регулярного выражения, за которой следует символ `+` должна встречаться в строке хотя бы один раз, как показано ниже,

```javascript
let phrase = "ba humbug"; 
 
 let regexPlus = /bah+/; 
 let regexStar = /bah*/; 
 
 regexPlus.test(phrase);  // returns false 
 regexStar.test(phrase);  // returns true 
```

Оба допускают любое количество вхождений одной и той же буквы в строке, например,

```javascript
let phrase = "wooooow look at that!"; 
 
 let regexPlus = /wo+w/; 
 let regexStar = /wo*w/; 
 
 regexPlus.test(phrase); // returns true 
 regexStar.test(phrase); // returns true 

```