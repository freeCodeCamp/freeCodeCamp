---
title: Macros in C
localeTitle: Macros em C
---
## Macros em C

Uma macro é um pedaço de código com um determinado nome. Quando o nome é usado, ele é substituído pelo conteúdo da macro.

#### Definindo macros

A palavra-chave `#define` é usada para definir novas macros. É seguido por um nome e um conteúdo. Por convenção, os nomes das macros são escritos em maiúsculas.

```C
#define PI 3.14 
```

Se você usar a macro desta maneira:

```C
printf("Value of PI: %d", PI); 
```

É o mesmo que escrever isto:

```C
printf("Value of PI: %d", 3.14); 
```

#### Tipos de macros

Existem dois tipos de macros. As macros `Object-like` , mostradas acima, e as macros `Function-like` .

#### Macros Funcionais

Função-like usa a mesma palavra-chave `#define` . A diferença é que você usa um par de parênteses após o nome da função.

```C
#define hello_world() printf("Hello World!") 
```

Então chamando:

```C
hello_world() 
```

Você recebe:

```C
printf("Hello World!"); 
```

Você também pode definir parâmetros:

```C
#define hello(X) printf("Hello " X "!") 
```

Agora chamando:

```C
hello("World"); 
```

Você obtém o equivalente de:

```C
printf("Hello World!"); 
```

#### Mais Informações:

[Documentação Online do GCC: Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[Documentação on-line do GCC: macros semelhantes a objetos](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[Documentação on-line do GCC: macros semelhantes a funções](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)