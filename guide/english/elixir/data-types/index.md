---
title: Data Types
---
## Data Types

In Elixir there are five basic data types: integers, floats, booleans, atoms, and strings. These data types are used to store values for later use in your program.

### Integers
An integer is a non-decimal number. Elixir has built in support for binary, octal, and hexadecimal numbers as integers.

```elixir
iex> 1337
1337
```

### Floats
A float requires a decimal and at least one digit after the decimal. Floats support 64-bit double precision and `e` for exponets.

```elixir
iex> 27e-100
27e-100
```

### Booleans
A boolean is a true or false value. In Elixir everything is truthy except for `false` and `nil`. It's important to note that booleans are a subtype of Elxir atoms (you can inspect the values in IEX to see for yourself).

```elixir
iex> true
true
iex> false
false
iex> nil
nil
```

### Atoms
An atom is a constant which value is the same as the name. Atoms are commonly used for status / errors messages inside a tuple with more information included in a string.

```elixir
iex> {:ok, "Message sent successfully"}
{:ok, "Message sent successfully"}
iex> {:error, "Message failed to send"}
{:error, "Message failed to send"}
```

### Strings
A string is UTF-8 encoded and wrapped in double quotes.

```elixir
iex> "freeCodeCamp"
"freeCodeCamp"
```

A string is also a binary, you can see a string's binary representation in Elixir by attaching `<> <<0>>` to the end of the string. A string can represent a binary, a binary can also represent a string.

```elixir
iex> "freeCodeCamp" <> <<0>>
<<102, 114, 101, 101, 67, 111, 100, 101, 67, 97, 109, 112, 0>>
```

#### More information
* [Hexdocs Atom](https://hexdocs.pm/elixir/Atom.html)
* [Hexdocs String](https://hexdocs.pm/elixir/String.html)
* [Hexdocs Integer](https://hexdocs.pm/elixir/Integer.html)
* [Hexdocs Float](https://hexdocs.pm/elixir/Float.html)