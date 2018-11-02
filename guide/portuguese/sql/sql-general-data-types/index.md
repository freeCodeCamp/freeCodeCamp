---
title: SQL General Data Types
localeTitle: Tipos de dados gerais do SQL
---
## Tipos de dados gerais do SQL

# Tipos de dados SQL

Cada coluna em uma tabela de banco de dados precisa ter um nome e um tipo de dados.

Um desenvolvedor de SQL deve decidir que tipo de dados serão armazenados dentro de cada coluna ao criar uma tabela. O tipo de dados é uma diretriz para o SQL entender que tipo de dados é esperado dentro de cada coluna e também identifica como o SQL irá interagir com os dados armazenados.

# Tipos de dados do MySQL

Os tipos de dados gerais do SQL consistem no seguinte:

1.  Um valor baseado em texto e / ou numérico, geralmente chamado de STRING
2.  Um valor somente numérico, geralmente chamado de INTEGER
3.  Um valor com base no calendário e / ou no relógio, muitas vezes referido como DATE ou TIME
4.  Um valor específico do banco de dados, como um sinalizador booleano (duas opções), uma matriz que armazena vários valores em um ponto de dados

## Tipos de dados de texto:

| Tipo de dados | Descrição | | ------------- |: -------------: | | CHAR (tamanho) | Mantém uma cadeia de comprimento fixo (pode conter letras, números e caracteres especiais). O tamanho fixo é especificado entre parênteses. Pode armazenar até 255 caracteres | | VARCHAR (tamanho) | Mantém uma cadeia de comprimento variável (pode conter letras, números e caracteres especiais). O tamanho máximo é especificado entre parênteses. Pode armazenar até 255 caracteres. Nota: Se você colocar um valor maior que 255, ele será convertido em um tipo de TEXTO | | TINYTEXT | Mantém uma cadeia com um comprimento máximo de 255 caracteres | | TEXTO | Contém uma string com um comprimento máximo de 65.535 caracteres | | BLOB | Para BLOBs (Binary Large OBjects). Armazena até 65.535 bytes de dados | | MEDIUMTEXT | Contém uma string com um comprimento máximo de 16.777.215 caracteres | | MEDIUMBLOB | Para BLOBs (Binary Large OBjects). Armazena até 16.777.215 bytes de dados | | LONGTEXT | Contém uma string com um tamanho máximo de 4.294.967.295 caracteres | | LONGBLOB | Para BLOBs (Binary Large OBjects). Detém até 4.294.967.295 bytes de dados | | ENUM (x, y, z, etc) | Deixe você inserir uma lista de valores possíveis. Você pode listar até 65535 valores em uma lista ENUM. Se um valor inserido não estiver na lista, um valor em branco será inserido. Nota: Os valores são classificados na ordem em que você os insere. Você insere os valores possíveis neste formato: ENUM ('X', 'Y', 'Z') | | SET | Semelhante ao ENUM, exceto que o SET pode conter até 64 itens de lista e pode armazenar mais de uma opção |

# Tipos de dados numéricos:

| Tipo de dados | Descrição | | ------------- |: -------------: | | TINYINT (tamanho) | -128 a 127 normal. 0 a 255 NÃO ASSINADO _. O número máximo de dígitos pode ser especificado entre parênteses | | SMALLINT (tamanho) | -32768 a 32767 normal. 0 a 65535 NÃO ASSINADO_ . O número máximo de dígitos pode ser especificado entre parênteses | | MEDIUMINT (tamanho) | -8388608 a 8388607 normal. 0 a 16777215 NÃO ASSINADO _. O número máximo de dígitos pode ser especificado entre parênteses | | INT (tamanho) | -2147483648 a 2147483647 normal. 0 a 4294967295 NÃO ASSINADO_ . O número máximo de dígitos pode ser especificado entre parênteses | | BIGINT (tamanho) | -9223372036854775808 para 9223372036854775807 normal. 0 a 18446744073709551615 NÃO ASSINADO \*. O número máximo de dígitos pode ser especificado entre parênteses | | FLOAT (tamanho, d) | Um pequeno número com um ponto decimal flutuante. O número máximo de dígitos pode ser especificado no parâmetro de tamanho. O número máximo de dígitos à direita do ponto decimal é especificado no parâmetro d | | DUPLO (tamanho, d) | Um grande número com um ponto decimal flutuante. O número máximo de dígitos pode ser especificado no parâmetro de tamanho. O número máximo de dígitos à direita do ponto decimal é especificado no parâmetro d | | DECIMAL (tamanho, d) | Um DOUBLE armazenado como uma string, permitindo um ponto decimal fixo. O número máximo de dígitos pode ser especificado no parâmetro de tamanho. O número máximo de dígitos à direita do ponto decimal é especificado no parâmetro d |

# Tipos de dados de data:

| Tipo de dados | Descrição | | ------------- |: -------------: | | DATA () | Um encontro. Formato: AAAA-MM-DD Nota: O intervalo suportado é de '1000-01-01' a '9999-12-31' | | DATETIME () | Uma combinação de data e hora. Formato: AAAA-MM-DD HH: MI: SS Nota: O intervalo suportado é de '1000-01-01 00:00:00' a '9999-12-31 23:59:59' | | TIMESTAMP () | Um timestamp. Os valores de TIMESTAMP são armazenados como o número de segundos desde a época do Unix ('1970-01-01 00:00:00' UTC). Formato: AAAA-MM-DD HH: MI: SS Nota: O intervalo suportado é de '1970-01-01 00:00:01' UTC para '2038-01-09 03:14:07' UTC | | TIME () | Um tempo. Formato: HH: MI: SS Nota: O intervalo suportado é de '-838: 59: 59' a '838: 59: 59' | | ANO () | Um ano no formato de dois dígitos ou quatro dígitos. Nota: Valores permitidos no formato de quatro dígitos: 1901 a 2155. Valores permitidos no formato de dois dígitos: 70 a 69, representando anos de 1970 a 2069 |

#### Mais Informações:

Mais informações sobre os tipos de dados específicos em SQL podem ser encontradas na seção [SQL Data Types](https://guide.freecodecamp.org/sql/sql-data-types/) do freeCodeCamp.