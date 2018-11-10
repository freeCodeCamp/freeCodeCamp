---
title: F#
---

## F# 

F# is a strongly typed language that inherit from the object oriented language (C#) but encourage a functional programmation. It runs on the .NET CLR, and can seamlessly inter-operate with C#.
It is compatible with visual studio and is officialy supported by Microsoft.

#### Immutability

Variables in F# are by default immutable. That means that their values can't be changed after initialization. Mutability can be forced by the keyword "mut". One of the F# best practices is to just make a copy of the variable you want and change the values you need at the initialization of the newly created variable

#### Records

F# can use objects but it is encouraged to use instead Records. Records are a set of members, and can be seens as structs for people that comes from a C background.

For example : 

<code>
type People = {
  Age: int 
  FirstName: string 
  LastName: string  
}
</code>

