---
title: If-Else Statement
localeTitle: Declaração If-Else
---
## Introdução

A instrução `if` executa uma instrução se uma condição especificada for `true` . Se a condição for `false` , outra instrução pode ser executada usando a instrução `else` .

**Nota:** A instrução `else` é opcional.

```javascript
if (condiçao) 
    /* faça isso */ 
 else 
    /* então faça isso */ 
```

Múltiplas instruções `if...else` podem ser encadeadas para criar uma cláusula `else if` . Isso especifica uma nova condição para testar e pode ser repetida para testar várias condições, verificando até que uma declaração verdadeira seja apresentada para execução.

```javascript
if (condiçao) 
    /* faça isso */ 
 else if (condiçao2) 
    /* então faça isso */ 
 else if (condiçao3) 
    /* então faça isso */ 
 else 
    /* condiçao final (se nenhuma das outras condições forem verdadeiras, essa será executada) */ 
```

**Nota:** Se você deseja executar mais de uma instrução no `if` , `else` ou `else if` part, chaves são necessárias em torno das instruções:

```javascript
if (condiçao) { 
    /* faça */ 
    /* isso */ 
    /* com mais de uma linha de codigo */ 
 } else { 
    /* então faça isso */ 
    /* com mais de uma linha de codigo */ 
 } 
```

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [Link do MSDN](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Exemplos

**Usando** `if...else` :

```javascript
    // Se x=5 z=7 e q=42. Se x não é 5, entao z=19. 
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
    return "Número mêdio"; 
 else if (x < 100) 
    return "Número grande"; 
 else { 
    flag = 1; 
    return "Numero inválido"; 
 } 

```
