---
title: Casting
---

## Casting

A cast is a special operator that forces one data type to be converted into another

Casting in C++ differs somewhat to that of C. C++ makes use of distinct casting functions.

### static_cast
Static cast is used for implicit conversions between primitives and type-overloads. 

### const_cast
Const cast can be used to cast away const-ness. This is useful when there is a desire to mutate a constant value. This should be used sparingly, instead, one should consider making parameters/functions non-const in cases where a const-cast is used.

Const cast can also result in undefined behaviour. The only application of const cast should ever be to remove const-ness from a value that was passed to a function and marked const. If the value is truly const, that is, it is marked const at compile time and assigned a value, const cast and mutation of the variable will result in undefined behaviour.

```
const int y = 10; 			// y is set to 10.
const_cast<int &>(y) = 20;	// undefined behaviour.
```
### dynamic_cast
Dynamic cast is used to cast an object within its class hierarchy (to parent, from parent and to siblings). Dynamic cast can only be called on polymorphic classes. Thus, the original class in this case `MyClass` must have a virtual member, which is present in the form of the virtual destructor.

If dynamic cast fails, it will return a `nullptr`. Dynamic cast may be useful in determination of object types at runtime. However, it should be noted that dynamic cast is not free and in some cases other techniques may prove to be more efficient at determination of class type at runtime.

### reinterpret_cast
Reinterpret cast is perhaps the most dangerous of all the C++ casts, but when used correctly it can be ideal. Reinterpret cast incurs no performance cost as it does not perform any conversions. It simply instructs the compiler to treat the casted object as if it were the type requested. This can also bring forth alignment issues, so it should be used sparingly and only when side effects are known and accounted for.

#### A note on C-style casts
C++ supports the use of C-style casts, although they are not recommended. Use of the C-style cast will instruct the compiler to first perform a static_cast, if the static_cast fails, reinterpret_cast is used in its place. For this reason, C-style casts may produce unpredictable results and bring forth unexpected issues.

## Examples

```cpp
#include <iostream>

class MyClass {
public:
    virtual ~MyClass() = default;

    void greet() {
        std::cout << "Hello World!" << std::endl;
    }
};

class MyClassChild : public MyClass {
};

void reinterpretCastTest(void *objectPtr) {
    // Let's assume we know objectPtr is of type MyClass *
    auto myClassObj = reinterpret_cast<MyClassChild *>(objectPtr);
    myClassObj->greet();
}

void constCastTest(const MyClassChild &myClassChild) {
    auto nonConst = const_cast<MyClassChild &>(myClassChild);
    nonConst.greet();
}

void dynamicCastTest(MyClass *myClass) {
    auto *child = dynamic_cast<MyClassChild *>(myClass);
    child->greet();
}

void staticCastTest(float floatVal) {
    // Convert the float into an int.
    auto intVal = static_cast<int>(floatVal);
    std::cout << intVal << std::endl;
}

int main() {
    MyClassChild myClass;
    reinterpretCastTest(&myClass);
    constCastTest(myClass);
    dynamicCastTest(&myClass);
    staticCastTest(10.5);

    return 0;
}
```
