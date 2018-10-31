---
title: Hash Tables
localeTitle: Tabelas de hash
---
## Tabelas de hash

Tabela de hash (ou Mapa de hash) é uma estrutura de dados que pode mapear chaves para valores. Uma tabela de hash usa uma função de hash para calcular um índice em uma matriz de buckets, a partir dos quais os valores desejados podem ser encontrados. A complexidade temporal de uma função Hash bem definida pode ser O (1).

Uma tabela de hash (mapa de hash) é uma estrutura de dados que implementa um tipo de dados abstrato de matriz associativa, uma estrutura que pode mapear chaves para valores. Uma tabela de hash usa uma função hash para calcular um índice em uma matriz de blocos ou slots, a partir dos quais o valor desejado pode ser encontrado.

![um exemplo de uma tabela de hash](https://github.com/TomerPacific/fccGuideImages/blob/master/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?raw=true)

Algumas propriedades importantes da tabela de hash - 1) Os valores não são armazenados na ordem classificada. 2) Em uma tabela de hash, é preciso também lidar com possíveis colisões. Isso geralmente é feito por encadeamento, o que significa criar uma lista encadeada de todos os valores cujas chaves mapeiam para um índice específico.

Implementação da tabela de hash

Uma tabela de hash é tradicionalmente implementada com uma matriz de listas vinculadas. Quando queremos inserir um par chave / valor, mapeamos a chave para um índice na matriz usando a função hash. O valor é então inserido na lista vinculada nessa posição.

A idéia do hashing é distribuir as entradas (pares chave / valor) em uma matriz de blocos. Dada uma chave, o algoritmo calcula um índice que sugere onde a entrada pode ser encontrada:
```
index = f(key, array_size) 
```

Muitas vezes isso é feito em duas etapas:
```
hash = hashfunc(key) 
 index = hash % array_size 
```

Nesse método, o hash é independente do tamanho da matriz e é então reduzido a um índice (um número entre 0 e array\_size - 1) usando o operador de módulo (%).

Vamos considerar a string S. Você é obrigado a contar a freqüência de todos os caracteres nesta string.
```
string S = “ababcd” 
```

A maneira mais simples de fazer isso é fazer uma iteração de todos os caracteres possíveis e contar sua frequência um por um. A complexidade temporal desta abordagem é O (26 \* N), onde N é o tamanho da string e existem 26 caracteres possíveis.
```
void countFre(string S) 
    { 
        for(char c = 'a';c <= 'z';++c) 
        { 
            int frequency = 0; 
            for(int i = 0;i < S.length();++i) 
                if(S[i] == c) 
                    frequency++; 
            cout << c << ' ' << frequency << endl; 
        } 
    } 
```

Saída
```
a 2 
 b 2 
 c 1 
 d 1 
 e 0 
 f 0 
 … 
 z 0 
```

Vamos aplicar o hashing a esse problema. Tome uma freqüência de matriz de tamanho 26 e hash os 26 caracteres com índices da matriz usando a função de hash. Em seguida, itere a string e aumente o valor na frequência no índice correspondente para cada caractere. A complexidade dessa abordagem é O (N), onde N é o tamanho da string.
```
int Frequency[26]; 
 
    int hashFunc(char c) 
    { 
        return (c - 'a'); 
    } 
 
    void countFre(string S) 
    { 
        for(int i = 0;i < S.length();++i) 
        { 
            int index = hashFunc(S[i]); 
            Frequency[index]++; 
        } 
        for(int i = 0;i < 26;++i) 
            cout << (char)(i+'a') << ' ' << Frequency[i] << endl; 
    } 
```

Saída
```
a 2 
 b 2 
 c 1 
 d 1 
 e 0 
 f 0 
 … 
 z 0 
```

### Colisões de hash

Quando você está usando um mapa de hash, você tem que assumir que as colisões de hash são inevitáveis, já que você estará usando um mapa de hash que é significativamente menor em tamanho do que a quantidade de dados que você tem. As duas principais abordagens para resolver essas colisões são encadeamento e endereçamento aberto.

#### Encadeamento

Uma maneira de resolver colisões de hash é usando o encadeamento. O que isso significa é para cada mapeamento de valor-chave na tabela de hash, o campo de valor não conterá apenas uma célula de dados, mas uma lista de dados vinculados. No exemplo mostrado na imagem abaixo, você pode ver que Sandra Dee é adicionada como outro elemento na chave 152 depois de John Smith.

![um exemplo de encadeamento em uma tabela de hash](https://github.com/TomerPacific/fccGuideImages/blob/master/620px-Hash_table_5_0_1_1_1_1_0_LL.svg.png?raw=true)

O maior revés em relação ao encadeamento é o aumento da complexidade do tempo. Isso significa que, em vez das propriedades O (1) de uma tabela hash regular, cada ação levará mais tempo, já que precisamos percorrer a lista vinculada.

#### Endereçamento Aberto

Outra maneira de resolver colisões de hash é usando o endereçamento aberto. Neste método, uma vez que um valor é mapeado para uma chave que já está ocupada, você se move ao longo das teclas adjacentes da tabela de hash de uma determinada forma predeterminada, até encontrar uma chave com um valor vazio. No exemplo mostrado na imagem abaixo, Sandra Dee é mapeada para a chave 153, mesmo que seu valor seja mapeado para 152.

![um exemplo de endereçamento aberto em uma tabela de hash](https://github.com/TomerPacific/fccGuideImages/blob/master/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png?raw=true)

O maior revés do endereçamento aberto reside no fato de que, ao precisar procurar valores, eles podem não estar no lugar que você espera que eles sejam (o mapeamento de chaves). Portanto, você tem que percorrer partes da tabela de hash para encontrar o valor que está procurando, resultando em maior complexidade de tempo.

#### Complexidade do Tempo

É muito importante notar que as tabelas de hash têm uma complexidade constante amortizada, ou seja, em um caso médio, a complexidade será O (1). No pior dos casos, se muitos elementos foram divididos na mesma chave, pode ter uma complexidade de tempo de O (n).

### Mais Informações:

[Mais informações sobre tabelas de hash - Wiki](https://en.wikipedia.org/wiki/Hash_table) [Comparação entre a tabela de hash e o mapa STL](http://www.geeksforgeeks.org/hash-table-vs-stl-map/)

#### Fonte

[Noções básicas de tabelas de hash - HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)