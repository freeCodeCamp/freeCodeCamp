---
title: If-Else Statement
localeTitle: Declaração If-Else
---
## Introdução

A instrução `if` executa caso a condição especificada se avaliar como `true` (verdadeira) . Se a condição for `false` (falsa), outra instrução pode ser executada usando a instrução `else` .

**Nota:** A instrução `else` é opcional.

```javascript
if (condção) 
    /* faz isto */ 
 else 
    /* faz outra coisa */ 
```

Múltiplas instruções `if...else` podem ser encadeadas para criar uma cláusula `else if` . Isso especifica uma nova condição para testar e pode ser repetida para testar várias condições, verificando até que uma declaração verdadeira seja apresentada para execução.

```javascript
if (condição1) 
    /* faz isto */ 
 else if (condição2) 
    /* faz outra coisa */ 
 else if (condição3) 
    /* faz outra coisa */ 
 else 
    /* última instrução */ 
```

**Nota:** Se você deseja executar mais de uma instrução em `if` , `else` ou `else if`, são necessárias chavetas em torno das instruções:

```javascript
if (condição) { 
    /* faz */ 
    /* isto */ 
    /* com várias declarações */ 
 } else { 
    /* faz outra */ 
    /* coisa */ 
 } 
```

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [Ligação do MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Exemplos

**Usando** `if...else` :

```javascript
    // Se x=5: z=7 e q=42. If x é diferente de 5 então: z=19. 
    if (x == 5) { 
      z = 7; 
      q = 42 
    else 
      z = 19; 
```

**Usando** `else if` :

```javascript
if (x < 10) 
    return "Número pequeno"; 
 else if (x < 50) 
    return "Número médio"; 
 else if (x < 100) 
    return "Número grande"; 
 else { 
    flag = 1; 
    return "Número invalido"; 
 } 

```
