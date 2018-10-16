---
title: Rust Data Types
localeTitle: Tipos de dados de ferrugem
---
Entender o sistema de tipos de uma linguagem de programação é essencial para começar a escrever programas. Um sistema de tipos é simplesmente um sistema que uma linguagem de programação impõe para você armazenar informações em dados. Se você é um desenvolvedor vindo de C / C ++, alguns desses tipos de dados já podem ser familiares para você.

Vamos ver os tipos primitivos de Rust

* * *

Quando olhamos para Rust, vemos uma linguagem que coloca muito mais foco na **segurança de tipos** . Isso significa que interagindo e manipulando como o programador armazena dados, o compilador é muito mais rígido e implacável. Um exemplo (que veremos em breve) é introduzido através de **avisos** .

Rust também é uma linguagem de programação estaticamente tipada. Isto significa que quando o programa está compilando (também conhecido como _tempo de compilação_ ), o tipo de suas variáveis ​​deve ser conhecido. A ferrugem tem a opção de fornecer tipos _implícitos_ ou _explícitos_ .

### Inteiros

Vamos ver como tipos _implícitos_ ou _explícitos_ funcionam, declarando um inteiro simples.
```
let number = 13; 
```

Declaramos nossa variável, `number` , para equivale ao valor de 13. Quando compilamos isso, o Rust sabe que o tipo do número é `i32` , também conhecido como um inteiro de 32 bits. Se quisermos fazer isso _explicitamente_ , podemos declarar a variável da seguinte forma:
```
let number: i32 = 13; 
```

Naturalmente, o `i32` não é o único tipo que podemos especificar. Aqui está uma tabela dos outros tipos `integer` que você pode implementar. Tenha em mente que estes são _de tamanho fixo_ , e o número de bits correspondentes ao tipo é o número de bits que podem ser armazenados nessa variável.

| Tamanho | Assinado | Não assinado | | ----- | ---- | --- | | 8 bits | i8 | u8 | | 16 bits | i16 | u16 | | 32 bits | i32 | u32 | | 64 bits | i64 | u64 |

Assinado ( `i` preceder) e sem sinal ( `u` preceder) representam ou não as variáveis que declaram são positivos ou negativos, respectivamente.

Rust também tem a `isize` e `usize` tipo, o que dependerá da arquitectura do seu computador. Se você estiver em uma arquitetura de 64 bits, terá uma variável de 64 bits. Se você estiver em uma arquitetura de 32 bits, você terá uma variável de 32 bits.

### Flutuadores

O Rust também tem suporte para valores flutuantes ou valores decimais.
```
let floaty = 3.0; // type is f64 
```

A variável `floaty` foi implicitamente declarada como um tipo `f64` ou float de 64 bits. Se você quer um `f32` , você pode coagir uma variável sendo explícito, ou anexando o tipo ao final do valor da variável:
```
let float1: f32 = 4.5; // type is f32 
 let float2 = 5f32;   // type is f32 
```

Você pode ver que `float2` é agora um `f32` , mesmo que tenha um valor não decimal. Acrescentando um `f32` , nós `float2` para representar um tipo `f32` .

## Booleanos

Em toda linguagem de programação, os valores booleanos ( `true` e `false` ) estão sempre presentes de alguma forma. Rust tem suporte para isso através do tipo `bool` .
```
let t = true; 
 let f: bool = false; 
```

## Operações Numéricas

Com isso dito, agora podemos usar o Rust para realizar operações numéricas simples. Observe como os tipos são restritos a cálculos apenas com seus próprios tipos.
```
let a = 4 + 5;        // => 9 
 let b = 5.0 - 4.0;    // => 1.0 
 let c = 3 * 4.0;      // => ERROR! 
 let d = 6.0 / 2.0;    // => 3.0 
 let e = 10 % 4;       // => 2 
```

## Avisos!

Vejamos alguns dos possíveis problemas que já podem estar presentes no Rust. Desde a utilização de dados de forma eficiente e certificando-se que as variáveis ​​que criamos estão realmente sendo usadas, Rust irá lançar avisos para variáveis ​​não utilizadas:
```
fn main(){ 
  let a = 4; 
  // and now we close our program. 
 } 
```

Agora, se nós executarmos este programa:
```
warning: unused variable: `a` 
```

É importante lembrar-se de sempre usar nossas variáveis ​​e, caso contrário, comentá-las ou removê-las!

## Consulte Mais informação:

https://doc.rust-lang.org/book/second-edition/ch03-02-data-types.html