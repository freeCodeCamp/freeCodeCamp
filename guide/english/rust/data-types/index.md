---
title: Rust Data Types
---

Understanding the type system of a programming language is essential for getting started with writing programs. A type system is simply a system that a programming language enforces for you to store information in data. If you are a developer coming from C/C++, some of these data types may already be familiar to you.

Let's look at Rust's primitive types

---

When we look at Rust, we see a language that places much more focus on __type-safety__. This means that interacting and handling how the programmer stores data, the compiler is much more strict and unforgiving. One example (which we will see soon) is introduced are through __warnings__.

Rust is also a statically-typed programming language. This means that when the program is compiling (also known as _compile-time_), the type of your variables must be known. Rust has the option of providing _implicit_ or _explicit_ types. 

### Integers

Let's see how _implicit_ or _explicit_ types work by declaring a simple integer.

    let number = 13;

We declared our variable, `number` to equate to the value of 13. When we compile this, Rust knows that the type of the number is `i32`, also known as a 32-bit integer. If we wanted to do this _explicitly_, we can declare the variable as so:

    let number: i32 = 13;

Of course, `i32` is not the only type that we can specify. Here a table of the other `integer` types that you can implement. Keep in mind that these are _fixed-sized_, and the number of bits corresponding with the type is the number of bits that can be stored in that variable.

| Size   | Signed | Unsigned     |
| -----  | ---- | --- |
| 8-bit  |  i8 	| u8  |
| 16-bit |	i16 |	u16 |
| 32-bit |	i32 |	u32 |
| 64-bit |	i64 |	u64 |

Signed (`i` prepend) and unsigned (`u` prepend) represent whether or not the variables that we declare are positive or negative, respectively. 

Rust also has the `isize` and `usize` type, which will depend on your computer's architecture. If you are on a 64-bit architecture, you will have a 64-bit variable. If you are on a 32-bit architecture, you will have a 32-bit variable.

### Floats

Rust also has support for float values, or decimal values. 

    let floaty = 3.0; // type is f64

The variable `floaty` was implicitly declared to be a `f64` type, or 64-bit float. If you want a `f32`, you can coerce a variable by either being explicit, OR appending the type to end of the variable value:

    let float1: f32 = 4.5; // type is f32
    let float2 = 5f32;   // type is f32

You can see that `float2` is now a `f32`, even though it has a non-decimal value. By appending a `f32`, we coerced `float2` to represent a `f32` type.

## Booleans

In every programming language, booleans values (`true` and `false`) are always present in some form. Rust has support for this through the `bool` type.

    let t = true;
    let f: bool = false;
    
## Numerical Operations

With that said, we can now use Rust to perform simple numerical operations. Notice how types are restricted to calculations only with their own types.

    let a = 4 + 5;        // => 9 
    let b = 5.0 - 4.0;    // => 1.0
    let c = 3 * 4.0;      // => ERROR!
    let d = 6.0 / 2.0;    // => 3.0
    let e = 10 % 4;       // => 2
    
## Warnings!

Let's look at some of the potential problems that can already be present in Rust. Since utilizing data efficiently and making sure that the variables that we create are actually being used, Rust will throw warnings for unused variables:

    fn main(){
      let a = 4;
      // and now we close our program.
    }

Now if we run this program:

    warning: unused variable: `a`

It's important to remember to always use our variables, and if not, comment them out or remove them!

## Read more:

https://doc.rust-lang.org/book/second-edition/ch03-02-data-types.html