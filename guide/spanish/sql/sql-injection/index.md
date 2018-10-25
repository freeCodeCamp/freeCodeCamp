---
title: SQL Injection
localeTitle: Inyección SQL
---
## Inyección SQL

La inyección SQL es una técnica maliciosa que está destinada a comprometer o destruir bases de datos. Es una de las técnicas de hacking web más comunes.

La inyección de SQL se realiza colocando código malicioso en las sentencias de SQL a través de una entrada.

El siguiente ejemplo es un fragmento de código que recuperará un usuario de una base de datos basada en un `AccountId` .
```
passedInAccountId = getRequestString("AccountId"); 
 sql = "select * from Accounts where AccountId = " + passedInAccountId; 
```

La inyección SQL se puede usar para comprometer este código inyectando un `1=1;` Estado de `AccountId` para `AccountId` .

`https://www.foo.com/get-user?AccountId="105 OR 1=1;"`

`1=1` siempre se evaluará como `TRUE` . Esto hará que el código ejecutado genere toda la tabla de Cuentas.