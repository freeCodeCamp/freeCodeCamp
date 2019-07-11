---
title: Map
localeTitle: Mapa
---
## Introdução do mapa

`map` é um contêiner associativo que armazena elementos no par de valores-chave. Assim como em `Java` tem coleção, array associativo em PHP e assim por diante.

## Benefícios do uso do mapa

*   Ele armazena apenas chaves exclusivas e isso também na ordem classificada com base em seus critérios de classificação atribuídos.
*   Como as chaves estão na ordem de classificação, portanto, pesquisar elemento no mapa através da tecla é muito rápido, ou seja, leva tempo logarítmico.
*   No `map` , haverá apenas um valor associado à chave every.
*   `map` pode ser usado como matrizes associativas.
*   Pode ser implementado usando árvores binárias balanceadas.

Aqui está um exemplo:

```cpp
#include <iostream> 
 #include <map> 
 
 using namespace std; 
 
 int main (){ 
  map<char,int> first; 
 
  //initializing 
  first['a']=10; 
  first['b']=20; 
  first['c']=30; 
  first['d']=40; 
 
   map<char, int>::iterator it; 
   for(it=first.begin(); it!=first.end(); ++it){ 
      cout << it->first << " => " << it->second << '\n'; 
   } 
 
  return 0; 
 } 
```

Saída:
```
a => 10 
 b => 20 
 c => 30 
 d => 40 
```

## Criando objeto de mapa

`map<string, int> myMap;`

## Inserção

Inserindo dados com a função de membro de inserção.

```cpp
myMap.insert(make_pair("earth", 1)); 
 myMap.insert(make_pair("moon", 2)); 
```

Nós também podemos inserir dados em std :: map usando operator \[\] ie

`myMap["sun"] = 3;`

## Acessando elementos do mapa

Para acessar os elementos do mapa, você precisa criar um iterador para ele. Aqui está um exemplo como dito antes.

```cpp
map<char, int>::iterator it; 
 for(it=first.begin(); it!=first.end(); ++it){ 
  cout << it->first << " => " << it->second << '\n'; 
 } 
```

Aqui você pode aprender mais sobre o mapa: [cpluspluc\_map](http://www.cplusplus.com/reference/map/map/map/)

NB: Todos os códigos no exemplo estão na versão C ++ 11. Você pode aprender mais sobre a versão C ++ [aqui](http://en.cppreference.com/w/cpp/compiler_support)