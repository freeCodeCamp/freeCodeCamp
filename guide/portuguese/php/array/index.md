---
title: array
localeTitle: array
---
## Introdução do array PHP

Um array no PHP é na verdade um mapa ordenado. Um mapa é um tipo que associa valores a chaves. Esse tipo é otimizado para vários usos diferentes; Ele pode ser tratado como uma matriz, lista (vetor), tabela de hash (uma implementação de um mapa), dicionário, coleção, pilha, fila e provavelmente mais. Como os valores de array podem ser outros arrays, árvores e arrays multidimensionais também são possíveis.

Aqui está um exemplo:
```
<?php 
 // array without keys 
 $bikes = array("Suzuki","BMW","Yamaha"); 
 echo "I like " . $bikes[0] . ", " . $bikes[1] . " and " . $bikes[2] . "."; 
 ?> 
```

O array PHP tem tantas funções para trabalhar. Aqui está toda a lista ordenada: [Funções](https://www.w3schools.com/php/php_ref_array.asp)

## Matrizes associativas

Matrizes PHP podem ser usadas como chave e valor como mapa. Pode ser acessado pela chave também.

Aqui está um exemplo simples:
```
<?php 
 $array = array( 
    "foo" => "bar", 
    "bar" => "foo", 
 ); 
 
 echo $array['bar']; 
```

Tenha um bom dia, feliz codificando !!!