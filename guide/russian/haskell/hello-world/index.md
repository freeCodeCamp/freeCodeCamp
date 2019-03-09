---
title: Hello World Program
localeTitle: Привет, Всемирная программа
---
## "Hello World" на Haskell

```haskell
main :: IO () 
 main = do 
    putStrLn "Hello World" 
```

## "Hello World" с использованием композиции функций

```haskell
hello :: String 
 hello = "Hello World" 
 
 printer :: String -> IO () 
 printer = putStrLn . show 
 
 main :: IO () 
 main = printer hello 

```
