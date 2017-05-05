# Types
## `type()`
Before we can get into what a what a type is and how a type works, let's learn
a really useful built-in function, `type()`.

As the name would suggest, `type()` shows you what type an item is. Don't worry
about what the actual types mean quite yet, we'll get there next.

```
>>> type(3)
<class 'int'>
>>> type(5.2)
<class 'float'>
>>> type("spam")
<class 'str'>
```

It also works on variables

```
>>> a = 6
>>> type(a)
<class 'int'>
```

## Integers
An integer is any whole number, positive or negative. That means any number
that isn't a fraction is an integer.

```
>>> a = 3
>>> type(a)
<class 'int'>
```

## Floats
A float is any number, positive or negative, which is a fraction.

```
>>> a = 3.5
>>> type(a)
<class 'float'>
```

The reason this is important is because of how computers allocate memory for
the different variables and things a program creates. You don't need to worry
about the details of that right now, in fact, you can go for a pretty long time
before you need to worry about any of that. All that is important is that items
of different types have interact with each other in different ways.
