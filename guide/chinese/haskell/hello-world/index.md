---
title: Hello World Program
localeTitle: 你好世界计划
---
## Haskell中最简单的Hello World程序

```haskell
main :: IO () 
 main = do 
    putStrLn "Hello World" 
```

## Hello World使用函数组合

```haskell
hello :: String 
 hello = "Hello World" 
 
 printer :: String -> IO () 
 printer = putStrLn . show 
 
 main :: IO () 
 main = printer hello 

```