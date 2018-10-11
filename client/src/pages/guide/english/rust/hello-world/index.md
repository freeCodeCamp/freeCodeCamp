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
