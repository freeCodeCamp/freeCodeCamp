---
title: Any Type
localeTitle: Тип any
---
# Тип any

Тип any указывает Typecript не проводить проверку типов для указанных переменных. Это может быть полезно при работе с динамическими данными, у которых вы можете не знать типа, и для перевода вашего кода с Javascript на TypeScript. Вы можете использовать неявное объявление переменных из Javascript с типом any.

```typescript
  let notSure: any = 4; 
  notSure = "maybe a string instead"; 
  notSure = false; 

```
