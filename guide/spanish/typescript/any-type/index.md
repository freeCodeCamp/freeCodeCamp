---
title: Any Type
localeTitle: Cualquier tipo
---
# Cualquier tipo

El tipo Any indica a Typescript que suspenda la verificación de tipo para las variables especificadas. Es útil cuando se trabaja con contenido dinámico para el que no conoce el tipo y para la transición de su base de código para Javascript a Typescript en partes. Puede utilizar la escritura implícita de Javascript con variables declaradas con un tipo de Cualquier.

```typescript
  let notSure: any = 4; 
  notSure = "maybe a string instead"; 
  notSure = false; 

```