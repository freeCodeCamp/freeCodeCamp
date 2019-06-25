---
title: Hello World Program
---

## A Simple Hello World Program in Haskell
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
> Function compositions are a better way to write multiple nested functions in Haskell. In the above example, putStrLn.show is equivalent to (putStrLn (show)).
