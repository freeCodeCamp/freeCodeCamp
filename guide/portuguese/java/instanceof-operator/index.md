---
title: instanceof Operator
localeTitle: instanceof Operator
---
# operador `instanceof`

O operador `instanceof` permite verificar a validade de um relacionamento `IS A` Se, a qualquer momento, não tivermos certeza sobre isso e quisermos validar isso em tempo de execução, podemos fazer o seguinte:

```java
//assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true 
 if(vehicle instanceof Car){ 
    //do something if vehicle is a Car 
 } 
```

**Nota** : Se você aplicar o operador instanceof com qualquer variável que tenha valor nulo, ele retornará false.