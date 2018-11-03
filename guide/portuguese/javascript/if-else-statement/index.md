---
title: If-Else Statement
localeTitle: Declaração If-Else
---
## Introdução

A instrução `if` executa uma instrução se uma condição especificada for `true` . Se a condição for `false` , outra instrução pode ser executada usando a instrução `else` .

**Nota:** A instrução `else` é opcional.

```javascript
if (condition) 
    /* do something */ 
 else 
    /* do something else */ 
```

Múltiplas instruções `if...else` podem ser encadeadas para criar uma cláusula `else if` . Isso especifica uma nova condição para testar e pode ser repetida para testar várias condições, verificando até que uma declaração verdadeira seja apresentada para execução.

```javascript
if (condition1) 
    /* do something */ 
 else if (condition2) 
    /* do something else */ 
 else if (condition3) 
    /* do something else */ 
 else 
    /* final statement */ 
```

**Nota:** Se você deseja executar mais de uma instrução no `if` , `else` ou `else if` part, chaves são necessárias em torno das instruções:

```javascript
if (condition) { 
    /* do */ 
    /* something */ 
    /* with multiple statements */ 
 } else { 
    /* do something */ 
    /* else */ 
 } 
```

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [Link do MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Exemplos

**Usando** `if...else` :

```javascript
    // If x=5 z=7 and q=42. If x is not 5 then z=19. 
    if (x == 5) { 
      z = 7; 
      q = 42 
    else 
      z = 19; 
```

**Usando** `else if` :

```javascript
if (x < 10) 
    return "Small number"; 
 else if (x < 50) 
    return "Medium number"; 
 else if (x < 100) 
    return "Large number"; 
 else { 
    flag = 1; 
    return "Invalid number"; 
 } 

```