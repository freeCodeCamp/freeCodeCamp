---
title: Loops
localeTitle: Bucles
---
# Bucles

Dentro de Rust hay tres tipos de mecanismos de bucle nativos: `loop` , `while` y `for` .

## Repetición infinita con `loop`

En Rust, la estructura de `loop` ejecutará continuamente un bloque de código ad infinitum (o hasta que le indique explícitamente que se detenga).

Aquí hay un programa de ejemplo que usa `loop` para imprimir la palabra 'otra vez' continuamente al terminal:

```rust
fn main() { 
    loop { 
        println!("again!"); 
    } 
 } 
```

## Bucle condicional con `while`

El mecanismo anterior no es muy útil a menos que introduzcamos algún tipo de condición de detención para que el `loop` verifique. Por suerte, Rust tiene una estructura de bucle incorporada llamada `while` , que puedes usar para ejecutar continuamente un bloque de código mientras que alguna condición es verdadera.

Aquí hay un programa de ejemplo que usa `while` para contar desde 5:

```rust
fn main() { 
    let mut number = 5; 
 
    while number != 0 { 
        println!("{}", number); 
        number = number - 1; 
    } 
 } 
```

Ejecuta el código [aquí](https://play.rust-lang.org/?gist=62677371a8590be27c84dcae7068de57&version=stable) .

## Iterando a través de una colección con `for`

En algunos casos, es posible que desee iterar y operar en los elementos de una colección (como una matriz). Mientras que usted podría lograr esto usando un `while` de bucle y una variable índice para acceder a cada elemento, Rust ofrece el `for` bucle para hacer esta operación mucho más fácil.

Aquí hay un programa de ejemplo que imprime cada número en una matriz al terminal usando `for` :

```rust
fn main() { 
    let collection = [15, 7, 2, 6, 9]; 
 
    for element in collection.iter() { 
        println!("the value is: {}", element); 
    } 
 } 
```

Ejecuta el código [aquí](https://play.rust-lang.org/?gist=0c2acf21b96a81ebd411e4a7dc5a19fd&version=stable) .

Al igual que los iteradores en C ++, la función `.iter()` devuelve un iterador a la `collection` , que luego se puede recorrer para acceder a cada `element` . Para obtener más información, diríjase a la documentación de Rust sobre el [flujo de control](https://doc.rust-lang.org/book/second-edition/ch03-05-control-flow.html) .