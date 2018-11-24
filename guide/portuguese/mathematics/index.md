---
title: Mathematics
localeTitle: Matemática
---
## Matemática

Nesta seção, temos guias para uma ampla variedade de conceitos matemáticos.

### Matemática na programação

Embora seja uma boa prática criar funções matemáticas por conta própria, existem bibliotecas matemáticas disponíveis para uso em muitas linguagens de programação. Estes tem funções predeterminadas que você pode utilizar para executar cálculos. Na programação, você costuma abordar tópicos como esses em cursos da divisão superior sobre a teoria da computação, o design de algoritmos e o design da linguagem computacional.

#### Sequência de Fibonacci (funções geradoras)

Nós todos sabemos que o exercício de recursão começa com a resolução de uma seqüência de fibonaaci. É também o primeiro exemplo que mostra o poder da programação dinâmica. Então, é o caso especial de uma classe de matemática conhecida como funções geradoras. Então, o que estaremos discutindo aqui se aplica em geral a toda função genrativa. Existe um conceito em matemática que "Cada função geradora tem uma sequência e cada sequência tem uma função geradora". Mas o problema surge na segunda parte. Nem sempre é fácil encontrar o gerador em geral. Para relembrar isso, faço uma analogia ao número racional não terminador "Se você conhece o número na forma decimal, não é fácil encontrar a forma fracionária correspondente, mas se nós sabemos a fração, é sempre fácil encontrar a decimal Formato". Então, geralmente estudamos algumas funções geradoras bastante bonitas, em termos de sua sequência. Por quê? Porque sabemos que as sequências podem ser facilmente manipuladas por um grande número de paradigmas algorítmicos. Algumas famosas sequências conhecidas são fibonacci, hadamard (semelhante ao catalão), etc.

### Incluindo bibliotecas de matemática

Nesta seção, mostraremos como incluir a biblioteca matemática padrão em diferentes idiomas, incluindo um pequeno exemplo de como você pode usá-la.

#### C

\`\` \`cs using System.Math;

Calculadora de classe pública {

private int \[\] array = {1, 2, 3, 4, 5};

private int CalculatePoweredArray (int potência, int \[\] arr) { var poweredArray = arr; foreach (int nmbr em poweredArray) { nmbr = Math.Pow (nmbr, potência); // Primeiro argumento é o número a ser levantado, segundo argumento é o poder } return poweredArray; }

}
```
Calling the function with a power of 3 will give these results: 
 [1, 8, 27, 64, 125] 
 
 Documentation reference: <a href='https://msdn.microsoft.com/en-us/library/system.math(v=vs.110' target='_blank' rel='nofollow'>MSDN</a>.aspx) 
 
 #### JavaScript 
 With Node.js 
```

javascript var math = require ('mathjs');
```
In the browser 
```

html

// use the math.js libary math.sqrt(-4); // result: 2i
```
Documentation reference: <a href='http://mathjs.org/docs/index.html' target='_blank' rel='nofollow'>Math.js documentation</a> 
 
 #### C++ 
```

cpp

# incluir
```
Documentation reference: <a href='http://www.cplusplus.com/reference/cmath/' target='_blank' rel='nofollow'>cplusplus reference</a> 
 
 #### Python 
```

python

> > > importar matemática math.sqrt (9) // leva em consideração apenas raízes positivas 3,0 math.pi // você também pode utilizar consoantes matemáticas como pi e e 3,141592653589793 math.radians (90) // converte graus em radianos 1,5707963267948966
```
In addition to the standard `math` module, there are several other mathematical helper libraries available on [PyPI](https://pypi.org/). For example: 
```

Concha $ pip install numpy $ python

> > > import numpy como np np.zeros ((3,4))
```
This returns a 3x4 array populated with 0s. 
 
 #### Java 
```

Java import java.lang.Math
```
The `math` module can also be imported as follows, and the usage difference is illustrated: 
```

python

> > > da importação de matemática \* sqrt (4) 2,0 pi 3,141592653589793

\`\` \`

Referência da documentação: [Python 2](https://docs.python.org/2/library/math.html) | [Python 3](https://docs.python.org/3/library/math.html)

### Recursos adicionais

Visualizações animadas de conceitos matemáticos podem ser encontradas em [3 Blue 1 Brown](http://www.3blue1brown.com/) and [Khan Academy](https://www.khanacademy.org/) .