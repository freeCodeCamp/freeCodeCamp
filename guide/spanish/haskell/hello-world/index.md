---
title: Hello World Program
localeTitle: Programa Hello World
---
## El programa más simple de Hello World en Haskell

```haskell
main :: IO () 
 main = do 
    putStrLn "Hello World" 
```

## Hola mundo usando la composición de funciones

```haskell
hello :: String 
 hello = "Hello World" 
 
 printer :: String -> IO () 
 printer = putStrLn . show 
 
 main :: IO () 
 main = printer hello 

```