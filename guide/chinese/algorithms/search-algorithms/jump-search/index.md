---
title: Jump Search
localeTitle: 跳转搜索
---
## 跳转搜索

跳转搜索通过跳跃k itens定位已排序数组中的项目，然后验证项目是否在中间 先前的跳跃和当前跳跃。

# 复杂性最坏的情况

O（√N）

# 作品

1.  定义k的值，跳跃的数量：最佳跳跃大小为√N，其中N是数组的长度
2.  按条件`Array[i] < valueWanted < Array[i+k]`跳转数组k-by-k
3.  在`Array[i]`和`Array[i + k]`之间进行线性搜索

![跳跃搜索1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# 码

要查看此方法的代码实现示例，请访问以下链接：

[跳转搜索 - OpenGenus / cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# 积分

[逻辑的阵列图像](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)