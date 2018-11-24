---
title: Method Overloading
localeTitle: Sobrecarga de método
---
# Sobrecarga de método

Os parâmetros padrão foram introduzidos no C # versão 4.0, mas até então, os codificadores C # têm usado uma técnica diferente, que basicamente faz o mesmo, chamado sobrecarga de método. Ele permite que o programador defina vários métodos com o mesmo nome, desde que eles tomem um conjunto diferente de parâmetros. Quando você usa as classes do .NET framework, logo percebe que a sobrecarga de métodos é usada em todo o lugar.

## Exemplo

1.  Crie um arquivo de classe chamado Person.cs e insira o código a seguir. \`\` \` pessoa de classe pública { public string FirstName {get; conjunto privado; } public string LastName {get; conjunto; }
    
    public Person (string firstName, string lastName) { this.FirstName = firstName; this.LastName = lastName; }
    
    public string SayHello (nome da string) { return "Olá," + nome; }
    
    cadeia pública SayHello (pessoa de pessoa) { return "Olá," + person.FirstName + "" + person.LastName; } }
    
```
2. In your default Program.cs file you can call now this class Person using the method overloading. 
```

Programa de aula { static void Main (string \[\] args) { Pessoa pessoa = nova pessoa ("Jane", "Doe"); Console.WriteLine (person.SayHello ("Peter Smith"));
```
        Person friend = new Person("Chuck", "Norris"); 
        Console.WriteLine(person.SayHello(friend)); 
 
        Console.ReadKey(); 
 
 
    } 
 } 
```

\`\` \`