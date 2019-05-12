---
title: Hello World
---

# Hello World

To write some text on the console we use the `Console.WriteLine()`. This method takes a string as input and has a return type of `void`.

The method `Console.ReadKey()` waits for a user to press any key. 

## Example
```csharp
using System;

namespace HelloWorld
{
    class Hello
    {
        static void Main()
        {
            // Write "Hello World!" on console
            Console.WriteLine("Hello World!");

            // Keep the console window open in debug mode.
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
}

```

## Output:
```sh
> Hello World!
> Press any key to exit.
```
