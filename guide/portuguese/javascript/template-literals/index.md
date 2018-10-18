---
title: Template Literals
localeTitle: Literais de modelos
---
Modelos de Literais são um recurso do ES6 que utiliza o caractere backtick para definir um valor de string

### A sintaxe básica

Abaixo está um exemplo básico de um literal de modelo:

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