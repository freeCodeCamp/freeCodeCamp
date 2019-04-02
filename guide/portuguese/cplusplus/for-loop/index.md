---
title: For Loop
localeTitle: Para loop
---
Um For Loop é uma instrução repetitiva que é usada para verificar alguma condição e, em seguida, com base na condição, um bloco de código é executado repetidamente até que a condição especificada seja satisfeita.

O loop for é distinguido de outras instruções de loop através de um contador de loop explícito ou uma variável de loop que permite que o corpo do loop saiba o seqüenciamento exato de cada iteração.

Portanto, um loop for é uma estrutura de controle de repetição que permite escrever com eficiência um loop que precisa executar um número específico de vezes.

## Sintaxe
```
for ( init; condition; increment ) { 
   statement(s); 
 } 
```

É permitido colocar o incremento dentro do loop for como em um loop while. Ou seja, uma sintaxe como essa também pode funcionar.
```
for ( init; condition;) { 
   statement(s); 
   increment; 
 } 
```

### nisso

Esta etapa permite declarar e inicializar qualquer variável de controle de loop. Essa etapa é executada primeiro e apenas uma vez.

### condição

Em seguida, a condição é avaliada. Se for verdade, o corpo do loop é executado. Se for falso, o corpo do loop não é executado e o fluxo de controle pula para a próxima iteração (repetição de um processo).

### atualizar

A instrução de atualização é usada para alterar a variável de loop usando operações simples como adição, subtração, multiplicação ou divisão. A instrução de atualização é executada após a execução do corpo do loop.

## IMPLEMENTAÇÃO:

```C++
#include <iostream> 
 using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std:: 
 
 int main () { 
   // for loop execution 
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20 
      cout << "value of a: " << a << endl; 
   } 
 
   return 0; 
 }``` 
 
 Output: 
 value of a: 10 
 value of a: 11 
 value of a: 12 
 value of a: 13 
 value of a: 14 
 value of a: 15 
 value of a: 16 
 value of a: 17 
 value of a: 18 
 value of a: 19 
 
 ##Single lined loop 
 The body of the for loop need not be enclosed in braces if the loop iterates over only one satatement. 
 ##Example 
```

c ++ #incluir usando namespace std;

int main () { // Single line for loop para (int a = 10; a <20; a = a + 1) cout << "valor de a:" << a << endl;

return 0; } \`\` \`

Isso geraria a mesma saída do programa anterior. ou seja Saída: valor de: 10 valor de um: 11 valor de: 12 valor de: 13 valor de a: 14 valor de: 15 valor de um: 16 valor de: 17 valor de um: 18 valor de um: 19
```
## Explanation 
 Here's the initialization condition is first set to a=10. The loop first checks for this condition. It then checks for the condition expression ie a<20 which holds true as 10<20(for the first case). Now the body of the loop is executed and we get the output "Value of a: 10". Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' gets updated to 11 and the same steps are followed (as above) until the value of v reaches less than 20 ie 19. 
 
 # Range-based for-loop 
 C++ also has what we call range-based for loops which iterates through all the elements of a container(eg array). 
 
 ## Syntax 
```

para (elemento: container) afirmações); }

int \[5\] array = {1, 2, 3, 4, 5} para (int i: array) cout << i << endl; }

Saída: 1 2 3 4 5 \`\` \`