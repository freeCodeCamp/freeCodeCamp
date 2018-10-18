---
title: Ruby Methods
localeTitle: Métodos Ruby
---
## Introdução

Você já ouviu falar de linguagens de programação referentes a funções? Se você codificou em JavaScript, você deve estar familiarizado com eles. Ruby também tem funções, mas nos referimos a elas como métodos. Os métodos são apenas blocos de código que recebem um nome para facilidade de uso e acessibilidade e são cruciais para essa abordagem DRY (não se repita) na programação.

## Criando e usando métodos

Os métodos devem sempre ser definidos como letras minúsculas (você pode separar as palavras com um sublinhado, se quiser), senão elas podem ser confundidas como constantes. Os métodos também devem ser definidos antes de realmente tentar chamá-los, portanto, a regra básica seria criar seus métodos no início de seu arquivo e chamá-los posteriormente quando necessário. Sempre tente evitar nomes de métodos de palavras simples quando necessário, você quer saber mais ou menos o que o método faz sem ter que cavar dentro dele.

## Sintaxe

Os métodos são muito fáceis de criar, eles podem ser criados sem a capacidade de aceitar parâmetros, com parâmetros e até mesmo com parâmetros pré-definidos, se nenhum for dado.

#### Método simples
```
def my_method 
  code goes here 
 end 
```

#### Método de aceitação de parâmetros
```
def my_method (param1, param2) 
  param1 + param2 
 end 
```

#### Método de parâmetro predefinido (parâmetros predefinidos são usados ​​quando nenhum é dado)
```
def my_method (param1 = parameter1, param2 = parameter2) 
  parm1 + parm2 
 end 
```

## Retornar nos métodos

O valor retornado de um método sempre será a última expressão avaliada no método. Você pode, no entanto, usar a palavra-chave return para retornar mais de um valor, se necessário.