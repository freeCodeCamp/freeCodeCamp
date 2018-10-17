---
title: Template Literals
localeTitle: Литералы шаблонов
---
Литералы шаблонов - это функция ES6, использующая chart-шаблон обратного хода для определения строкового значения

### Основной синтаксис

Ниже приведен базовый пример шаблона:

```javascript
// ES5 syntax 
 var es5String = "ES5 String" 
 var es5StringWithVariable = "ES5 String with a " + variable + "..." 
 
 // ES6 template literal 
 const tempLit = `Simple string` 
 
 // ES6 template literal with variable 
 let tempLitWithVariables = `Simple string with a ${variable}...` 
 
 // ES6 multiple line template literal 
 const multiLineString = ` 
  Multiple 
  Lines 
  Allowed 
 ` 

```