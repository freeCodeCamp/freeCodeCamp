---
title: Method Overloading
localeTitle: Перегрузка метода
---
# Перегрузка метода

Параметры по умолчанию были введены в C # версии 4.0, но до этого кодеры C # использовали другую технику, которая в основном делает то же самое, что называется перегрузкой метода. Это позволяет программисту определить несколько методов с тем же именем, если они принимают другой набор параметров. Когда вы используете классы .NET framework, вы скоро поймете, что перегрузка метода используется повсюду.

## пример

1.  Создайте файл класса с именем Person.cs и введите следующий код. \`\` \` лицо открытого класса { public string FirstName {get; частный набор; } public string LastName {get; задавать; }
    
    public Person (строка firstName, string lastName) { this.FirstName = firstName; this.LastName = lastName; }
    
    public string SayHello (имя строки) { return «Hello there», + name; }
    
    общественная строка SayHello (Лицо человека) { return "Hello there", + person.FirstName + "" + person.LastName; } }
    
```
2. In your default Program.cs file you can call now this class Person using the method overloading. 
```

классная программа { static void Main (string \[\] args) { Лицо человека = новое лицо («Джейн», «Доу»); Console.WriteLine (person.SayHello («Питер Смит»));
```
        Person friend = new Person("Chuck", "Norris"); 
        Console.WriteLine(person.SayHello(friend)); 
 
        Console.ReadKey(); 
 
 
    } 
 } 
```

\`\` \`