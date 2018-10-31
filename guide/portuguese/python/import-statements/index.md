---
title: Python Import Statements
localeTitle: Declarações de importação do Python
---
Enquanto aprende a programar e lê alguns recursos, você se depararia com essa palavra "abstração", que significa simplesmente reduzir e reutilizar o código o máximo possível.

Funções e Módulos facilitam a abstração. Você cria funções quando deseja fazer algo repetidamente em um arquivo.

Os módulos entram em cena quando você deseja reutilizar um grupo de funções em diferentes arquivos de origem. Módulos também são úteis na estruturação do programa.

*   Usando bibliotecas padrão e outros módulos de terceiros:
*   Estruturando o programa

## Usando Bibliotecas Padrão

Exemplo: Você pode ler sobre os métodos / funções de todas as bibliotecas padrão no documento oficial do Python em detalhes.
```
import time 
 for i in range(100): 
    time.sleep(1)   # Waits for 1 second and then executes the next command 
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CS6C)
```
# To calculate the execution time of a part of program 
 import time 
 start = time.time() 
 # code here 
 end = time.time() 
 print('Execution time:' , end-start) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CS6C/1)
```
# Using math Module 
 import math 
 print(math.sqrt(100))   # prints 10 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CS6C/2)

## Usando módulos de terceiros

Módulos de terceiros não vêm junto com o python, mas temos que instalá-lo externamente usando gerenciadores de pacotes como [`pip`](https://bootstrap.pypa.io/get-pip.py) e [`easy install`](https://bootstrap.pypa.io/ez_setup.py)
```
# To make http requests 
 import requests 
 rq = requests.get(target_url) 
 print(rq.status_code) 
```

Saiba mais sobre o módulo python-requests [aqui](http://docs.python-requests.org/en/master/)

## Para estruturar programas

Queremos fazer um programa que tenha várias funções em relação a números primos. Então vamos começar. Vamos definir todas as funções em `prime_functions.py`
```
# prime_functions.py 
 from math import ceil, sqrt 
 def isPrime(a): 
    if a == 2: 
        return True 
    elif a % 2 == 0: 
        return False 
    else: 
        for i in range(3,ceil(sqrt(a)) + 1,2): 
            if a % i == 0: 
                return False 
        return True 
 
 def print_n_primes(a): 
    i = 0 
    m = 2 
    while True: 
        if isPrime(m) ==True: 
            print(m) 
            i += 1 
        m += 1 
        if i == a: 
            break 
```

Agora queremos usar as funções que acabamos de criar em `prime_functions.py` então criamos um novo arquivo `playground.py` para usar essas funções.

> _Por favor, note que este programa é simples demais para fazer dois arquivos separados, é apenas para demonstrar. Mas quando existem grandes programas complexos, criar arquivos diferentes é realmente útil._
```
# playground.py 
 import prime_functions 
 print(prime_functions.isPrime(29)) # returns True 
```

## Importação de classificação

A boa prática é classificar módulos de `import` em três grupos - importações de bibliotecas padrão, importações de terceiros relacionadas e importações locais. Dentro de cada grupo, é sensato classificar em ordem alfabética pelo nome do módulo. Você pode encontrar [mais informações no PEP8](https://www.python.org/dev/peps/pep-0008/?#imports) .

Uma das coisas mais importantes para a linguagem Python é a legibilidade, e os módulos de classificação em ordem alfabética são mais rápidos de ler e pesquisar. Também é mais fácil verificar se algo é importado e evitar importações duplicadas.