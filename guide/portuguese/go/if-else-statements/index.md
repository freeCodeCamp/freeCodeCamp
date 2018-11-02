---
title: if else Statements
localeTitle: if else Declarações
---## Introdução

A instrução `if` executa uma instrução se uma condição especificada for **verdadeira** . Se a condição for **falsa** , outra instrução pode ser executada usando a instrução `else` .

**Nota:** A instrução `else` é opcional.

```Go
  x := 7 
  if x%2 == 0 { 
    // This statement is executed if x is even 
  } else { 
    // This statement is executed if x is odd 
  } 
```

Múltiplas instruções `if...else` podem ser aninhadas para criar uma cláusula `else if` .

```go
  x := 7 
  if x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 4 { 
    // this statement is executed if x is 4 
  } else if x == 7 { 
    // this statement is executed if x is 7 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 
```

Em Go, você pode preceder uma condição `if` com uma instrução. A definição de variável contida é válida para o bloco `if` completo.

```go
  if x := 3; x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 3 { 
    // this statement is executed if x is 3 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 

```