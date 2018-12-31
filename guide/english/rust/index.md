---
title: Rust
---
# Rust
## Introduction

Rust is a systems programming language focused on three goals: safety, speed, and concurrency. Its design lets you create programs that have the performance and control of a low-level language, but with the powerful abstractions of a high-level language. These properties make Rust suitable for programmers who have experience in languages like C and are looking for a safer alternative, as well as those from languages like Python who are looking for ways to write code that performs better without sacrificing expressiveness. Rust runs the majority of its safety checks and memory management decisions at compile time, so that your program’s runtime performance isn’t impacted. This makes it useful in a number of use cases that other languages aren’t good at: programs with predictable space and time requirements, embedding in other languages, and writing low-level code, like device drivers and operating systems. Also used for web applications also powers the Rust package registry site, <a href='https://www.crates.io' target='_blank' rel='nofollow'>crates.io</a>.

For more information head to <a href='https://www.rust-lang.org' target='_blank' rel='nofollow'>Rust's Homepage</a>.

## Installation

The developers of rust make it extremely easy to install and manage rust on your system. This is achieved through the tool `rustup` which allows you to not only install the rust compiler `rustc`, but also easily switch between stable, beta, and nightly versions of the compiler and keep them all up to date.

The official installation documentation can be found [here](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html).

This documentation can also be accessed offline by  running ``` rustup doc ``` after installation.

### Linux or Mac

If you're running Linux or Mac, installation of `rustup` is best done through the terminal:

```bash
$ curl https://sh.rustup.rs -sSf | sh
```
This will download and run a script to your machine that installs the tool. The installation script automatically adds Rust to your system `PATH` after your next login.

### Windows

On Windows, go to the [rustup website](https://rustup.rs) and follow the instructions to download `rustup-init.exe`. Run that and follow the rest of the instructions it gives you.

### Updating

Once you have installed `rustup`, updating to newer versions is simple. All you need to run is:

```bash
$ rustup update
```
To view the current version number, commit hash, and commit date of your rust compiler, run the following command:

```bash
$ rustc --version
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

### Uninstalling

Uninstalling rust from your system is as easy as installing it:

```bash
$ rustup self uninstall
```
