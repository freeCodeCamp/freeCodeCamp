---
title: Java Bean
---
## Java Bean
Java Beans are Java classes that follow the following rules:

1) implement the `java.io.Serializable` interface
2) have private properties with public getters and setters
3) have a public no-argument constructor

A simple Java Bean is implemented below:
``` java
public class ExampleBean implements java.io.Serializable { 

  // private properties
  private String name;
  private Boolean programmer;

  // no-argument constructor
  public ExampleBean() {
  }
 	
  // public getters and setters
  public String getName(){
      return this.name; 
  }

  public void setName(String name){
      this.name = name;
  }

  public Boolean isProgrammer(){
      return this.age;
  }

  public void setProgrammer(Boolean programmer){
      this.programmer = programmer;
  }
}
```

Java Beans, frequently refered as beans, are meant to be reusable software components that anyone can use without having to know and understand their inner implementation. They can be used by a bean editor in order to be customized and assemble an application.

The advantages:
 * standardized way that enforces reusability
 * customization with bean editors
 * persistence and ability to be transfered within network

The disadvantages:
 * lots of boilerplate with getters and setters
 * lack of immutability by design

#### More Information:
- Oracle <a href='https://docs.oracle.com/javase/tutorial/javabeans/index.html' target='_blank' rel='nofollow'>docs</a>
- What <a href='https://stackoverflow.com/questions/5520533/what-is-the-significance-of-java-io-serializable-class' target='_blank' rel='nofollow'>Serializable</a> means
- Java Beans <a href='https://stackoverflow.com/questions/1727603/places-where-javabeans-are-used' target='_blank' rel='nofollow'>usage</a>
