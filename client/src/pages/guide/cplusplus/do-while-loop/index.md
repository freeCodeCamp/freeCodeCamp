---
title: do while loop
---
## Do While Loop

The `do while loop` is almost the same as the while loop. The `do while loop` has the following form:
```cpp
do
	{
    		do something;
	}
	while (expression);
```
Do something first and then test if we have to continue. The result is that the loop always runs once. (Because the expression test comes afterward). Take a look at an example:
```cpp
#include <iostream>
	using namespace std;

	int main()
	{
		int counter, howmuch;

		cin >> howmuch;
		counter = 0;
		do
		{
			counter++;
			cout << counter << '\n';
		}
		while ( counter < howmuch);
		return 0;
	}
```