---
title: C++ Overloading
localeTitle: Перегрузка C ++
---
C ++ позволяет указать более одного определения для имени функции или оператора в той же области, которая называется перегрузкой функций и перегрузкой оператора соответственно.

Перегруженное объявление представляет собой объявление, объявленное с тем же именем, что и ранее объявленное объявление в той же области видимости, за исключением того, что обе декларации имеют разные аргументы и, очевидно, другое определение (реализация).

Когда вы вызываете перегруженную функцию или оператор, компилятор определяет наиболее подходящее определение для использования, сравнивая типы аргументов, которые вы использовали для вызова функции или оператора, с типами параметров, указанными в определениях. Процесс выбора наиболее подходящей перегруженной функции или оператора называется разрешением перегрузки.

### Перегрузка функций в C ++

Вы можете иметь несколько определений для одного и того же имени функции в той же области. Определение функции должно отличаться друг от друга по типам и / или количеству аргументов в списке аргументов. Вы не можете перегружать объявления функций, которые отличаются только возвращаемым типом.

Ниже приведен пример, когда одна и та же функция print () используется для печати разных типов данных -

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

Когда приведенный выше код компилируется и выполняется, он производит следующий результат:
```
Printing int: 5 
 Printing float: 500.263 
 Printing string: Hello C++ 
```

### Перегрузка оператора в C ++

Большинство встроенных операторов также могут быть перегружены на C ++. Это позволяет программистам назначать различную реализацию операторам в зависимости от аргументов. Эти перегруженные операторы могут работать для определенного пользователем класса.
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

Выход для вышеуказанной программы
```
4 + i3 

```