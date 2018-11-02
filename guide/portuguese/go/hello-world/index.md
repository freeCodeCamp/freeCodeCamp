---
title: Hello World in Go
localeTitle: Olá Mundo em Go
---
Para instalar o Go no seu computador, baixe seu instalador [aqui](https://golang.org/dl/) e instale-o seguindo estas [instruções de instalação](https://golang.org/doc/install) .

## Primeiro programa Go

Crie um arquivo chamado `main.go` e adicione o seguinte código nele: -

```go
package main // Package declaration 
 
 import "fmt" // Importing packages 
 
 // Function declaration 
 func main() { 
    fmt.Println("Hello, World!") 
 } 
```

Agora, execute o programa acima a partir do terminal / linha de comando. Para fazer isso, abra Terminal / Linha de Comando e vá para o diretório no qual `main.go` está presente. Primeiro compile o programa e execute o `go build main.go` Em seguida, execute o comando `go run main.go` para executar o programa. Você deve ver a saída semelhante à seguinte saída: -
```
$ go build main.go 
 $ go run main.go 
 Hello, World! 
```

## Análise

### Declaração do pacote

```go
package main 
```

Em cada programa, está associado a um “pacote” ou a uma coleção de programas associados. Uma exceção notável é o pacote especial “main”, que indica ao desenvolvedor que deve executar o programa a seguir.

### Importações
```
import “fmt” 
```

Se você quiser usar funções de outros pacotes, precisará importá-las. Existem alguns pacotes desenvolvidos pelos mantenedores go (chamados de “biblioteca padrão”) e podem ser encontrados em https://golang.org/pkg/. Neste caso, precisamos do pacote "fmt" para nossa declaração de impressão (abaixo).

### Declaração de função

```go
func main() { 
 } 
```

Funções são o coração de qualquer programa em andamento. Eles podem ter argumentos e valores de retorno, mas a função `main` não faz nenhum destes. Ele atua como o "ponto de entrada", ou onde vai procurar primeiro para executar o seu programa. Queremos que nosso programa Hello World seja impresso, por isso queremos colocar nosso código aqui.

### Declaração de impressão

```go
fmt.Println("Hello, world!") 
```

Go não requer ponto-e-vírgula no final das linhas, pois o compilador as adiciona automaticamente. O pacote `fmt` (que nós importamos acima!) Tem a função `Println` , que invocamos usando o `Println` `.` sintaxe. Nós passamos argumentos para a função entre os parênteses. Neste caso, o argumento é a string que queremos imprimir ( `"Hello, world!"` ). Observe que a cadeia em si é colocada entre aspas.

Agora que você tem as ferramentas necessárias, saia e faça seus próprios programas Go! A melhor maneira de aprender é experimentar. Se você precisar de ajuda, experimente a excelente documentação: https://golang.org/doc/