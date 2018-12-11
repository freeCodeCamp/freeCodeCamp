---
title: Ruby String Interpolation
localeTitle: Interpolação de String Ruby
---
# Interpolação de Cadeias

A interpolação de string fornece uma sintaxe mais legível e concisa para criar strings. Você pode estar familiarizado com a concatenação através dos métodos `+` ou `<<` :

```ruby
"Hello " + "World!" #=> Hello World 
 "Hello " << "World!" #=> Hello World 
```

A interpolação de strings fornece uma maneira de incorporar o código Ruby diretamente em uma string:

```ruby
place = "World" 
 "Hello #{place}!" #=> Hello World! 
 
 "4 + 4 is #{4 + 4}" #=> 4 + 4 is 8 
```

Tudo entre `#{` e `}` é avaliado como código Ruby. Para fazer isso, a cadeia deve estar entre aspas duplas ( `"` ).

Aspas simples retornarão a string exata dentro das aspas:

```ruby
place = "World" 
 'Hello #{place}!' #=> Hello #{place}! 

```