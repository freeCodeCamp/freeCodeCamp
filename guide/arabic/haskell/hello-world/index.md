---
title: Hello World Program
localeTitle: مرحبا بالبرنامج العالمي
---
## أبسط برنامج مرحبا العالم في هاسكل

 `main :: IO () 
 main = do 
    putStrLn "Hello World" 
` 

## مرحبا العالم باستخدام تكوين الدالة

 `hello :: String 
 hello = "Hello World" 
 
 printer :: String -> IO () 
 printer = putStrLn . show 
 
 main :: IO () 
 main = printer hello 
`