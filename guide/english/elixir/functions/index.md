---
title: Functions
---
## Functions

### Syntax
Functions in Elixir are defined using the def/2 macro:
```elixir
def name(param1, param2) do
   # Do stuff
end
```

Private functions use the defp/2 macro:
```elixir
defp name(param1, param2) do
  # Do stuff
end
```

### Returning
Functions in Elixir do not use a return statement. Instead, they take the last expression (no matter how deeply nested in the function) and return that.
```elixir
def add(x, y) do
  x + y
end

def abs(x) do
  if x < 0 do
    -x
   else
    x
   end
end
```

#### More Information:
+ <a href="https://elixir-lang.org/getting-started/modules-and-functions.html">Official Module and Function Guide</a>
