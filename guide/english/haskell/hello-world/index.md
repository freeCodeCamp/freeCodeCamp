---
title: Hello World Program
---

## The simplest Hello World Program in Haskell
```haskell
main :: IO ()
main = do
    putStrLn "Hello World"
```

## Hello World using function composition

```haskell
hello :: String
hello = "Hello World"

printer :: String -> IO ()
printer = putStrLn . show 

main :: IO ()
main = printer hello

```
