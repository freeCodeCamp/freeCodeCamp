---
title: Java Bean
---
## Java Bean

Java Bean is a normal Java class which has private properties with its public getter and setter method.

Java Beans are generally used as helper class.

Example -

public class User implements java.io.Serializable {

    private String name;
    private Integer age;

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public Integer getAge(){
        return this.age;
    }

    public void setAge(Integer age){
        this.age = age;
    }
}

Implementing Serializable is not mandatory but is very useful if you'd like to persist or transfer Javabeans outside Java's memory, e.g. in harddisk or over network.


JavaBeans are reusable software components for Java. Practically, they are classes written in the Java programming language conforming to a particular convention. They are used to encapsulate many objects into a single object (the bean), so that they can be passed around as a single bean object instead of as multiple individual objects. A JavaBean is a Java Object that is serializable, has a 0-argument constructor, and allows access to properties using getter and setter methods.

Advantages:

A Bean obtains all of the benefits of Java's "write once, run anywhere" paradigm.
The properties, events, and methods of a Bean that are exposed to another application can be controlled.
Auxiliary software can be provided to help configure a Bean.
The configuration settings of a Bean can be saved in a persistent storage and can be restored at a later time.
A Bean may register to receive events from other objects and can generate events that are sent to it.
Disadvantages

A class with a nullary constructor is subject to being instantiated in an invalid state. If such a class is instantiated manually by a developer (rather than automatically by some kind of framework), the developer might not realize that he has instantiated the class in an invalid state. The compiler can’t detect such a problem, and even if it’s documented, there’s no guarantee that the developer will see the documentation.
Having to create a getter for every property and a setter for many, most, or all of them, creates an immense amount of boilerplate code.

Example :

package beans;

/**
 * Class <code>PersonBean</code>.
 */
public class PersonBean implements java.io.Serializable {

    private String name;

    private boolean deceased;

    /** No-arg constructor (takes no arguments). */
    public PersonBean() {
    }

    /**
     * Property <code>name</code> (note capitalization) readable/writable.
     */
    public String getName() {
        return this.name;
    }

    /**
     * Setter for property <code>name</code>.
     * @param name
     */
    public void setName(final String name) {
        this.name = name;
    }

    /**
     * Getter for property "deceased"
     * Different syntax for a boolean field (is vs. get)
     */
    public boolean isDeceased() {
        return this.deceased;
    }

    /**
     * Setter for property <code>deceased</code>.
     * @param deceased
     */
    public void setDeceased(final boolean deceased) {
        this.deceased = deceased;
    }
}

In simple terms 

If you are talking about java-beans 

1. A JavaBean has a constructor that takes no arguments.

2. A JavaBean has a set of properties.

3. A JavaBean has accessor (getXxx, or isXxx for Boolean properties) methods and mutator methods (setXxx) that allow access to its underlying properties.

The 3rd point states a java class with private instance variables and public getter, setter.

eg:
import java.util.Date;

public class User {
    private Date loginDate;
    private String name;
    private String password;

    public User() { }

    public Date getLoginDate() {
        return loginDate;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public void setLoginDate(Date loginDate) {
        this.loginDate = loginDate;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void delete() {
        // code to delete user from database
    }

    public void update() {
        // code to update user in database
    }

    public static User getUser(String name) {
        // code returning a new User object
        // populated from the database
    }
}

#### More Information:

refer to  http://en.wikipedia.org/wiki/JavaBeans for more information
