
#include <bits/stdc++.h>
using namespace std;

// function check whether a number
// is prime or not
bool isPrime(int n)
{
	// Corner case
	if (n <= 1)
		return false;

	// Check from 2 to square root of n
	for (int i = 2; i <= sqrt(n); i++)
		if (n % i == 0)
			return false;

	return true;
}

// Driver Code
int main()
{
	isPrime(11) ? cout << " true\n" : cout << " false\n";
	return 0;
}
