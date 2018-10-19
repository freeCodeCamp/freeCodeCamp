---
title: Continue statement
localeTitle: Continuar declaração
---
# Continuar declaração

A instrução `continue` passa o controle para a próxima iteração dentro de um loop.

Neste exemplo, quando o valor de i é 2, a próxima instrução dentro do loop é ignorada.

## Exemplo
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if( i == 2) 
  { 
    continue; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Saída:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 3 is 4 
 > Item on index 4 is 5 

```