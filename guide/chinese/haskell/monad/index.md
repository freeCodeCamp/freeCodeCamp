---
title: Monad
localeTitle: 单子
---
# Monad Laws

数据类型必须满足3个法则才能被视为monad

# 也许莫纳德

```haskell
justHead :: Maybe Char 
 justHead = do 
    (x:xs) <- Just "" 
    return x 
```

# 列出Monad

回归与纯粹的应用相同

实例Monad \[\]在哪里  
return x = \[x\]  
xs >> = f = concat（map f xs）  
失败\_ = \[\]