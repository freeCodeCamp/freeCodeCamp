---
title: Vectors
localeTitle: векторы
---
## векторы

`vector` C ++ является одним из наиболее используемых контейнеров в C ++. Контейнер представляет собой структуру данных, которая хранит коллекцию объектов, которые могут меняться от упорядоченного (например, `vector` !) До неупорядоченного (например, `set` ). Все контейнеры C ++ имеют другой набор функций, которые позволяют вам получать доступ к объекту (-ам) в этой коллекции, изменять и циклически перемещать элементы в этой структуре данных.

Векторы аналогичны ArrayLists в Java, так как вам не нужно указывать длину контейнера. По сравнению с массивом, где вы должны определить, насколько он большой, его размер зависит от его содержимого.

`std::vector` является частью стандартной библиотеки C ++ (отсюда и префикс `std::` и позволяет хранить смежные данные одного и того же типа данных. ПРИМЕЧАНИЕ. **Все объекты внутри вектора должны иметь один и тот же тип данных.**

Тип данных, который вы храните в векторе, находится в квадратных скобках рядом с ключевым словом vector. Например, если вы хотите сохранить коллекцию строк, вектор будет `std::vector<std::string> vector_name`

_ПРИМЕЧАНИЕ_ . Вы должны включать векторную библиотеку при использовании векторов!

`#include <vector>`

### Векторная конструкция

Существует много удобных способов построения вектора.

Использование списка инициализаторов - где объекты перечислены внутри набора фигурных скобок: `{ }`

```cpp
std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5 
 std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world" 
 std::vector<bool> v; // v is an empty vector 
```

Построить его из другого вектора (это называется построением копии)

```cpp
std::vector<double> a{1.0, 2.0, 3.0}; 
 std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0 
```

Инициализация его одним и тем же элементом:

```cpp
std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1 
```

### Векторные итераторы

Итераторы можно рассматривать как указатели, специально используемые для навигации контейнеров (таких как векторы). Наиболее важными итераторами являются `begin()` и `end()` . `begin()` возвращает указатель на первый элемент в векторе, тогда как `end()` указывает к одной позиции после последнего элемента в векторе. Как таковой вектор может быть выполнен как:

```cpp
std::vector<int> vec{1, 2, 3}; 
 
 for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){ 
    // since vec_it is a pointer and points to the memory address of the item 
    // inside the vector, vec_it must be dereferenced using '*' 
    std::cout << *it << '\n'; 
 } 
 /*  Output 
    1 
    2 
    3 
 */ 
```

### Изменение вектора

Нажатие элементов на вектор:

```cpp
std::vector<int> vec; // constructs an empty vector 
 
 for (int i = 0; i < 10; i = i + 2){ 
    vec.push_back(i); 
 } 
 // vec now holds [0, 2, 4, 6, 8] 
```

Вставка элемента в определенную позицию немного отличается. Вставка вектора C ++ функция работает на итераторах. Он вставляет данный элемент в одну позицию до итератор.

```cpp
std::vector<unsigned int> vec{3, 400, 12, 45}; 
 
 auto iter = vec.begin() + 2; // iter now points to '12' 
 vec.insert(iter, 38); // inserts '38' before '12' 
 
 // vec: [3, 400, 38, 12, 45] 
```

### Доступ к элементу

Стандартная библиотека предоставляет различные функции для доступа к определенным элементам в вашем векторе.

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 
 std::string first_item = a.front(); // gets the first item of the vector ("test") 
 std::string last_item = a.back(); // gets the last item in the vector ("access") 
 
 // To get an element at a specific index (remember: vector indices start at 0) 
 std::string second_item = a.at(2); // gets "element" 
 // OR 
 std::string second_item = a[2]; // gets "element" 
```

### Зацикливание элементов в `vector`

Зацикливание элементов в C ++ `std::vector` довольно отличается от перебора элементов в векторе в JavaScript или Ruby. Из-за того, что C ++ является тонкой абстракцией C, вы можете только перебирать элементы, используя эти изящные маленькие переменные, называемые итераторами, для доступа к каждому элементу. Итераторы часто бывают в виде указателей, которые являются переменными, которые сохраняют адрес памяти другой переменной. Вы можете узнать больше о указателях [здесь](https://www.tutorialspoint.com/cplusplus/cpp_pointers.htm) . Однако, поскольку итераторы действуют как указатели (или наоборот), чтобы увидеть, на что они указывают, вам необходимо разыменовать его в переменной типа притяжения. как нам это сделать? ВОТ. МЫ. ИДТИ!

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 for(auto it = v.begin(); it != v.end(); it++) { //notice use of auto keyword 
    cout<<*it<<endl; //Will print out string that the iterator is currently ppointing to 
 } 
```

Отсюда вы можете делать всевозможные классные вещи, например, манипулировать вектором или беспорядок с его порядком, как вам заблагорассудится!

### Некоторые полезные функции-члены

Стандартная библиотека шаблонов (STL) также предоставляет вам различные _методы_ :

```cpp
std::vector.size(); // returns the size of the vector (the number of positions in the vector) 
 std::vector.begin(); // returns an iterator which is a pointer to the beginning of the vector 
 std::vector.end(); // returns an iterator which is a pointer to the end of the vector 
 std::vector.empty(); // returns true if the vector is empty, otherwise returns false. 
 std::vector.front(); // returns the first element of the vector. 
 std::vector.back(); // returns the last element of the vector. 
 std::vector.push_back(n); // inserts the element "n" to the end of the vector. 
 std::vector.pop_back(n); // removes the last element of the vector 
```

### Векторный Итератор

Итераторы предоставляют другой метод доступа к элементам в вашем векторе.

Объявление итератора.

```cpp
std::vector<int> v; 
 //Iterator delcaration for the above vector will correspond to 
 std::vector<int>::iterator it; 
```

Использование итератора для печати элементов вектора с использованием цикла

```cpp
for(it=v.begin(); it!=v.end(); ++it) 
 //std::vector::begin and std::vector::end return iterator pointing to first and last element of the vector respectively. 
  cout<<*it; 
```

### Итерация через вектор

Существуют различные способы итерации вектора и доступа к его содержимому. Следующие формы эквивалентны, первый включает использование выражения на основе диапазона (начиная с C ++ 11), второй использует итераторы, а последний - это итерация на основе индекса

\`\` \`cpp

# включают

# включают

// Сначала объявим вектор станд :: вектор myVector {1, 2, 3, 4, 5}; // a - вектор из 5 ints: 1, 2, 3, 4 и 5

// Использование цикла на основе диапазона (с C ++ 11) for (int element: myVector) {// Читает как "для каждого элемента myVector" std :: cout << "Элемент" << element << std :: endl; }

// Использование итератора станд :: вектор :: iterator it; // Объявляем итератор for (it = myVector.begin (); it! = myVector.end (); ++ it) { std :: cout << "Элемент" << \* it << std :: endl; // Разбираем итератор для доступа к его данным }

// Использование индексов для (станд :: вектор :: size\_type i = 0; i! = myVector.size (); я ++) { std :: cout << "Элемент" << myVector \[i\] << std :: endl; // Разбираем итератор для доступа к его данным }
```
### Sorting A Vector In Ascending Order 
 Sorting a vector based on ascending order can be done with the help of Sort() in C++. 
```

CPP

# включают

# включают

# включают

использование пространства имен std;

int main () {

вектор v {10, 5, 82, 69, 64, 70, 3, 42, 28, 0}; sort (v.begin (), v.end ());

cout << "Vector Contents Сортировка по возрастанию: \\ n"; для (int e: v) { cout << e << ""; }

return 0; }
```
### Sorting Vector In Descending Order 
 Sorting Vector in descending order can be done with the help of third argument namely greater<int>() in Sort() in C++. 
```

CPP

# включают

# включают

# включают

использование пространства имен std;

int main () {

вектор v {10, 5, 82, 69, 64, 70, 3, 42, 28, 0}; sort (v.begin (), v.end (), больше ());

cout << "Vector Contents Сортировка по возрастанию: \\ n"; для (int e: v) { cout << e << ""; }

return 0; } \`\` \`