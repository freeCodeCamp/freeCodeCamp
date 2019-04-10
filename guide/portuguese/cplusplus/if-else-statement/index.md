---
title: If-Else Statement
localeTitle: Declaração If-Else
---## O que faz uma declaração If-Else?

*   A instrução If-Else é uma extensão da instrução If simples.
*   Na declaração if simples, se o valor da expressão de teste for falso, então pulamos o código do bloco e continuamos com nossa próxima instrução.
*   Porém, muitas vezes, queremos executar determinadas etapas se o valor da expressão de teste for falso.
*   Em tais casos, usamos a instrução if-else.

### Formulário Geral da Declaração If-Else

```cpp
if (test expression) 
 { 
  //statements that run if the test expression is true 
 } 
 else 
 { 
  //statements that run if the test expression is false 
 } 
```

### Exemplo de declaração If-Else

Se a expressão de teste for verdadeira:

```cpp
int a=10; 
 if (a < 20) // This expression is true, so... 
 { 
  //...the code in this block gets executed, and... 
 } 
 else 
 { 
  //...the code in this block gets skipped. 
 } 
 //program continues 
```

Se a expressão de teste for falsa:

```cpp
int a=10; 
 if (a>20) // This expression is false, so this time... 
 { 
  //...this code gets skipped... 
 } 
 else 
 { 
  //...and this code executes instead. 
 } 
 //program continues 
```

### Exemplo em C ++:

```cpp
//Program to check whether number entered by user is positive or negative 
 #include <iostream> 
 using namespace std; 
 int main() 
 { 
  int no; 
  cout << "Enter a number: " << endl; 
 
  cin >> no; 
 
  // condition to check if number is positive or negative 
  if (no >= 0) // positive 
  { 
    // block if value is true 
    cout << "You entered a positive number: " << no << endl; 
  } 
  else         // negative 
  { 
    // block if value is false 
    cout << "You entered a negative number: " << no << endl; 
  } 
 
  // program continues 
  cout << "This step is always printed" << endl; 
  return 0; 
 } 
```

#### Saída

*   Quando um número positivo é inserido:
```
Enter a number: 
 4 
 You entered a positive number: 4 
 This step is always printed 
```

*   Quando um número negativo é inserido:
```
Enter a number: 
 -200 
 You entered a negative number: -200 
 This step is always printed 
```

[Experimente o código você mesmo](https://repl.it/MzBq)

# **Sinta-se à vontade para fazer qualquer pergunta sobre a página GitHub do [FreeCodeCamp](https://forum.freecodecamp.org/) ou [sobre o Fórum do FreeCodeCamp.](https://forum.freecodecamp.org/)**

[Experimente o código você mesmo](https://repl.it/MzBq)

### Uso de if… else if… else ladder

Se tivermos que tomar decisões com base em mais de uma condição usando if mais. Nós usamos mais se a condição da seguinte forma -

```cpp
#include<iostream> 
 int main() 
 { 
    int score; 
    std::cout<<"Enter your score: \n"; 
    std::cin>>score; 
    if(score>=90) 
        std::cout<<"Top performance."; 
    else if(score<90 && score>=70) 
        std::cout<<"Good performance"; 
    else if(score<70 && score>=45) 
        std::cout<<"Average performance"; 
    else if(score<45 && score>=30) 
        std::cout<<"You can improve it."; 
   return 0; 
 } 
```

#### Saída
```
Enter your score: 
 85 
 Good performance 
```

### Outro exemplo de if… else if… else ladder

Suponha que o usuário tenha inserido dois números e vamos exibir se um dos números for maior que o outro. E se nenhum dos dois é maior que o outro, então imprimimos a declaração "Ambos são iguais".

Neste scinerio nós precisaremos de uma declaração if… else if… else ladder. O programa ficará assim:
```
#include<iostream> 
 using namespace std; 
 int main() 
 { 
    int number1,number2; 
    cout << "Enter first number: \n"; 
    cin >> number1; 
    cout << "Enter second number: \n"; 
    cin >> number2; 
 
    if(number1 > number2)     // Checks if the first number is greater than the second number 
    { 
        cout << "Number 1 is greater."; 
    } 
    else if(number2 > number1)    // Checks if the second number is greater than the first number 
    { 
        cout << "Number 2 is greater."; 
    } 
    else    // If both of the above cases return false, then both numbers are equal 
    { 
        cout << "Both the numbers are equal."; 
    } 
 
    return 0; 
 } 
```

#### Saída
```
Enter first number: 
 85 
 Enter second number: 
 86 
 Number 2 is greater. 
```

*   Observe que o programa só verificará a condição 'else if' quando a condição inicial 'if' não for satisfeita. E se nenhuma dessas condições for satisfeita, o último bloco 'else' será executado, imprimindo a declaração: "Ambos os números são iguais".
    
*   O tamanho da escada if… else if… else pode variar dependendo do problema que o programa está tentando resolver e do número de condições que precisam ser verificadas.
    

**Boa sorte para todos vocês**

**Codificação Feliz! :)**

**Sinta-se à vontade para fazer qualquer pergunta sobre a página GitHub [do freeCodeCamp.org](https://forum.freecodecamp.org/) ou sobre [o Fórum freeCodeCamp.org](https://forum.freecodecamp.org/)** .