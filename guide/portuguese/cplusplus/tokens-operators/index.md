---
title: Operators
localeTitle: Operadores
---
# Operadores:

*   Os operadores permitem que você execute operações em seus dados.
*   Os dados que estão sendo operados são chamados de _operandos_ .
*   Os diferentes tipos de operadores em C ++ são:
*   _OPERANDOS_ são os dados em que o operador executa determinados comandos.
*   Os operadores são de 3 tipos: unário (funciona em 1 operando), binário (trabalha em 2 operandos), ternário (trabalha em 3 operandos).

### 1 Os operadores de I / O -

*   Esses operadores permitem direcionar entrada e saída.
    
    ## Oerador de entrada ">>" ##
    
    é usado para ler dados da entrada padrão (a instrução "cin").
    
    ## O operador de saída "<<"
    
    é usado para enviar saída na instrução `cout` .
    

### 2 Os operadores aritméticos -

*   Esses operadores permitem que você execute operações aritméticas básicas.

1.  O operador `+` _adiciona_ os dois operandos.
    
2.  O operador `-` _subtrai_ os dois operandos.
    
3.  O operador `*` _multiplica_ os dois operandos.
    
4.  O operador `/` _divide_ e fornece o _quociente_ dos dois operandos.
    
5.  O operador `%` _divide_ e fornece o _restante_ dos dois operandos. (Ou, para o leitor mais matematicamente inclinado, `a % b` é essencialmente o resultado de "um mod b"
    
    ### Exemplo de uso de operadores aritméticos:
    
```cpp
#include <iostream>
using namespace std;

int main()
{
        int a = 5; //1st operand
        int b = 10; //2nd operand
        
        cout << "+ operator " << a+b << "\n"; //Add
        cout << "- operator " << a-b << "\n"; //Subtract
        cout << "* operator " << a*b << "\n"; //Multiply
        cout << "/ operator " << b/a << "\n"; //Find Quotient
        cout << "modulus operator " << b%a << "\n"; //Find remainder
        
        return 0; 
}
 ```
 
SAÍDA:
```
+ operator 15 
 - operator -5 
 * operator 50 
 / operator 2 
 modulus operator 0 
```

[Experimente o código você mesmo! :)](https://repl.it/Mge9)

### O operador de incremento:

*   `++` é conhecido como o operador de incremento. Aumenta o valor de uma variável inteira em 1.

Os 2 tipos de incremento:

*   O pré-incremento primeiro incrementa o valor e depois o utiliza. Exemplo: `int a ; ++a;`
*   O pós-incremento primeiro usa a variável para em seguida, incrementá-la. Exemplo: `int b; b++;`

### O operador de decremento:

*   `--` é conhecido como o operador de decremento. Diminui o valor de uma variável inteira por 1.

Os 2 tipos de decremento:

*   Pré-decremento primeiro decrementa o valor, para em seguida usá-lo. Exemplo: `int a ; --a;`
*   Pós-decremento primeiro usa a variável e em seguida, a diminui. Exemplo: `int b; b--;`

Exemplo de operadores de incremento e decremento:

```cpp
#include <iostream>
using namespace std;

int main()
{
        int a = 5; //1st operand
        int b = 10; //2nd operand
        
        cout << "+ operator " << a+b << "\n"; //Add
        cout << "- operator " << a-b << "\n"; //Subtract
        cout << "* operator " << a*b << "\n"; //Multiply
        cout << "/ operator " << b/a << "\n"; //Find Quotient
        cout << "modulus operator " << b%a << "\n"; //Find remainder
        
        return 0; 
}
```
 
 OUTPUT :
```cpp
+ operator 15
- operator -5
* operator 50
/ operator 2
modulus operator 0
```

[Experimente o código você mesmo! :)](https://repl.it/Mgg4/2)

### 3: Operadores Relacionais:

*   Esses operadores nos dizem a relação entre dois operandos e retornam um valor booleano (0 ou 1). Se a relação é `true` (verdadeira) então resultará em 1. Se a relação for `false` (falsa), resultará em 0.
    
*   Os 6 operadores relacionais são:
    
    1.  Menor que `<`
    2.  Maior do que `>`
    3.  Menor ou igual a `<=`
    4.  Maior que ou igual a `>=`
    5.  Igual a `==`
    6.  Não é igual a `!=`

### 4: Operadores Lógicos:

*   Esses operadores combinam expressões para operações lógicas. Eles são :

1.  Lógico E `&&` : Avalia para verdadeiro se ambos os valores forem verdadeiros.
    
2.  Lógica OU `||` : Avalia como verdadeiro se algum valor for verdadeiro.
    
3.  Lógico NÃO `!` : Se a _expressão_ for verdadeira, então _! A expressão_ é falsa. Este operador inverte o valor e é um operador unário.
    
    ### 5\. Operadores Ternários:
    
    O operador `?:` É o operador ternário, ou o _operador condicional_ , porque ele pode ser usado para substituir uma instrução `if else` , ou mesmo uma declaração `if else if` . A sintaxe:
    

`condition ? ValueIfTrue : ValueIfFalse` . Isso se expande para:

```cpp
if(condition) 
 ValueIfTrue; 
 else ValueIfFalse; 
```

Chamar `ValueIfTrue` um valor é um pouco errado, já que não precisa ser um número. Algo assim:

`condition ? FirstLevelTrueValue : ConditionIfFalse ? SecondLevelTrueValue : SecondLevelFalseValue` também funciona e é interpretado da seguinte maneira `if else if` :

```cpp
if(condition) 
 FirstLevelTrueValue; 
 else if(ConditionIfFalse) 
 SecondLevelTrueValue; 
 else SecondLevelFalseValue; 
```

Da mesma forma, instruções `if` aninhadas também podem ser feitas usando operadores ternários.

_Camper, agora você sabe quais são os tokens. _ _PARABÉNS_

**Boa sorte para todos vocês**

**Codificação Feliz! :)**

**Sinta-se à vontade para fazer qualquer pergunta sobre a página GitHub do [FreeCodeCamp](https://forum.freecodecamp.org/) ou [sobre o Fórum do FreeCodeCamp.](https://forum.freecodecamp.org/)**
