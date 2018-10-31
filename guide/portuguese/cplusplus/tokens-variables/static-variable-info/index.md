---
title: Variables
localeTitle: Variáveis
---
Vamos discutir algo conhecido como variáveis. Variáveis ​​são como um balde. Você pode colocar algo nele e depois alterá-lo depois, quando necessário. Em C ++, existem muitos tipos de variáveis ​​como Integers, Strings, Booleans e muitos outros. Vamos ver um programa simples usando variáveis ​​inteiras. Inteiros armazenam números inteiros positivos, negativos ou nulos. Números inteiros não são números fracionários, por exemplo, 1/2, 1/4 e 1/5. Vamos olhar para um programa simples que usa um inteiro variável.

```cpp
#include <iostream> 
 using namespace std ; 
 int main() 
 { 
    int a;          // Declare an integer variable a 
    a = 5;          // Assign value of 5 to variable a 
    cout << a;      // Display the value of variable a which contains 5 
    return 0; 
 } 
```

Quando você executa este programa, você verá 5 exibidos na tela

*   Note que no programa acima, // é colocado depois das linhas. O símbolo "//" é para comentar nosso código. Código após o símbolo "//" não é executado na linha onde está colocado.
    
*   Na linha 5, uma variável inteira simples é declarada.
    
*   Na linha 6, o valor 5 é atribuído à variável a. Agora, sempre que usamos a variável a em nosso programa, seu valor será 5 a menos que nós o mudemos.
    
*   Na linha 7, exibimos o valor da variável ae 5 é impresso na tela.
    

### Escopo das Variáveis

Todas as variáveis ​​têm sua área de funcionamento, e fora desse limite elas não mantêm seu valor, esse limite é chamado de escopo da variável. Para a maioria dos casos é entre as chaves, em que a variável é declarada que existe uma variável, não fora dela. Vamos estudar as classes de armazenamento mais tarde, mas a partir de agora, podemos dividir as variáveis ​​em dois tipos principais,

\*Variáveis ​​globais.

\* Variáveis ​​locais.

#### Variáveis ​​globais

Variáveis ​​globais são aquelas que já foram declaradas e podem ser usadas durante toda a vida útil do programa por qualquer classe ou função. Eles devem ser declarados fora da função main (). Se apenas declarado, eles podem receber diferentes valores em diferentes momentos da vida útil do programa. Mas mesmo que eles sejam declarados e inicializados ao mesmo tempo fora da função main (), eles também podem receber qualquer valor em qualquer ponto do programa.

Exemplo: Apenas declarado, não inicializado.

```cpp
include <iostream> 
 using namespace std; 
 int x;                // Global variable declared 
 int main() 
 { 
 x=10;                 // Initialized once 
 cout <<"first value of x = "<< x; 
 x=20;                 // Initialized again 
 cout <<"Initialized again with value = "<< x;` 
 } 
```

#### Variáveis ​​Locais

Variáveis ​​locais são as variáveis ​​que existem apenas entre as chaves, nas quais são declaradas. Fora que eles estão indisponíveis e leva a erro de tempo de compilação.

Exemplo:

```cpp
include <iostream> 
 using namespace std; 
 int main() 
 { 
 int i=10; 
 if(i<20)        // if condition scope starts 
  { 
    int n=100;   // Local variable declared and initialized 
  }              // if condition scope ends 
 cout << n;      // Compile time error, n not available here 
 } 
```

Agora vamos ler sobre um novo tipo de variável

#### Variável estática

Variáveis ​​estáticas: quando uma variável é declarada como estática, o espaço para ela é alocado para o tempo de vida do programa. Mesmo que a função seja chamada várias vezes, o espaço para a variável estática é alocado apenas uma vez e o valor da variável na chamada anterior é realizado na próxima chamada de função. Isso é útil para implementar corrotinas em C / C ++ ou qualquer outro aplicativo em que o estado anterior da função precise ser armazenado. Em termos leigos, isso significa que uma variável normal quando sai do escopo perde sua identidade (valor), mas uma variável estática tem um escopo global e retém seu valor até o final do programa, mas ao contrário da variável global, não é necessário declará-lo no início do programa.

#### EXTRA-

Static é uma palavra-chave em C ++ usada para dar características especiais a um elemento. Elementos estáticos são alocados em armazenamento apenas uma vez na vida útil de um programa na área de armazenamento estático. E eles têm um escopo até a vida útil do programa.

#### CÓDIGO-
```
#include <iostream> 
 #include <string> 
 using namespace std; 
 
 void howstaticworks() 
 { 
    static int count = 0;  // static variable 
    cout << count << " "; 
 
    /* value is updated and 
     will be carried to next 
     function calls*/ 
    count++; 
 } 
 
 int main() 
 { 
    for (int i=0; i<5; i++) 
        howstaticworks(); 
    return 0; 
 } 
```

#### Tente você mesmo

basta copiar o código e colá-lo no link dado. Execute no IDE - https://ideone.com/

Saída: 0 1 2 3 4

Você pode ver no programa acima que a contagem de variáveis ​​é declarada como estática. Então, seu valor é realizado através das chamadas de função. A contagem de variáveis ​​não está sendo inicializada para cada vez que a função é chamada.

Vamos experimentar o mesmo código removendo a palavra-chave "estática" e adivinhar a saída e compará-la com uma na IDE. A estática é agora convertida em variável normal