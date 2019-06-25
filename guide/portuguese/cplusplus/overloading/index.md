---
title: C++ Overloading
localeTitle: Sobrecarga C ++
---
C ++ permite que você especifique mais de uma definição para um nome de função ou um operador no mesmo escopo, o que é chamado de sobrecarga de função e sobrecarga de operador, respectivamente.

Uma declaração sobrecarregada é uma declaração que é declarada com o mesmo nome que uma declaração declarada anteriormente no mesmo escopo, exceto que ambas as declarações possuem argumentos diferentes e obviamente uma definição diferente (implementação).

Quando você chama uma função ou operador sobrecarregado, o compilador determina a definição mais apropriada a ser usada, comparando os tipos de argumento que você usou para chamar a função ou operador com os tipos de parâmetro especificados nas definições. O processo de seleção da função ou operador sobrecarregado mais apropriado é chamado de resolução de sobrecarga.

### Sobrecarga de função em C ++

Você pode ter várias definições para o mesmo nome de função no mesmo escopo. A definição da função deve diferir uma da outra pelos tipos e / ou pelo número de argumentos na lista de argumentos. Você não pode sobrecarregar as declarações de função que diferem apenas pelo tipo de retorno.

A seguir, o exemplo em que a mesma função print () está sendo usada para imprimir diferentes tipos de dados -

```cpp
#include <iostream> 
 #include <string> 
 using namespace std; 
 
 class imprimirDados { 
   public: 
      void imprimir(int i) { 
        cout << "Imprimindo int: " << i << endl; 
      } 
      void imprimir(double  f) { 
        cout << "Imprimindo float: " << f << endl; 
      } 
      void imprimir(const string& s) { 
        cout << "Imprimindo string: " << s << endl; 
      } 
 }; 
 
 int main() { 
   imprimirDados pd; 
 
   // Chamada para imprimir inteiro 
   pd.print(5); 
 
   // Chamada para imprimir float
   pd.print(500.263); 
 
   // Chamada para imprimir string
   pd.print("Hello C++"); 
 
   return 0; 
 } 
```

Quando o código acima é compilado e executado, ele produz o seguinte resultado -
```
 Imprimindo int: 5 
 Imprimindo float: 500.263 
 Imprimindo string: Hello C++ 
```

### Sobrecarga de Operador em C ++

A maioria dos operadores internos também pode ser sobrecarregada em C ++. Isso permite que os programadores atribuam implementações diferentes aos operadores, dependendo dos argumentos. Esses operadores sobrecarregados podem trabalhar para classes definidas pelo usuário.
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

Saída para o programa acima
```
4 + i3 

```
