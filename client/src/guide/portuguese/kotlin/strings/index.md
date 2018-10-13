---
title: Strings
localeTitle: Cordas
---
# Cordas

Uma string é um tipo de dados básico em uma linguagem de programação. Strings são representadas pelo tipo `String` . Cordas são imutáveis. Kotlin tem uma API rica para trabalhar com strings.

### Uso Básico

#### Declaração

```kotlin
// Explicit type declaration 
 var firstName : String = "Elon" 
 
 // or Implicit type declaration and will still compile 
 val lastName = "Musk" 
```

Além disso, observe o uso do tipo de variável `val` , aqui está como ele se comporta

```kotlin
firstName = "Mark" // can be changed 
 lastName = "Zuckerberg" // cannot be changed 
 lastName = 12 // Error: type mismatch 
```

#### Concatenação de Cordas

Mostrado no trecho de código, assim como o Java, anexando `Int` a `String` resultará em uma saída de `String`

```kotlin
var str = "abc" + 1 
 println(str + "def") 
```

Saída:

```shell
abc1def 
```

Mesmo sem converter explicitamente o valor `Int` 1 para o objeto `String` primeiro, a saída resultante ainda é uma `String` .

#### String com várias linhas

Programadores podem declarar variáveis `String` com várias linhas usando aspas triplas em vez de aspas duplas

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """ 
 println(str) 
```

Saída:

```shell
        This is line 1 
        This is line 2 
        This is line 3 
```

ou com `.trimIndent()`

O uso de `trimIndent()` também ajudará a fornecer um formato de saída limpo removendo os excessos e desnecessários recuos em cada linha. Examine o snippet de código abaixo:

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """.trimIndent() 
 println(str) 
```

Saída:

```shell
This is line 1 
 This is line 2 
 This is line 3 
```

### Acessando caracteres de uma string

#### Acesso Indexado

Os programadores podem acessar elementos (caracteres) de uma string usando o operador de acesso ao índice:

```kotlin
var str = "Example" 
 println(str[2]) 
```

Saída:

```shell
a 
```

É como acessar um elemento de uma matriz, você obtém:

```kotlin
var str = "Example" 
 println(str[9]) // Error: index out of bounds 
```

#### Iterar através de uma string

Elementos de uma string são caracteres que podem ser acessados ​​pela operação de indexação: `s[i]` .

```kotlin
var str = "Example" 
 for (c in str) { 
    println(c) 
 } 
```

Saída:

```shell
E 
 x 
 a 
 m 
 p 
 l 
 e 
```

### Imutabilidade de uma corda

Assim como o Java, você não pode alterar elementos individuais de uma `String`

```kotlin
var str = "Example" 
 str[2] = "b" // Error 
```

#### Reatribuindo valores de string

```kotlin
var str = "Example" 
 println(str) 
 str = "Example was changed" 
 println(str) 
```

Saída:

```shell
Example 
 Example was changed 
```

### Propriedades da Cadeia

#### Determinando o comprimento de uma string

```kotlin
var str = "Example" 
 println(str.length) 
```

Saída:

```shell
7 
```

### Funções de String

Estas são algumas das funções comuns do `String` disponíveis na versão atual do Kotlin

### comparado a

Compara este objeto com o objeto especificado para pedido. Retorna zero se esse objeto for igual ao outro objeto especificado, um número negativo se for menor que outro ou um número positivo se for maior que outro.

```kotlin
var str = "Example" 
 var str2 = "Example123" 
 var str3 = "Example12345" 
 println(str.compareTo(str2)) 
 println(str.compareTo(str3)) 
 println(str3.compareTo(str)) 
 println(str.compareTo("Example")) 
```

Saída:

```shell
-3 
 -5 
 5 
 0 # Equal 
```

### é igual a

Indica se um objeto `String` é exatamente igual a outro objeto `String`

```kotlin
var str = "Example" 
 var str2 = "Example2" 
 println(str.equals("Example")) 
 println(str2.equals("Example")) 
```

Saída:

```shell
true 
 false 
```

### obter

Retorna o caractere no índice especificado nessa sequência de caracteres.

\`\` \`kotlin var str = "Example" println (str.get (3))
```
Output: 
```

Concha m
```
### toString 
 
 Returns a string representation of the object. 
```

kotlin println (9.toString () + 10) println (9 + 10)
```
Output: 
```

Concha "910" 19 \`\` \`

#### Recursos

*   [Tipos Básicos Kotlin](https://kotlinlang.org/docs/reference/basic-types.html)
*   [Referência da corda de Kotlin](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)