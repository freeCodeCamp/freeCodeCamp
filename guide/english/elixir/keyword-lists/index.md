---
title: Keyword Lists
---
## Keyword Lists

Keyword Lists are used for storing the key-value pairs as tuples.

```shell
iex(1)> iex(3)> kw_list = [{:key1, "Val1"}, {:key2, "Val2"}, {:key1, "It is OK to repeat key1"}]
[key1: "Val1", key2: "Val2", key1: "It is OK to repeat key1"]
```
curly braces can be omitted as seen in the `iex` response on the second line.

In Keyword Lists, the Keys :

- Must be atoms
- Can be repeated
- Are ordered as specified by the developer.

Keyword lists are default mechanism for passing options to functions in Elixir.

#### More Information:
 * [Elixir Documentation](https://elixir-lang.org/getting-started/keywords-and-maps.html#keyword-lists)
 * [Keyword HexDocs](https://hexdocs.pm/elixir/Keyword.html)
