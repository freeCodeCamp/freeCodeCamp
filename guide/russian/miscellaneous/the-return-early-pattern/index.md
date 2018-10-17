---
title: The Return Early Pattern
localeTitle: Ранний шаблон возврата
---
Ранний шаблон возврата в JavaScript - это простой способ уменьшить число `else` операторов в теле функции до нуля. Есть много причин, чтобы предпочесть этот шаблон для использования операторов `else` .

*   Уменьшение общего количества кода на странице
*   Уменьшите длину линии, уменьшив логическую сложность
*   Улучшение удобочитаемости

Суть возвратного начала шаблона заменить необходимость `else` условные в функциях JavaScript, используя `return` ключевое слово в теле , `if` заявление.

Создадим функцию, которая ведет себя по-разному при определенных условиях (примечание: это тривиальный и надуманный пример, чтобы получить точку).
```
function willItBlend(someObject) { 
  var ItWillBlend; 
 
  if (someObject.blendable ==== 'It will blend') { 
    itWillBlend = true; 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

Хотя это кажется читаемым, добавим еще одно условие для проверки того, что функция действительно вызывалась с объектом вместо `undefined` .
```
function willItBlend(someObject) { 
  var itWillBlend; 
 
  if (typeof someObject === 'object') { 
    if (someObject.blendable ==== 'It will blend') { 
      itWillBlend = true; 
    } else { 
      itWillBlend = false; 
    } 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

Эта функция понятна, и ее имя является описательным, но представляется излишне сложным. Можем ли мы использовать ранний шаблон возврата для повышения удобочитаемости и уменьшения количества `else` выражений? Попробуем.
```
function willItBlend(someObject) { 
  if (typeof someObject !== 'object') { 
    return false; 
  } 
 
  if (someObject.blendable !== 'It will blend') { 
    return false; 
  } 
 
  return true; 
 } 
```

Используя ранний шаблон возврата, мы смогли удалить все ненужные инструкции else и сделать наши функции целями и подписями (тип аргумента, который он ожидает) намного яснее и краткими.

### Бонус: одно условное утверждение

Мы можем дополнительно реорганизовать эту функцию только для использования одного оператора if. Проверьте это:
```
function willItBlend(someObject) { 
  if ( 
    typeof someObject !== 'object' || 
    someObject.blendable !== 'It will blend' 
    ) { 
    return false; 
  } 
 
  return true; 
 } 

```