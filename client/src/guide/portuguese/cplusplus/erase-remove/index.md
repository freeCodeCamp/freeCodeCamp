---
title: Erase–remove idiom
localeTitle: Apagar - remover idioma
---
## Descrição

Como remover elementos do container é uma pergunta comum da entrevista C ++, para que você possa ganhar alguns pontos de brownie, se você ler esta página cuidadosamente. A expressão apagar e remover é uma técnica de C ++ para eliminar elementos que preenchem um determinado critério de um contêiner. No entanto, é possível eliminar elementos com o tradicional loop escrito à mão, mas o idioma apagar-remover tem várias vantagens.

### Comparação

```cpp
// Using a hand-written loop 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 for (auto iter = v.cbegin(); iter < v.cend(); /*iter++*/) 
 { 
    if (is_odd(*iter)) 
    { 
        iter = v.erase(iter); 
    } 
    else 
    { 
        ++iter; 
    } 
 } 
 
 // Using the erase–remove idiom 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
```

Como você pode ver, o código com loop escrito à mão requer um pouco mais de digitação, mas também tem um problema de desempenho. Cada chamada de `erase` tem que avançar todos os elementos após o apagado, para evitar "lacunas" na coleção. A chamada `erase` várias vezes no mesmo container gera muita sobrecarga de movimentação dos elementos.

Por outro lado, o código com o idioma apagar-remover não é apenas mais expressivo, mas também é mais eficiente. Primeiro, use `remove_if/remove` para mover todos os elementos que não se encaixam nos critérios de remoção para a frente do intervalo, mantendo a ordem relativa dos elementos. Então, depois de chamar `remove_if/remove` , uma única chamada de `erase` exclui todos os elementos restantes no final do intervalo.

### Exemplo

```cpp
#include <vector> // the general-purpose vector container 
 #include <iostream> // cout 
 #include <algorithm> // remove and remove_if 
 
 bool is_odd(int i) 
 { 
    return (i % 2) != 0; 
 } 
 
 void print(const std::vector<int> &vec) 
 { 
    for (const auto& i : vec) 
        std::cout << i << ' '; 
    std::cout << std::endl; 
 } 
 
 int main() 
 { 
    // initializes a vector that holds the numbers from 1-10. 
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
    print(v); 
 
    // removes all elements with the value 5 
    v.erase(std::remove(v.begin(), v.end(), 5), v.end()); 
    print(v); 
 
    // removes all odd numbers 
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
    print(v); 
 
    // removes multiples of 4 using lambda 
    v.erase(std::remove_if(v.begin(), v.end(), [](int n) { return (n % 4) == 0; }), v.end()); 
    print(v); 
 
    return 0; 
 } 
 
 /* 
 Output: 
 1 2 3 4 5 6 7 8 9 10 
 1 2 3 4 6 7 8 9 10 
 2 4 6 8 10 
 2 6 10 
 */ 
```

### Fontes

"Erase – remove idiom" Wikipedia: A enciclopédia livre. Wikimedia Foundation, Inc. [en.wikipedia.org/wiki/Erase-remove\_idiom](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom)

Meyers, Scott (2001). STL Efetivo: 50 Formas Específicas de Melhorar o Uso da Biblioteca de Modelos Padrão. Addison-Wesley.