---
title: tokens
localeTitle: tokens
---
# Tokens em Java

Estes são os blocos de construção fundamentais de um programa ou a menor unidade de um programa. Java suporta cinco tipos de tokens:

## 1\. Palavras-chave

Estas são as palavras que têm suas definições predefinidas no compilador e não podem ser usadas como nomes dos identificadores. Existem 51 palavras-chave e 2 palavras reservadas em Java.

## 2\. Identificadores

Estes são os vários nomes dados a diferentes componentes do programa. Estes incluem os nomes de variáveis, métodos, classes, etc. Eles não devem começar com um dígito, mas podem conter dígitos, letras, sublinhados, símbolos de moeda.

## 3\. Literais

Estes fornecem uma maneira de expressar valores específicos em um programa. Esses são os seguintes tipos:

### Literais Numéricos

Estes são de três tipos em Java.

*   \#### Literals Inteiros
*   \#### Literals de ponto flutuante
*   \#### Literais de caracteres

### Literatura Booleana

Estes são de dois tipos

*   \#### verdade
*   \#### false

### Literais de cordas

## 4\. Operadores

Estes são os tipos especiais de símbolos usados ​​para executar determinadas operações. Por exemplo, +, -, \*, /,%

## 5\. Seperators

Estes incluem guia, digite, barra de espaço.

##### Agora vamos considerar um programa

```java
       //Printing Hello World 
 
 public class Hello 
 
 { 
 
 public static void main(String args[]) 
 
 { 
 
 System.out.println(“Hello World”); 
 
 } 
 
 } 
```

O código-fonte contém tokens como _public_ , _class_ , _Hello_ , {, _público_ , _estático_ , _void_ , _main_ , (, _String_ , \[\], _argumentos_ , {, _System_ , _out_ , _println_ , (, _"Hello World"_ ,},} Os tokens resultantes são compilados em bytecodes Java que podem ser executados a partir de um ambiente Java interpretado.O token é útil para o compilador detectar erros.Quando os tokens não são organizados em uma sequência específica, o compilador gera uma mensagem de erro.