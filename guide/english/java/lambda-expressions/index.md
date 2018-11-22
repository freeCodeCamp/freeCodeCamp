---
title: Lambda Expressions 
---
## Lambda Expressions

Lambda expressions were introduced in Java 8 and it marks Java's foray to the functional programming paradigm. It helps produce readable and concise code and can tremendously simplify your Java applications.

Lambda functions are essentially functions — independent units of code that you can use anywhere you would normally use an object, like passing an argument to a method. In this case, instead of creating a class and then creating an object from the class, or directly using an anonymous class, you write your lambda expression and just pass it to the method instead of a class object.

A lambda expression is composed of three parts — function parameters, the `->` symbol, and a function body.

- The first part, function parameters, indicates what arguments you expect your lambda function to take. For instance, if you are iterating over a list of `Person` objects, you can write the function parameter of the lambda expression as `(Person p)`. If you expect to get two (or more) `Person` objects as arguments, you would separate them with a comma, `(Person p1, Person p2)`. If you don't expect any arguments, you simply use empty parentheses `()`. The rule is that you can omit the parentheses in case your Lambda expression accepts only 1 argument. In all other cases, the parentheses are mandatory.

- Function parameters are followed by the `->` symbol (dash followed by a greater-than symbol).

- The third component of a lambda expression is a function body, which performs the actual work. You write the function body within curly braces `{}`. However, if your function body is just one line, you can omit the `{}` and write it directly after the `->`, like so: 

  ```java
   Person p -> System.out.println(p.getName());
  ```
  This is a complete lambda expression. It accepts a `Person` object as argument and prints its name using the `getName()` getter.

### Stream API

The `Stream` API was also introduced in Java 8, and can be used to allow chaining of sequential and aggregate operations. Stream operations are either intermediate or terminal in nature.

The stream API isn't technically a lambda function, but is used in conjunction with lambda expressions to produce concise code.

In this small example you can see that one of the utilities of a stream is to receive a certain property of all objects in a list and return it in another list using intermediate and terminal operations.

Assume you have a `Student` class like so:

```java
public class Student {
  int studentId;
  String studentName;
  
  public String getStudentName() {
    return this.studentName;
  }
  
  public int getStudentId() {
    return this.studentId;
  }
   // setters
}
```

Now assume you're writing a method which has a list of all the students and you want to get a list of all the student names, which may look something like this:

```java
List<Student> students = /* some list of student objects */;
List<String> studentNames = new ArrayList<>();

for(Student student: students) {
  studentNames.add(student.getStudentName());
}
```

While this isn't a bad idea, it can be simplified using streams into just one line of code:

```java
List<Student> students = /* some list of student objects */;
List<String> studentNames = students.stream().map(String::getStudentName).collect(Collectors.toList());
```

The `Stream` API goes over the list of students and uses the intermediate `map` function to return a new Stream using whatever method is on the right of the `::`. 

The terminal `collect` operation collects the stream as a list of strings.

This is only one use of the Streams API used in Java 8. There are many other applications of streams utilizing other operations as seen here in the
 [documentation](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html).

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
- [Java 8 Stream API](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html)
- [Java 8 Double Colon Operator](https://www.baeldung.com/java-8-double-colon-operator)
