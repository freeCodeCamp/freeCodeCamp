---
title: Access modifiers
---

# Access modifiers

Access modifiers are keywords used to specify the declared accessibility of a member or a type. 

Here are the 3 most common access modifiers:
* `public` - access is not restricted.
* `protected` - access is limited to the containing class or types derived from the containing class.
* `private` - access is limited to the containing type.

## Examples
```csharp
public class Person
{
  public string FirstName { get; set;} // these can be accessed from anywhere
  public string LastName { get; set;}
    
  protected string SecretMessage { get; set;} // this can be accessed from this class or any derived classes
    
  private int PersonId { get; set;} // this can only be accessed from this class
}
```

## Sources
- [Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers)
