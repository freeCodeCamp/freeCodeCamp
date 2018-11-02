---
title: Ternary operator
localeTitle: Operador ternário
---
# Operador ternário ( `?:` :)

O operador ternário retorna uma das duas expressões com base na condição. Pode ser usado como um atalho para if ... else statement.

## Sintaxe
```
condition_expression ? expression_1 : expression_2 
```

### Parâmetro

`condition_expression` Expressão booleana.

`expression_1` Retornado se `condition_expression` for true.

`expression_2` Retornado se `condition_expression` for falso.

## Exemplo
```
// initialize - set true or false here to view different result 
 bool hasFreeSweet = false; 
 
 string str = hasFreeSweet ? "Free sweet!" : "No free sweet."; 
 
 //output in console 
 Console.WriteLine(str); 
```

## Saída
```
if hasFreeSweet == true 
 > Free sweet! 
 
 if hasFreeSweet == false 
 > No free sweet. 

```