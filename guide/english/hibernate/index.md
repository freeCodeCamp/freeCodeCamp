---
title: Hibernate
---
## Hibernate
Hibernate ORM, commonly known as Hibernate is an object-relational mapping tool for Java. It provides a system for mapping object oriented domain models to relational databases. It possesses multiple high-level object handling functions.

Hibernate allows us to use any database Management System in your application. In Hibernate Database table is mapped with POJO class and Members in POJO are the feilds in table. This is how the ORM is done. POJO class contains getters and setters from which we can use directly POJO class members.

In hibernate there are some important files that must be present :
* **hibernate-config.xml**
    : This contains all the configuration tags with DBMS to be used.
* **hibernate-reveng.xml** 
    : This contains schema of Database as well as tables to be used and reverse mapping from class to Database.
* **class-name.hbm.xml** 
    : This contains table and colums structure details

## Hibernate Tools
Hibernate Tools is a toolset for Hibernate implemented as an integrated suite of Eclipse plugins, together with a unified Ant task for integration into the build cycle. Hibernate Tools is a core component of JBoss Tools and hence also part of JBoss Developer Studio.

#### More Information:
For documentation and downloads, visit [Hibernate's Official Site](https://hibernate.org)
