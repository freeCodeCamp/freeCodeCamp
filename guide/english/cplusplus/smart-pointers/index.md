---
title: Smart Pointers
---
### Concept of the C++11 Smart Pointers

Smart pointers are class objects that behave like built-in pointers but also manage objects that you create with ```new``` keyword so that you don't have to worry when and whether to delete them. The smart pointers automatically delete the ```managed object``` for you at the appropriate time. The smart pointer is defined in such a way that it can be used syntactically almost exactly like a built-in (or "raw") pointer. A smart pointer contains a built-in pointer, and is defined as a template class whose type parameter is the type of the pointed-to object, so you can declare smart pointers to a class object of any type.

In C++, by ownership, we mean not just which code gets to refer to or use the object, but mostly what code is responsible for deleteing it. If smart pointers are not involved, we implement ownership in terms of where in the code we place the ```delete``` that destroys the object. If we fail to implement ownership properly, we get memory leaks, or undefined behavior from trying to follow pointers to objects that no longer exist.

### Accessing the C++11 Smart Pointer

In a C++11 implementation, the following ```#include``` is all that is needed:
```c++
#include <memory>
```

### Shared Ownership with [std::shared_ptr](https://en.cppreference.com/w/cpp/memory/shared_ptr)

The ```std::shared_ptr``` class template is referenced-counted smart pointer, a count is kept of how many smart pointers are pointing to the managed object, when the last smart pointer is destroyed, the count goes to zero and the managed object is the automatically deleted. It is called a ```shared``` smart pointer because the smart pointers all share ownership of the managed object.

A problem with reference-counted smart pointers is that if there is a ring, or cycle, of object that have smart pointers to each other, they keep each other 'alive'.

### Basic usage of std::shared_ptr

```c++
#include <iostream>
#include <memory>
#include <string>
#include <random>

class RandomClass
{
private:
  std::string randomstring;
  int randint;
public:
  RandomClass() = delete;
  RandomClass(std::string rs) : randomstring(rs)
  {
    std::mt19937 rng;
    rng.seed(std::random_device()());
    std::uniform_int_distribution<std::mt19937::result_type> dist(1, 99999999);
    this->randint = dist(rng);
  }
};

int main()
{
  std::shared_ptr<RandomClass> obj1(std::make_shared<RandomClass>(RandomClass("random string")));
  std::shared_ptr<RandomClass> obj2(obj1);
  std::shared_ptr<RandomClass> obj3 = obj2;
  std::shared_ptr<RandomClass> obj4 = std::make_shared<RandomClass>(RandomClass("Random string again"));
}
```

### [std::weak_ptr](https://en.cppreference.com/w/cpp/memory/weak_ptr)

```std::weak_ptr``` is a smart pointer that holds non-wning reference to an object that is managed by ```std::shared_ptr```. It must be converted to ```std::shared_ptr``` in order to access the referenced object. 
```std::weak_ptr``` models tomporary ownership: when an object need to be accessed only if it exists, and it may be deleted at any time by someone else, ```std::weak_ptr``` is used to track the object, and it is converted to ```std::shared_ptr``` to assume tomporary ownership. if the original ```std::shared_ptr``` is destroyed at this time, the object's lifetime is extended until the temporary ```std::shared_ptr``` is destroyed as well.

### Basic useage of ```std::weak_ptr```

```c++
#include <iostream>
#include <memory>
 
std::weak_ptr<int> gw;
 
void observe()
{
  std::cout << "use_count == " << gw.use_count() << ": ";
  if (auto spt = gw.lock()) { // Has to be copied into a shared_ptr before usage
	  std::cout << *spt << "\n";
  }
  else {
    std::cout << "gw is expired\n";
  }
}
 
int main()
{
  {
  auto sp = std::make_shared<int>(42);
	gw = sp;
 
	observe();
  }
 
  observe();
}
```
Output:
```
use_count == 1: 42
use_count == 0: gw is expired
```

### Unique ownership with [std::unique_ptr](https://en.cppreference.com/w/cpp/memory/unique_ptr)

At first glance, ```std::unique_ptr``` look like it gives you the same thing as ```std::shared_ptr```. With a ```std::unique_ptr```, you can point to an allocated object and when the ```std::unique_ptr``` goes out of the scope, the pointed-to object gets deleted and this happens regardless how we leave the function, either by a return or an exception being thrown somewhere.

```c++
void foo ()
{
  unique_ptr<Thing> p(new Thing); // p owns the Thing
  p->do_something();  // tell the thing to do something
  defrangulate();     // might throw an exception
}// p gets destroyed; destructor deletes the Thing
```

### Sources
http://www.umich.edu/~eecs381/handouts/C++11_smart_ptrs.pdf
