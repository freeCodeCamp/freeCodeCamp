---
title: Loops
---
# Loops

Within Rust there are three kinds of native looping mechanisms: `loop`, `while`, and `for`.

## Infinite repetition with `loop`

In Rust, the `loop` structure will continually execute a block of code ad infinitum, (or until you explicitly tell it to stop).

Here is an example program using `loop` to print the word 'again' continually to the terminal:
```rust
fn main() {
    loop {
        println!("again!");
    }
}
```

## Conditional looping with `while`

The above mechanism is not very useful unless we introduce some kind of stopping condition for the `loop` to check for. Luckily, Rust has an in-built looping structure called `while`, that you can use to continually execute a block of code whilst some condition is true.

Here is an example program using `while` to count down from 5:
```rust
fn main() {
    let mut number = 5;

    while number != 0 {
        println!("{}", number);
        number = number - 1;
    }
}
```
Run the code [here](https://play.rust-lang.org/?gist=62677371a8590be27c84dcae7068de57&version=stable).

## Iterating through a collection with `for`

In some instances, you might want to iterate and operate on the elements of a collection (such as an array). Whilst you could achieve this using a `while` loop and an index variable to access each element, Rust provides the `for` loop to make this operation much easier.

Here is an example program that prints each number in an array to the terminal using `for`:

```rust
fn main() {
    let collection = [15, 7, 2, 6, 9];

    for element in collection.iter() {
        println!("the value is: {}", element);
    }
}
```
Run the code [here](https://play.rust-lang.org/?gist=0c2acf21b96a81ebd411e4a7dc5a19fd&version=stable).

Much like iterators in C++, the `.iter()` function returns an iterator to the `collection`, which can then be looped through to access each `element`. For more information, head to the Rust documentation on [control flow](https://doc.rust-lang.org/book/second-edition/ch03-05-control-flow.html).
