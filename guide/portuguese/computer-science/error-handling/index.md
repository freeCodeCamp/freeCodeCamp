---
title: Error Handling
localeTitle: Tratamento de erros
---
## Tratamento de erros

O tratamento de erros e, em uma extensão maior, o tratamento de exceções, são funções / métodos escritos para retornar informações importantes sobre a manipulação de dados. O tratamento de erros é frequentemente usado junto com promessas e retornos de chamada. O tratamento de erros é uma coisa muito importante que todo desenvolvedor deve se preocupar ao programar. Aqui vou explicar como lidar com erros que ocorrem em tempo de execução usando blocos try-catch com um exemplo em programas C #. As instruções try-catch estão disponíveis em todas as principais linguagens de programação com sintaxe semelhante.

### Como o bloco try-catch funciona.

A instrução try-catch consiste em um bloco **try** e um bloco **catch** e um bloco **finally** opcional. Código que poderia lançar uma exceção deve ser colocado no bloco try. O bloco catch leva a exceção que poderia ser lançada como um parâmetro e, em seguida, lida com essa exceção dentro do bloco. Durante o tempo de execução, o código no bloco try é executado pela primeira vez. Se uma exceção for lançada, ela será lançada no bloco de captura a ser manipulado. Se não houver nenhum bloco catch, o programa exibirá um erro de exceção não tratada e interromperá a execução. Vários blocos catch são usados ​​se o código no bloco try puder lançar mais de uma exceção. Há também um opcional **finalmente** bloco que irá executar o código nele, independentemente de haver ou não uma exceção é lançada.

Abaixo está um exemplo de programa que manipula a divisão por exceção zero usando classe predefinida na biblioteca C #. Exceção é a classe base para todas as exceções.

`c# using System; namespace ErrorHandling { class DivideByZero { int result; DivideByZero() { result = 0; } public void division(int num1, int num2) { try { result = num1 / num2; } catch (DivideByZeroException e) { Console.WriteLine("Exception caught: {0}", e); } catch(Exception ex) { Console.WriteLine("Exception caught: {0}", ex); } finally { Console.WriteLine("Result: {0}", result); } } static void Main(string[] args) { DivideByZero d = new DivideByZero(); d.division(10, 0); Console.ReadKey(); } } }`

*   No programa acima, passar 0 como segundo parâmetro irá lançar DivideByZeroExceptions.
    
*   Essa exceção será manipulada pelo bloco catch que possui a classe DivideByZeroException. Se qualquer exceção diferente de DivideByZeroExceptions ocorrer, elas serão tratadas pelo bloco catch de exceção.
    
    Exceção é a classe base para todas as classes de exceções disponíveis na biblioteca C #. Mesmo se você quiser escrever sua própria exceção, você precisa herdar a classe base Exception em seu programa.
    

#### Mais Informações:

https://quizlet.com/135129010/computer-science-error-handling-flash-cards/ https://en.wikipedia.org/wiki/Exception\_handling