---
title: Switch in Go
---

# Switch in Go

Go's switch statement is an alternative to `if`. It uses the following syntax:

```go
fruit := "apple"
switch fruit {
    case "banana":
        fmt.Printf("Yellow and long.")
    case "apple":
        fmt.Printf("Red and round.")
    case "lemon":
        fmt.Printf("Yellow and round.")
}
```

This program's output would be `Red and round.`.

First, we declare the variable `fruit` as `apple`. Then we use the `fruit` variable as the condition expression.
Go compares the value of `fruit` with the `cases` provided like this:

- fruit == "banana" (false)
- fruit == "apple" (true)

Notice `lemon` was not tested. After an evaluation returns true, no more cases are tried.

As with `if`, you can declare temporary variables on the switch`s condition expression:

```go
switch fruit := "apple"; fruit {
    case "banana":
        fmt.Printf("Yellow and long.")
    case "apple":
        fmt.Printf("Red and round.")
    case "lemon":
        fmt.Printf("Yellow and round.")
}
```

The variable `fruit` will not be accessible outside of the switch statement.

## Default and other cases

### Default

The `default` keyword is the fall back case when no other cases return true:

```go
switch fruit := "grape"; fruit {
    case "banana":
        fmt.Printf("Yellow and long.")
    case "apple":
        fmt.Printf("Red and round.")
    case "lemon":
        fmt.Printf("Yellow and round.")
    default:
        fmt.Printf("New fruit: %s!", fruit)
}
```

This program's output would be `New fruit: grape!`.

### Same action for different values

A comma separated list of values to compare the condition expression value to, with the same action.

```go
switch fruit := "lemon"; fruit {
    case "banana", "lemon":
        fmt.Printf("Yellow fruit.")
    default:
        fmt.Printf("This fruit is a color different than yellow.")
}
```

Output: `Yellow fruit.`.

### No expression

A switch with no expression means `switch true`. This is an alternate version to an else-if chain.

```go
fruit := "banana"
switch {
    case fruit == "banana":
        fmt.Printf("Yellow and long.")
    default:
        fmt.Printf("This is not a banana.")
}
```

This evaluates `true == (fruit == "banana")`, simpliefied to `true == true`, which returns true.

### Break

You can break code in a switch statement to skip any more code.

```go
appleColor := "green"
switch fruit := "apple"; fruit {
    case "banana":
        fmt.Printf("Yellow and long.")
    case "apple":
        if appleColor == "green" {
            fmt.Printf("This apple is green!")
            break
        }
        fmt.Printf("This apple is tasty!")
    case "lemon":
        fmt.Printf("Yellow and round.")
}
```

Output: `This apple is green!`.

### Fallthrough

Skip to the next case, whether its condition evaluates to true.

```go
switch fruit := "banana"; fruit {
    case "banana":
        fmt.Printf("Yellow and long.")
        fallthrough
    case "apple":
        fmt.Printf("Red and round.")
    case "lemon":
        fmt.Printf("Yellow and round.")
}
```

Output: `Yellow and long.` AND `Red and round.`.
