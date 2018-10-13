---
title: Template Literals
localeTitle: Literales de plantilla
---
Los literales de plantilla son una característica de ES6 que utiliza el carácter de comillas invertidas para definir un valor de cadena

### La sintaxis básica.

A continuación se muestra un ejemplo básico de una plantilla literal:

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