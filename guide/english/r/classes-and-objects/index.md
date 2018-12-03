---
title: Classes and Objects in R
--- 
By default, calling an object with the `class()` function returns its data type. However you can assign a custom class to any object in R. 

R has 3 different class systems, each differing slightly from each other: S3, S4 and Reference.

### S3 Class
This is the most common class system used in R. You create the class by simply adding a class attrivute to an object.

```{r}
> d <- list(name = "Jim", colour = "yellow", sex = "male")
> class(d) <- "duck"
> d
$name
[1] "Jim"
$colour
[1] "yellow"
$sex
[1] "male"
```

## Accessing 
You can access specific slots of the class by using the `$` selector

```{r}
> d$colour <- "blue"
> d$colour
[1] "blue"
```

###S4 Class
There are stricter, more formal rules when defining S4 classes.
You use the `setClass("className", slots)` function to define any S4 class where:
- `"className"` is the name of the class you want to define
- `slots` is a list of attributes and their types that you want your class to contain
For example:
```{r}
> setClass("duck", slots = list(name = "character", colour = "character", sex = "character"))
```

Afterwards you can create objects of your newly created class like so:
```{r}
> duck(name = "Joe", colour = "red", sex = "male")
An object of class "duck"
Slot "name":
[1] "Joe"
Slot "colour":
[1] "red"
Slot "sex":
[1] "male"
```

Alternatively you can use the `new()` function to create S4 objects
```{r}
> d <- new("duck", name = "Joe", colour = "red", sex = "male")
> d
An object of class "duck"
Slot "name":
[1] "Joe"
Slot "colour":
[1] "red"
Slot "sex":
[1] "male"
```
Note: Here the first argument is your class name, with all subsequent arguments being the slots that you want your class to contain

## Checking Type 
You can also check if you have created an S4 with the `isS4()` function
```{r}
> isS4(d)
[1] TRUE
```

## Accessing
Like S3 objects, you can access specific slots in S4 objects but with the `@` selector instead
```{r}
> d@name <- "Bob"
> d
An object of class "duck"
Slot "name":
[1] "Bob"
Slot "colour":
[1] "red"
Slot "sex":
[1] "male"
```

### Reference Class
Reference class objects are similar to S4 class objects with the exception of how information is passed.
Unlike S4 objects which make a copy of an object when it is assigned to a new variable, reference class objects pass a reference instead.
This means than any changes made in either object will result in both objects being changed.

Reference classes are defined using the `setRefClass("className", [fields])` function where:
- `"className"` is the name of the class you want to define 
- `fields (optional)` is the list of attributes you want your class to contain, analagous to `slots` in S4 classes
```{r}
> duck <- setRefClass("duck", fields = list(name = "character", colour = "character", sex = "character"))
```

You can then create reference objects like so:
```{r}
> d <- duck(name = "Betty", colour = "black", sex = "female")
> d
Reference class object of class "duck"
Field "name":
[1] "Betty"
Field "colour":
[1] "black"
Field "sex":
[1] "female"
```

## Accessing 
Just like S3 classes, you use the `$` selector to select fields of reference objects
```{r}
> d$sex <- "male"
> d
Reference class object of class "duck"
Field "name":
[1] "Betty"
Field "colour":
[1] "black"
Field "sex":
[1] "male"
```

### Resources
* [R Classes and Objects](https://www.datamentor.io/r-programming/object-class-introduction/)