---
title: Simpson's Rule
localeTitle: 辛普森的规则
---
# 辛普森的规则

在数值分析中，辛普森的规则是数值积分的方法_（定积分的数值逼近）_ 。

辛普森的规则近似于形式的整合，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim1.png)

哪里，

*   `f(x)`称为_被积函数_
*   `a` =整合的下限
*   `b` =整合的上限

## 辛普森的1/3规则

![Simpson's Rule](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim01.jpg)

如上图所示，被积函数`f(x)`由二阶多项式近似;二次插值是`P(x)` 。

接近，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim3.png)

将`(ba)/2`替换为`h` ，我们得到，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim4.png)

如您所见，上述表达式中有`1/3` 。这就是为什么，它被称为**辛普森的1/3规则** 。

如果某个函数在某些点上具有高度振荡或缺乏导数，则上述规则可能无法产生准确的结果。处理此问题的一种常见方法是将间隔`[a,b]`分解为许多小的子间隔。然后将辛普森的规则应用于每个子区间，将结果相加以产生整个区间内积分的近似值。这种方法被称为_复合辛普森的规则_ 。

假设区间`[a,b]`被分成`n`个子区间， `n`是偶数。然后，复合Simpson的规则给出，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim7.png)

其中**x j = a + jh** ， **j = 0,1，...，n-1，n，**其中**h =（ba）/ n** ;特别地， **x 0 = a**且**x n = b** 。

#### 例：

**取下面给出的积分值，取n = 8。**

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim9.png)

在C ++中实现Simpson的1/3规则如下：

```cpp
#include<iostream> 
 #include<cmath> 
 using namespace std; 
 
 float f(float x) 
 { 
    return x*sin(x);    //Define the function f(x) 
 } 
 
 float simpson(float a, float b, int n) 
 { 
    float h, x[n+1], sum = 0; 
    int j; 
    h = (ba)/n; 
 
    x[0] = a; 
 
    for(j=1; j<=n; j++) 
    { 
        x[j] = a + h*j; 
    } 
 
    for(j=1; j<=n/2; j++) 
    { 
        sum += f(x[2*j - 2]) + 4*f(x[2*j - 1]) + f(x[2*j]); 
    } 
 
    return sum*h/3; 
 } 
 
 int main() 
 { 
    float a,b,n; 
    a = 1;      //Enter lower limit a 
    b = 4;      //Enter upper limit b 
    n = 8;      //Enter step-length n 
    if (n%2 == 0) 
        cout<<simpson(a,b,n)<<endl; 
    else 
        cout<<"n should be an even number"; 
    return 0; 
 } 
```

## 辛普森的3/8规则

辛普森的3/8规则类似于辛普森的1/3规则。唯一的区别在于，这里，插值是一个三次多项式。 3/8规则大约是1/3规则的两倍，但它使用了一个以上的函数值。

辛普森的3/8规则规定：

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim6.png)

将`(ba)/3`替换为`h` ，我们得到，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim5.png)

对于n个区间，Simpson的3/8规则（n应该是3的倍数）：

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim8.png)

其中**x j = a + jh** ， **j = 0,1，...，n-1，n，**其中**h =（ba）/ n** ;特别地， **x 0 = a**且**x n = b** 。

### 更多信息：

1.  [辛普森的规则](https://en.wikipedia.org/wiki/Simpson%27s_rule)
2.  [辛普森的1/3规则](w3.gazi.edu.tr/~balbasi/mws_gen_int_txt_simpson13.pdf)