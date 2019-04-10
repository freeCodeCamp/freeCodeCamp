---
title: Loops
localeTitle: 循环
---
# 循环

在Rust中，有三种本机循环机制： `loop` ， `while`和`for` 。

## `loop`无限重复

在Rust中， `loop`结构将不断地执行无限代码块（或者直到您明确告诉它停止）。

这是一个使用`loop`来连续向终端打印“再次”一词的示例程序：

```rust
fn main() { 
    loop { 
        println!("again!"); 
    } 
 } 
```

## 条件循环与`while`

除非我们为`loop`检查引入某种停止条件，否则上述机制不是很有用。幸运的是，Rust有一个内置的循环结构，称为`while` ，可以用来连续执行一段代码，同时条件成立。

这是一个使用`while`从5开始倒计时的示例程序：

```rust
fn main() { 
    let mut number = 5; 
 
    while number != 0 { 
        println!("{}", number); 
        number = number - 1; 
    } 
 } 
```

在[这里](https://play.rust-lang.org/?gist=62677371a8590be27c84dcae7068de57&version=stable)运行代码。

## 迭代通过集合与`for`

在某些情况下，您可能希望迭代并操作集合的元素（例如数组）。虽然您可以使用`while`循环和索引变量来访问每个元素，但Rust提供了`for`循环以使此操作更容易。

这是一个示例程序，使用`for`将数组中的每个数字打印到终端：

```rust
fn main() { 
    let collection = [15, 7, 2, 6, 9]; 
 
    for element in collection.iter() { 
        println!("the value is: {}", element); 
    } 
 } 
```

在[这里](https://play.rust-lang.org/?gist=0c2acf21b96a81ebd411e4a7dc5a19fd&version=stable)运行代码。

与C ++中的迭代器非常相似， `.iter()`函数返回`collection`的迭代器，然后可以循环访问每个`element` 。有关更多信息，请访问有关[控制流](https://doc.rust-lang.org/book/second-edition/ch03-05-control-flow.html)的Rust文档。