---
title: SQL CREATE INDEX Statement
localeTitle: Заявление SQL CREATE INDEX
---
Оператор CREATE INDEX используется для создания индексов в таблицах.

Индексы используются для быстрого извлечения данных из базы данных. Пользователи не могут видеть индексы, они просто используются для ускорения поиска / запросов.

> **Примечание.** Обновление таблицы с индексами занимает больше времени, чем обновление таблицы без (поскольку индексы также нуждаются в обновлении). Таким образом, создавайте индексы только для столбцов, которые будут часто просматриваться.

#### Синтаксис CREATE INDEX

Создает индекс в таблице. Допускаются повторяющиеся значения:

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

#### CREATE UNIQUE INDEX Синтаксис

Создает уникальный индекс в таблице. Дублирующие значения не допускаются:

```sql
CREATE UNIQUE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

> **Примечание** . Синтаксис создания индексов зависит от разных баз данных. Поэтому: проверьте синтаксис создания индексов в базе данных.

#### Пример CREATE INDEX

В приведенной ниже инструкции SQL создается индекс с именем «idx\_lastname» в столбце «LastName» в таблице «Лица»:

```sql
CREATE INDEX idx_lastname 
 ON Persons (LastName); 
```

Если вы хотите создать индекс в комбинации столбцов, вы можете указать имена столбцов в круглых скобках, разделенные запятыми: CREATE INDEX idx\_pname

```sql
ON Persons (LastName, FirstName); 
```

#### ЗАЯВЛЕНИЕ ПО УМОЛЧАНИЮ

Оператор DROP INDEX используется для удаления индекса в таблице.

**Доступ к MS:**

```sql
DROP INDEX index_name ON table_name; 
```

**SQL Server:**

```sql
DROP INDEX table_name.index_name; 
```

**DB2 / Oracle:**

```sql
DROP INDEX index_name; 
```

**MySQL:**

```sql
ALTER TABLE table_name 
 DROP INDEX index_name; 

```