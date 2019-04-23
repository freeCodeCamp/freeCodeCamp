---
title: SQL Date Functions
---
## SQL Date Functions

### Introduction

There are 61 Date Functions defined in MySQL. Don't worry, we won't review them all here. This guide will give you an introduction to some of the common ones, and enough exposure for you to comfortably to explore on your own.

We will cover:
* Getting the current date
* Date Math
* Dates in a where or having clause

### Let's Get Started :
* ### Getting the current date :

  Getting the date from the system can be very handy for processing data using SQL.

  ```sql
  -- current date
  select now(), sysdate(), current_date(), current_time(), -- date and time from the system on execution
  dayofyear(now()) as NumDaysSoFarThisYr,
  EXTRACT(YEAR FROM now()) as theYearPart,
  EXTRACT(YEAR_MONTH FROM now()) as theYrMonPart, 
  date_format(now(), '%W %M %Y') as oneOfManyFormats; 
  ;
  ```
  Result :
  ```text
  +--------------------+----------------------+
  | now()              | 2019-04-27 18:06:48  |
  | sysdate()          | 2019-04-27 18:06:48  |
  | current_date()     | 2019-04-27           |
  | current_time()     | 18:06:48	            |
  | NumDaysSoFarThisYr | 117                  |
  | theYearPart        | 2019                 |
  | theYrMonPart       | 201904               |
  | oneOfManyFormats   | Saturday April 2019  |
  +--------------------+----------------------+
  ```

  In SQL query, we see the following:
  * The first two columns in the result are two ways to get the same information: the date on the system at the time the SQL is executed.
  * The next two columns slice out just the Date and Time parts of the system date.
  * The next one presents the "day number" of the system date in this year.  You'll notice that this is one day more than the math shown in the next example.
  * The next two extract just the year and then both the year and month
  * Last, but not least, there is a single example of one of the many ways to format this dates.

* ### Date Math :

  ```sql
  select now(), current_date(), 
  datediff(now(),'2017-01-01') as daysThisYear, 
  subdate(current_date(), interval 150 day) as '150DaysAgo', 
  adddate(now(), interval 7 day) as dateInA_Week -- date in a week
  ;
  ```
  ```text
  +------------------+----------------------+
  | now()            | 2019-04-27 18:19:59  |
  | current_date()   | 2019-04-27           |
  | daysThisYear     | 846                  |
  | 150DaysAgo       | 2018-11-28           |
  | dateInA_Week     | 2019-05-04 18:19:59  |
  +------------------+----------------------+
  ```

  Here we see:
  * The first two columns are just the system date and time for reference.
  * The second column is the date difference (datediff) between the first of January 2017 and the system date.
  * The last two columns are examples of subtracting and adding dates.

* ### In a where or having clause :

  Here are two examples of using date math in a where clause:

  ```sql
  select * from student; - to show the current data being used for the example
  select * from student where recordCreated < '2017-08-14';
  select * from student where recordCreated < subdate(current_date(), interval 628 day);
  ```
  Result :

  ```text
  +------------+---------------------+-----------+---------------+
  | studentID  | FullName            | sat_score | recordCreated |
  +------------+---------------------+-----------+---------------+
  | 1          | Jon snow            |  200      | 2017-08-03    |
  | 2          | Stan Lee            |  900      | 2017-08-05    |
  | 3          | Vincent Uvalle      |  400      | 2017-08-07    |
  | 4          | Merle Veres         |  800      | 2017-08-07    | 
  | 5          | Donte Emmons        |  1000     | 2017-08-07    | 
  | 6          | Demetrius Mccaster  |  1200     | 2017-08-07    | 
  | 7          | Tim Goudy           |  1400     | 2017-08-07    | 
  | 8          | Stephan Monfort     |  1600     | 2017-08-07    | 
  | 9          | Maximo Backstrom    |  1800     | 2017-08-14    | 
  | 10         | Dean Pickel         |  800      | 2017-08-14    | 
  +------------+---------------------+-----------+---------------+
  ```
  ```text
  +------------+---------------------+-----------+---------------+
  | studentID  | FullName            | sat_score | recordCreated |
  +------------+---------------------+-----------+---------------+
  | 1          | Jon snow            |  200      | 2017-08-03    |
  | 2          | Stan Lee            |  900      | 2017-08-05    |
  | 3          | Vincent Uvalle      |  400      | 2017-08-07    |
  | 4          | Merle Veres         |  800      | 2017-08-07    | 
  | 5          | Donte Emmons        |  1000     | 2017-08-07    | 
  | 6          | Demetrius Mccaster  |  1200     | 2017-08-07    | 
  | 7          | Tim Goudy           |  1400     | 2017-08-07    | 
  | 8          | Stephan Monfort     |  1600     | 2017-08-07    | 
  +------------+---------------------+-----------+---------------+
  ```
  ```text
  +------------+---------------------+-----------+---------------+
  | studentID  | FullName            | sat_score | recordCreated |
  +------------+---------------------+-----------+---------------+
  | 1          | Jon snow            |  200      | 2017-08-03    |
  | 2          | Stan Lee            |  900      | 2017-08-05    |
  +------------+---------------------+-----------+---------------+
  ```

Regarding the HAVING part: Keep in mind, most of the WHERE clause logic will also work in the HAVING clause of a GROUP BY.  The difference between the two is that the WHERE clause runs against the full data, and the HAVING runs against the data aggregated by the GROUP BY clause.

*As with all of these things there is MUCH MORE to them than what's in this introductory guide.  I hope this at least gives you enough to get started. Please see the manual for your database manager and have fun trying different options yourself.*
