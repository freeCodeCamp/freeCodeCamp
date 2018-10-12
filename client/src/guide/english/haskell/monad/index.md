---
title: Monad
---

# Monad Laws
There are 3 laws which must be satisfied by a data type to be considered as monad



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


