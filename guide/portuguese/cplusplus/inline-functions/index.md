---
title: Inline Functions in C++
localeTitle: Funções Inline em C ++
---
## Funções Inline em C ++

Quando o programa executa a instrução de chamada de função, a CPU armazena o endereço de memória da instrução após a chamada de função, copia os argumentos da função na pilha e, finalmente, transfere o controle para a função especificada. A CPU então executa o código de função, armazena o valor de retorno da função em um local / registro de memória predefinido e retorna o controle para a função de chamada. Isso pode se tornar uma sobrecarga se o tempo de execução da função for menor que o tempo de chaveamento da função chamador para a função chamada (chamada). Para funções que são grandes e / ou executam tarefas complexas, a sobrecarga da chamada de função é geralmente insignificante comparada à quantidade de tempo que a função leva para ser executada. No entanto, para funções pequenas e comumente usadas, o tempo necessário para fazer a chamada de função é geralmente muito maior do que o tempo necessário para realmente executar o código da função. Essa sobrecarga ocorre para pequenas funções porque o tempo de execução da função pequena é menor que o tempo de comutação.

C ++ fornece funções embutidas para reduzir a sobrecarga da chamada de função. A função inline é uma função que é expandida em linha quando é chamada. Quando a função inline é chamada código inteiro, a função inline é inserida ou substituída no ponto da chamada de função inline. Essa substituição é executada pelo compilador C ++ no tempo de compilação. A função inline pode aumentar a eficiência se for pequena. A sintaxe para definir a função inline é:

```cpp
inline return-type function-name(parameters) 
 { 
    // function code 
 } 
```

Lembre-se, inlining é apenas um pedido para o compilador, não um comando. O compilador pode ignorar a solicitação de inlining. O compilador não pode executar inlining em tais circunstâncias como:

*   Se uma função contiver um loop. (por enquanto, do-while)
*   Se uma função contiver variáveis ​​estáticas.
*   Se uma função é recursiva.
*   Se um tipo de retorno de função é diferente de void, e a declaração de retorno não existe no corpo da função.
*   Se uma função contiver uma instrução switch ou goto.

### Funções inline fornecem as seguintes vantagens:

*   A sobrecarga da chamada de função não ocorre.
*   Ele também salva a sobrecarga de variáveis ​​push / pop na pilha quando a função é chamada.
*   Também economiza a sobrecarga de uma chamada de retorno de uma função.
*   Quando você inline uma função, você pode habilitar o compilador para executar otimização específica do contexto no corpo da função. Essas otimizações não são possíveis para chamadas de função normais. Outras otimizações podem ser obtidas considerando os fluxos de contexto de chamada e o contexto chamado.
*   A função inline pode ser útil (se for pequena) para sistemas embarcados, pois inline pode render menos código do que o preâmbulo e retorno da chamada de função.

### Desvantagens da função inline:

*   As variáveis ​​adicionadas da função inline consomem registradores adicionais, After in-line function se o número de variáveis ​​que usarão registradores aumenta do que eles podem criar sobrecarga na utilização de recursos de variáveis ​​de registro. Isso significa que quando o corpo da função inline é substituído no ponto da chamada de função, o número total de variáveis ​​usadas pela função também é inserido. Assim, o número de registros a ser usado para as variáveis ​​também será aumentado. Então, se após a função inline os números das variáveis ​​aumentarem drasticamente, isso certamente causaria uma sobrecarga na utilização do registro.
    
*   Se você usar muitas funções embutidas, o tamanho do arquivo executável binário será grande, devido à duplicação do mesmo código.
    
*   O inlining em excesso também pode reduzir a taxa de acertos do cache de instruções, reduzindo, assim, a velocidade de busca da instrução, desde a memória cache até a memória principal.
    
*   A função inline pode aumentar a sobrecarga de tempo de compilação se alguém alterar o código dentro da função inline e todo o local de chamada tiver que ser recompilado, pois o compilador precisaria substituir todo o código novamente para refletir as alterações, caso contrário, ele continuará com a funcionalidade antiga.
    
*   Funções embutidas podem não ser úteis para muitos sistemas embarcados. Porque em sistemas embarcados o tamanho do código é mais importante que a velocidade.
    
*   Funções inline podem causar thrashing porque inlining pode aumentar o tamanho do arquivo executável binário. Bater na memória faz com que o desempenho do computador seja degradado.
    

O programa a seguir demonstra esse conceito:

```cpp
#include <iostream> 
 using namespace std; 
 class operation 
 { 
    int a,b,add,sub,mul; 
    float div; 
 public: 
    void get(); 
    void sum(); 
    void difference(); 
    void product(); 
    void division(); 
 }; 
 inline void operation :: get() 
 { 
    cout << "Enter first value:"; 
    cin >> a; 
    cout << "Enter second value:"; 
    cin >> b; 
 } 
 
 inline void operation :: sum() 
 { 
    add = a+b; 
    cout << "Addition of two numbers: " << a+b << "\n"; 
 } 
 
 inline void operation :: difference() 
 { 
    sub = ab; 
    cout << "Difference of two numbers: " << ab << "\n"; 
 } 
 
 inline void operation :: product() 
 { 
    mul = a*b; 
    cout << "Product of two numbers: " << a*b << "\n"; 
 } 
 
 inline void operation ::division() 
 { 
    div=a/b; 
    cout<<"Division of two numbers: "<<a/b<<"\n" ; 
 } 
 
 int main() 
 { 
    cout << "Program using inline function\n"; 
    operation s; 
    s.get(); 
    s.sum(); 
    s.difference(); 
    s.product(); 
    s.division(); 
    return 0; 
 } 
```

Saída:
```
Enter first value: 45 
 Enter second value: 15 
 Addition of two numbers: 60 
 Difference of two numbers: 30 
 Product of two numbers: 675 
 Division of two numbers: 3 

```