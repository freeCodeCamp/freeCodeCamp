---
title: Hello World Program
localeTitle: Привет, Всемирная программа
---
## Самая простая программа Hello World в Haskell

```haskell
main :: IO () 
 main = do 
    putStrLn "Hello World" 
```

## Hello World с использованием функционального состава

```haskell
hello :: String 
 hello = "Hello World" 
 
 printer :: String -> IO () 
 printer = putStrLn . show 
 
 main :: IO () 
 main = printer hello 

```