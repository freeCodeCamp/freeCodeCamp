---
title: Vectors
localeTitle: Vetores
---
## Vetores

O `vector` C ++ é um dos contêineres mais usados ​​em C ++. Um contêiner é uma estrutura de dados que armazena uma coleção de objetos que podem variar de ordenados (como `vector` !) A não ordenados (como `set` ). Todos os contêineres C ++ possuem um conjunto diferente de funções que permitem acessar um objeto nessa coleção, modificar e fazer um loop sobre os elementos nessa estrutura de dados.

Os vetores são semelhantes aos ArrayLists em Java, pois você não precisa especificar o comprimento do contêiner. Comparado a um array onde você tem que definir o tamanho, seu tamanho depende do seu conteúdo.

`std::vector` faz parte da biblioteca padrão C ++ (daí o prefixo `std::` e permite que você armazene dados contíguos do mesmo tipo de dados. NOTA: **Todos os objetos dentro de um vetor devem ser do mesmo tipo de dados**

O tipo de dados armazenado em um vetor fica entre os colchetes angulares ao lado da palavra-chave vector. Por exemplo, se você gostaria de armazenar uma coleção de strings, o vetor seria `std::vector<std::string> vector_name`

_NOTA_ : Você deve incluir a biblioteca de vetores sempre que usar vetores!

`#include <vector>`

### Construção de vetor

Existem muitas maneiras convincentes de construir um vetor.

Usando uma lista de iniciadores - onde os objetos são listados dentro de um conjunto de chaves: `{ }`

```cpp
std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5 
 std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world" 
 std::vector<bool> v; // v is an empty vector 
```

Construindo-o a partir de outro vetor (isso é conhecido como construção de cópia)

```cpp
std::vector<double> a{1.0, 2.0, 3.0}; 
 std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0 
```

Inicializando-o com o mesmo elemento:

```cpp
std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1 
```

### Iteradores de vetores

Iteradores podem ser considerados como ponteiros usados ​​especificamente para navegar em contêineres (como vetores). Os iteradores mais importantes são `begin()` e `end()` . `begin()` retorna um ponteiro para o primeiro item em um vetor ao passo que `end()` aponta para uma posição após o último item em um vetor. Como tal looping através de um vetor pode ser feito como:

```cpp
std::vector<int> vec{1, 2, 3}; 
 
 for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){ 
    // since vec_it is a pointer and points to the memory address of the item 
    // inside the vector, vec_it must be dereferenced using '*' 
    std::cout << *it << '\n'; 
 } 
 /*  Output 
    1 
    2 
    3 
 */ 
```

### Modificando um vetor

Empurrando itens para um vetor:

```cpp
std::vector<int> vec; // constructs an empty vector 
 
 for (int i = 0; i < 10; i = i + 2){ 
    vec.push_back(i); 
 } 
 // vec now holds [0, 2, 4, 6, 8] 
```

Inserir um item em uma determinada posição é um pouco diferente. A inserção do vetor C ++ função funciona em iteradores. Ele irá inserir o item dado uma posição antes do dado iterador.

```cpp
std::vector<unsigned int> vec{3, 400, 12, 45}; 
 
 auto iter = vec.begin() + 2; // iter now points to '12' 
 vec.insert(iter, 38); // inserts '38' before '12' 
 
 // vec: [3, 400, 38, 12, 45] 
```

### Acesso ao elemento

A biblioteca padrão fornece diferentes funções para acessar determinados elementos em seu vetor.

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 
 std::string first_item = a.front(); // gets the first item of the vector ("test") 
 std::string last_item = a.back(); // gets the last item in the vector ("access") 
 
 // To get an element at a specific index (remember: vector indices start at 0) 
 std::string second_item = a.at(2); // gets "element" 
 // OR 
 std::string second_item = a[2]; // gets "element" 
```

### Looping sobre elementos em um `vector`

Looping sobre elementos em um C ++ `std::vector` é bem diferente do loop de elementos em um vetor em JavaScript ou Ruby. Devido ao fato do C ++ ser uma pequena abstração de C, você só pode fazer o loop de elementos usando essas pequenas variáveis ​​chamadas iteradores para acessar cada elemento. Os iteradores geralmente vêm na forma de ponteiros, que são variáveis ​​que armazenam o endereço de memória de outra variável. Você pode aprender mais sobre ponteiros [aqui](https://www.tutorialspoint.com/cplusplus/cpp_pointers.htm) . No entanto, como os iteradores agem como ponteiros (ou vice-versa), para ver para o que eles apontam, é necessário desreferencia-lo em uma variável do tipo apropriado. Como vamos fazer isso? AQUI. NÓS. IR!

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 for(auto it = v.begin(); it != v.end(); it++) { //notice use of auto keyword 
    cout<<*it<<endl; //Will print out string that the iterator is currently ppointing to 
 } 
```

A partir daqui, você pode fazer todos os tipos de coisas legais, como manipular o vetor ou mexer com a ordem que quiser!

### Algumas funções de membro úteis

A biblioteca de modelos padrão (STL) também fornece diferentes _métodos_ para você:

```cpp
std::vector.size(); // returns the size of the vector (the number of positions in the vector) 
 std::vector.begin(); // returns an iterator which is a pointer to the beginning of the vector 
 std::vector.end(); // returns an iterator which is a pointer to the end of the vector 
 std::vector.empty(); // returns true if the vector is empty, otherwise returns false. 
 std::vector.front(); // returns the first element of the vector. 
 std::vector.back(); // returns the last element of the vector. 
 std::vector.push_back(n); // inserts the element "n" to the end of the vector. 
 std::vector.pop_back(n); // removes the last element of the vector 
```

### Iterador de vetor

Os iteradores fornecem outro método para acessar elementos no seu vetor.

Declaração Iterator.

```cpp
std::vector<int> v; 
 //Iterator delcaration for the above vector will correspond to 
 std::vector<int>::iterator it; 
```

Usando o iterador para imprimir elementos do vetor usando loop

```cpp
for(it=v.begin(); it!=v.end(); ++it) 
 //std::vector::begin and std::vector::end return iterator pointing to first and last element of the vector respectively. 
  cout<<*it; 
```

### Iterando através de um vetor

Existem diferentes maneiras de percorrer um vetor e acessar seu conteúdo. Os seguintes formulários são equivalentes, o primeiro envolve o uso de uma expressão baseada em intervalo (desde C ++ 11), o segundo usa iteradores e o último é uma iteração baseada em índice.

\`\` \`cpp

# incluir

# incluir

// Primeiro declare o vetor std :: vector myVector {1, 2, 3, 4, 5}; // a é um vetor de 5 ints: 1, 2, 3, 4 e 5

// Usando um loop baseado em intervalo (desde C ++ 11) for (int element: myVector) {// Lê como "para cada elemento no myVector" std :: cout << "O elemento é" << element << std :: endl; }

// Usando um iterador std :: vector :: iterador; // Declara o iterador for (it = myVector.begin (); it! = myVector.end (); ++ ele) { std :: cout << "O elemento é" << \* ele << std :: endl; // Dereference o iterador para acessar seus dados }

// Usando índices para (std :: vector :: size\_type i = 0; i! = myVector.size (); i ++) { std :: cout << "O elemento é" << myVector \[i\] << std :: endl; // Dereference o iterador para acessar seus dados }
```
### Sorting A Vector In Ascending Order 
 Sorting a vector based on ascending order can be done with the help of Sort() in C++. 
```

cpp

# incluir

# incluir

# incluir

usando namespace std;

int main () {

vetor v {10, 5, 82, 69, 64, 70, 3, 42, 28, 0}; sort (v.begin (), v.end ());

cout << "Conteúdo do vetor classificado em ordem crescente: \\ n"; para (int e: v) { cout << e << ""; }

return 0; }
```
### Sorting Vector In Descending Order 
 Sorting Vector in descending order can be done with the help of third argument namely greater<int>() in Sort() in C++. 
```

cpp

# incluir

# incluir

# incluir

usando namespace std;

int main () {

vetor v {10, 5, 82, 69, 64, 70, 3, 42, 28, 0}; sort (v.begin (), v.end (), maior ());

cout << "Conteúdo do vetor classificado em ordem crescente: \\ n"; para (int e: v) { cout << e << ""; }

return 0; } \`\` \`