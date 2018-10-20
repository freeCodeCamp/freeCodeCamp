---
title: Casting
localeTitle: 铸件
---
## 铸件

强制转换是一种特殊操作符，它强制将一种数据类型转换为另一种数据类型

C ++中的转换与C的转换有所不同.C ++使用不同的转换函数。

### 的static\_cast

静态强制转换用于基元和类型重载之间的隐式转换。

### const\_cast会

Const cast可用于抛弃常量。当需要改变常量值时，这很有用。这应该谨慎使用，相反，在使用const-cast的情况下，应该考虑使参数/函数为非const。

Const强制转换也可能导致未定义的行为。 const cast的唯一应用应该是从传递给函数并标记为const的值中删除const-ness。如果值是真正的const，也就是说，它在编译时被标记为const并赋值，则const变量和变量的变异将导致未定义的行为。
```
const int y = 10;             // y is set to 10. 
 const_cast<int &>(y) = 20;    // undefined behaviour. 
```

### 的dynamic\_cast

动态强制转换用于在其类层次结构中转换对象（对于父对象，从父对象到兄弟对象）。动态强制转换只能在多态类上调用。因此，在这种情况下， `MyClass`的原始类必须具有虚拟成员，该成员以虚拟析构函数的形式存在。

如果动态转换失败，它将返回`nullptr` 。动态强制转换在运行时确定对象类型时可能很有用。但是，应该注意的是，动态强制转换不是免费的，并且在某些情况下，其他技术可能在运行时确定类类型时更有效。

### reinterpret\_cast的

重新解释强制转换可能是所有C ++强制转换中最危险的，但如果使用正确，它可能是理想的。重新解释广播不会产生任何性能成本，因为它不会执行任何转换。它只是指示编译器将已转换的对象视为请求的类型。这也可能带来对齐问题，因此应谨慎使用，并且只有在已知并考虑副作用时才应使用。

#### 关于C风格演员表的说明

C ++支持使用C风格的强制转换，但不推荐使用它们。使用C样式转换将指示编译器首先执行静态转换_，如果静态转换_失败，则在其位置使用reinterpret\_cast。因此，C风格的演员阵容可能会产生不可预测的结果并带来意想不到的问题。

## 例子

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