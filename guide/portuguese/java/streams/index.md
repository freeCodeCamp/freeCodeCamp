---
title: Streams
localeTitle: Córregos
---
# Córregos

No Java 8 Streams foi adicionado como um novo recurso a caixa de ferramentas Java. Os fluxos permitem que você processe coleções rapidamente e de forma limpa.

Por favor, leia o capítulo sobre lambdas e programação funcional antes de continuar.

## Como funciona

O Stream percorre os elementos da coleção para você. Cada intermediário e a operação do terminal são chamados para cada objeto. Quando todas as operações forem concluídas para os primeiros objetos, o segundo objeto será carregado.

## Métodos Importantes

### Criação

*   `Collection.stream()` : cria um Stream a partir de qualquer objeto de qualquer classe que implementa `Collection`
*   `Arrays.stream(array)` : cria um fluxo a partir de uma matriz

### Operações Intermediárias

Essas operações convertem os objetos de fluxo de alguma forma.

*   `Stream.map(Function<In,Out> function)` : aplica uma função para converter In para Out
*   `Stream.filter(Predicate<In> predicate)` : remove Objetos do Fluxo para o qual o Predicado não testa true
*   `Stream.distinct()` : remove objetos do fluxo que são duplicados
*   `Stream.sorted()` : classifica os objetos no fluxo
*   `Stream.limit(int n)` : finaliza o fluxo após n objetos

### Operações de Terminal

Essas operações recebem os objetos de fluxo e terminam o fluxo.

*   `Stream.collect(Collector<In,?,Out> collector)` : colete todos os objetos no fluxo no objeto
*   `Stream.forEach(Consumer<In> consumer)` : consuma todos os Objetos no Stream usando a função consumer
*   `Stream.count()` : conta todos os objetos no fluxo
*   `Stream.findFirst()` : retorna o primeiro objeto do fluxo e pára
*   `Stream.anyMatch(Predicate<In> predicate)` : retorna true se qualquer objeto no fluxo for true para o predicado
*   `Stream.allMatch(Predicate<In> predicate)` : retorna true se todos os Objetos no teste de fluxo forem verdadeiros para o Predicado

## Exemplos

```java
// print the length of all Strings in a List 
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    int length = string.length(); 
    System.out.println(length); 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .map(String::length) 
        .forEach(System.out::println); 
 
 // output: 3 2 1 3 
```

```java
// print all Strings in a List with a Length greater than 2 
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    if (string.length() > 2) { 
        System.out.println(string); 
    } 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .filter(string -> string.length() > 2) 
        .forEach(System.out::println); 
 
 // output: abc abc 
```

```java
// create a sorted List with all unique Strings from another List which are longer than or requal 2 
 List<String> result = new ArrayList<>(); 
 for (String string : Arrays.asList("de", "abc", "f", "abc")) { 
    if (string.length() >= 2 
            && ! result.contains(string)) { 
        result.add(string); 
    } 
 } 
 Collections.sort(result); 
 
 List<String> result2 = Arrays.asList("de", "abc", "f", "abc") 
        .stream() 
        .filter(string -> string.length() >= 2) 
        .distinct() 
        .sorted() 
        .collect(Collectors.toList()); 
 
 // result: abc de 
```

### Fontes

1.  [Processando Dados com Fluxos do Java SE 8, Parte 1](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)