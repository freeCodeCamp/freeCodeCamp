---
title: IEX
---
## IEX (Interactive Mode)

IEx is the Interactive Elixir shell.
Some of the functionalities provided by iex are described briefly below.

### Helpers

IEx provides a number of helper functions.

Typing h will give us the following list (part of):

```
Interactive Elixir (1.7.3) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> h

                                  IEx.Helpers                                   

Welcome to Interactive Elixir. You are currently seeing the documentation for
the module IEx.Helpers which provides many helpers to make Elixir's shell more
joyful to work with.

This message was triggered by invoking the helper h(), usually referred to as
h/0 (since it expects 0 arguments).

You can use the h/1 function to invoke the documentation for any Elixir module
or function:

    iex> h(Enum)
    iex> h(Enum.map)                                                                                                                                          
    iex> h(Enum.reverse/1)                                                                                                                                    

You can also use the i/1 function to introspect any value you have in the
shell:

    iex> i("hello")

There are many other helpers available, here are some examples:

  • b/1            - prints callbacks info and docs for a given module
  • c/1            - compiles a file
  • c/2            - compiles a file and writes bytecode to the given path
  • cd/1           - changes the current directory
```

### Autocomplete

To get a list of the public functions that a module provides, type the name of the module followed by a dot and then press tab.

```
iex(1)> List.
Chars                 ascii_printable?/1    ascii_printable?/2                                                                                                                                                                                               
delete/2              delete_at/2           duplicate/2                                                                                                                                                                                                      
first/1               flatten/1             flatten/2                                                                                                                                                                                                        
foldl/3               foldr/3               insert_at/3                                                                                                                                                                                                      
keydelete/3           keyfind/3             keyfind/4                                                                                                                                                                                                        
keymember?/3          keyreplace/4          keysort/2                                                                                                                                                                                                        
keystore/4            keytake/3             last/1                                                                                                                                                                                                           
myers_difference/2    pop_at/2              pop_at/3                                                                                                                                                                                                         
replace_at/3          starts_with?/2        to_atom/1                                                                                                                                                                                                        
to_existing_atom/1    to_float/1            to_integer/1                                                                                                                                                                                                     
to_integer/2          to_string/1           to_tuple/1                                                                                                                                                                                                       
update_at/3           wrap/1                zip/1 
```

### Expression evaluation

IEx can be used to evaluate expressions

```
iex(1)> 8 + 4                                                                                                                                                                                                                                                
12   
iex(2)> String.upcase "This is a test"
"THIS IS A TEST"
iex(3)> List.first [1,2,3]
1
```

#### Full IEx documentation
* [HexDocs](https://hexdocs.pm/iex/IEx.html)

