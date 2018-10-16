---
title: Implement a Root-Level Request Logger Middleware
localeTitle: Внедрение промежуточного ПО регистратора запросов уровня корневого уровня
---
## Внедрение промежуточного ПО регистратора запросов уровня корневого уровня

Легче написать эту задачу все наверху (для нее уже есть заглушка). Это связано с тем, что для промежуточного программного обеспечения должны быть назначены вызовы функций, которые вы хотите использовать.

Чтобы настроить собственное промежуточное программное обеспечение, вы можете сделать это так:

```javascript
app.use(function middleware(req, res, next) { 
  // Do something 
  // Call the next function in line: 
  next(); 
 }); 
```

Если у вас возникли проблемы с форматированием строки правильно, один из способов сделать это выглядит так:

```javascript
  var string = req.method + ' ' + req.path + ' - ' + req.ip; 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware/index.md) .