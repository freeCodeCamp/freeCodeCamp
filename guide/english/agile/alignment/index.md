---
title: Alignment
---
## Alignment

Code alignment is the practice of formatting your code vertically to improve readability.

Based on principles borrowed from mathematics and other disciplines, code alignment gives extra meaning to your code by lining up similar data in columns. This is something we do naturally when working with tables and spreadsheets, but unfortunately it doesn't get applied to code often enough.

The usual excuses are, "It's too hard. It takes too long. They don't pay me enough." With the IDE extensions on this website, these excuses are no longer valid.

**Visual Studio** is arguably the world's most powerful IDE. If you're a .NET developer chances are you live in this environment. Code alignment is compatible with Visual Studio 2010 and Visual Studio 2012.

**Notepad++** is a handy little editor. It opens almost instantly so you can get straight to work. It supports syntax highlighting for almost every language you can think of, and combined with code alignment, it is a very powerful environment.

**Sublime Text** is an IDE that has gained traction for being lightweight & attractive.
Code alignment for Sublime Text will only work on the Windows x86 install.

**Expression Blend** is a Designing tool from Microsoft. The code editor is limited, but code alignment helps makes it much better.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

In mathematics you always keep your equals lined up directly underneath the one above. It keeps it clean and lets you know you're working on the same problem, for example:

```typescript
y   = 2x
y/2 = x
```
Programming is slightly different. We often have a lot of assignments underneath each other, and while they are not strictly the same as maths, there is a close relationship. As such, aligning the equals allows us to quickly spot the relationship.

Further, it makes your code so much more readable. Without alignment, code is like opening a CSV file in Notepad. But, if you open the CSV file in Excel, it becomes so much easier to read since the columns have meaning.

Compare these:
```typescript
  person.FirstName = "Chris";                =>  person.FirstName  = "Chris"; 
  person.Surname = "McGrath";                =>  person.Surname    = "McGrath"; 
  person.Age = 24;                           =>  person.Age        = 24; 
  person.Occupation = "Software Developer";  =>  person.Occupation = "Software Developer"; 
  person.HomeTown = "Brisbane";              =>  person.HomeTown   = "Brisbane";
  ```      
I question the sanity of anyone who thinks the first looks better or is easier to understand.

The Code alignment extension allows you to align by more than just the equals. As you start to see the benefits of alignment, you see that there is so much more to align by:
```typescript
  // Ugly                 // An improvement        // Even better! 
  chris.Age = 25;      => chris.Age     = 25;  =>  chris   .Age = 25; 
  dan.Age = 23;        => dan.Age       = 23;  =>  dan     .Age = 23; 
  michael.Age = 27;    => michael.Age   = 27;  =>  michael .Age = 27; 
  jennifer.Age = 22;   => jennifer.Age  = 22;  =>  jennifer.Age = 22;
  ```
By aligning by the dot we can clearly see that we are setting the same property on each variable, and the thing that changes is the variable name.
This might seem a bit crazy now, but once you start aligning things, it's addictive.

Some more examples
```typescript
  private string m_firstName = string.Empty;   =>  private string  m_firstName = string.Empty; 
  private string m_surname = string.Empty;     =>  private string  m_surname   = string.Empty; 
  private int m_age = 18;                      =>  private int     m_age       = 18; 
  private Address m_address;                   =>  private Address m_address; 

  public string FirstName { get; set; }        =>  public  string  FirstName { get; set; }    
  public string Surname { get; set; }          =>  public  string  Surname   { get; set; }
  public int Age { get; private set; }         =>  public  int     Age       { get; private set; }
  private Address Address { get;  set; }       =>  private Address Address   { get; set; } 
     
  Assert.AreEqual("expected", person.Name);    =>  Assert.AreEqual   ("expected", person.Name); 
  Assert.AreEqual(21, person.Age);             =>  Assert.AreEqual   (21,         person.Age); 
  Assert.AreNotEqual(other, person);           =>  Assert.AreNotEqual(other,      person); 
    
  switch (state)                               =>  switch (state) 
  {                                            =>  { 
     case State.QLD: city = "Brisbane"; break; =>      case State.QLD : city = "Brisbane"; break; 
     case State.WA: city = "Perth"; break;     =>      case State.WA  : city = "Perth";    break; 
     case State.NSW: city = "Sydney"; break;   =>      case State.NSW : city = "Sydney";   break; 
     default: city = "???"; break;             =>      default        : city = "???";      break; 
  }                                            =>  }
  ```
  It's surprising how few developers align their code.


Alignment tutorials are available on the code alignment <a href="https://www.youtube.com/playlist?list=PL9CC5F8C836BD6BDF">youtube playlist</a>.

## Resources

- [Code alignment] (http://www.codealignment.com/)

