---
title: Class
---
## Class
	
A class in C# is defined as a reference type. In order to instatiate a variable of with a reference type you must specify the `new` keyword, else the variable will have the default value of `null`. See below for an example.

```csharp
// The value of variableOne is null at this point.
NewClass variableOne;

// Now the value of variableOne will be an instance of the class NewClass
variableOne = new NewClass();
```
At runtime when the class is created enough memory is allocated onto the heap for that specific instance of the class that the variable holds. 

#### Creating Classes
To create a class in C# we need to use the `class` keyword followed by a unique identifier.

Like other languages, C# creates a default constructor that accepts no parameters. We can also specify our own constructor if we need to take in special parameters or have custom initlization steps in our constructor.

```csharp
public class NewClass
{
    NewClass(string name)
    {
        // Initialization steps...
    }
}
```

A class is a prototype or blueprint from which objects are created. In C#, the class is defined by using the keyword class. A class is used to combine together some methods, properties, fields, events, and delegates into a single unit. A class may contain nested classes too.
#### Example: Consider the case of Employee Class below:

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

A class can inherit from one base class only. However, it can implement from more than one interface.

## More Information
Read more about classes [here](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

