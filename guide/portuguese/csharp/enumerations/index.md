---
title: Enumerations
localeTitle: Enumerações
---
# Enumerações

Uma enumeração é um conjunto de constantes inteiras nomeadas que são declaradas usando a palavra-chave `enum` .

## Exemplo
```
enum Gender 
 { 
  Male, 
  Female 
 } 
```

Por padrão, os valores inteiros começam em 0 e aumentam em 1, para cada nome de enumeração, por exemplo, Masculino = 0, Feminino = 1, etc.

Estes podem ser substituídos, especificando um valor inteiro para qualquer um dos nomes de enumeração.

## Exemplo
```
enum Gender 
 { 
  Male = 1, 
  Female 
 } 
```

Neste caso, os valores inteiros começam em 1 e aumentam a partir daí.

Para usar um enum, você pode declarar uma variável do seu tipo e atribuir um valor a ela:

`Gender myVar = Gender.Male;`

Você também pode converter um valor de nome de enumeração para seu valor inteiro subjacente e vice-versa:
```
Console.WriteLine($"Male: {(int)Gender.Male}"); 
 Console.WriteLine($"Female: {(int)Gender.Female}"); 
```

## Saída:
```
Male: 1 
 Female: 2 

```