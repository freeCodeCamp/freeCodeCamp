---
title: SQL Date Functions
localeTitle: Funções de Data SQL
---
## Funções de Data SQL

### Introdução

Existem 61 Funções de Data definidas no MySQL. Não se preocupe, não vamos revisá-los todos aqui. Este guia lhe dará uma introdução a alguns dos mais comuns e exposição suficiente para você explorar confortavelmente por conta própria.

Nós cobriremos:

*   Obtendo a data atual
*   Data Matemática
*   Datas em um local onde ou tendo cláusula

### Obtendo a data atual

Obter a data do sistema pode ser muito útil para processar dados usando SQL.

```sql
-- current date 
 select now(), sysdate(), current_date(), current_time(), -- date and time from the system on execution 
 dayofyear(now()) as NumDaysSoFarThisYr, 
 EXTRACT(YEAR FROM now()) as theYearPart, 
 EXTRACT(YEAR_MONTH FROM now()) as theYrMonPart, 
 date_format(now(), '%W %M %Y') as oneOfManyFormats; 
 ; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions04.JPG)

Na consulta SQL, vemos o seguinte:

*   As duas primeiras colunas no resultado são duas maneiras de obter as mesmas informações: a data no sistema no momento em que o SQL é executado.
*   As próximas duas colunas dividem apenas as partes Data e Hora da data do sistema.
*   O próximo apresenta o "número do dia" da data do sistema neste ano. Você notará que este é um dia a mais do que a matemática mostrada no próximo exemplo.
*   Os próximos dois extraem apenas o ano e depois o ano e o mês
*   Por último, mas não menos importante, há um único exemplo de uma das muitas maneiras de formatar essas datas.

### Data Matemática

```sql
select now(), current_date(), 
 datediff(now(),'2017-01-01') as daysThisYear, 
 subdate(current_date(), interval 150 day) as '150DaysAgo', 
 adddate(now(), interval 7 day) as dateInA_Week -- date in a week 
 ; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions02.jpg)

Aqui vemos:

*   As duas primeiras colunas são apenas a data e a hora do sistema para referência.
*   A segunda coluna é a diferença de data (data) entre o primeiro de janeiro de 2017 e a data do sistema.
*   As duas últimas colunas são exemplos de subtração e adição de datas.

### Em um lugar ou ter cláusula

Aqui estão dois exemplos de uso de data em uma cláusula where:

```sql
select * from student; - to show the current data being used for the example 
 select * from student where recordCreated < '2017-01-01'; 
 select * from student where recordCreated < subdate(current_date(), interval 225 day); 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions03.jpg)

Quanto à parte HAVING: Lembre-se, a maior parte da lógica da cláusula WHERE também funcionará na cláusula HAVING de um GROUP BY. A diferença entre os dois é que a cláusula WHERE é executada em relação aos dados completos e o HAVING é executado nos dados agregados pela cláusula GROUP BY.

_Tal como acontece com todas estas coisas, há muito mais para eles do que o que está neste guia introdutório. Espero que pelo menos isso lhe dê o suficiente para começar. Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes._