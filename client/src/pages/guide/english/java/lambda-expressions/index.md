---
title: Lambda Expressions 
---
## Lambda Expressions

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/quadratic-equations/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

The Stream Api is used in java to allow chaining of sequential and aggregate operations. Stream operations are either intermediate or terminal in nature.

In this small example you can see that one of the utilities of a stream is to receive a certain property of all objects in a list and return it in another list using intermediate and terminal operations.

Assume you have an object class of Student.
``java
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
``

Now assume in some method you have a list of all the students and want to get a list of all the student names. 
Traditionally this can looks something like this.

``java
List<Student> students = some list of student objects

List<String> studentNames = new ArrayList<>();
for(Student student: students) {
  studentNames.add(student.getStudentName());
}
``
While this isn't terrible it can be simplified.
Using streams this is possible with one line of code.

``java
List<Student> students = some list of student objects

List<String> studentNames = students.stream().map(String::getStudentName).collect(Collectors.toList());
``

The students stream api goes over the list of students and uses the intermediate map function to return a new list of streams using whatever method is on the right of the ::

The terminal collect operation collects the stream as a list of strings.

This is only one use of the Streams Api used in java 8. There are many other applications of streams utilizing the other operations as seen here in the documentation.
 [Streams api doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
