---
title: Erlang Term Storage
---
## Erlang Term Storage

Erlang Term Storage, normally abreviated as ETS, is an in-memory database built into OTP, its accessible within Elixir, and is a powerful alternative to solutions like Redis when your application runs on a single node.

## Quick Start
To create an ETS table you first need to initalize a table `tableName = :ets.new(:table_otp_name, [])`, once you have initalized a table you can: insert data, lookup values, delete data, and more.

### ETS Demo in IEX
```elixir
iex(1)> myETSTable = :ets.new(:my_ets_table, [])
#Reference<0.1520230345.550371329.65846>
iex(2)> :ets.insert(myETSTable, {"favoriteWebSite", "freeCodeCamp"})
true
iex(3)> :ets.insert(myETSTable, {"favoriteProgrammingLanguage", "Elixir"})
true
iex(4)> :ets.i(myETSTable)
<1   > {<<"favoriteProgrammingLanguage">>,<<"Elixir">>}
<2   > {<<"favoriteWebSite">>,<<"freeCodeCamp">>}
EOT  (q)uit (p)Digits (k)ill /Regexp -->
```

## Persistence
ETS Tables are not persistent and are destroyed once the process which owns it terminates. If you would like to store data persistently a traditional database and/or file-based storage is recommended.

## Use cases
ETS Tables are commonly used for caching data in the application, for example account data fetched from a database may be stored in an ETS Table to reduce the amount of queries to the database. Another use case is for rate limiting use of features in a web application - ETS's fast read and write speed make it great for this. ETS Tables are a powerful tool for developing highly concurrant web applications at the lowest possible hardware cost.

#### More Information:
* [elixir-lang.org | Erlang Libraries (ETS)](https://elixir-lang.org/getting-started/erlang-libraries.html#erlang-term-storage)
* [erlang.org | ETS](http://erlang.org/doc/man/ets.html)
