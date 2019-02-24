---
title: Test Driven Development
---
## Test Driven Development

Test Driven Development (TDD) is an Agile Software Development approach. It is based on the concept that you write a unit test first, and then write the code that will allow this test to pass. This means we are working iteratively to specify and build correct behaviour and also to create clean code with good structure.

With TDD, the unit test is written first with a test that fails, you then write the code that will execute and allow the unit test to pass. Overall TDD saves time spent performing unit tests and other similar tests since test creation is developed before the code has even been written.

Test Driven Development is essentially comprised of 4 steps:

 - Write a test case that fails (Red)
 - Write the code to satisfy the test case
 - Run the test case again confirming test passes (Green)
 - Refactor the code as per typical standards (Refactor)
 
These steps follow the principle of *Red-Green-Refactor*. For the *Red-Green* steps, make sure that you write the simplest code possible to solve the problem and when *Refactoring*, ensure that it follows *Clean Code* principles.

Each new feature of your system should follow the steps above.

![tdd flow](http://www.agiledata.org/images/tddSteps.jpg)
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Agile Data's <a href='http://agiledata.org/essays/tdd.html' target='_blank' rel='nofollow'>Introduction to TDD</a>

Wikipedia on <a href='https://en.wikipedia.org/wiki/Test-driven_development' target='_blank' rel='nofollow'>TDD</a>

Martin Fowler <a href='https://martinfowler.com/articles/is-tdd-dead/' target='_blank' rel='nofollow'>Is TDD Dead?</a>
 (A series of recorded conversations on the subject)
 
 Kent Beck's book <a href='https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530' target='_blank' rel='nofollow'>Test Driven Development by Example</a>

Uncle Bob's <a href='http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html' target='_blank' rel='nofollow'>The Cycles of TDD</a>
