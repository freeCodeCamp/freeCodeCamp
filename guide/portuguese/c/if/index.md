---
title: If
localeTitle: E se
---
# E se

A instrução if executa diferentes blocos de código com base nas condições.
```
if (condicao) { 
    // Faz algo quando `condicao` é verdadeiro 
 } 
 else { 
    // Faz algo quando `condicao` é falso 
 } 
```

Quando a `condicao` é verdadeira, o código dentro da seção `if` executado, caso `else` executado. Às vezes você precisaria adicionar uma segunda condição. Para facilitar a leitura, você deve usar uma instrução `else if` vez de aninhar `if` .
```
if (condicao) { 
    // Faz algo quando `condicao` é verdadeiro 
 } 
 else if (outraCondicao) { 
    // Faz algo quando `outraCondicao` é verdadeiro 
 } 
 else { 
    // Faz algo quando `condicao` é falso 
 } 
```

Observe que o `else` e `else if` seções não forem necessárias, enquanto `if` for obrigatório.

## Exemplo
```
#include <stdio.h> 
 
 int main () { 
 
   // Definicao da variavel local
   int a = 10; 
 
   // Verifica se a condicao é verdadeira
   if(a < 5) { 
      // Se a condicao for verdadeira printa na tela
      printf("a e menor que 5!\n" ); 
   } 
   else { 
      // Se a condicao for falso printa na tela
      printf("a nao e menor que 5!\n" ); 
   } 
 
   printf("Valor de a e : %d\n", a); 
 
   return 0; 
 } 
```

## Saída
```
-> a nao e menor que 5!
-> Valor de a e: 10 

```
