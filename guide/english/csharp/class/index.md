---
title: Class
---

## Class
A class in C# is defined as a reference type. In order to instatiate a variable of a reference type, you must specify the `new` keyword, otherwise the variable will have the default value of `null`. See below for an example.

```csharp
// The value of variableOne is null at this point.
NewClass variableOne;

// Now the value of variableOne will be an instance of the class NewClass
variableOne = new NewClass();
```

At runtime, when the class is instantiated, enough memory is allocated onto the heap for that specific instance of the class held in the variable.

#### Creating Classes
To create a class in C# we need to use the `class` keyword followed by a unique identifier.

Like other languages, C# creates a default constructor that accepts no parameters. We can also specify our own constructor if we need to take in special parameters or have custom initialization steps in our constructor.

```csharp
public class NewClass
{
    NewClass(string name)
    {
        // Initialization steps...
    }
}
```

A class is a prototype or blueprint from which objects are created. In C#, the class is defined by using the keyword `class`. A class is used to combine together some methods, properties, fields, events, and delegates into a single unit. A class may contain nested classes too.

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
            Console.WriteLine("Employee Name: {0}, Employee ID: {1}", this.name, this.employeeId);
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

## Output:
```sh
> Employee Name: John Doe, Employee ID: 420156
```

A class can inherit from one base class only. However, it can implement from more than one interface.

#### Example of inheriting from one class and 2 interfaces
```csharp
// base class: Human
public class Human {
    public int Age;
    
    public Human (int age) {
        Age = age;
    }
}

// first interface: Student
public interface Student {
    int StudentNumber { get; set; }
}

// second interface: Employee
public interface Employee {
    int EmployeeNumber { get; set; }
    string JobTitle { get; set; } 
}

// Example of class extending a class and using 2 interfaces
public class Person : Human, Student, Employee {
   // new field for Person
   public string Name;
   
   // needed to satisfy Student interface
   public int StudentNumber { get; set; }
   
   // needed to satisfy Employee interface
   public int EmployeeNumber { get; set; }
   public string JobTitle { get; set; } 

   // set the instance variables and pass the age to the base class
   public Person(string name, int age, int studentNum, int employeeNum, string jobTitle) : base(age)
   {
       Name = name;
       StudentNumber = studentNum;
       EmployeeNumber = employeeNum;
       JobTitle = jobTitle;
   }
}
```

## More Information
Read more about classes [here](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

