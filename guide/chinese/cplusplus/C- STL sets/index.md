InlocaleTitle: undefined
t在C ++ STL库中生成集合 集合是一种关联容器，其中每个元素必须是唯一的。一旦将元素添加到集合中，就不能修改该元素的值，尽管可以删除并添加该元素的修改值。它们使用红黑树实现。

使用套装的好处

1.  它仅存储唯一值。
2.  元素的值标识自己。元素的值也是用于标识它的键。
3.  使用键即元素本身提供快速查找（O（log n））。
4.  类定义集中有许多内置函数可以简化编程。

例： '''C ++

# 包括

使用命名空间std; int main（） { 组 S;

s.insert（2）; //在集合中插入元素2 s.insert（3）; s.insert（5）; s.insert（2）; //插入相同的元素2 s.insert（6）; for（auto i：s） cout << i <<“”; COUT << s.size（）<< ENDL; //给出集合的大小

s.erase（5）; //从集合中删除元素5 返回0; } “”” 创建一个set对象 '''C ++ 组 S; “””

插入 '''C ++ s.insert（ _值_ be\_inserted）; “””

访问集元素 '''C ++ 组 :: iterator它; for（it = s.begin（）; it！= s.end（）; ++ it） COUT << \*它; “””