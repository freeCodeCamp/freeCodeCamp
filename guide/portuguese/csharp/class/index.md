---
title: Class
localeTitle: Classe
---
## Classe

Uma classe em C # é definida como um tipo de referência. Para instilar uma variável com um tipo de referência, você deve especificar a `new` palavra-chave, senão a variável terá o valor padrão de `null` . Veja abaixo um exemplo.

```csharp
// The value of variableOne is null at this point. 
 NewClass variableOne; 
 
 // Now the value of variableOne will be an instance of the class NewClass 
 variableOne = new NewClass(); 
```

No tempo de execução, quando a classe é criada, uma quantidade suficiente de memória é alocada no heap para aquela instância específica da classe que a variável contém.

#### Criando Classes

Para criar uma classe em C #, precisamos usar a palavra-chave `class` seguida por um identificador exclusivo.

Como outras linguagens, o C # cria um construtor padrão que não aceita parâmetros. Também podemos especificar nosso próprio construtor se precisarmos de parâmetros especiais ou tivermos etapas de inicialização customizadas em nosso construtor.

```csharp
public class NewClass 
 { 
    NewClass(string name) 
    { 
        // Initialization steps... 
    } 
 } 
```

Uma classe é um protótipo ou blueprint do qual os objetos são criados. Em C #, a classe é definida usando a classe de palavra-chave. Uma classe é usada para combinar alguns métodos, propriedades, campos, eventos e representantes em uma única unidade. Uma classe pode conter classes aninhadas também.

#### Exemplo: considere o caso da Classe do Empregado abaixo:

```csharp
using System; 
 
 namespace CPrograms 
 { 
    class Employee 
    { 
        private string name; 
        private int employeeId; 
 
        public Employee(string name, int employeeId) 
        { 
            this.name = name; 
            this.employeeId = employeeId; 
        } 
        public void PrintEmployee() 
        { 
            Console.WriteLine("Employee Name: {0} , Employee ID: {1}", this.name, this.employeeId); 
        } 
    } 
 
    class Program 
    { 
        static void Main(string[] args) 
        { 
            Employee employeeObject = new Employee("John Doe", 420156); 
            employeeObject.PrintEmployee(); 
        } 
    } 
 } 
```

Uma classe pode herdar de uma única classe base. No entanto, ele pode implementar a partir de mais de uma interface.

## Mais Informações

Leia mais sobre as aulas [aqui](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)