---
title: instanceof Operator
localeTitle: instanceof Operator
---
# оператор `instanceof`

`instanceof` оператор позволяет проверить действительность `IS A` отношение. Если в какой-то момент времени мы не уверены в этом, и мы хотим проверить это во время выполнения, мы можем сделать следующее:

```java
//assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true 
 if(vehicle instanceof Car){ 
    //do something if vehicle is a Car 
 } 
```

**Примечание** . Если вы примените оператор instanceof с любой переменной, которая имеет нулевое значение, она возвращает false.