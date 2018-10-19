---
title: Hello World
localeTitle: 你好，世界
---
## 你好Rust

编写第一个Rust程序就像安装它一样简单。在您选择的项目目录中，创建一个名为`main.rs`的新源文件。重要的是要注意Rust文件总是以`.rs`扩展名结尾，而带有多个单词的文件名用下划线分隔。例如， `helloworld.rs`将成为`hello_world.rs` 。

创建`main.rs` ，在以下代码中添加以下代码：

```rust
fn main() { 
    println!("Hello, world!"); 
 } 
```

哇！这很容易，不是吗？在你的新`main.rs`文件中，以下是真的：

*   第一行`fn main()`表示Rust中的一个_函数_ 。 `main`功能是特殊的，它是每个可执行的Rust程序调用的第一件事。
*   第二行`println!("Hello, world!")`正在调用Rust _宏_ ，传递一个_字符串_作为它的第一个参数。此行打印字符串“Hello，world！”到终点站。你可以通过观察来判断你是在调用Rust _宏_还是_函数_ `!` 。

要执行该程序，必须先编译它：

```bash
$ rustc main.rs 
```

此过程将在同一目录中创建一个可执行文件，然后您可以运行该目录：

```bash
$ ./main 
 Hello, world! 
```

恭喜！你刚刚编写了自己的Rust程序！

## 你好货物

Cargo是安装Rust时随附的Rust构建工具，可用于许多事情。在这里，我们将看到使用货物的替代方法。

首先导航到项目的父目录并运行`cargo new hello_world` 。这将创建我们的`hello_world`项目目录，里面有一些文件，那些是`Cargo.toml` ，告诉`cargo`如何构建你的项目，以及`src/main.rs`这是我们的Rust源文件。如果您打开此文件，您将看到已生成一些代码，以便我们运行hello world！所以，让我们这样做。

要使用货物运行程序，就像在项目目录中运行`cargo run`一样简单，它应该如下所示：

```bash
cargo run 
   Compiling hello_world v0.1.0 
    Finished dev [unoptimized + debuginfo] target(s) in 1.31s 
     Running `target/debug/hello_world` 
 Hello, world! 
```

伟大的工作，你现在有更多的工具供您使用！