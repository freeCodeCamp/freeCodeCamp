---
title: Loops
localeTitle: rotações
---
# rotações

No Rust, existem três tipos de mecanismos de loop nativo: `loop` , `while` e `for` .

## Repetição infinita com `loop`

No Rust, a estrutura de `loop` irá continuamente executar um bloco de código ad infinitum (ou até que você diga explicitamente para parar).

Aqui está um exemplo de programa usando o `loop` para imprimir a palavra 'again' continuamente no terminal:

```rust
fn main() { 
    loop { 
        println!("again!"); 
    } 
 } 
```

## Loop condicional com `while`

O mecanismo acima não é muito útil, a menos que introduzamos algum tipo de condição de parada para o `loop` verificar. Felizmente, o Rust possui uma estrutura de loop embutida chamada `while` , que você pode usar para executar continuamente um bloco de código enquanto alguma condição é verdadeira.

Aqui está um exemplo de programa usando `while` para contar de 5:

```rust
fn main() { 
    let mut number = 5; 
 
    while number != 0 { 
        println!("{}", number); 
        number = number - 1; 
    } 
 } 
```

Execute o código [aqui](https://play.rust-lang.org/?gist=62677371a8590be27c84dcae7068de57&version=stable) .

## Iterando através de uma coleção `for`

Em alguns casos, convém iterar e operar nos elementos de uma coleção (como uma matriz). Enquanto você pode conseguir isso usando um `while` loop e uma variável de índice para acessar cada elemento, Rust fornece o `for` loop para tornar esta operação mais fácil.

Aqui está um exemplo de programa que imprime cada número em uma matriz para o terminal usando `for` :

```rust
fn main() { 
    let collection = [15, 7, 2, 6, 9]; 
 
    for element in collection.iter() { 
        println!("the value is: {}", element); 
    } 
 } 
```

Execute o código [aqui](https://play.rust-lang.org/?gist=0c2acf21b96a81ebd411e4a7dc5a19fd&version=stable) .

Assim como os iteradores em C ++, a função `.iter()` retorna um iterador para a `collection` , que pode então ser colocada em loop para acessar cada `element` . Para mais informações, dirija-se à documentação do Rust sobre o [fluxo de controle](https://doc.rust-lang.org/book/second-edition/ch03-05-control-flow.html) .