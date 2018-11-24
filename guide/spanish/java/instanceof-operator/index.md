---
title: instanceof Operator
localeTitle: operador de instancia
---
# operador de `instanceof`

El operador `instanceof` permite verificar la validez de una relación `IS A` Si en algún momento no estamos seguros de esto y queremos validarlo en tiempo de ejecución, podemos hacer lo siguiente:

```java
//assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true 
 if(vehicle instanceof Car){ 
    //do something if vehicle is a Car 
 } 
```

**Nota** : Si aplica el operador instanceof con cualquier variable que tenga un valor nulo, devuelve falso.