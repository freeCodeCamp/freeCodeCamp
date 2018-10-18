---
title: Python Mutability and Variable Assignments
---
> Every object has an identity, a type and a value. An object's identity never changes once it has been created; you may think of it as the object's address in memory. <a href='https://docs.python.org/3/reference/datamodel.html#data-model' target='_blank' rel='nofollow'>source</a>

Once an `object` is created, the type and identity can't be changed. Whether or not the object's value(s) can change after creation determines if the object is mutable (can change) or immutable (can't change).

So far we have learned about a few types of objects and their subclasses: `string`s and numeric (integer, floating point, complex, and boolean) objects. All of these are **immutable** objects.

This concept might be confusing at first because what good is an object if you can't modify it. What makes these objects usable is the ability to assign and reassign variables. Functions and operators can return new objects that can be assigned to variables.

Using the built-in <a href='https://docs.python.org/3/library/functions.html#id' target='_blank' rel='nofollow'>id function</a>, which returns the identity of an object, we can see how this works.

Here are a few things to keep in mind:

*   Assigning a variable does not mean that _variable_ is the _object_. We used very specific language noting that _assignment statements_ **bind** a **name** (identifier) to an _object_. Variables can be reassigned:

`python

> > > a = 1 # Bind a to an object.  
> > > id(a)  
> > > 140355241530152  
> > > a = 2 # Rebind a to another object.  
> > > id(a)  
> > > 140355241530128  
> > > `

*   Assigning two different variables to _immutable objects_ with the same value may result (not guaranteed) in them being bound to the same _object_

`python

> > > a = 1  
> > > b = 1  
> > > id(a)  
> > > 140355241530152  
> > > id(b) # In this case a and b are bound to the same object.  
> > > 140355241530152  
> > > `

*   Assigning two different variables to _imutable objects_ with different values will always result in them being bound to different _objects_:

`python

> > > a = 1  
> > > b = 2  
> > > id(a)  
> > > 140355241530152  
> > > id(b) # a and b are bound to different objects.  
> > > 140355241530128  
> > > `

*   Reassigning variables does not change the original object, it binds them to a different object.

`python

> > > a = 1  
> > > b = 1  
> > > id(a)  
> > > 140355241530152  
> > > id(b)  
> > > 140355241530152  
> > > a = 2  
> > > id(a) # a is rebound to a different object.  
> > > 140355241530128  
> > > id(b) # b is still bound to the original object.  
> > > 140355241530152  
> > > `