---
title: Go Maps
localeTitle: Go Maps
---
## Go Maps

Um mapa, chamado _dicionário_ em outros idiomas, "mapeia" chaves para valores. Um mapa é declarado assim:

```go
var m map[Key]Value 
```

Este mapa não possui chaves e nenhuma chave pode ser adicionada a ele. Para criar um mapa, use a função `make` :

```go
m = make(map[Key]Value) 
```

Qualquer coisa pode ser usada como chave ou como valor.

### Modificando mapas

Aqui estão algumas ações comuns com mapas.

#### Inserindo / Alterando Elementos

Crie ou mude o elemento `foo` no mapa `m` :

```go
m["foo"] = bar 
```

#### Obtendo elementos

Obter elemento com chave `foo` no mapa `m` :

```go
element = m["foo"] 
```

#### Excluindo elementos

Apagar elemento com chave `foo` no mapa `m` :

```go
delete(m, "foo") 
```

#### Verificar se uma chave foi usada

Verifique se a chave `foo` foi usada no mapa `m` :

```go
element, ok = m["foo"] 
```

Se `ok` é `true` , a chave foi usada e o `element` mantém o valor em `m["foo"]` . Se `ok` é `false` , a chave não foi usada e o `element` mantém seus valores zero.

### Literais do mapa

Você pode criar diretamente literais de mapas:

```go
var m = map[string]bool{ 
    "Go": true, 
    "JavaScript":false, 
 } 
 
 m["Go"] // true 
 m["JavaScript"] = true // Set Javascript to true 
 delete(m, "JavaScript") // Delete "JavaScript" key and value 
 language, ok = m["C++"] // ok is false, language is bool's zero-value (false) 
```

#### Mais Informações:

*   [Um passeio de ir](https://tour.golang.org/moretypes/19)
*   [Vá pelo exemplo](https://gobyexample.com/maps)
*   [Livro Golang](https://www.golang-book.com/books/intro/6#section3)
*   [A especificação da linguagem de programação Go](https://golang.org/ref/spec#Making_slices_maps_and_channels)