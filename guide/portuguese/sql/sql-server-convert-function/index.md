---
title: SQL Server Convert Function
localeTitle: Função de Conversão do SQL Server
---
## Função de Conversão do SQL Server

Converte de um tipo de dados para outro tipo de dados.

### Sintaxe

`CONVERT (_New Data Type, Expression, Style_)`

*   **Novo tipo de dados:** novo tipo de dados a ser convertido também. Por exemplo: nvarchar, inteiro, decimal, data
*   **Expressão:** dados a serem convertidos.
*   **Estilo:** formato. Por exemplo: O estilo 110 é o formato de data dos EUA mm-dd-aaaa

### Exemplo: converter um número decimal em um inteiro

`SELECT CONVERT(INT, 23.456) as IntegerNumber`

![converter um número decimal em número inteiro](https://user-images.githubusercontent.com/12566249/31314884-6c94db4a-ac57-11e7-842f-710fad511131.png)

Nota: O resultado é truncado.

### Exemplo: converter uma string em uma data

`SELECT CONVERT(DATE, '20161030') as Date`

![converter uma string em um tipo de data](https://user-images.githubusercontent.com/12566249/31314912-c25bbb52-ac57-11e7-880d-6d81041b1728.png)

### Exemplo: converter um decimal em uma string

`SELECT CONVERT(nvarchar, 20.123) as StringData`

![converter um decimal em uma string](https://user-images.githubusercontent.com/12566249/31314923-fb04e410-ac57-11e7-9646-94061e1f0ec2.png)

### Exemplo: converter um número inteiro em um número decimal

`SELECT CONVERT(DECIMAL (15,3), 13) as DecimalNumber`

![converter um inteiro em um número decimal](https://user-images.githubusercontent.com/12566249/31314932-1c8668ca-ac58-11e7-8cee-4d57fc523704.png)

### Exemplo: converter uma string em formato de data no estilo de data dos EUA

`SELECT CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`

![converter uma string para o formato de data no estilo de data dos EUA](https://user-images.githubusercontent.com/12566249/31314937-35155d06-ac58-11e7-9d5d-823b66c41d0d.png)

### Mais Informações:

*   Informações sobre a função Converter: [Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql)