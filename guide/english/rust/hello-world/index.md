---
title: Hello World
---

## Hello Rust

Writing your first Rust program is as easy as installing it. In the project directory of your choice, create a new source file called `main.rs`. It is important to note that Rust files always end with the `.rs` extension and filenames with more than one word are separated with underscores. For example, `helloworld.rs` would become `hello_world.rs`.

After creating `main.rs`, add the following code within:

```rust
fn main() {
    println!("Hello, world!");
}
```
Wow! That was easy, wasn't it? Within you're new `main.rs` file, the following is true:
+ The first line `fn main()` denotes a _function_ in Rust. The `main` function is special, it is the first thing that is called for every executable Rust program.
+ The second line `println!("Hello, world!")` is calling a Rust _macro_, passing a _string_ as it's first argument. This line prints the string "Hello, world!" to the terminal. You can tell if you are calling a Rust _macro_ or _function_ through observation of the `!`.

To execute the program, you must first compile it:
```bash
$ rustc main.rs
```
This process will create an executable in the same directory, which you can then run:
```bash
$ ./main
Hello, world!
```

Congratulations! You've just written your own Rust program!

## Hello Cargo

Cargo is the build tool that gets shipped with Rust when you installed it and can be used for many things. Here we will see the alternative approach of using cargo.

Firstly navigate to the parent directory of your project and run `cargo new hello_world`. This will create our project directory of `hello_world` with some files inside it, those being `Cargo.toml` which tells `cargo` how to build your project, as well as `src/main.rs` which is our Rust source file. If you open this file you will see some code is already generated for us to run hello world! So let's do that.

To run your program with cargo it is as simple as running `cargo run` in your project directory and it should look something like this:
```bash
cargo run
   Compiling hello_world v0.1.0
    Finished dev [unoptimized + debuginfo] target(s) in 1.31s
     Running `target/debug/hello_world`
Hello, world!
```

Great work you now have even more tools at your disposal!
