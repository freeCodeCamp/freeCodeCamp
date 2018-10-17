---
title: SQL Right Join
localeTitle: SQL Right Join
---
## SQL Right Join

### Пример использования

В этом руководстве мы обсудим SQL RIGHT JOIN.

### Право Присоединиться

Ключевое слово RIGHT JOIN возвращает все записи из правой таблицы (таблица2) и сопоставленные записи из левой таблицы (таблица1). Результат равен NULL с левой стороны, когда нет совпадения.

```sql
SELECT * 
 FROM table1 
 RIGHT JOIN table2 
 ON table1.column_name = table2.column_name; 
```

### Полный список таблиц для справки

продукты питания или данные ЛЕВОЙ таблицы

```text
+---------+--------------+-----------+------------+ 
 | ITEM_ID | ITEM_NAME    | ITEM_UNIT | COMPANY_ID | 
 +---------+--------------+-----------+------------+ 
 | 1       | Chex Mix     | Pcs       | 16         | 
 | 6       | Cheez-It     | Pcs       | 15         | 
 | 2       | BN Biscuit   | Pcs       | 15         | 
 | 3       | Mighty Munch | Pcs       | 17         | 
 | 4       | Pot Rice     | Pcs       | 15         | 
 | 5       | Jaffa Cakes  | Pcs       | 18         | 
 | 7       | Salt n Shake | Pcs       |            | 
 +---------+--------------+-----------+------------+ 
 
 
 
 company or RIGHT table data 
```

текст + ------------ + --------------- + -------------- + | _ИД_ КОМПАНИИ _|_ ИМЯ _КОМПАНИИ_ | COMPANY\_CITY | + ------------ + --------------- + -------------- + | 18 | Заказать все | Бостон | | 15 | Джек Хилл Лтд | Лондон | | 16 | Akas Foods | Дели | | 17 | Гурманы. | Лондон | | 19 | SIP-N-прикуса. | Нью-Йорк | + ------------ + --------------- + -------------- +
```
To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used: 
```

SQL SELECT company.company _id, company.company_ имя, company.company _город, food.company_ id, foods.item _name ОТ компании ПРАВОЕ СОЕДИНЕНИЕ ON company.company_ id = foods.company\_id;
```
OUTPUT 
```

текст _ИД КОМПАНИИ_ ИМЯ КОМПАНИИ КОМПАНИЯ _CITY COMPANY_ ID ITEM\_NAME

* * *

18 Заказать все Бостон 18 Яффо Торты 15 Jack Hill Ltd London 15 Pot Rice 15 Jack Hill Ltd Лондон 15 BN Печенье 15 Jack Hill Ltd Лондон 15 Cheez-It 16 Akas Foods Delhi 16 Chex Mix 17 Продовольствие. Лондон 17 Могучий Мунк NULL NULL NULL NULL Соль n Shake

\`\` \`