---
title: Hello World
localeTitle: Hola Mundo
---
## Hola Rust

Escribir su primer programa de moho es tan fácil como instalarlo. En el directorio del proyecto de su elección, crear un nuevo archivo de origen denominado `main.rs` . Es importante tener en cuenta que los archivos Rust siempre terminan con la `.rs` extensión y nombres de archivo con más de una palabra están separados por guiones. Por ejemplo, `helloworld.rs` se convertirían en `hello_world.rs` .

Después de crear `main.rs` , añada el siguiente código dentro:

```rust
fn main() { 
    println!("Hello, world!"); 
 } 
```

¡Guauu! Eso fue fácil, ¿verdad? Dentro eres nuevo `main.rs` archivo, lo siguiente es cierto:

*   La primera línea `fn main()` denota una _función_ en Rust. La `main` función es especial, es la primera cosa que se llama para cada programa ejecutable Rust.
*   La segunda línea `println!("Hello, world!")` Está llamando a una _macro_ Rust, pasando una _cadena,_ ya que es el primer argumento. Esta línea se imprime la cadena "Hola, mundo!" a la terminal. Se puede decir si está llamando a una _macro_ o _función_ Rust través de la observación de la `!` .

Para ejecutar el programa, primero debe compilar:

```bash
$ rustc main.rs 
```

Este proceso creará un archivo ejecutable en el mismo directorio, que luego se puede ejecutar:

```bash
$ ./main 
 Hello, world! 
```

¡Felicidades! Que acabas de escribir su propio programa de Rust!

## Hola por carretera

Cargo es la herramienta de construcción que consigue enviado por el óxido cuando se instaló y se puede utilizar para muchas cosas. Aquí vamos a ver el enfoque alternativo de la utilización de la carga.

En primer lugar vaya al directorio padre de su proyecto y ejecutar `cargo new hello_world` . Esto creará nuestro directorio del proyecto de `hello_world` con algunos archivos dentro de ella, los que están siendo `Cargo.toml` que le dice a `cargo` cómo construir su proyecto, así como `src/main.rs` que es nuestro archivo de origen Rust. Si abre este archivo ver algo de código ya se generó para nosotros corremos Hello World! Así que vamos a hacer eso.

Para ejecutar su programa con la carga es tan simple como ejecutar `cargo run` en el directorio del proyecto y debe ser algo como esto:

```bash
cargo run 
   Compiling hello_world v0.1.0 
    Finished dev [unoptimized + debuginfo] target(s) in 1.31s 
     Running `target/debug/hello_world` 
 Hello, world! 
```

Gran trabajo que ahora tienen más herramientas a su disposición!