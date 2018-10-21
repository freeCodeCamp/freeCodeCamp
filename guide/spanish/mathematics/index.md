---
title: Mathematics
localeTitle: Matemáticas
---
## Matemáticas

En esta sección, tenemos guías para una amplia variedad de conceptos matemáticos.

### Matemáticas en la programación

Aunque es una buena práctica crear funciones matemáticas, existen bibliotecas de matemáticas disponibles para su uso en muchos lenguajes de programación. Estas Tiene funciones predeterminadas que puede utilizar para ejecutar cálculos. En la programación, normalmente se tratan temas como estos en cursos de división superior en La teoría de la computación, el diseño de algoritmos y el diseño de lenguajes informáticos.

#### Secuencia de Fibonacci (funciones generadoras)

Todos sabemos que el ejercicio de recursión comienza con la resolución de una secuencia de fibonaaci. También es el primer ejemplo que muestra el poder de la programación dinámica. Entonces, es el caso especial de una clase de matemáticas conocida como funciones generadoras. Entonces, lo que discutiremos aquí se aplica en general a todas las funciones de generación. Hay un concepto en matemáticas que "Cada función generadora tiene una secuencia y cada secuencia tiene una función generadora". Pero, el problema surge en la segunda parte. No siempre es fácil encontrar el generador en general. Para recordar esto, hago una analogía con el número racional que no termina "Si conoces el número en forma decimal, no es fácil encontrar la forma fraccional correspondiente, pero si conocemos la fracción, siempre es fácil encontrar el decimal formar". Entonces, generalmente estudiamos algunas funciones generadoras bastante hermosas, en términos de su secuencia. ¿Por qué? Porque, sabemos que las secuencias pueden ser manejadas fácilmente por muchos paradigmas algorítmicos. Algunas secuencias famosas conocidas son fibonacci, hadamard (similar a la catalana), etc.

### Incluyendo bibliotecas de matemáticas

En esta sección, le mostraremos cómo incluir la biblioteca matemática estándar en diferentes idiomas, incluido un breve ejemplo de cómo puede usarla.

#### do

\`\` \`cs utilizando System.Math;

calculadora de clase pública {

private int \[\] array = {1, 2, 3, 4, 5};

private int CalculatePoweredArray (int power, int \[\] arr) { var poweredArray = arr; foreach (int nmbr en poweredArray) { nmbr = Math.Pow (nmbr, potencia); // El primer argumento es el número a elevar, el segundo argumento es el poder } devuelve poweredArray; }

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

pitón

> > > importar matematicas math.sqrt (9) // toma solo en cuenta las raíces positivas 3.0 math.pi // también puedes utilizar consonantes matemáticas como pi y e 3.141592653589793 math.radians (90) // convierte grados a radianes 1.5707963267948966
```
In addition to the standard `math` module, there are several other mathematical helper libraries available on [PyPI](https://pypi.org/). For example: 
```

cáscara $ pip install numpy $ python

> > > importar numpy como np np.zeros ((3,4))
```
This returns a 3x4 array populated with 0s. 
 
 #### Java 
```

Java importar java.lang.Math
```
The `math` module can also be imported as follows, and the usage difference is illustrated: 
```

pitón

> > > de matemáticas import \* sqrt (4) 2.0 Pi 3.141592653589793

\`\` \`

Referencia de documentación: [Python 2](https://docs.python.org/2/library/math.html) | [Python 3](https://docs.python.org/3/library/math.html)

### Recursos adicionales

Visualizaciones animadas de conceptos matemáticos se pueden encontrar en [3 Blue 1 Brown](http://www.3blue1brown.com/) y [Khan Academy](https://www.khanacademy.org/) .