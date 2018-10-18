---
title: Hello World in Kotlin
localeTitle: Olá Mundo em Kotlin
---
Um programa Hello World é um programa muito simples que gera a string "Hello World!". É frequentemente usado para mostrar a sintaxe básica de uma linguagem de programação.

Neste tutorial, vamos analisar a sintaxe de um programa Hello World escrito em Kotlin.

Se você ainda não instalou o Kotlin, você deve verificar este tutorial: https://guide.freecodecamp.org/kotlin

## Programa Hello World

```kotlin
// This is a simple Hello World program written in Kotlin 
 
 fun main(args : Array<String>) { 
    println("Hello, World!") 
 } 
```

Como você deve esperar, quando você executa este programa, a saída deve ser "Hello, World!".

## Sintaxe

### Comentários
```
// This is a simple Hello World program written in Kotlin 
```

Comentários são textos escritos por um desenvolvedor que são adicionados com o propósito de tornar o código mais fácil de entender por outros desenvolvedores. No Kotlin, os comentários podem ser comentários de linha única (usando //) ou comentários de várias linhas (usando / \*\* /).
```
// Single line comment 
 
 /* This is a 
 Multi-line comment 
 */ 
```

### Função principal

```kotlin
fun main(args : Array<String>) {...} 
```

A função principal é uma função obrigatória que informa ao compilador onde deve começar a executar nosso código. Ele pega uma matriz de strings como parâmetro e retorna o tipo Unit que corresponde ao tipo `void` em linguagens como Java. Como podemos ver, as funções são declaradas com o uso da palavra-chave `fun` e seu corpo deve ser escrito dentro de chaves.

Funções sem um tipo de retorno explicitamente declarado retornarão o tipo `Unit` , portanto, o código acima é equivalente a

```kotlin
fun main(args : Array<String>): Unit {...} 
```

### Declaração de impressão

A função ```println``` pega uma string como argumento e a imprime na tela. Neste caso, estamos imprimindo a string "Hello, World!". Observe que os literais de string são declarados usando aspas duplas `"String"` .

Se você gostaria de saber mais sobre a Sintaxe Kotlin e começar a escrever programas incríveis, você deve checar a incrível Documentação Oficial do Kotlin: https://kotlinlang.org/docs/reference/

Espero que você tenha gostado deste tutorial. Felicidades.
