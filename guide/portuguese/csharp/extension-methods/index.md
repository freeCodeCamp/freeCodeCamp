---
title: Extension Mehods
localeTitle: Mehods de extensão
---
## Métodos de Extensão

Os métodos de extensão permitem "adicionar" métodos a tipos existentes sem criar um novo tipo derivado, recompilar ou modificar o tipo original. Para o código do cliente escrito em C #, não há diferença aparente entre chamar um método de extensão e os métodos realmente definidos em um tipo.

Os métodos de extensão mais comuns são os operadores de consulta padrão do LINQ que adicionam a funcionalidade de consulta aos System.Collections.IEnumerable e System.Collections.Generic.IEnumerable existentes. tipos.

### Uso

Os métodos de extensão são definidos como métodos estáticos, mas são chamados usando a sintaxe do método da instância. O primeiro parâmetro especifica em qual tipo o método opera, e o parâmetro é precedido pelo modificador this. Os métodos de extensão estão apenas no escopo quando você importa explicitamente o namespace em seu código-fonte com uma diretiva **using** .

### Exemplo

O exemplo a seguir mostra um método de extensão definido para a classe **System.String** .
```
namespace ExtensionMethods 
 { 
    public static class MyExtensions 
    { 
        public static int WordCount(this String str) 
        { 
            return str.Split(new char[] { ' ', '.', '?' }, 
                             StringSplitOptions.RemoveEmptyEntries).Length; 
        } 
    } 
 } 
```

Agora você pode trazer o método **WordCount** para o escopo **usando a** diretiva:
```
using ExtensionMethods; 
```

E você pode chamá-lo de um aplicativo usando esta sintaxe:
```
string s = "Hello Extension Methods"; 
 int i = s.WordCount(); 
```

#### Mais Informações:

[Como: implementar e chamar um método de extensão personalizado (guia de programação C #)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-implement-and-call-a-custom-extension-method)