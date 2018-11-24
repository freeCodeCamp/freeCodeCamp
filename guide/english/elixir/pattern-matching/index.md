---
title: Pattern Matching
---
## Pattern Matching

Pattern matching is a technique which Elixir inherits form Erlang. It is a very powerful technique that allows us to extract simpler substructures from complicated data structures like lists, tuples, maps, etc.

A match has 2 main parts, a left and a right side. The right side is a data structure of any kind. The left side attempts to match the data structure on the right side and bind any variables on the left to the respective substructure on the right. If a match is not found, the operator raises an error.

The simplest match is a lone variable on the left and any data structure on the right. This variable will match anything. For example:    
`x = 12`    
`x = "Hello"`  
`IO.puts(x)`    

You can place variables inside a structure so that you can capture a substructure. For example:  
`[var_1, _unused_var, var_2] = [{"First variable"}, 25, "Second variable" ]`  
`IO.puts(var_1)`  
`IO.puts(var_2)`  

This will store the values, `{"First variable"}` in var_1 and `"Second variable"` in var_2. There is also a special _ variable(or variables prefixed with '_') that works exactly like other variables but tells elixir, "Make sure something is here, but I don't care exactly what it is.". In the previous example, _unused_var was one such variable.

We can match more complicated patterns using this technique. For example if you want to unwrap and get a number in a tuple which is inside a list which itself is in a list, you can use the following command:  
`[_, [_, {a}]] = ["Random string", [:an_atom, {24}]]`  
`IO.puts(a)`  

The above program generates the following result −  
`24`

This will bind a to 24. Other values are ignored as we are using '_'.

In pattern matching, if we use a variable on the right, its value is used. If you want to use the value of a variable on the left, you'll need to use the pin operator.

For example, if you have a variable "a" having value 25 and you want to match it with another variable "b" having value 25, then you need to enter −  
`a = 25`  
`b = 25`  
`^a = b`  

The last line matches the current value of a, instead of assigning it, to the value of b. If we have a non-matching set of left and right hand side, the match operator raises an error. For example, if we try to match a tuple with a list or a list of size 2 with a list of size 3, an error will be displayed.
