---
title: Break statement
localeTitle: Declaração de quebra
---
# Declaração de quebra

A instrução `break` termina o ciclo fechado ou a instrução switch na qual aparece. O controle é passado para a instrução que segue o loop ou o bloco de switches.

No primeiro exemplo, quando o valor de i é 3, a instrução break é executada, o que faz com que a execução do loop seja finalizada.

## Exemplo
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if(i == 3) 
  { 
    break; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Saída:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
```

No segundo exemplo, uma instrução de quebra é incluída no final de cada caso. Isso executa as declarações no caso sem continuar para o próximo caso. Sem a instrução break, o programa continuaria a executar o próximo caso e não funcionaria como pretendido.

## Exemplo
```
switch (exampleVariable) 
 { 
    case 1: 
        Console.WriteLine("case 1"); 
        Console.WriteLine("This only shows in example 1"); 
        break; 
    case 2: 
        Console.WriteLine("case 2"); 
        Console.WriteLine("This only shows in example 2"); 
    Console.WriteLine("This also only shows in example 2"); 
        break; 
    Console.WriteLine("This would not show anywhere, as it is after the break line and before the next case"); 
    default: 
        Console.WriteLine("default"); 
        Console.WriteLine("This only shows in the Default Example"); 
        break; 
 } 
```

## Saída:
```
> case 1 
 > This only shows in example 1 
 > 
 > case  2 
 > This only shows in example 2 
 > This also only shows in example 2 
 > 
 > default 
 > This only shows in the Default Example 
 > 

```