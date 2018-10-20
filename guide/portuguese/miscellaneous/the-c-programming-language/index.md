---
title: The C Programming Language
localeTitle: A linguagem de programação C
---
## Noções básicas

*   Configuração
*   Seu primeiro programa c #
*   Tipos e Variáveis
*   Declarações de Controle de Fluxo
*   Operadores
*   Cordas
*   Classes, Objetos, Interface e Métodos Principais
*   Campos e Propriedades
*   Modificadores de escopo e acessibilidade
*   Tratamento de exceções

## Intermediário

*   Genéricos
*   Eventos, Delegados e Expressões Lambda
*   Quadro de coleção
*   LINQ

## Avançado

*   Programação Assíncrona (Async e Await)
*   Biblioteca paralela de tarefas

## O que há de novo no C # 6

*   Operador Nulo-Condicional
*   Inicializadores de Auto-Propriedade
*   Nameof Expressions
*   Funções e propriedades corporais da expressão
*   Outras características

## Princípios Orientados a Objetos (OOP)

*   Encapsulamento
*   Abstração
*   Herança
*   Polimorfismo

## Princípios sólidos

*   Princípio da responsabilidade única
*   Princípio Fechado Aberto
*   Princípio da Substituição de Liskov
*   Princípio de Segregação de Interface
*   Princípio de Inversão de Dependência

## Melhores Práticas C #, Padrões de Design e Desenvolvimento Orientado a Testes (TDD)

## Configuração

[LinqPad](http://www.linqpad.net/) é um [bloco de rascunho](http://www.linqpad.net/) .net para testar rapidamente seus trechos de código c #. A edição padrão é gratuita e uma ferramenta perfeita para iniciantes executar declarações de linguagem, expressões e programas.

Como alternativa, você também pode fazer o download do [Visual Studio Community 2015,](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) que é um [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) extensível usado pela maioria dos profissionais para criar aplicativos corporativos.

## Seu primeiro programa c #
```
//this is the single line comment 
 
 /** This is multiline comment, 
 compiler ignores any code inside comment blocks. 
 **/ 
 
 //This is the namespace, part of the standard .NET Framework Class Library 
 using System; 
 // namespace defines the scope of related objects into packages 
 namespace Learning.CSharp 
 { 
  // name of the class, should be same as of .cs file 
  public class Program 
  { 
    //entry point method for console applications 
   public static void Main() 
    { 
      //print lines on console 
      Console.WriteLine("Hello, World!"); 
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console. 
      Console.ReadLine(); 
    } 
  } 
 } 
```

Cada aplicativo de console C # deve ter um [método Main,](https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx) que é o ponto de entrada do programa.

Edite o [HelloWorld](https://dotnetfiddle.net/kY7QRm) no .NET Fiddle, uma ferramenta inspirada no [JSFiddle,](http://jsfiddle.net) onde você pode alterar os trechos de código e verificar a saída por si mesmo. Note que isso é apenas para compartilhar e testar os trechos de código, não para serem usados ​​no desenvolvimento de aplicativos.

Se você estiver usando o Visual Studio, siga este [tutorial](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx) para criar o aplicativo de console e entender seu primeiro programa em C #.

## Tipos e Variáveis

C # é uma linguagem fortemente tipada. Cada variável tem um tipo. Toda expressão ou declaração é avaliada como um valor. Existem dois tipos de tipos em c #

*   Tipos de valor
*   Tipos de referência.

**Tipos de valor** : Variáveis ​​que são tipos de valor contêm valores diretamente. Atribuir uma variável de tipo de valor a outra copia o valor contido.

[Editar no .NET Fiddle](https://dotnetfiddle.net/JCkTxb)
```
int a = 10; 
 int b = 20; 
 a=b; 
 Console.WriteLine(a); //prints 20 
 Console.WriteLine(b); //prints 20 
```

Observe que em outras linguagens dinâmicas isso pode ser diferente, mas em C # isso é sempre uma cópia de valor. Quando o tipo de valor é criado, é criado um único espaço na [pilha](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) , que é uma estrutura de dados "LIFO" (last in, first out). A pilha tem limites de tamanho e as operações de memória são eficientes. Alguns exemplos de tipos de dados internos são `int, float, double, decimal, char and string` .

Digite | Exemplo | Descrição  
\--------- | -------------------------------------------------- --------------------------- | -------------------------------------------------- -------------------------------------------------- -----------------------------  
_Inteiro_ | `int fooInt = 7;` | Inteiro de **32 bits assinado**  
_Longo_ | `long fooLong = 3000L;` | Inteiro de **64 bits assinado** . **L é usado para especificar que esse valor de variável é do tipo long / ulong**  
_Duplo_ | `double fooDouble = 20.99;` | Precisão: **15 a 16 dígitos**  
_Float_ | `float fooFloat = 314.5f;` | Precisão: **7 dígitos** . **F é usado para especificar que esse valor da variável é do tipo float**  
_Decimal_ | `decimal fooDecimal = 23.3m;` | Precisão: **28-29 dígitos.** Sua precisão e menor alcance torna apropriado para **cálculos financeiros e monetários**  
_Char_ | `char fooChar = 'Z';` | Um único **caractere Unicode de 16 bits**  
_Booleano_ | `bool fooBoolean = false;` | Booleano - **verdadeiro e falso**  
_String_ | `string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);` | **Uma cadeia de caracteres Unicode.**

Para uma lista completa de todos os tipos de dados integrados, veja [aqui](https://msdn.microsoft.com/en-us/library/ms228360)

[**Tipos de referência**](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) : Variáveis ​​de tipos de referência armazenam referências a seus objetos, o que significa que armazenam o endereço no local dos dados na [pilha](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) , também conhecidos como ponteiros. Dados reais são armazenados na memória [heap](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3) . Atribuir tipo de referência a outro não copia os dados, em vez disso, cria a segunda cópia de referência que aponta para o mesmo local no heap.

No heap, os objetos são alocados e desalocados em ordem aleatória, e é por isso que isso requer a sobrecarga do gerenciamento de memória e da [coleta de lixo](https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110) .aspx).

A menos que você esteja escrevendo [código não seguro](https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx) ou lidando com [código não gerenciado](https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100) .aspx), você não precisa se preocupar com a vida útil de seus locais de memória. O compilador .NET e o CLR cuidarão disso, mas ainda é bom manter essa mentalidade para otimizar o desempenho de seus aplicativos.

Mais informações [aqui](http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91)

## Declarações de Controle de Fluxo

*   [Se outra](https://msdn.microsoft.com/en-us/library/5011f09h.aspx) afirmação: [Edite no .NET Fiddle](https://dotnetfiddle.net/IFVB33)
    
    ```
            int myScore = 700; 
            if (myScore == 700) 
            { 
                Console.WriteLine("I get printed on the console"); 
            } 
            else if (myScore > 10) 
            { 
                Console.WriteLine("I don't"); 
            } 
            else 
            { 
                Console.WriteLine("I also don't"); 
            }
    ```
    
*   [Instrução Switch](https://msdn.microsoft.com/en-GB/library/06tc147t.aspx) : [Edite no Fiddle .NET](https://dotnetfiddle.net/lPZftO)
    
    usando o sistema;
    
    Programa de classe pública { public static void Main () { int myNumber = 0; switch (myNumber) { // Uma seção de opção pode ter mais de um rótulo de caso. caso 0: caso 1: { Console.WriteLine ("Caso 0 ou 1"); pausa; }
    
    ```
            // Most switch sections contain a jump statement, such as a break, goto, or return.; 
            case 2: 
                Console.WriteLine("Case 2"); 
                break; 
            // 7 - 4 in the following line evaluates to 3. 
            case 7 - 4: 
                Console.WriteLine("Case 3"); 
                break; 
            // If the value of myNumber is not 0, 1, 2, or 3 the 
            //default case is executed.* 
            default: 
                Console.WriteLine("Default case. This is also optional"); 
                break; // could also throw new Exception() instead 
        } 
     } 
    
    ```
    
    }
    
*   [For](https://msdn.microsoft.com/en-us/library/ch45axte.aspx) & [Foreach](https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx) : [Editar no .NET Fiddle](https://dotnetfiddle.net/edxtvq)
    
    para (int i = 0; i <10; i ++) { Console.WriteLine (i); // imprime 0-9 }
    
    Console.WriteLine (Environment.NewLine); para (int i = 0; i <= 10; i ++) { Console.WriteLine (i); // imprime 0-10 }
    
    Console.WriteLine (Environment.NewLine); para (int i = 10 - 1; i> = 0; i--) // loop de decremento { Console.WriteLine (i); // imprime 9-0 }
    
    Console.WriteLine (Environment.NewLine); //para (; ; ) { // Todas as expressões são opcionais. Esta afirmação // cria um loop infinito. \* //  
    }
    
*   [Enquanto](https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx) & [do-while](https://msdn.microsoft.com/en-us/library/370s1zax.aspx) : [Edite no .NET Fiddle](https://dotnetfiddle.net/O5hOF1)
    
    // Continue o loop while até o índice ser igual a 10. int i = 0; enquanto (i <10) { Console.Write ("declaração While"); Console.WriteLine (i); // Grava o índice na tela. i + + // Incrementa a variável. }
    
    int number = 0; // funciona primeiro, até que a condição seja satisfeita, ou seja, termina quando o número é igual a 4. Faz { Console.WriteLine (number); // imprime o valor de 0 a 4 número ++; // Adicione um ao número. } while (number <= 4);