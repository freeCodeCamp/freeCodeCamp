SOLID Principle

A key programming princple which consists of the following conventions:
(S)ingle Responsibility Principle
(O)pen/Closed Principle
(L)iskov Substitution Principle
(I)nterface Segregation Principle
(D)ependency Inversion

Solid Responsibilty means a class should only do one thing (and preferably, do it well). So if a class is currently 
interacting with some SQL database, and also can generate a HTML page from them - the two functionalities should be seperated. 

Open/Closed Principle means you two never modify an existing class, but rather to extend them (does the word 'inheritance' ring
any bells for you?).

Liskov Substitution is one most often ignored. It means that whenever a code is written with use of base and child classes,
it should be written as such that the program will never crash even if the child classes are substituted with their parent's.
Suppose we have an Animal base class and a Dog\Cat child classes: It should not harm the flow if we write every Dog instance with
an Animal's.

 Interface Segregation Principle means that when writing interfaces, it is better to write many ones each with very particular
 purpose, rather than having one interface to rule them all. Programmers are more likely to reuse small ones, and programs will
 be less cloggy with having to implement a big one.
 
 Dependency Inversion Principle means in (very) short, dont depend on concrete classes; try to use interfaces more.

