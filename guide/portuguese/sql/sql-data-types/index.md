---
title: SQL Data Types
localeTitle: Tipos de dados SQL
---
# Tipos de dados SQL

Cada coluna em uma tabela deve ter um tipo de dados. Indica o tipo de valor que a coluna armazena.

Cada banco de dados pode aceitar diferentes tipos de dados, mas, em geral, a lista de tipos de dados é:

### Tipos de Strings

Tipo de dados | Descrição ------------ | ------------- `CHAR(n)` | Cadeia de caracteres. Comprimento fixo n. O comprimento mínimo é 1. Se você atribuir um valor a uma coluna CHAR contendo menos caracteres que o comprimento definido, o espaço restante será preenchido com caracteres em branco. `VARCHAR(n)` | Cadeia de caracteres. Comprimento variável. Comprimento máximo n. Comprimento mínimo é 1 `BINARY(n)` | Corda binária. Comprimento fixo n `VARBINARY(n)` ou `VARBINARY(n)` `BINARY VARYING(n)` | Corda binária. Comprimento variável. Comprimento máximo n

### Tipos numéricos

Tipo de dados | Descrição ------------ | ------------- `INTEGER` | Número inteiro numérico. De -2.147.483.648 para 2.147.483.647. `SMALLINT` | Número inteiro numérico. De -32.768 a 32.767 `BIGINT` | Número inteiro numérico. De -22.223.372.036.854.775.808 para 9.223.372.036.854.775.807 `DECIMAL(p,s)` ou `NUMERIC(p,s)` | Exacto numérico, precisão p, escala s. Precisão é o número total máximo de dígitos decimais que serão armazenados, tanto à esquerda quanto à direita do ponto decimal. Escala é o número de dígitos decimais que serão armazenados à direita do ponto decimal. Esse número é subtraído de p para determinar o número máximo de dígitos à esquerda do ponto decimal. Exemplo: decimal (5,2) é um número que tem 3 dígitos antes do decimal e 2 dígitos após o decimal. `FLOAT(p)` | Precisão numérica aproximada, p. Um número flutuante na notação exponencial de base 10. O argumento de tamanho para este tipo consiste em um único número especificando a precisão mínima `REAL` | Precisão numérica e aproximada aproximada 7 `FLOAT` | Precisão numérica e aproximada aproximada 16 `DOUBLE PRECISION` | Precisão numérica e aproximada aproximada 16

### Tipos de data e hora

Tipo de dados | Descrição ------------ | ------------- `DATE` | Armazena valores de ano, mês e dia `TIME` | Armazena valores de hora, minuto e segundo `DATETIME` | Armazena ano, mês, dia, hora, minuto e segundo valores `TIMESTAMP` | Armazena o número de segundos desde a época do Unix `TIME WITH TIME ZONE` | Armazena a hora do dia com o fuso horário `TIMESTAMP WITH TIME ZONE` | Armazena o registro de data e hora com o fuso horário

### Outros tipos de dados

Tipo de dados | Descrição ------------ | ------------- `BOOLEAN` | Armazena valores `TRUE` ou `FALSE` `ARRAY` | Uma coleção de elementos configurados e compridos `MULTISET` | Uma coleção de elementos de comprimento variável e não ordenada `XML` | Armazena dados XML