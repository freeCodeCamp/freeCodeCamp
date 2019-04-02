---
title: Hello World Program
localeTitle: Programa Hello World
---
## O mais simples programa Hello World em Haskell

```haskell
main :: IO () 
 main = do 
    putStrLn "Hello World" 
```

## Hello World usando a composição da função

```haskell
hello :: String 
 hello = "Hello World" 
 
 printer :: String -> IO () 
 printer = putStrLn . show 
 
 main :: IO () 
 main = printer hello 

```