---
title: Hello World
localeTitle: Olá Mundo
---
## Olá ferrugem

Escrever seu primeiro programa Rust é tão fácil quanto instalá-lo. No diretório do projeto de sua escolha, crie um novo arquivo de origem chamado `main.rs` É importante observar que os arquivos Rust sempre terminam com a extensão `.rs` e os nomes de arquivos com mais de uma palavra são separados por sublinhados. Por exemplo, `helloworld.rs` se tornaria `hello_world.rs` .

Depois de criar `main.rs` , adicione o seguinte código em:

```rust
fn main() { 
    println!("Hello, world!"); 
 } 
```

Uau! Isso foi fácil, não foi? Dentro de você é novo arquivo `main.rs` , o seguinte é verdadeiro:

*   A primeira linha `fn main()` indica uma _função_ em Rust. A função `main` é especial, é a primeira coisa que é chamada para todo programa Rust executado.
*   A segunda linha `println!("Hello, world!")` Está chamando uma _macro_ Rust, passando uma _string_ como primeiro argumento. Esta linha imprime a string "Hello, world!" para o terminal. Você pode dizer se você está chamando uma _macro_ Rust ou _função_ através da observação do `!` .

Para executar o programa, você deve primeiro compilá-lo:

```bash
$ rustc main.rs 
```

Este processo irá criar um executável no mesmo diretório, que você pode então executar:

```bash
$ ./main 
 Hello, world! 
```

Parabéns! Você acabou de escrever seu próprio programa Rust!

## Olá Cargo

Cargo é a ferramenta de construção que é fornecida com o Rust quando você o instala e pode ser usada para muitas coisas. Aqui vamos ver a abordagem alternativa de uso de carga.

Primeiro, navegue até o diretório pai do seu projeto e execute `cargo new hello_world` . Isto irá criar o diretório do nosso projeto `hello_world` com alguns arquivos dentro dele, sendo o `Cargo.toml` que informa ao `cargo` como construir o seu projeto, assim como o `src/main.rs` que é o nosso arquivo fonte Rust. Se você abrir este arquivo, verá que algum código já foi gerado para que possamos executar o Hello World! Então vamos fazer isso.

Para rodar seu programa com carga, é tão simples quanto rodar o `cargo run` no diretório do seu projeto e deve ser algo como isto:

```bash
cargo run 
   Compiling hello_world v0.1.0 
    Finished dev [unoptimized + debuginfo] target(s) in 1.31s 
     Running `target/debug/hello_world` 
 Hello, world! 
```

Ótimo trabalho agora você tem ainda mais ferramentas à sua disposição!