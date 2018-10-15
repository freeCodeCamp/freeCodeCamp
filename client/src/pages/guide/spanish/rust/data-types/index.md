---
title: Rust Data Types
localeTitle: Tipos de datos del óxido
---
Comprender el sistema de tipos de un lenguaje de programación es esencial para comenzar a escribir programas. Un sistema de tipo es simplemente un sistema que un lenguaje de programación aplica para que usted almacene información en datos. Si usted es un desarrollador que viene de C / C ++, algunos de estos tipos de datos ya le serán familiares.

Echemos un vistazo a los tipos primitivos de Rust

* * *

Cuando observamos Rust, vemos un lenguaje que pone mucho más énfasis en **la seguridad de tipos** . Esto significa que al interactuar y manejar cómo el programador almacena los datos, el compilador es mucho más estricto e implacable. Un ejemplo (que veremos pronto) se presenta a través de **advertencias** .

Rust es también un lenguaje de programación estático. Esto significa que cuando el programa se está compilando (también conocido como _tiempo de compilación_ ), el tipo de sus variables debe ser conocido. Rust tiene la opción de proporcionar tipos _implícitos_ o _explícitos_ .

### Enteros

Veamos cómo funcionan los tipos _implícitos_ o _explícitos_ declarando un entero simple.
```
let number = 13; 
```

Declaramos nuestra variable, `number` que equivale al valor de 13. Cuando compilamos esto, Rust sabe que el tipo del número es `i32` , también conocido como un entero de 32 bits. Si quisiéramos hacer esto _explícitamente_ , podemos declarar la variable así:
```
let number: i32 = 13; 
```

Por supuesto, `i32` no es el único tipo que podemos especificar. Aquí una tabla de los otros tipos de `integer` que puede implementar. Tenga en cuenta que estos son _de tamaño fijo_ , y el número de bits correspondiente al tipo es el número de bits que se pueden almacenar en esa variable.

| Tamaño | Firmado | Sin firmar | | ----- | ---- | --- | | 8 bits | i8 | u8 | | 16 bits | i16 | u16 | | 32 bits | i32 | u32 | | 64 bits | i64 | u64 |

Firmado ( `i` Prepend) y sin signo ( `u` Prepend) representan o no las variables que declaramos son positivos o negativos, respectivamente.

Rust también tiene el tipo `isize` y `usize` , que dependerá de la arquitectura de su computadora. Si está en una arquitectura de 64 bits, tendrá una variable de 64 bits. Si está en una arquitectura de 32 bits, tendrá una variable de 32 bits.

### Flotadores

Rust también tiene soporte para valores flotantes, o valores decimales.
```
let floaty = 3.0; // type is f64 
```

La variable `floaty` se declaró implícitamente como un tipo `f64` , o flotante de 64 bits. Si desea un `f32` , puede forzar una variable ya sea explícita, O agregando el tipo al final del valor de la variable:
```
let float1: f32 = 4.5; // type is f32 
 let float2 = 5f32;   // type is f32 
```

Puedes ver que `float2` ahora es un `f32` , aunque tiene un valor no decimal. Al añadir un `f32` , `float2` a `float2` a representar un tipo `f32` .

## Booleanos

En cada lenguaje de programación, los valores booleanos ( `true` y `false` ) siempre están presentes de alguna forma. Rust tiene soporte para esto a través del tipo `bool` .
```
let t = true; 
 let f: bool = false; 
```

## Operaciones numericas

Dicho esto, ahora podemos usar Rust para realizar operaciones numéricas simples. Observe cómo los tipos están restringidos a cálculos solo con sus propios tipos.
```
let a = 4 + 5;        // => 9 
 let b = 5.0 - 4.0;    // => 1.0 
 let c = 3 * 4.0;      // => ERROR! 
 let d = 6.0 / 2.0;    // => 3.0 
 let e = 10 % 4;       // => 2 
```

## Advertencias!

Veamos algunos de los problemas potenciales que ya pueden estar presentes en Rust. Debido a que utilizamos los datos de manera eficiente y asegurándonos de que las variables que creamos realmente se estén utilizando, Rust emitirá advertencias para las variables no utilizadas:
```
fn main(){ 
  let a = 4; 
  // and now we close our program. 
 } 
```

Ahora si ejecutamos este programa:
```
warning: unused variable: `a` 
```

Es importante recordar usar siempre nuestras variables, y si no, comentarlas o eliminarlas.

## Lee mas:

https://doc.rust-lang.org/book/second-edition/ch03-02-data-types.html