---
title: Big Theta Notation
localeTitle: Notação Theta Grande
---
## Notação Theta Grande

O Big Omega nos diz o limite inferior do tempo de execução de uma função, e Big O nos diz o limite superior. Muitas vezes, eles são diferentes e não podemos garantir o tempo de execução - isso variará entre os dois limites e as entradas. Mas o que acontece quando são iguais? Então podemos dar um **theta** (Θ) ligado - nossa função será executada nesse tempo, não importa qual entrada nós damos. Em geral, sempre queremos dar um theta vinculado, se possível, porque é o limite mais preciso e mais preciso. Se não podemos dar uma ligação theta, a próxima melhor coisa é o limite O mais apertado possível.

Tome, por exemplo, uma função que procura um array pelo valor 0:

```python
def containsZero(arr): #assume normal array of length n with no edge cases 
  for num x in arr: 
    if x == 0: 
       return true 
  return false 
```

1.  Qual é o melhor caso? Bem, se a matriz que dermos tiver 0 como o primeiro valor, levará tempo constante: Ω (1)
2.  Qual é o pior caso? Se a matriz não contiver 0, teremos iterado por toda a matriz: O (n)

Nós demos um omega e O, então e theta? Nós não podemos dar um! Dependendo da matriz que fornecemos, o tempo de execução estará em algum lugar entre constante e linear.

Vamos mudar nosso código um pouco.

```python
def printNums(arr): #assume normal array of length n with no edge cases 
  for num x in arr: 
    print(x) 
```

Você pode pensar em um melhor caso e pior caso? Eu não posso! Não importa qual array nós damos, temos que percorrer todos os valores da matriz. Portanto, a função terá PELO MENOS n tempo (Ω (n)), mas também sabemos que não levará mais que n tempo (O (n)). O que isto significa? Nossa função levará **exatamente** n tempo: Θ (n).

Se os limites são confusos, pense nisso assim. Nós temos 2 números, x e y. Nos é dado que x <= y e y <= x. Se x é menor ou igual a y, e y é menor ou igual a x, então x tem que ser igual a y!

Se você estiver familiarizado com listas vinculadas, teste-se e pense nos tempos de execução de cada uma dessas funções!

1.  obter
2.  remover
3.  adicionar

As coisas ficam ainda mais interessantes quando você considera uma lista duplamente vinculada!

#### Mais Informações:

https://pt.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation https://stackoverflow.com/questions/10376740/what-exactly-does-big-%D3%A8-notation-represent https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/