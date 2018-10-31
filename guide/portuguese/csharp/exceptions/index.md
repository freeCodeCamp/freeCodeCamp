---
title: Exceptions
localeTitle: Exceções
---
# Exceções

Uma exceção é um erro inesperado que ocorre enquanto um programa está em execução, como uma tentativa de acessar um arquivo que não existe. Parará o programa se não for manipulado.

## Exemplo

Se tentarmos ler o texto de um arquivo que não existe:
```
using System.IO; 
 
 string content = File.ReadAllText(@"C:\DoesNotExist.txt"); 
```

Um `FileNotFoundException` será gerado.

Algumas outras exceções comuns:

*   `IndexOutofRangeException` : tentativa de acessar uma matriz com um índice inválido.
*   `NullReferenceException` : tentativa de usar uma variável de referência não atribuída.
*   `DivideByZeroException` : tentativa de dividir por 0.

## Melhores práticas

### Use try / catch / finally Blocos
```
try 
 { 
   var client = new WebClient(); 
   var resultData = client.DownloadString("http://github.com"); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions 
 } 
 finally 
 { 
   //this code is always executed, does not matter if an exception is thrown or not 
 } 
```

### Lidar com possíveis exceções com condições

Ao invés de
```
try 
 { 
   conn.Close(); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions. 
 } 
```

Tente isso
```
if (conn.State != ConnectionState.Closed) 
 { 
    conn.Close(); 
 } 

```