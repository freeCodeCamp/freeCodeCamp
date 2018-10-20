---
title: Return Statement
localeTitle: Declaración de devolución
---
# Declaración de devolución

La instrucción de `return` termina la ejecución de un método dentro del cual aparece y devuelve el control al método de llamada. Puede o no puede devolver un valor.

Si la declaración de `return` está dentro de un bloque `try` y si hay un bloque `finally` , entonces el control se pasa al bloque `finally` , después de lo cual se devuelve al método de llamada.

## Ejemplo
```
class Calc 
 { 
  static int Sum(int i, int j) 
  { 
    return i + j; 
  } 
 
  static void Main() 
  { 
    int a = 4; 
    int b = 3; 
    int sum = Sum(a, b); 
    Console.WriteLine($"The sum of {a} and {b} is {result}"); 
 
    // To keep the console from closing 
    Console.ReadLine(); 
  } 
 } 
```

## Salida:

\`\` \`

> La suma de 4 y 3 es 7. \`\`