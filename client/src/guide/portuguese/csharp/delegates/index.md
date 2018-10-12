---
title: Delegates
localeTitle: Delegados
---
## Delegados

O delegado AC # representa uma referência a um método que possui um determinado conjunto de parâmetros e um determinado tipo de retorno. Ao instanciar o delegado, você pode associá-lo a qualquer método que seja compatível com o tipo delegado: tem a mesma quantidade de parâmetros, cada um é do mesmo tipo e o tipo do valor de retorno também é o mesmo.

Você pode usar um método de instância ou um método estático ao atribuí-lo a um delegado.

Delegado permite que você passe métodos como parâmetros para outros métodos.

Delegados são freqüentemente usados ​​para implementar funções de retorno de chamada. O exemplo mais típico são os manipuladores de eventos: você se registra um método que deve ser chamado sempre que um determinado evento acontece (o botão do mouse é clicado, por exemplo).

### Breve explicação para desenvolvedores

Delegados são como ponteiros de função em linguagens do tipo C, como C ou C ++. No entanto, eles são do tipo seguro. Ao contrário de ponteiros de função simples eles contém informações sobre a instância do objeto cujo método será chamado ao chamar o delegado e ter verificações de tipo estrito para os argumentos e valor de retorno da função.

## Exemplo

Você declara um delegado semelhante a como você declara uma função, mas adiciona a palavra-chave `delegate` . Por exemplo:

```csharp
    public delegate string StringOperation ( string s1, string s2 ); 
```

Qualquer método que aceita dois argumentos de `string` e retorna `string` pode ser atribuído a uma variável desse tipo de delegado.

Depois de ter criado o tipo de delegado, você pode usá-lo como qualquer outro tipo. Você pode declarar uma variável local, outros membros da classe ou passá-los como parâmetros para outros métodos.

```csharp
    StringOperation a; 
```

Antes de invocar o delegado, você precisará atribuir um valor a ele. Vamos supor que temos um método de concatenação que tem a seguinte implementação:

```csharp
    private string Concatenate ( string one, string two ) { 
        return one + " " + two; 
    } 
```

Você pode então atribuir isto à variável delegada e invocá-la como uma função.

```csharp
    StringOperation op = Concatenate; 
 
    string result = op("Hello", "World"); 
 
    Console.WriteLine ( result ); // print "Hello World" to the console 
```

## Mais Informações

Leia mais sobre os delegados [aqui](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) .