---
title: Monad
---

# Monad Laws
There are 3 laws which must be satisfied by a data type to be considered as monad

## Left Identity
`return a >>= f` must equal `f a`

This states that if we take a value and use `return` to put it in default context,
then use `>>=` to feed it into a function, it's the same as applying the
function to the original value.

## Right Identity
`m >>= return` must equal `m`
This states that if we use `>>=` to feed a monadic value into return, we
get back our original monadic value.

## Associativity
`(m >>= f) >>= g` must equal `m >>= (\x -> f x >>= g)`
This allows us to chain together monadic function applications, regardless of
how they are nested.

This may seem obvious, and you may assume that it should work by default, but the
associative law is required for this behavior

# But what about `>>=` and `return`?
Simple:

`>>=`, or 'bind' takes a monad and a function that takes a value and returns a
monad, and applies the function to a monad. This essentially allows us to
manipulate data within monads, which can't be accessed by non-monadic functions.

`return`, on the other hand, takes a value and returns a monad containing
that value. Everything you could ever want to know about `return` is right
there in the type signature:
```haskell
return :: a -> m a
```

# Maybe Monad

```haskell
justHead :: Maybe Char
justHead = do  
    (x:xs) <- Just ""  
    return x
```

# List Monad




return is same as pure of applicative


instance Monad [] where  
    return x = [x]  
    xs >>= f = concat (map f xs)  
    fail _ = []  


