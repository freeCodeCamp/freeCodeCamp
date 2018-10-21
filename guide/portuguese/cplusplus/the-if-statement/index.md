---
title: C++ If Statement
localeTitle: Declaração de C ++ If
---# A instrução IF.

**O que faz uma declaração if?**

*   A instrução `if` avalia a expressão de teste presente dentro dos parênteses.
*   A instrução `if` usa operadores relacionais e lógicos para criar expressões lógicas.

* * *

A forma geral da declaração `if` :

```cpp
  if (Test Expression / Condition) 
  { 
    // Block of statements if test expression is True 
  } 
```

Se o valor da expressão de teste for **verdadeiro** , o bloco de código dentro da instrução if é executado.

Se o valor da expressão de teste for **falso** , então o bloco de código dentro da instrução if é ignorado e seu código continua.

Exemplo `if` declaração:

```cpp
  int a = 10; 
 
  // true statement 
  if (a < 20) 
  { 
    // execute this block of code 
  } 
 
  // false statement 
  if (a < 0) 
  { 
    // Skip this block of code. 
  } 
```

Exemplo em C ++:

```cpp
  // Program to check if number entered by the user is positive 
  // If negative, the block of code is skipped 
 
  #include <iostream> 
  using namespace std; 
 
  int main() 
  { 
    int no ; 
    cout << "Enter a number: "; 
    cin >> no; 
 
    // if statement to check if the number is positive 
    if ( no > 0) 
    { 
      cout << "You have entered a positive number: " << no << endl; 
    } 
 
    // If number is not positive, then if statement is skipped a program continues 
    cout << "This step is always printed" << endl; 
 
    return 0; 
  } 
```

**Saída:**

SAÍDA 1:
```
Enter a number: 5 
 You have entered a positive number: 5 
 This step is always printed 
 ``` 
 This is the output when the number entered is positive. 
 
 OUTPUT 2: 
```

Digite um número: -1 Este passo é sempre impresso \`\` \` Esta é a saída quando o número digitado é negativo.

[Experimente o código você mesmo! :)](https://repl.it/Mg9X)

_Parabéns. Este é o final do artigo sobre a declaração IF_

**Boa sorte para todos vocês**

**Codificação Feliz! :)**

**Sinta-se à vontade para fazer qualquer pergunta sobre a página GitHub do [FreeCodeCamp](https://forum.freecodecamp.org/) ou [sobre o Fórum do FreeCodeCamp.](https://forum.freecodecamp.org/)**