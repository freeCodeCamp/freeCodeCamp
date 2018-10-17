---
title: Switch Case
localeTitle: Caso do interruptor
---
# Caso do interruptor

A instrução switch é como um conjunto de `if statements` .

É uma lista de possibilidades, com uma ação para cada possibilidade, e uma ação padrão opcional, caso nada mais seja avaliado como verdadeiro.

Nós saímos do interruptor por `break` . Se a instrução `break` não for atingida antes do início do próximo caso, a execução cairá e começará a executar o código no próximo caso.

## Sintaxe do switch… case

```c
switch (n) 
 { 
    case constant1: 
        // code to be executed if n is equal to constant1; 
        break; 
 
    case constant2: 
        // code to be executed if n is equal to constant2; 
        break; 
        . 
        . 
        . 
    default: 
        // code to be executed if n doesn't match any constant 
 } 
```

## Exemplo

Usar uma instrução switch em várias instruções if / else pode contribuir para mais velocidade e legibilidade.

```c
# include <stdio.h> 
 
 int main() { 
 
    char operator; 
    double firstNumber,secondNumber; 
 
    printf("Enter an operator (+, -, *, /): "); 
    scanf("%c", &operator); 
 
    printf("Enter two operands: "); 
    scanf("%lf %lf",&firstNumber, &secondNumber); 
 
    switch (operator) { 
        case '+': 
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber); 
            break; 
        case '-': 
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber); 
            break; 
        case '*': 
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber); 
            break; 
        case '/': 
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
            break; 
        // Operator is doesn't match any case constant (+, -, *, /) 
        default: 
            printf("Error! operator is not correct"); 
    } 
 
    return 0; 
 } 
```

## Saída:

```c
-> Enter an operator (+, -, *,): - 
 -> Enter two operands: 32.5 
 -> 12.4 
 -> 32.5 - 12.4 = 20.1 
```

## Revisão: alternar vs se mais

*   Verifique a Expressão de Teste: Uma instrução if-then-else pode testar expressões com base em intervalos de valores ou condições, enquanto uma instrução switch testa expressões com base apenas em um único número inteiro, valor enumerado ou objeto String.
*   Alternar melhor para ramificação Multi-way: Quando o compilador compila uma instrução switch, ele inspecionará cada uma das constantes de caso e criará uma “tabela de salto” que será usada para selecionar o caminho de execução, dependendo do valor da expressão. Portanto, se precisarmos selecionar entre um grande grupo de valores, uma instrução switch será executada muito mais rapidamente que a lógica equivalente codificada usando uma sequência de ifs-elses. O compilador pode fazer isso porque sabe que as constantes de caso são todas do mesmo tipo e simplesmente devem ser comparadas para igualdade com a expressão de troca, enquanto no caso de expressões if, o compilador não possui tal conhecimento.
*   if-else melhor para valores booleanos: As ramificações condicionais if-else são ótimas para condições de variáveis ​​que resultam em um booleano, enquanto as declarações de switch são ótimas para valores de dados fixos.
*   Velocidade: Uma declaração de troca pode ser mais rápida do que se o número de casos fosse bom. Se houver apenas alguns casos, pode não afetar a velocidade em qualquer caso. Prefira a opção se o número de casos for maior que 5, caso contrário você também poderá usar if-else.
*   Se um switch contiver mais de cinco itens, ele será implementado usando uma tabela de consulta ou uma lista de hash. Isso significa que todos os itens obtêm o mesmo tempo de acesso, em comparação com uma lista de se: s onde o último item leva muito mais tempo para ser alcançado, pois ele precisa avaliar todas as condições anteriores primeiro.
*   Clareza na legibilidade: um switch parece muito mais limpo quando você precisa combinar casos. Os ifs também são bastante vulneráveis ​​a erros. Falta uma declaração mais pode te atrapalhar. Adicionar / remover etiquetas também é mais fácil com um switch e torna seu código significativamente mais fácil de alterar e manter.