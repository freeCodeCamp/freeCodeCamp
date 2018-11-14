---
title: Class
localeTitle: Класс
---
## Класс

Класс в C # определяется как ссылочный тип. Чтобы инициализировать переменную с ссылочным типом, вы должны указать `new` ключевое слово, иначе переменная будет иметь значение по умолчанию `null` . Ниже приведен пример.

```csharp
// The value of variableOne is null at this point. 
 NewClass variableOne; 
 
 // Now the value of variableOne will be an instance of the class NewClass 
 variableOne = new NewClass(); 
```

Во время выполнения, когда класс создается, в кучу выделяется память для этого конкретного экземпляра класса, который имеет переменная.

#### Создание классов

Чтобы создать класс в C #, нам нужно использовать ключевое слово `class` за которым следует уникальный идентификатор.

Как и другие языки, C # создает конструктор по умолчанию, который не принимает никаких параметров. Мы также можем указать наш собственный конструктор, если нам нужно принять специальные параметры или выполнить пользовательские шаги инициализации в нашем конструкторе.

```csharp
public class NewClass 
 { 
    NewClass(string name) 
    { 
        // Initialization steps... 
    } 
 } 
```

Класс - это прототип или проект, из которого создаются объекты. В C # класс определяется с помощью класса keyword. Класс используется для объединения нескольких методов, свойств, полей, событий и делегатов в один блок. Класс также может содержать вложенные классы.

#### Пример. Рассмотрим пример класса Employee ниже:

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

Класс может наследовать только от одного базового класса. Однако он может реализовываться из нескольких интерфейсов.

## Больше информации

Подробнее о занятиях [здесь](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)