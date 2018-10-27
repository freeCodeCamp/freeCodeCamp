#include <iostream>

using namespace std;
int main(void) {
	long long int n;
    
    // show instruction to user
	cout << "Enter the number:\t";
    
    // scan user input
	cin >> n;

    // print "Number is odd" if it is odd else print "Number is even"
    // the 'bit-wise and (&)' operation returns 1 if the 1 is anded with odd Number
    // else the return value is 0 if 1 is anded with even number
	cout << (n&1? "Number is odd\n": "Number is even\n");
}
