#include<iostream>
using namespace std;
class test{
public:
int a=5;
virtual void display()=0;
};
class der :public test{
    public:
    void display()
    {
        cout<<"a: "<<a<<endl;
    }
};
int main()
{
    test *t;
    der d;
    t=&d;
    t->display();
    return 0;
}