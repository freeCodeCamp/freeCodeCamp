---
title: Error Handling
localeTitle: Tratamento de erros
---
# Manipulação de exceção de C ++

Uma exceção é um problema que surge durante a execução de um programa. As exceções fornecem uma maneira de transferir o controle de uma parte de um programa para outra. O tratamento de exceções do C ++ é construído sobre três palavras-chave: #try, #catch e #throw.

*   # throw - Um programa gera uma exceção quando um problema é exibido. Isso é feito usando uma palavra-chave throw.
    
*   # catch - Um programa captura uma exceção com um manipulador de exceção no local em um programa onde você deseja lidar com o problema. A palavra-chave catch indica a captura de uma exceção.
    
*   #try - Um bloco try identifica um bloco de código para o qual exceções específicas serão ativadas. É seguido por um ou mais blocos de captura.
    

```CPP
#include <iostream> 
 using namespace std; 
 
 int main() 
 { 
   int x = -1; 
 
   // Some code 
   cout << "Before try \n"; 
   try { 
      cout << "Inside try \n"; 
      if (x < 0) 
      { 
         throw x; 
         cout << "After throw (Never executed) \n"; 
      } 
   } 
   catch (int x ) { 
      cout << "Exception Caught \n"; 
   } 
 
   cout << "After catch (Will be executed) \n"; 
   return 0; 
 } 
```

# Antes de você ir ...

## Uma revisão

*   Agrupamento de tipos de erros.
*   Separação de código de tratamento de erros do código normal.
*   Funções / métodos podem manipular quaisquer exceções que escolherem.