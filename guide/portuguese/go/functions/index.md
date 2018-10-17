---
title: Go Functions
localeTitle: Ir funções
---
## Ir funções

Uma função recebe zero ou mais parâmetros de qualquer tipo, faz alguma lógica com eles e pode retornar um ou mais valores. A sintaxe da função de Golang é:

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
 } 
```

Aqui, o nome da função é `add` . Leva para parâmetros, `parameter1` e `parameter2` do tipo `int64` e retorna outro int64, a soma dos dois parâmetros.

### Retorna

Depois que um `return` é atingido, a função sai sem executar mais código.

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
  // Unreachable code 
  fmt.Printf("Don't print me") 
 } 
```

### Chamando uma função

A função acima seria chamada assim:

```go
sum(4, 5) 
```

O valor dessa expressão é 9.

### Omitir tipo de parâmetro

Se dois ou mais parâmetros consecutivos forem do mesmo tipo, pode ser indicado apenas uma vez.

```go
function foo(x, y, z int64, name string) { 
  fmt.Printf("%d %d %d %s", x, y, z, name) 
 } 
```

Aqui `x` , `y` e `z` são do tipo `int64` e `name` é uma string.

### Retornando vários valores

Uma função pode retornar zero ou mais valores. Para não retornar nada, omita o tipo de retorno:

```go
function helloWorld() { 
  fmt.Printf("Hello world!") 
 } 
```

Para retornar um valor, especifique seu tipo:

```go
function getHelloWorld() string { 
  return "Hello world!" 
 } 
```

Para retornar mais de um valor, especifique seus tipos, envolvidos em `()` e separados por vírgulas:

```go
function getHelloWorldAndBestLanguage() (string, string) { 
  return "Hello world!", "Golang" 
 } 
```

Para receber esses valores, simplesmente declare as variáveis ​​separadas por vírgulas da seguinte forma:

```go
helloWorld, bestLanguage := getHelloWorldAndBestLanguage() 
 // helloWorld == "Hello world!" 
 // bestLanguage == "Golang" 
```

### Retornos nuas

Você pode nomear os tipos de retorno para que você não precise passar a variável para a declaração de retorno:

```go
func duplicate(s string) (first, second string) { 
  first = s 
  last = s 
    return 
 } 
 
 func main() { 
    fmt.Println(split("Hello world!")) // ("Hello world!", "Hello world!") 
 } 
```

#### Mais Informações:

https://tour.golang.org/basics/4