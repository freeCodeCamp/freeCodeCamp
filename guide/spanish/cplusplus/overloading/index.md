---
title: C++ Overloading
localeTitle: Sobrecarga de C ++
---
C ++ le permite especificar más de una definición para un nombre de función o un operador en el mismo ámbito, lo que se denomina sobrecarga de funciones y sobrecarga de operadores respectivamente.

Una declaración sobrecargada es una declaración que se declara con el mismo nombre que una declaración previamente declarada en el mismo ámbito, excepto que ambas declaraciones tienen argumentos diferentes y, obviamente, una definición (implementación) diferente.

Cuando llama a una función u operador sobrecargado, el compilador determina la definición más apropiada para usar, comparando los tipos de argumentos que ha usado para llamar a la función u operador con los tipos de parámetros especificados en las definiciones. El proceso de selección de la función u operador sobrecargado más apropiado se denomina resolución de sobrecarga.

### Sobrecarga de funciones en C ++

Puede tener varias definiciones para el mismo nombre de función en el mismo ámbito. La definición de la función debe diferir entre sí por los tipos y / o el número de argumentos en la lista de argumentos. No puede sobrecargar las declaraciones de funciones que difieren solo por el tipo de retorno.

A continuación se muestra un ejemplo en el que se utiliza la misma función print () para imprimir diferentes tipos de datos:

```cpp
#include <iostream> 
 #include <string> 
 using namespace std; 
 
 class printData { 
   public: 
      void print(int i) { 
        cout << "Printing int: " << i << endl; 
      } 
      void print(double  f) { 
        cout << "Printing float: " << f << endl; 
      } 
      void print(const string& s) { 
        cout << "Printing string: " << s << endl; 
      } 
 }; 
 
 int main() { 
   printData pd; 
 
   // Call print to print integer 
   pd.print(5); 
 
   // Call print to print float 
   pd.print(500.263); 
 
   // Call print to print string 
   pd.print("Hello C++"); 
 
   return 0; 
 } 
```

Cuando el código anterior se compila y ejecuta, produce el siguiente resultado:
```
Printing int: 5 
 Printing float: 500.263 
 Printing string: Hello C++ 
```

### Sobrecarga del operador en C ++

La mayoría de los operadores integrados también pueden sobrecargarse en C ++. Esto permite a los programadores asignar diferentes implementaciones a los operadores dependiendo de los argumentos. Estos operadores sobrecargados pueden trabajar para la clase definida por el usuario.
```
#include<iostream> 
 using namespace std; 
 
 class Complex_Number{ 
 private: 
    int real; 
    int imag; 
 public: 
    Complex_Number(int i = 0, int j =0) 
    { 
        real = i; 
        imag = j; 
    } 
    //Here the operator '+' is being overloaded 
    Complex_Number operator + (Complex_Number const &a) 
    { 
         Complex_Number x; 
         x.real = real + a.real; 
         x.imag = imag + a.imag; 
         return x; 
    } 
    void print() 
    { 
         cout<<real<<" + i"<<imag<<endl; 
    } 
 }; 
 
 int main() 
 { 
    Complex_Number c1(3, 2), c2(1, 1); 
    //Here, the overloaded operator is called. The numbers get added according to the function defined 
    Complex_Number c3 = c1 + c2; 
    c3.print(); 
 } 
```

Salida para el programa anterior.
```
4 + i3 

```