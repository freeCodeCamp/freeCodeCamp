---
title: Indeterminate parameters
localeTitle: Parâmetros indeterminados
---
# Parâmetros indeterminados

Vamos imaginar que precisamos escrever um método em que o número de parâmetros seja variável. Como podemos fazer isso? Bem, C # (e outras linguagens) tem uma maneira fácil de fazer isso; Usando a palavra-chave `params` no `params` de um método, podemos chamar esse método com um número variável de parâmetros.

## Exemplo
```
public static void Main (string[] args) { 
    // Call PrintParams with 3 parameters 
    PrintParams(1, 2, 3); 
 
    // Call PrintParams with 1 parameter 
    PrintParams(4); 
 } 
 
 public static void PrintParams(params int[] values) 
 { 
    // Iterate through parameters 
    for (int i = 0; i < values.Length; i++) 
    { 
        Console.WriteLine("Parameter {0} is {1}", i, values[i]); 
    } 
 } 
```

## Saída:
```
> Parameter 0 is 1 
 > Parameter 1 is 2 
 > Parameter 2 is 3 
 > Parameter 0 is 4 

```