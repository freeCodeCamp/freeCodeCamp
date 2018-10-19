---
title: For Loop
localeTitle: Loop For
---
Um For Loop é uma instrução repetitiva que é usada para verificar alguma condição e, em seguida, com base na condição, um bloco de código é executado repetidamente até que a condição especificada seja satisfeita.

O loop for é distinguido de outras instruções de loop através de um contador de loop explícito ou uma variável de loop que permite que o corpo do loop saiba o seqüenciamento exato de cada iteração.

Portanto, um loop for é uma estrutura de controle de repetição que permite escrever com eficiência um loop que precisa executar um número específico de vezes.

## Sintaxe
```
for ( inicialização; condição; atualização ) { 
   statement(s); 
 } 
```

É permitido colocar o incremento dentro do loop for como em um loop while. Ou seja, uma sintaxe como essa também pode funcionar.
```
for ( inicialização; condição;) { 
   statement(s); 
   atualização; 
 } 
```

### inicialização

Esta etapa permite declarar e inicializar qualquer variável de controle de loop. Essa etapa é executada primeiro e apenas uma vez.

### condição

Em seguida, a condição é avaliada. Se for verdade, o corpo do loop é executado. Se for falso, o corpo do loop não é executado e o fluxo de controle pula para a próxima iteração (repetição de um processo).

### atualização

A instrução de atualização é usada para alterar a variável de loop declarada na inicialização usando operações simples como adição, subtração, multiplicação ou divisão. A instrução de atualização é executada após a execução do corpo do loop.

## IMPLEMENTAÇÃO:

```C++
#include <iostream> 
 using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std:: 
 
 int main () { 
   // for loop execution 
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20 
      cout << "Valor de a: " << a << endl; 
   } 
 
   return 0; 
 }``` 
 
 Output: 
 Valor de a: 10 
 Valor de a: 11 
 Valor de a: 12 
 Valor de a: 13 
 Valor de a: 14 
 Valor de a: 15 
 Valor de a: 16 
 Valor de a: 17 
 Valor de a: 18 
 Valor de a: 19 
 
 ##Single lined loop 
 The body of the for loop need not be enclosed in braces if the loop iterates over only one satatement. 
 ##Example 
```

c ++ #incluir usando namespace std;

int main () { // Single line for loop for (int a = 10; a <20; a = a + 1) cout << "Valor de a:" << a << endl;

return 0; } \`\` \`

Isso geraria a mesma saída do programa anterior. ou seja Saída: Valor de a: 10 Valor de um: 11 Valor de: 12 Valor de: 13 Valor de a: 14 Valor de: 15 Valor de um: 16 Valor de: 17 Valor de um: 18 Valor de um: 19
```
## Explicação 
 Na etapa de inicialização, a é inicializado como a = 10. O loop então verifica a expressão da condição, por exemplo, a<20, que no caso é verdade, como 10<20 (para a primeira iteração). Agora, o corpo do loop é executado e nos temos a saída "Valor de a: 10". Então, a expressão de atualização é executa, e no caso adiciona 1 à variável 'a', e o valor é atualizado para 11, e os mesmos passos são seguidos (como acima) até que o valor de 'a' seja menor que 20, por exemplo, 19.
 
 # Loop for baseado em intervalo
 C++ também tem o que chamamos de loop for baseado em intervalo, que itera por todos os elementos de um container (ex. array). 
 
 ## Sintaxe
```

for (elemento: container) afirmações); {

int \[5\] array = {1, 2, 3, 4, 5}; for (int i: array) cout << i << endl; }

Saída: 1 2 3 4 5 \`\` \`
