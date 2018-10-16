---
title: Hash Tables and Hashing Functions
localeTitle: Tabelas de hash e funções de hashing
---
### Introdução ao hashing

O hash é projetado para resolver o problema de precisar localizar ou armazenar um item em uma coleção com eficiência.  
Por exemplo, se tivermos uma lista de 10.000 palavras em inglês e quisermos verificar se uma determinada palavra está na lista, seria ineficiente comparar sucessivamente a palavra com todos os 10.000 itens até encontrarmos uma correspondência. Mesmo se a lista de palavras estiver lexicograficamente ordenada, como em um dicionário, você ainda precisará de algum tempo para encontrar a palavra que está procurando.  
Hashing é uma técnica para tornar as coisas mais eficientes, reduzindo efetivamente a pesquisa desde o início.

## O que é hashing?

Hash significa usar alguma função ou algoritmo para mapear dados de objetos para algum valor inteiro representativo.  
Esse chamado código hash (ou simplesmente hash) pode ser usado como uma forma de restringir nossa pesquisa ao procurar o item no mapa.  
Geralmente, esses códigos de hash são usados ​​para gerar um índice, no qual o valor é armazenado.

## Como funciona o hashing

Em tabelas de hash, você armazena dados em formas de pares de chave e valor. A chave, que é usada para identificar os dados, é fornecida como uma entrada para a função de hashing. O código hash, que é um inteiro, é então mapeado para o tamanho fixo que temos.

Tabelas hash tem que suportar 3 funções.

*   inserir (chave, valor)
*   obter (chave)
*   excluir (chave)

Apenas como um exemplo para nos ajudar a compreender o conceito, vamos supor que queremos mapear uma lista de chaves de string para valores de string (por exemplo, mapear uma lista de países para suas capitais).  
Então, digamos que queremos armazenar os dados na tabela no mapa.

Key | Valor  
\---------------- | -------------  
Cuba | Havana  
Inglaterra | Londres  
França | Paris  
Espanha | Madri  
Suíça | Berna

E vamos supor que nossa função hash seja simplesmente pegar o comprimento da string.

Por simplicidade, teremos duas matrizes: uma para nossas chaves e outra para os valores.  
Então, para colocar um item na tabela de hash, calculamos seu código de hash (nesse caso, simplesmente contamos o número de caracteres), depois colocamos a chave e o valor nas matrizes no índice correspondente.  
Por exemplo, Cuba tem um código hash (comprimento) de 4.  
Então, armazenamos Cuba na 4ª posição na matriz de chaves, e Havana no 4º índice da matriz de valores etc. E acabamos com o seguinte:

Posição | Matriz de chaves | Matriz de valores  
\--------------------- | ------------------ | --------- ------  
1 | |  
2 | |  
3 | |  
4 | Cuba | Havana  
5 | Espanha | Madri  
6 | França | Paris  
7 | Inglaterra | Londres  
8 | |  
9 | |  
10 | |  
11 | Suíça | Berna

Agora, neste exemplo específico, as coisas funcionam muito bem.  
Nossa matriz precisa ser grande o suficiente para acomodar a string mais longa, mas, neste caso, são apenas 11 slots.  
Desperdiçamos um pouco de espaço porque, por exemplo, não há chaves de 1 letra em nossos dados, nem chaves entre 8 e 10 letras. Mas neste caso, o espaço desperdiçado também não é tão ruim. Tomando o comprimento de uma string é bom e rápido, e assim é o processo de encontrar o valor associado a uma determinada chave (certamente mais rápido do que fazer até cinco comparações de strings).

Mas, o que faremos se nosso conjunto de dados tiver uma string com mais de 11 caracteres?  
E se tivermos uma outra palavra com 5 caracteres, "Índia", e tentarmos atribuí-la a um índice usando nossa função hash. Como o índice 5 já está ocupado, precisamos fazer uma ligação sobre o que fazer com ele. Isso é chamado de colisão.

Se nosso conjunto de dados tivesse uma string com mil caracteres e você fizesse uma matriz de milhares de índices para armazenar os dados, isso resultaria em um desperdício de espaço. Se nossas chaves fossem palavras aleatórias do inglês, onde há tantas palavras com o mesmo tamanho, usar comprimento como uma função de hashing seria bastante inútil.

## Manipulação de colisão

Dois métodos básicos são usados ​​para lidar com colisões.

1.  Encadeamento Separado
2.  Endereçamento Aberto

#### Encadeamento Separado

O tratamento de colisão de hash por encadeamento separado usa uma estrutura de dados adicional, preferencialmente uma lista vinculada para alocação dinâmica, em depósitos. Em nosso exemplo, quando adicionamos a Índia ao conjunto de dados, ela é anexada à lista vinculada armazenada no índice 5, então nossa tabela ficaria assim.

Posição | Cabeçalhos de lista vinculada |  
\--------------------- | ---------------------------- -------- |  
1 | |  
2 | |  
3 | |  
4 | [Cuba-Havana\] |  
5 | \[Espanha-Madri\] -> \[Índia-Delhi\] |  
6 | \[França-Paris\] |  
7 | \[Inglaterra-Londres\] |  
8 | |  
9 | |  
10 | |  
11 | \[Suíça-Berna\] |](https://en.wikipedia.org/wiki/Linear_probing)

Para encontrar um item, primeiro vamos ao balde e comparamos as chaves. Esse é um método popular e, se uma lista de links for usada, o hash nunca será preenchido. O custo para `get(k)` é em média `O(n)` onde n é o número de chaves no bucket, o número total de chaves é N.  
O problema com o encadeamento separado é que a estrutura de dados pode crescer sem limites.

#### Endereçamento Aberto

O endereçamento aberto não introduz nenhuma nova estrutura de dados. Se ocorrer uma colisão, procuramos a disponibilidade no próximo ponto gerado por um algoritmo. Endereçamento aberto é geralmente usado onde o espaço de armazenamento é restrito, ou seja, processadores embutidos. O endereçamento aberto não é necessariamente mais rápido do que o encadeamento separado.

Métodos para endereçamento aberto

*   \[Sondagem Linear
*   [Sonda quadrática](https://en.wikipedia.org/wiki/Quadratic_probing)
*   [Hashing Duplo](https://en.wikipedia.org/wiki/Double_hashing)

## Como usar hashing em seu código.

#### Python
```
   # Few languages like Python, Ruby come with an in-built hashing support. 
   # Declaration 
    my_hash_table = {} 
    my_hash_table = dict() 
 
   # Insertion 
    my_hash_table[key] = value 
 
   # Look up 
    value = my_hash_table.get(key) # returns None if the key is not present || Deferred in python 3, available in python 2 
    value = my_hash_table[key] # throws a ValueError exception if the key is not present 
 
    # Deletion 
    del my_hash_table[key] # throws a ValueError exception if the key is not present 
 
    # Getting all keys and values stored in the dictionary 
    keys = my_hash_table.keys() 
    values = my_hash_table.values() 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CVtK)

#### Java
```
    // Java doesn't include hashing by default, you have to import it from java.util library 
    // Importing hashmaps 
    import java.util.HashMap; 
 
   // Declaration 
    HashMap<Integer, Integer> myHashTable = new HashMap<Integer, Integer>(); // declares an empty map. 
 
   // Insertion 
    myHashTable.put(key, value); 
 
   // Deletion 
    myHashtable.remove(key); 
 
    // Look up 
    myHashTable.get(key); // returns null if the key K is not present 
    myHashTable.containsKey(key); // returns a boolean value, indicating the presence of a key 
 
    // Number of key, value pairs in the hash table 
    myHashTable.size(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CVt1)

## Recursos

*   Para ler mais, você deseja testar esse [link](http://geeksquiz.com/hashing-set-1-introduction/) , o que explica o hash usando um exemplo diferente.
*   [Hashing em 60 segundos](https://www.youtube.com/watch?v=x05KubVlh_M) .
*   [Cuckoo Hashing](https://www.youtube.com/watch?v=HRzg0SzFLQQ)
*   [Hashing Consisten](https://www.youtube.com/watch?v=jznJKL0CrxM)
*   [Filtros Bloom](https://www.youtube.com/watch?v=-SuTGoFYjZs)
*   [Estratégias de Hashing](https://www.youtube.com/watch?v=D65JQ0qQwZk)
*   [Hashing de Senha](https://crackstation.net/hashing-security.htm)
*   [Diferença entre Hashing e Criptografia](http://stackoverflow.com/questions/326699/difference-between-hashing-a-password-and-encrypting-it)