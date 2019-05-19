---
title: Tokens Part 1
localeTitle: Tokens Parte 1
---
### O que são tokens?

Tokens são as menores unidades de um programa que são importantes para o compilador. Existem diferentes tipos de tokens:

*   Palavras-chave
    
*   Operadores
    
*   Pontuadores
    
*   Literais
    
*   Identificadores
    
*   **Combinação de fichas forma uma expressão**
    

### O que são variáveis?

*   Definição de livro de texto: As variáveis ​​são nomeadas locais de memória cujos dados podem ser alterados.

*   Mas eu gostaria que você pensasse em uma variável para ser algo como uma caixa, algo assim: ![Img](https://cdn-media-1.freecodecamp.org/imgr/YdbgWHL.png)
    

Então, por exemplo: Estou mudando para um novo lugar e preciso arrumar minhas coisas em caixas. Assim, vêm 2 coisas para minha mente **Que tipo de material será armazenado na caixa, de modo que o tamanho da caixa seja conhecido (o tipo de dados)** e **Como eu identifico a caixa? (Nomeando a variável)**  
Portanto, sabemos que uma variável em C ++ precisa de um _nome_ e um _tipo de dados_ e que o valor armazenado neles pode ser alterado.

### Tipos de dados em C ++:

Ao declarar variáveis ​​em c ++, elas devem ter um nome para o qual você irá referenciar mais tarde, um valor (constante ou não) e um tipo. O tipo informará ao compilador os valores que a variável pode usar, as operações possíveis e economizará um certo espaço no memmory. Em c ++ existem dois tipos de dados:

*   Tipo simples
*   Tipo de estrutura

### Tipos de dados simples

*   Booleano - bool Funciona como um interruptor, pode ser ligado ou desligado.
*   Caráter - char Armazena um único caractere.
*   Inteiro - int Armazena um [inteiro](https://en.wikipedia.org/wiki/Integer) .
*   Ponto flutuante - flutuar Eles podem usar decimais.
*   Duplo ponto flutuante - duplo Precisão dupla do tipo flutuante.

Aqui você pode ver alguns exemplos:

```cpp
bool GameRunning = true; 
 char a; 
 int x = 2; 
```

#### Esses tipos também podem ser modificados com modificadores como:

assinado sem assinatura curto longo

### Tipo de dados de estrutura

#### Identificadores

*   Identificadores são os nomes dados a uma variável ou uma classe ou uma função ou qualquer função definida pelo usuário.

## Regras para nomear uma variável:

*   Comece a nomear com uma letra de AZ ou az.
*   Os números podem seguir a primeira letra, mas não podemos começar a nomear com números.
*   NÃO é permitido o uso de espaços ou caracteres especiais, em vez disso, use um UNDERSCORE \_.

#### Declarando um variabe:

A sintaxe é a seguinte < _tipo de dados_ > < _nome da variável_ >; ou < _tipo de dados_ > < _nome da variável_ > = < _valor_ >; se também quisermos inicializar a variável.

Por exemplo : `cpp int a ; //declaring a variable named 'a' of type integer. a=4; //initializing a variable int b = 5 ; //declaring and initializing a variable 'b' of type integer.`

**Exemplos de declaração de uma variável:**

```cpp
int a9; 
 char A; 
 double area_circle; 
 long l; 
```

**Formas erradas de declarar variáveis**

```cpp
int 9a; 
 char -a; 
 double area of circle; 
 long l!!; 
```

*   Nomes variáveis ​​não podem começar com um número
*   Caracteres especiais não são permitidos
*   Espaços não são permitidos

Você pode imaginar caixas diferentes de tamanhos diferentes e armazenar coisas diferentes como variáveis ​​diferentes.

**NOTAS :**

1.  **O compilador C ++ ignora os espaços em branco e eles geralmente são usados ​​para embelezar o código, de modo que seja fácil para qualquer programador depurar ou entender o código.**
2.  **Se uma variável não for inicializada, ela contém um valor de lixo. Deixe-me dar um exemplo:**

### Escopo das Variáveis

Todas as variáveis ​​têm sua área de funcionamento, e fora desse limite elas não mantêm seu valor, esse limite é chamado de escopo da variável. Para a maioria dos casos é entre as chaves, em que a variável é declarada que existe uma variável, não fora dela. Vamos estudar as classes de armazenamento mais tarde, mas a partir de agora, podemos dividir as variáveis ​​em dois tipos principais,

\*Variáveis ​​globais.

\* Variáveis ​​locais.

#### Variáveis ​​globais

Variáveis ​​globais são aquelas que já foram declaradas e podem ser usadas durante toda a vida útil do programa por qualquer classe ou função. Eles devem ser declarados fora da função main (). Se apenas declarado, eles podem receber diferentes valores em diferentes momentos da vida útil do programa. Mas mesmo que eles sejam declarados e inicializados ao mesmo tempo fora da função main (), eles também podem receber qualquer valor em qualquer ponto do programa.

Exemplo: Apenas declarado, não inicializado.

```cpp
#include <iostream> 
 using namespace std; 
 int x;                // Global variable declared 
 int main() 
 { 
 x=10;                 // Initialized once 
 cout <<"first value of x = "<< x; 
 x=20;                 // Initialized again 
 cout <<"Initialized again with value = "<< x; 
 } 
```

#### Variáveis ​​Locais

Variáveis ​​locais são as variáveis ​​que existem apenas entre as chaves, nas quais são declaradas. Fora que eles estão indisponíveis e leva a erro de tempo de compilação.

Exemplo:

```cpp
#include <iostream> 
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

### Variáveis ​​Constantes

Variável constante são as variáveis ​​que não podem ser alteradas. Por exemplo, se você precisasse de "pi" em seu código, você não desejaria alterá-lo após a inicialização.

Exemplo:

```cpp
#include <iostream> 
 using namespace std; 
 const double PI = 3.14159253; 
 int main() 
 { 
 //Calculating the area of a circle, using user provided radius 
 double radius; 
 //input and output explained in other guide 
 cin>>radius; 
 //pi*r^2 
 double area = PI*radius*radius; 
 cout<<area<<endl; 
 } 
```

### Valores de lixo em uma variável

Se uma variável não for inicializada, ela contém um valor de lixo. Por exemplo:

Então, em termos de caixas, você pode imaginar isso como -

![Img](https://cdn-media-1.freecodecamp.org/imgr/YdbgWHL.png)

\`\` \`cpp #incluir usando namespace std; int main () { int a; cout << "Valor do lixo em a:" << a << endl; // declarando a variável chamada 'a' do tipo inteiro a = 5; // initializing variable. cout << "Novo valor em um" << a << endl;

} \`\` \`

### A saída é:
```
Garbage value in a : 0 
 New value in a :  5 
```

Como você pode ver, já existe um valor armazenado em 'a' antes de atribuirmos um valor (aqui, é 0). Isso deve permanecer na mente de cada programador, de modo que, quando as variáveis ​​forem usadas, elas não criem um erro lógico e imprimam valores ilegíveis.

[Experimente o código você mesmo! :)](https://repl.it/Mg7j)

#### Palavras-chave :

_Palavras-chave são palavras reservadas que transmitem um significado especial ao compilador. Eles **NÃO PODEM** ser usados ​​para nomear em c ++._ Exemplos de palavras-chave: inline, operador, privado int, duplo, vazio, char, modelo, usando, virtual, break, caso, switch, amigo, etc.

**Cada uma dessas palavras-chave é usada para uma função especial em C ++.**

_Tokens parte 1 acabou. Vejo vocês campistas na [Parte 2](https://guide.freecodecamp.org/cplusplus/tokens-part-II) de Tokens :)_

**Boa sorte para todos vocês**

**Codificação Feliz! :)**

**Sinta-se à vontade para fazer qualquer pergunta sobre a página GitHub do [FreeCodeCamp](https://forum.freecodecamp.org/) ou [sobre o Fórum do FreeCodeCamp.](https://forum.freecodecamp.org/)**
