---
title: Maps
---
## Maps

Maps is the Elixir data structure for key-values.
They are not ordered and allow keys of any type.
Maps are created using the %{} syntax:

```
iex(1)> %{}
%{}
iex(2)> %{1 => "one", 2 => "two", 3 => "three"}
%{1 => "one", 2 => "two", 3 => "three"}

```

Maps can be accessed with `Map.get/3` or `Map.fetch/2` or with through the `map[]` syntax:
```
iex(1)> map=%{1 => "one", 2 => "two"}
%{1 => "one", 2 => "two"}
iex(2)> Map.fetch(map, 1)
{:ok, "one"}
iex(3)> map[2]
"two"
iex(4)> map[5]
nil

```

#### More Information:
[HexDocs](https://hexdocs.pm/elixir/Map.html)
