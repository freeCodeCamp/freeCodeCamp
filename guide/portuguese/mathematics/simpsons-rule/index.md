---
title: Simpson's Rule
localeTitle: Regra de Simpson
---
# Regra de Simpson

Na análise numérica, a regra de Simpson é um método para integração _numérica (aproximação numérica de integrais definidas)_ .

A regra de Simpson aproxima a integração da forma,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim1.png)

Onde,

*   `f(x)` é chamado o _integrando_
*   `a` = limite inferior de integração
*   `b` = limite superior de integração

## Regra 1/3 de Simpson

![Simpson's Rule](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim01.jpg)

Como mostrado no diagrama acima, o integrando `f(x)` é aproximado por um polinômio de segunda ordem; o interpolante quadrático sendo `P(x)` .

A aproximação segue,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim3.png)

Substituindo `(ba)/2` como `h` , obtemos,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim4.png)

Como você pode ver, há um fator de `1/3` na expressão acima. É por isso que se chama **Regra 1/3 de Simpson** .

Se uma função é altamente oscilatória ou não possui derivativos em certos pontos, a regra acima pode falhar em produzir resultados precisos. Uma maneira comum de lidar com esse problema é dividindo o intervalo `[a,b]` em vários subintervalos pequenos. A regra de Simpson é então aplicada a cada subintervalo, com os resultados sendo somados para produzir uma aproximação para a integral ao longo de todo o intervalo. Esse tipo de abordagem é chamado _de regra_ do _composto Simpson_ .

Suponha que o intervalo `[a,b]` seja dividido em `n` subintervalos, com `n` sendo um número par. Então, a regra do composto Simpson é dada por,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim7.png)

onde **x j = a + jh** para **j = 0,1,…, n-1, n** com **h = (ba) / n** ; em particular, **x 0 = a** e **x n = b** .

#### Exemplo:

**Aproxima o valor da integral dada abaixo, tomando n = 8.**

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim9.png)

A implementação da Regra 1/3 de Simpson em C ++ é a seguinte:

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

## Regra 3/8 de Simpson

A regra 3/8 de Simpson é semelhante à regra de 1/3 de Simpson. A única diferença é que, aqui, o interpolante é um polinômio cúbico. A regra 3/8 é duas vezes mais precisa que a regra 1/3, mas usa mais um valor de função.

A regra 3/8 de Simpson afirma:

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim6.png)

Substituindo `(ba)/3` como `h` , obtemos,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim5.png)

A regra 3/8 de Simpson para n intervalos (n deve ser um múltiplo de 3):

![](https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim8.png)

onde **x j = a + jh** para **j = 0,1,…, n-1, n** com **h = (ba) / n** ; em particular, **x 0 = a** e **x n = b** .

### Mais Informações:

1.  [Regra de Simpson](https://en.wikipedia.org/wiki/Simpson%27s_rule)
2.  [Regra 1/3 de Simpson](w3.gazi.edu.tr/~balbasi/mws_gen_int_txt_simpson13.pdf)