---
title: Erlang Term Storage
localeTitle: Almacenamiento a Término Erlang
---
## Almacenamiento a Término Erlang

Erlang Term Storage, normalmente abreviada como ETS, es una base de datos en memoria integrada en OTP, es accesible desde Elixir y es una poderosa alternativa a soluciones como Redis cuando su aplicación se ejecuta en un solo nodo.

## Inicio rápido

Para crear una tabla ETS, primero debe inicializar una tabla. `tableName = :ets.new(:table_otp_name, [])` , una vez que haya inicializado una tabla, puede: insertar datos, buscar valores, eliminar datos y más.

### Demostración de ETS en IEX

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

## Persistencia

Las Tablas ETS no son persistentes y se destruyen una vez que finaliza el proceso que lo posee. Si desea almacenar datos de forma persistente, se recomienda una base de datos tradicional y / o un almacenamiento basado en archivos.

## Casos de uso

Las tablas ETS se usan comúnmente para almacenar datos en caché en la aplicación, por ejemplo, los datos de cuenta obtenidos de una base de datos pueden almacenarse en una tabla ETS para reducir la cantidad de consultas a la base de datos. Otro caso de uso es el uso limitado de la velocidad de las funciones en una aplicación web: la rápida velocidad de lectura y escritura de ETS lo hace ideal para esto. Las Tablas ETS son una herramienta poderosa para desarrollar aplicaciones web altamente concurrentes al menor costo posible de hardware.

#### Más información:

*   [elixir-lang.org | Bibliotecas Erlang (ETS)](https://elixir-lang.org/getting-started/erlang-libraries.html#erlang-term-storage)
*   [erlang.org | ETS](http://erlang.org/doc/man/ets.html)