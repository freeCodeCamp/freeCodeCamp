---
title: Return Statement
localeTitle: Declaração de Devolução
---
# Declaração de Devolução

A declaração de `return` termina a execução de um método dentro do qual aparece e retorna o controle para o método de chamada. Pode ou não devolver um valor.

Se a instrução de `return` estiver dentro de um bloco `try` e se houver um bloco `finally` , o controle será passado para o bloco `finally` , após o qual será retornado ao método de chamada.

## Exemplo
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

## Saída:

\`\` \`

> A soma de 4 e 3 é 7 \`\`