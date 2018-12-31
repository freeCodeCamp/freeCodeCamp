---
title: Erlang Term Storage
localeTitle: Armazenamento de Termo Erlang
---
## Armazenamento de Termo Erlang

O Erlang Term Storage, normalmente abreviado como ETS, é um banco de dados embutido na memória embutido no OTP, é acessível dentro do Elixir e é uma alternativa poderosa para soluções como o Redis quando seu aplicativo é executado em um único nó.

## Começo rápido

Para criar uma tabela ETS, primeiro você precisa iniciar uma tabela `tableName = :ets.new(:table_otp_name, [])` , depois de ter iniciado uma tabela, você pode: inserir dados, pesquisar valores, excluir dados e muito mais.

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

## Persistência

As Tabelas ETS não são persistentes e são destruídas quando o processo que a possui termina. Se você quiser armazenar dados persistentemente, recomenda-se um banco de dados tradicional e / ou armazenamento baseado em arquivos.

## Casos de uso

As Tabelas ETS são comumente usadas para armazenar dados em cache no aplicativo, por exemplo, os dados da conta obtidos de um banco de dados podem ser armazenados em uma Tabela ETS para reduzir a quantidade de consultas no banco de dados. Outro caso de uso é o uso de recursos de limitação de taxa em um aplicativo da Web - a rápida velocidade de leitura e gravação do ETS o torna excelente para isso. As Tabelas ETS são uma ferramenta poderosa para o desenvolvimento de aplicativos da Web altamente simultâneos com o menor custo de hardware possível.

#### Mais Informações:

*   [elixir-lang.org | Bibliotecas Erlang (ETS)](https://elixir-lang.org/getting-started/erlang-libraries.html#erlang-term-storage)
*   [erlang.org | ETS](http://erlang.org/doc/man/ets.html)