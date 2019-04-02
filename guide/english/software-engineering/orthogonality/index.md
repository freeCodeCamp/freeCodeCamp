---
title: Orthogonality
---

## Orthogonality

In software engineering, a system is considered orthogonal if changing one of its components changes the state of that component only. For instance, consider a program with three variables: a, b, and c. Changing the value of a, should not change the value of b, or c, provided they are independent. This property is particularly critical in debugging a program since one relies on narrowing down the number of moving parts of a program to identify the root cause of the problem.

See the following quote from Eric S. Raymond's "Art of UNIX programming"

> Orthogonality is one of the most important properties that can help make even complex designs compact. In a purely orthogonal design, operations do not have side effects; each action (whether it's an API call, a macro invocation, or a language operation) changes just one thing without affecting others. There is one and only one way to change each property of whatever system you are controlling.

Orthogonality is a software design principle for writing components in a way that changing one component doesn't affect other components. It is the combination of two other principles, namely strong cohesion and loose coupling.

Orthogonality is a term borrowed from mathematics.  For example, two lines are orthogonal if they are perpendicular.  In software design, two components are orthogonal if a change in one does not affect the other.

Applying this concept to classes or other sections of code results in less coupling.  To be orthogonal two classes cannot depend on each others implementation.  They also cannot share global data.  Changing the internals of one class does not affect the other class.  Components should be independent and have only a single responsibility. 

Consider a method that reads a list of numbers from a file and returns them in sorted order.  Now the requirements change and the numbers are in a database.  Modifying this method to access the database would cause client code to change.  If this were two different methods, then a new source would not affect the sorting method.  Only the client code would have to know the source of the numbers.

### Strong Cohesion

Inside a software component, code should be strongly connected. This is an indication that the code is correctly divided. If a component had two or more relatively disconnected parts, that may indicate that those parts should be in a different component, or on it's own.

### Loose Coupling

Between software components, there should be few connections. If two components are strongly coupled, it may indicate that they need to be one component, or that they need to be differently divided into more components.

#### More Information:
* [Orthogonality(programming) | Wikipedia](https://en.wikipedia.org/wiki/Orthogonality_(programming))
* [Principles of Orthogonal Object Oriented Programming | jasoncoffin.com](http://www.jasoncoffin.com/cohesion-and-coupling-principles-of-orthogonal-object-oriented-programming/)
* [GRASP - object-oriented design principles | Wikipedia](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)


Stack Overflow: What is Orthogonality?. https://stackoverflow.com/questions/1527393/what-is-orthogonality
