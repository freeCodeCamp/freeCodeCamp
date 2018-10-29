#include <iostream>

using namespace std;
int isPowerOfTwo (int x) {
    /**
     *      x              : checks if x == 0 and 
     *      !(x & (x - 1)) : checks if x is a power of 2 
     */
    return (x && !(x & (x - 1)));
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    if (isPowerOfTwo(num)) 
        printf("Given number is a power of 2\n");
    else 
        printf("Given number is not a power of 2\n");

    return 0;
}
