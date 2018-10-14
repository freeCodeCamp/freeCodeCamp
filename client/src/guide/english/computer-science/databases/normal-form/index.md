---
title: Normal Form
---
## Normal Form
Normalization was first introduced as part of the relational model. It is the process of organizing data tables and columns in a way that reduces redundancies and improves integrity. This can either be done through :
* synthesis : creates a normalized database design based on a known set of dependencies.
* decomposition : takes an existing (insufficiently normalized) database design and improves it based on the known set of dependencies

There are three common normal forms (1st, 2nd and 3rd) plus a rather advanced form called BCNF. They are progressive : in orther to qualify for the 3rd normal form, a database schema must satisfy the rules of the 2nd normal form, and so on for the 1st normal form.
* **1st normal form** : The information is stored in a table, each column contains atomic values, and there are not repeating groups of columns. This :
  1. Eliminates repeating groups in individual tables.
  2. Creates a separate table for each set of related data.
  3. Identifies each set of related data with a primary key
##### Example
A design that violates the 1st normal form, the "telephone" column does not contain atomic values

| customer ID | First name | Last name | Telephone                            |
|-------------|------------|-----------|--------------------------------------|
| 123         | Pooja      | Singh     | 555-861-2025, 192-122-1111           |
| 789         | John       | Doe       | 555-808-9633                         |
| 456         | San        | Zhang     | (555) 403-1659 Ext. 53; 182-929-2929 |

One solution would be to have an extra column for each phone number. But then, this will repeat conceptually the same attribute(phone number). Moreover, adding extra telephone number will require reorganizing the table by adding more column.This is definitely not practicle.

Another solution is to have a separate table for the association customer <-> Telephone: This respects the 1st normal form and there can be as many rows per customer as needed.

| customer ID | First name | Last name |
|-------------|------------|-----------|
| 123         | Pooja      | Singh     |
| 789         | John       | Doe       |
| 456         | San        | Zhang     |


| customer ID | Telephone              |
|-------------|------------------------|
| 123         | 555-861-2025           |
| 123         | 192-122-1111           |
| 789         | 555-808-9633           |
| 456         | (555) 403-1659 Ext. 53 |
| 456         | 182-929-2929           |

* **2nd normal form** : The table is in the first normal form and all the non-key columns depend on the table's primary key. This narrows the table's purpose.
##### Example
A design that violates the 2nd normal form. The model full name being the primary key, there are other candidate keys like {manufacturer, model}. The "Manufacturer Country" column is dependant on a non-key column (the Manufacturer).

| Manufacturer        | Model        | Model Full Name      | Manufacturer Country |
|---------------------|--------------|----------------------|----------------------|
| Forte               | X-Prime      | Forte X-Prime        | Italy                |
| Forte               | Ultraclean   | Forte Ultraclean     | Italy                |
| Dent-o-Fresh        | EZbrush      | Dent-o-Fresh EZbrush | USA                  |
| Kobayashi           | ST-60        | Kobayashi ST-60      | Japan                |
| Hoch                | Toothmaster  | Hoch Toothmaster     | Germany              |
| Hoch                | X-Prime      | Hoch X-Prime         | Germany              |

The normalized design would be to split into two tables like the following:

| Manufacturer        | Manufacturer Country |
|---------------------|----------------------|
| Forte               | Italy                |
| Dent-o-Fresh        | USA                  |
| Kobayashi           | Japan                |
| Hoch                | Germany              |

| Manufacturer        | Model        | Model Full Name      |
|---------------------|--------------|----------------------|
| Forte               | X-Prime      | Forte X-Prime        |
| Forte               | Ultraclean   | Forte Ultraclean     |
| Dent-o-Fresh        | EZbrush      | Dent-o-Fresh EZbrush |
| Kobayashi           | ST-60        | Kobayashi ST-60      |
| Hoch                | Toothmaster  | Hoch Toothmaster     |
| Hoch                | X-Prime      | Hoch X-Prime         |


* **3rd normal form** :  The table is in second normal form and all of its columns are not transitively dependent on the primary key. 
A column is said to be dependant on an another column if it can be derived from it, for example, the age can be derived from the birthday. Transitivity means this dependance might involve other columns. for example, if we consider three columns `PersonID 	BodyMassIndex 	IsOverweight` , the column 'IsOverweight' is transitively dependant on 'personID' through 'BodyMassIndex'.

##### Example
A design that violates the 3rd normal form. {Tournament, Year} is the primary key for the table and the column 'Winner Date of Birth' transitively depends on it.

| Tournament           | Year        | Winner         | Winner Date of Birth |
|----------------------|-------------|----------------|----------------------|
| Indiana Invitational | 1998        | Al Fredrickson | 21 July 1975         |
| Cleveland Open       | 1999        | Bob Albertson  | 28 September 1968    |
| Des Moines Masters   | 1999        | Al Fredrickson | 21 July 1975         |
| Indiana Invitational | 1999        | Chip Masterson | 14 March 1977        |

A design compliant with the 3rd normal form would be :

| Tournament           | Year        | Winner         |          
|----------------------|-------------|----------------|
| Indiana Invitational | 1998        | Al Fredrickson |
| Cleveland Open       | 1999        | Bob Albertson  |
| Des Moines Masters   | 1999        | Al Fredrickson |
| Indiana Invitational | 1999        | Chip Masterson |

| Winner  | Date of Birth     |
|----------------|-------------------|
| Chip Masterson | 14 March 1977     |
| Al Fredrickson | 21 July 1975      |
| Bob Albertson  | 28 September 1968 |




#### More Information:
* database normalisation on <a href='https://en.wikipedia.org/wiki/Database_normalization' target='_blank' rel='nofollow'>wikipedia</a>
* first normal form on <a href='https://en.wikipedia.org/wiki/First_normal_form' target='_blank' rel='nofollow'>wikipedia</a> 
* second normal form on <a href='https://en.wikipedia.org/wiki/Second_normal_form' target='_blank' rel='nofollow'>wikipedia</a> 
* third normal form on <a href='https://en.wikipedia.org/wiki/Third_normal_form' target='_blank' rel='nofollow'>wikipedia</a>






