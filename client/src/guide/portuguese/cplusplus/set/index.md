---
title: Set
localeTitle: Conjunto
---
Uma estrutura de dados definida em c ++ é definida da mesma forma que um conjunto é definido no contexto da matemática.

Mais formalmente falando, os Conjuntos são um tipo de contêineres associativos nos quais cada elemento tem que ser único.

*   O valor do elemento não pode ser modificado depois que ele é inserido, embora a exclusão de um elemento e a inserção de um novo elemento seja permitida, da mesma forma que fazemos em matemática.
*   Definir estrutura de dados pode ser usado para modelar, bem, se define. Fica fácil achar interseções, uniões etc.
*   Semelhante ao vetor, mas somente valores exclusivos são permitidos.
*   Set organiza os elementos em ordem crescente como e quando você insere elementos no conjunto.

O arquivo de cabeçalho necessário para usar a estrutura de dados definida é 'set'. ou seja, `#include<set>` deve estar lá em seu código para você usar a estrutura de dados definida.

**Dica profissional** : - Use `#include<bits/stdc++.h>` para incluir todas as estruturas e funções de dados do C ++, em vez de adicioná-las uma a uma.  
Algumas das funções que podem ser executadas com um conjunto: -

1.  begin () - Retorna um iterador para o primeiro elemento no conjunto
2.  end () - Retorna um iterador ao elemento teórico que segue o último elemento no conjunto
3.  size () - Retorna o número de elementos no conjunto
4.  max\_size () - Retorna o número máximo de elementos que o conjunto pode conter
5.  empty () - Retorna se o conjunto está vazio
6.  erase (const g) - Remove o valor 'g' do conjunto
7.  clear () - Remove todos os elementos do conjunto

Vamos ver um exemplo :-

```cpp
#include <iostream> 
 #include <set> 
 #include <iterator> 
 
 using namespace std; 
 int main() 
 { 
    set <int> myset;   //an empty set container. Note that size of the set need not be declared, similar to vector. 
 
    // insert elements in random order 
    myset.insert(65); 
    myset.insert(30); 
    myset.insert(80); 
    myset.insert(20); 
    myset.insert(9); 
    myset.insert(9); // only one 9 will be added to the list. 
 
 
    // printing set myset 
    set <int> :: iterator itr; //an iterator is like a pointer. 
    cout << "\nThe contents of myset : "; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
    cout << endl; 
 
 
    // remove all elements up to 65 in myset from the beginning:- 
    cout << "\nContents of myset after removal of elements less than 30 : "; 
    myset.erase(myset.begin(), myset.find(30)); 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    // remove element with value 50 in myset 
 
    int num = myset.erase(80); //returns true (and deletes) if 80 is there in the list else returns 0. 
    cout<<"\n\n After doing myset.erase(80), "<<num<<" element is removed\n\n"; 
    cout<<"Contents of the modified set:\t"; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    cout << endl; 
 
 
    return 0; 
 
 } 
```

\`\` \`cpp Saída:- O conteúdo do myset: 9 20 30 65 80

Conteúdo do myset após a remoção de elementos inferiores a 30: 30 65 80

Depois de fazer myset.erase (80), 1 elemento é removido

Conteúdo do conjunto modificado: 30 65 \`\` \`

\### Fontes

1.  [Geeks para Geeks](https://www.geeksforgeeks.org/set-in-cpp-stl/)