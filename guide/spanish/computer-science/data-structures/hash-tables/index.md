---
title: Hash Tables
localeTitle: Tablas de hash
---
## Tablas de hash

La tabla hash (o mapa hash) es una estructura de datos que puede asignar claves a valores. Una tabla hash utiliza una función hash para calcular un índice en una matriz de cubos, desde donde se pueden encontrar los valores deseados. La complejidad del tiempo de una función Hash bien definida puede ser O (1).

Una tabla hash (mapa hash) es una estructura de datos que implementa un tipo de datos abstractos de matriz asociativa, una estructura que puede asignar claves a valores. Una tabla hash utiliza una función hash para calcular un índice en una matriz de cubos o ranuras, desde donde se puede encontrar el valor deseado.

![un ejemplo de una tabla hash](https://github.com/TomerPacific/fccGuideImages/blob/master/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?raw=true)

Algunas propiedades importantes de la tabla de hash - 1) Los valores no se almacenan en orden ordenado. 2) En una tabla hash, uno también debe manejar colisiones potenciales. Esto se hace a menudo mediante el encadenamiento, lo que significa crear una lista enlazada de todos los valores cuyas claves se asignan a un índice particular.

Implementación de Hash Table

Una tabla hash se implementa tradicionalmente con una matriz de listas vinculadas. Cuando queremos insertar un par clave / valor, asignamos la clave a un índice en la matriz usando la función hash. El valor se inserta en la lista enlazada en esa posición.

La idea del hashing es distribuir las entradas (pares clave / valor) a través de una matriz de cubos. Dada una clave, el algoritmo calcula un índice que sugiere dónde se puede encontrar la entrada:
```
index = f(key, array_size) 
```

A menudo esto se hace en dos pasos:
```
hash = hashfunc(key) 
 index = hash % array_size 
```

En este método, el hash es independiente del tamaño de la matriz, y luego se reduce a un índice (un número entre 0 y tamaño de matriz - 1) usando el operador de módulo (%).

Consideremos la cadena S. Se requiere que cuentes la frecuencia de todos los caracteres en esta cadena.
```
string S = “ababcd” 
```

La forma más sencilla de hacerlo es iterar sobre todos los caracteres posibles y contar su frecuencia uno por uno. La complejidad del tiempo de este enfoque es O (26 \* N) donde N es el tamaño de la cadena y hay 26 caracteres posibles.
```
void countFre(string S) 
    { 
        for(char c = 'a';c <= 'z';++c) 
        { 
            int frequency = 0; 
            for(int i = 0;i < S.length();++i) 
                if(S[i] == c) 
                    frequency++; 
            cout << c << ' ' << frequency << endl; 
        } 
    } 
```

Salida
```
a 2 
 b 2 
 c 1 
 d 1 
 e 0 
 f 0 
 … 
 z 0 
```

Apliquemos el hash a este problema. Toma una frecuencia de matriz de tamaño 26 y hash los 26 caracteres con índices de la matriz mediante la función de hash. Luego, itere sobre la cadena y aumente el valor en la frecuencia en el índice correspondiente para cada carácter. La complejidad de este enfoque es O (N) donde N es el tamaño de la cadena.
```
int Frequency[26]; 
 
    int hashFunc(char c) 
    { 
        return (c - 'a'); 
    } 
 
    void countFre(string S) 
    { 
        for(int i = 0;i < S.length();++i) 
        { 
            int index = hashFunc(S[i]); 
            Frequency[index]++; 
        } 
        for(int i = 0;i < 26;++i) 
            cout << (char)(i+'a') << ' ' << Frequency[i] << endl; 
    } 
```

Salida
```
a 2 
 b 2 
 c 1 
 d 1 
 e 0 
 f 0 
 … 
 z 0 
```

### Hash Collisions

Cuando está utilizando un mapa hash, debe asumir que las colisiones de hash son inevitables, ya que utilizará un mapa hash que es significativamente más pequeño en tamaño que la cantidad de datos que tiene. Los dos enfoques principales para resolver estas colisiones son el encadenamiento y el direccionamiento abierto.

#### Encadenamiento

Una forma en que puede resolver las colisiones de hash es mediante el encadenamiento. Lo que esto significa es que para cada asignación de clave-valor en la tabla hash, el campo de valor no contendrá solo una celda de datos, sino una lista de datos vinculada. En el ejemplo que se muestra en la imagen a continuación, puede ver que Sandra Dee se agrega como otro elemento a la clave 152 después de John Smith.

![Un ejemplo de encadenamiento en una tabla hash.](https://github.com/TomerPacific/fccGuideImages/blob/master/620px-Hash_table_5_0_1_1_1_1_0_LL.svg.png?raw=true)

El principal contratiempo con respecto al encadenamiento es el aumento de la complejidad del tiempo. Esto significa que, en lugar de las propiedades O (1) de una tabla hash regular, cada acción ahora llevará más tiempo, ya que necesitamos atravesar la lista enlazada.

#### Direccionamiento abierto

Otra forma en que puedes resolver las colisiones hash es usando direccionamiento abierto. En este método, una vez que se asigna un valor a una clave que ya está ocupada, se mueve a lo largo de las claves adyacentes de la tabla hash en una forma predeterminada predeterminada, hasta que encuentre una clave con un valor vacío. En el ejemplo que se muestra en la imagen a continuación, Sandra Dee se asigna a la clave 153, aunque se supone que su valor se asigna a 152.

![Un ejemplo de direccionamiento abierto en una tabla hash.](https://github.com/TomerPacific/fccGuideImages/blob/master/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png?raw=true)

El principal contratiempo del direccionamiento abierto radica en el hecho de que cuando se necesitan buscar valores, es posible que no se encuentren en el lugar donde se espera que estén (la asignación de claves). Por lo tanto, tiene que recorrer partes de la tabla hash para encontrar el valor que está buscando, lo que resulta en una mayor complejidad de tiempo.

#### Complejidad del tiempo

Es muy importante tener en cuenta que las tablas hash han amortizado la complejidad constante, es decir, en un caso promedio, la complejidad será O (1). En el peor de los casos, si se agregaron demasiados elementos a la misma clave, puede tener una complejidad de tiempo de O (n).

### Más información:

[Más información sobre tablas de hash - Wiki](https://en.wikipedia.org/wiki/Hash_table) [Comparación entre Hash Table y STL-map](http://www.geeksforgeeks.org/hash-table-vs-stl-map/)

#### Fuente

[Conceptos básicos de las tablas de hash - HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)